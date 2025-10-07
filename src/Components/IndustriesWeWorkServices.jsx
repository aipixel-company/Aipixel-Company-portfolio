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
    height: "75px",
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
    height: "60px",
  },
  {
    logo: ecommerce,
    industryType: "Ecommerce",
    description:
      "AI-Pixel drives online sales with leading ecommerce platforms. Our robust infrastructure, intuitive interfaces, and exceptional customer service ensure a seamless shopping experience, helping businesses grow and succeed.",
    height: "60px",
  },
  {
    logo: ar,
    industryType: "Augmented Reality",
    description:
      "AI-Pixel transforms reality with cutting-edge augmented reality (AR) technology. We provide immersive experiences for gaming, education, and commercial applications, revolutionizing the way users interact with the world.",
    height: "80px",
  },
  {
    logo: logistics,
    industryType: "Logistics",
    description:
      "AI-Pixel delivers efficient logistics and supply chain management solutions. Our technologies ensure timely delivery, effective inventory management, and streamlined operations, helping businesses optimize their logistics processes.",
    height: "80px",
  },
  {
    logo: automotive,
    industryType: "Automotive",
    description:
      "AI-Pixel brings innovations to the automotive industry, enhancing vehicle performance, safety features, and sustainability. Our advanced technologies drive the future of automotive excellence and environmental responsibility.",
    height: "60px",
  },
  {
    logo: retail,
    industryType: "Education",
    description:
      "AI-Pixel empowers learners with innovative educational technologies. We offer personalized learning experiences and accessible educational resources, fostering academic growth and lifelong learning in a digital age.",
    height: "80px",
  },
  {
    logo: tourism,
    industryType: "Tourism",
    description:
      "AI-Pixel provides comprehensive tourism solutions, offering unique travel experiences and seamless booking services. Our destination management technologies enhance traveler satisfaction and streamline operations for travel businesses.",
    height: "80px",
  },
  {
    logo: trading,
    industryType: "Food",
    description:
      "AI-Pixel delivers high-quality food products and innovative culinary solutions. Our sustainable practices and advanced technologies meet the evolving demands of the food industry, ensuring quality and customer satisfaction.",
    height: "65px",
  },
];

const IndustriesWeWorkServices = () => (
  <div className="bg-gradient-to-r from-[#647A82] to-[#00BFA6] py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
        Industries We Work With
      </h2>
      <p className="text-gray-200 mt-4 mb-12 text-lg">
        We are proud to serve a diverse range of industries with innovation and impact.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="group relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between overflow-hidden hover:scale-105 transition-all duration-300"
        >
          {/* Floating Icon */}
          <div className="relative mb-4">
            <img
              src={industry.logo}
              alt={industry.industryType}
              style={{ height: industry.height }}
              className="transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-[#00BFA6]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          {/* Title */}
          <span className="text-base font-semibold text-[#647A82] mb-2">
            {industry.industryType}
          </span>

          {/* Hover Description */}
          {/* <p className="absolute inset-0 bg-white/95 p-4 text-gray-700 text-sm rounded-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 flex items-center justify-center text-center">
            {industry.description}
          </p> */}
        </div>
      ))}
    </div>
  </div>
);

export default IndustriesWeWorkServices;
