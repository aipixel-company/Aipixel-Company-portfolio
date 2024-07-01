import React, { useState, useMemo } from "react";

const industries = [
  {
    name: "Logistics",
    cardtitle: "Logistics & Supply Chain Management",
    description:
      "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information. This sector includes activities such as transportation, warehousing, inventory management, and order fulfillment. Logistics companies play a vital role in ensuring that products are delivered efficiently and effectively, supporting the global economy and enabling businesses to meet customer demands.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Flogistics.avif?alt=media&token=058968db-a457-489e-b89e-f8c614f2f14b",
  },
  {
    name: "Ecommerce",
    cardtitle: "Building Scalable and Engaging Online Stores",
    description:
      "The B2B (Business-to-Business) industry involves transactions between businesses rather than between a business and individual consumers. This sector includes a wide range of services and products that one business needs to operate, such as consultancy, software solutions, raw materials, and professional services. The B2B industry is essential for the supply chain and enables businesses to improve their efficiencies and productivity through strategic partnerships.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fecommerce.avif?alt=media&token=785b25c8-10f5-4fdb-a380-57297ecb49aa",
  },
  {
    name: "Fintech",
    cardtitle: "Fintech Solutions for a Secure and Efficient Future",
    description:
      "The Fintech industry is a dynamic and rapidly evolving sector that combines finance and technology. It encompasses a wide range of applications, including mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency. Fintech companies aim to make financial services more accessible, efficient, and user-friendly, disrupting traditional banking models and offering innovative solutions to both businesses and consumers.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ffintech.avif?alt=media&token=474792c3-220d-4e85-8304-4e6872f15e20",
  },
  {
    name: "Tourism",
    cardtitle: "Building intelligent travel platforms with AI-powered recommendations",
    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers. This includes accommodations, transportation, travel agencies, tour operators, and entertainment venues. The industry plays a significant role in global economies by generating income, creating jobs, and promoting cultural exchange. Tourism is constantly evolving, with trends like eco-tourism, adventure travel, and luxury experiences shaping the market.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftourism.avif?alt=media&token=ecacc06c-6c71-42d5-a4ee-128768193f36",
  },
  {
    name: "Trading",
    cardtitle: "Developing the AI powered Trading Applications",
    description:
      "The Trading industry involves the buying and selling of goods and services across different markets. This industry is crucial for the global economy as it facilitates the flow of products, resources, and capital. Trading can be divided into domestic and international markets, with activities ranging from retail and wholesale trading to complex financial instruments and commodities trading. Modern technology has transformed trading, making it faster and more accessible.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftrading.avif?alt=media&token=4afcab9a-1198-4554-b75f-9c8d54577a11",
  },
  {
    name: "Automotive",
    cardtitle: "Developing connected car solutions, electric vehicle (EV)",
    description:
      "The AutoMobile industry refers to companies and activities involved in the production of vehicles, including cars, trucks, and motorcycles. This industry plays a crucial role in the global economy, providing millions of jobs and enabling the movement of goods and people. The industry is also at the forefront of technological innovations, such as electric vehicles and autonomous driving systems, which are transforming the way we think about transportation.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fautomotive.avif?alt=media&token=b43bd526-04bc-400a-9eac-226b310d433f",
  },
];

const IndustriesWeWorkWith = () => {
  const [activeTab, setActiveTab] = useState(0);

  const industryCards = useMemo(() => {
    return industries.map((industry, index) => (
      <li key={index}>
        <button
          className={`w-full text-xs sm:text-base px-1 overflow-x-hidden lg:text-black lg:bg-white border border-gray-300 py-2 rounded-md shadow-md lg:hover:bg-gray-100 focus:outline-none ${
            activeTab === index ? "border-indigo-600 text-white bg-black" : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {industry.name}
        </button>
      </li>
    ));
  }, [activeTab]);

  return (
    <div className="w-full px-10 mb-5 py-6">
      <ul className="grid grid-cols-3 gap-4 mt-10">{industryCards}</ul>

      <div className="flex mt-8">
        <div className="lg:w-1/2 ">
          <h2 className="text-2xl font-semibold mb-4">
            {industries[activeTab].cardtitle}
          </h2>
          <p className="text-gray-600">{industries[activeTab].description}</p>
        </div>
        <div className="sm:w-1/2 hidden lg:block">
          <img
            src={industries[activeTab].imageUrl}
            alt={industries[activeTab].name}
            srcSet={`
              ${industries[activeTab].imageUrl}&w=320 320w,
              ${industries[activeTab].imageUrl}&w=480 480w,
              ${industries[activeTab].imageUrl}&w=800 800w
            `}
            sizes="(max-width: 600px) 320px, (max-width: 900px) 480px, 800px"
            className="w-full h-[25rem] rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWorkWith;
