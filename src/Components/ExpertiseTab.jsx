import React, { useState } from "react";

const expertiseData = [
  {
    title: "DevOps",
    details:
      "DevOps practices streamline the software development process through automation and continuous integration, ensuring faster delivery and high-quality releases.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?fit=crop&w=800&q=80",
  },
  {
    title: "VR/AR/MR",
    details:
      "Our expertise in VR/AR/MR technologies brings immersive experiences to your projects, transforming user engagement and interaction.",
    backgroundImage:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?fit=crop&w=800&q=80",
  },
  {
    title: "Internet of Things",
    details:
      "We develop IoT solutions that connect devices and systems, providing real-time data and analytics to drive informed decision-making.",
    backgroundImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?fit=crop&w=800&q=80",
  },
  {
    title: "Market Research",
    details:
      "Our market research services deliver insights into customer behavior, market trends, and competitive landscape to inform your business strategies.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=800&q=80",
  },
  {
    title: "Customer Experience",
    details:
      "We design customer experience strategies that enhance satisfaction and loyalty, ensuring your customers have a seamless and positive interaction with your brand.",
    backgroundImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=800&q=80",
  },
  {
    title: "Digital Enterprise",
    details:
      "Our digital enterprise solutions enable businesses to leverage technology for improved efficiency, productivity, and innovation.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556742400-b5a63e27c4df?fit=crop&w=800&q=80",
  },
  {
    title: "Nearshore Development",
    details:
      "Our nearshore development services provide high-quality software development solutions with the advantages of proximity, cultural alignment, and cost-effectiveness.",
    backgroundImage:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80",
  },
  {
    title: "UX Consulting",
    details:
      "We offer UX consulting services to enhance user experience, ensuring your products are intuitive, user-friendly, and meet the needs of your target audience.",
    backgroundImage:
      "https://images.unsplash.com/photo-1529634822884-260cbb07c5a0?fit=crop&w=800&q=80",
  },
];

const ExpertiseTab = () => {
  const [activeTab, setActiveTab] = useState(expertiseData[0]);

  return (
    <div className=" text-black py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col mb-8 md:mb-0">
            {expertiseData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`py-4 px-6 mb-2 text-left rounded-md focus:outline-none transition-colors duration-300 ${
                  activeTab.title === item.title
                    ? "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-black"
                    : "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:from-blue-600 hover:via-blue-700 hover:to-gray-800 text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className="w-full md:w-3/4 p-6 ml-0 md:ml-3 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${activeTab.backgroundImage})` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {activeTab.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 bg-black bg-opacity-50 p-4 rounded-lg">
              {activeTab.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTab;
