import React, { useState } from "react";

const industries = [
  {
    name: "Logistics",
    description:
      "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information. This sector includes activities such as transportation, warehousing, inventory management, and order fulfillment. Logistics companies play a vital role in ensuring that products are delivered efficiently and effectively, supporting the global economy and enabling businesses to meet customer demands.",
    imageUrl:
      "https://images.unsplash.com/photo-1606964212858-c215029db704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naXN0aWNzfGVufDB8fDB8fHww",
  },
  {
    name: "B2B Business",
    description:
      "The B2B (Business-to-Business) industry involves transactions between businesses rather than between a business and individual consumers. This sector includes a wide range of services and products that one business needs to operate, such as consultancy, software solutions, raw materials, and professional services. The B2B industry is essential for the supply chain and enables businesses to improve their efficiencies and productivity through strategic partnerships.",
    imageUrl:
      "https://img.freepik.com/free-photo/b2b-business-business-corporate-connection-partnership-concept_53876-120382.jpg?t=st=1718027768~exp=1718031368~hmac=e6b95d8064ed61d9d10a7d8b13e13a0f2e80a5eeeefe92d87f817b83cb6a8192&w=740",
  },
  {
    name: "Fintech",
    description:
      "The Fintech industry is a dynamic and rapidly evolving sector that combines finance and technology. It encompasses a wide range of applications, including mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency. Fintech companies aim to make financial services more accessible, efficient, and user-friendly, disrupting traditional banking models and offering innovative solutions to both businesses and consumers.",
    imageUrl:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Tourism",
    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers. This includes accommodations, transportation, travel agencies, tour operators, and entertainment venues. The industry plays a significant role in global economies by generating income, creating jobs, and promoting cultural exchange. Tourism is constantly evolving, with trends like eco-tourism, adventure travel, and luxury experiences shaping the market.",
    imageUrl:
      "https://images.unsplash.com/photo-1621680696874-edd80ce57b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Trading",
    description:
      "The Trading industry involves the buying and selling of goods and services across different markets. This industry is crucial for the global economy as it facilitates the flow of products, resources, and capital. Trading can be divided into domestic and international markets, with activities ranging from retail and wholesale trading to complex financial instruments and commodities trading. Modern technology has transformed trading, making it faster and more accessible.",
    imageUrl:
      "https://images.unsplash.com/photo-1630569470960-ec1e8c077d6b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AutoMobile",
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
            {industries[activeTab].name}
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
