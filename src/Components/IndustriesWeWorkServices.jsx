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
      "Comprehensive financial solutions for banking, investment, and wealth management sectors, ensuring secure and profitable growth.",
    height: "70px",
  },
  {
    logo: insurance,
    industryType: "Insurance",
    description:
      "Innovative insurance services tailored to protect individuals and businesses against unforeseen risks with flexible coverage options.",
    height: "70px",
  },
  {
    logo: marketplace,
    industryType: "Marketplace",
    description:
      "Connecting buyers and sellers seamlessly with a secure and user-friendly platform that enhances trading efficiency and transparency.",
    height: "70px",
  },
  {
    logo: ecommerce,
    industryType: "Ecommerce",
    description:
      "Leading ecommerce platforms driving online sales with robust infrastructure, intuitive interfaces, and exceptional customer service.",
    height: "70px",
  },
  {
    logo: ar,
    industryType: "Augmented Reality",
    description:
      "Transforming reality with cutting-edge AR technology, providing immersive experiences for gaming, education, and commercial applications.",
    height: "70px",
  },
  {
    logo: logistics,
    industryType: "Logistics",
    description:
      "Efficient logistics and supply chain management solutions ensuring timely delivery, inventory management, and streamlined operations.",
    height: "70px",
  },
  {
    logo: automotive,
    industryType: "Automotive",
    description:
      "Innovations in the automotive industry, enhancing vehicle performance, safety features, and sustainability with advanced technologies.",
    height: "70px",
  },
  {
    logo: retail,
    industryType: "Education",
    description:
      "Empowering learners with innovative educational technologies, personalized learning experiences, and accessible educational resources.",
    height: "70px",
  },
  {
    logo: tourism,
    industryType: "Tourism",
    description:
      "Comprehensive tourism solutions offering unique travel experiences, destination management, and seamless booking services worldwide.",
    height: "70px",
  },
  {
    logo: trading,
    industryType: "Food",
    description:
      "Delivering high-quality food products, innovative culinary solutions, and sustainable practices to meet the evolving demands of the food industry.",
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
              <div className="text-center text-black text-sm px-2">
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
