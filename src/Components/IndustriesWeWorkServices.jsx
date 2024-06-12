import React from "react";
import finance from "../assets/finance.png";
import insurance from "../assets/insurance.png";
import marketplace from "../assets/marketplace.png";
import ecommerce from "../assets/ecommerce.png";
import ar from "../assets/ar.png";
import logistics from "../assets/logistics.png";
import automotive from "../assets/automotive.png";
import retail from "../assets/retail.png";
import tourism from "../assets/tourism.png";
import trading from "../assets/trading.png";

const industries = [
  {
    logo: finance,
    industryType: "Finance",
    description:
      "AI-Pixel provides comprehensive financial solutions for the banking, investment, and wealth management sectors. Our secure and innovative technologies ensure profitable growth and compliance.",
    height: "70px",
  },
  {
    logo: insurance,
    industryType: "Insurance",
    description:
      "AI-Pixel offers innovative insurance services designed to protect individuals and businesses against unforeseen risks. Our flexible coverage options and advanced risk management tools ensure peace of mind and financial security for our clients.",
    height: "70px",
  },
  {
    logo: marketplace,
    industryType: "Marketplace",
    description:
      "AI-Pixel connects buyers and sellers with a secure, user-friendly marketplace platform. Our solutions enhance trading efficiency and transparency, enabling seamless transactions and fostering trust among users.",
    height: "70px",
  },
  {
    logo: ecommerce,
    industryType: "Ecommerce",
    description:
      "AI-Pixel drives online sales with leading ecommerce platforms. Our robust infrastructure, intuitive interfaces, and exceptional customer service ensure a seamless shopping experience, helping businesses grow and succeed.",
    height: "70px",
  },
  {
    logo: ar,
    industryType: "Augmented Reality",
    description:
      "AI-Pixel transforms reality with cutting-edge augmented reality (AR) technology. We provide immersive experiences for gaming, education, and commercial applications, revolutionizing the way users interact with the world.",
    height: "70px",
  },
  {
    logo: logistics,
    industryType: "Logistics",
    description:
      "AI-Pixel delivers efficient logistics and supply chain management solutions. Our technologies ensure timely delivery, effective inventory management, and streamlined operations, helping businesses optimize their logistics processes.",
    height: "70px",
  },
  {
    logo: automotive,
    industryType: "Automotive",
    description:
      "AI-Pixel brings innovations to the automotive industry, enhancing vehicle performance, safety features, and sustainability. Our advanced technologies drive the future of automotive excellence and environmental responsibility.",
    height: "70px",
  },
  {
    logo: retail,
    industryType: "Education",
    description:
      "AI-Pixel empowers learners with innovative educational technologies. We offer personalized learning experiences and accessible educational resources, fostering academic growth and lifelong learning in a digital age.",
    height: "70px",
  },
  {
    logo: tourism,
    industryType: "Tourism",
    description:
      "AI-Pixel provides comprehensive tourism solutions, offering unique travel experiences and seamless booking services. Our destination management technologies enhance traveler satisfaction and streamline operations for travel businesses.",
    height: "70px",
  },
  {
    logo: trading,
    industryType: "Food",
    description:
      "AI-Pixel delivers high-quality food products and innovative culinary solutions. Our sustainable practices and advanced technologies meet the evolving demands of the food industry, ensuring quality and customer satisfaction",
    height: "70px",
  },
];

const IndustriesWeWorkServices = () => (
  <>
    <div className="mt-24 py-16 mx-auto text-gray-900">
      <div>
        <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
          Industries We Work With
        </h2>
        <div className="my-4 mx-auto w-[90vh] h-2 border-4 border-indigo-500"></div>
        <div className="text-center text-gray-700 font-light">
          We are proud to serve a diverse range of industries
        </div>
      </div>
      <div className="grid grid-cols-5 p-2">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative border border-gray-200 h-[15rem] hover:text-black shadow p-3 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between overflow-hidden group"
          >
            <div className="flex flex-col justify-center items-center flex-grow z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-3rem]">
              <img
                src={industry.logo}
                style={{ height: industry.height }}
                className=""
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:delay-200">
              <div className=" text-black text-sm px-2">
                {industry.description}
              </div>
            </div>
            <div className="text-center mt-4 z-10">
              <span className="text-sm font-medium border py-1 px-2 border-gray-600 hover:border-white rounded-lg">
                {industry.industryType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default IndustriesWeWorkServices;
