import React, { useState } from "react";

const industries = [
  {
    name: "Logistics",
    cardtitle:
      "Logistics & Supply Chain Management",
    description:
      "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information. This sector includes activities such as transportation, warehousing, inventory management, and order fulfillment. Logistics companies play a vital role in ensuring that products are delivered efficiently and effectively, supporting the global economy and enabling businesses to meet customer demands.",
    imageUrl:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ecommerce",
    cardtitle:
      "Building Scalable and Engaging Online Stores",

    description:
      "The B2B (Business-to-Business) industry involves transactions between businesses rather than between a business and individual consumers. This sector includes a wide range of services and products that one business needs to operate, such as consultancy, software solutions, raw materials, and professional services. The B2B industry is essential for the supply chain and enables businesses to improve their efficiencies and productivity through strategic partnerships.",
    imageUrl:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fintech",
    cardtitle:
      "Fintech Solutions for a Secure and Efficient Future",

    description:
      "The Fintech industry is a dynamic and rapidly evolving sector that combines finance and technology. It encompasses a wide range of applications, including mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency. Fintech companies aim to make financial services more accessible, efficient, and user-friendly, disrupting traditional banking models and offering innovative solutions to both businesses and consumers.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tourism",
    cardtitle:
      "Building intelligent travel platforms with AI-powered recommendations",

    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers. This includes accommodations, transportation, travel agencies, tour operators, and entertainment venues. The industry plays a significant role in global economies by generating income, creating jobs, and promoting cultural exchange. Tourism is constantly evolving, with trends like eco-tourism, adventure travel, and luxury experiences shaping the market.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677002262056-18c067d64d6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Trading",
    cardtitle:
      "Developing the AI powered Trading Applications",

    description:
      "The Trading industry involves the buying and selling of goods and services across different markets. This industry is crucial for the global economy as it facilitates the flow of products, resources, and capital. Trading can be divided into domestic and international markets, with activities ranging from retail and wholesale trading to complex financial instruments and commodities trading. Modern technology has transformed trading, making it faster and more accessible.",
    imageUrl:
      "https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Automotive",
    cardtitle:
      "Developing connected car solutions, electric vehicle (EV)",

    description:
      "The AutoMobile industry refers to companies and activities involved in the production of vehicles, including cars, trucks, and motorcycles. This industry plays a crucial role in the global economy, providing millions of jobs and enabling the movement of goods and people. The industry is also at the forefront of technological innovations, such as electric vehicles and autonomous driving systems, which are transforming the way we think about transportation.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/349/714/418/machine-lights-pickup-gmc-sierra-hd-wallpaper-preview.jpg",
  },
];

const IndustriesWeWorkWith = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" w-full px-10 mb-5 py-6">
      <ul className="grid grid-cols-3 gap-4 mt-10">
        {industries.map((industry, index) => (
          <li key={index}>
            <button
              className={`w-full bg-white border border-gray-300 py-2 rounded-md shadow-md hover:bg-gray-100 focus:outline-none ${
                activeTab === index ? "border-indigo-600" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {industry.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex mt-8">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            {industries[activeTab].cardtitle}
          </h2>
          <p className="text-gray-600">{industries[activeTab].description}</p>
        </div>
        <div className="w-1/2">
          <img
            src={industries[activeTab].imageUrl}
            alt={industries[activeTab].name}
            className="w-full h-[25rem] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWorkWith;
