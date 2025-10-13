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
    name: "FinTech", // Changed from "Fintech" to match the image case
    cardtitle: "Fintech Solutions for a Secure and Efficient Future",
    description:
      "The Fintech industry is a dynamic and rapidly evolving sector that combines finance and technology. It encompasses a wide range of applications, including mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency. Fintech companies aim to make financial services more accessible, efficient, and user-friendly, disrupting traditional banking models and offering innovative solutions to both businesses and consumers.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ffintech.avif?alt=media&token=474792c3-220d-4e85-8304-4e6872f15e20",
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
    name: "Tourism",
    cardtitle:
      "Building intelligent travel platforms with AI-powered recommendations",
    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers. This includes accommodations, transportation, travel agencies, tour operators, and entertainment venues. The industry plays a significant role in global economies by generating income, creating jobs, and promoting cultural exchange. Tourism is constantly evolving, with trends like eco-tourism, adventure travel, and luxury experiences shaping the market.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftourism.avif?alt=media&token=ecacc06c-6c71-42d5-a4ee-128768193f36",
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
    return industries.map((industry, index) => {
      // Define styles for active and inactive tabs
      const isActive = activeTab === index;
      // Gradient for active tab: from-blue-800 to-blue-400 for a dark to light blue effect
      const activeClasses =
        "bg-gradient-to-r from-blue-800 to-blue-400 text-white shadow-lg";
      const inactiveClasses =
        "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200";

      // Ensure "FinTech" is displayed correctly if the data has "Fintech"
      const name = industry.name === "Fintech" ? "FinTech" : industry.name;

      return (
        <li key={index} className="flex-shrink-0">
          {" "}
          <button
            className={`
              text-sm sm:text-base px-5 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap
              ${isActive ? activeClasses : inactiveClasses}
            `}
            onClick={() => setActiveTab(index)}
          >
            {name}{" "}
          </button>{" "}
        </li>
      );
    });
  }, [activeTab]);

  const activeIndustry = industries[activeTab];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Tabs Container - styled to flow horizontally and wrap slightly */}{" "}
      <ul className="flex justify-between mt-4 mb-16 overflow-x-auto">
        {industryCards}
      </ul>
      {/* Content Card Section */}{" "}
      <div className="flex flex-col lg:flex-row items-start lg:gap-16">
        {/* Text Content (Left Side) */}{" "}
        <div className="lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
          {" "}
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {activeIndustry.cardtitle}{" "}
          </h2>{" "}
          <p className="text-gray-700 leading-relaxed text-base">
            {activeIndustry.description}{" "}
          </p>{" "}
        </div>
        {/* Image Display (Right Side) */}{" "}
        <div className="lg:w-1/2 order-1 lg:order-2 w-full">
          {" "}
          <img
            src={activeIndustry.imageUrl}
            alt={activeIndustry.cardtitle}
            className="w-full h-auto max-h-[25rem] object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default IndustriesWeWorkWith;
