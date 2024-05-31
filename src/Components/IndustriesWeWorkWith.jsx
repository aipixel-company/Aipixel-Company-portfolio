import React, { useState } from "react";

const industries = [
  {
    name: "Automotive",
    description: "Description for Automotive industry",
    imageUrl:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Medical",
    description: "Description for Medical industry",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Finance",
    description: "Description for Finance industry",
    imageUrl:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Tourism",
    description: "Description for Tourism industry",
    imageUrl:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Trading",
    description: "Description for Trading industry",
    imageUrl:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "AutoMobile",
    description: "Description for AutoMobile industry",
    imageUrl:
      "https://images.unsplash.com/photo-1558486799-ebad18202175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
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
            className="w-full h-[25rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWorkWith;
