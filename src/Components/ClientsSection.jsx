import React from "react";
import moosa from "../assets/moosa.png";
import larace from "../assets/larace.png";
import bankriyadh from "../assets/bankriyadh.png";
import dtec from "../assets/dtec.png";
import adventureclub from "../assets/adventureclub.png"
import arkaan from "../assets/arkaan.png"
import techgalaxy from "../assets/techgalaxy.png"

import seedlogo from "../assets/seedlogo.png"

import universalskills from "../assets/universalskills.png"
import turing from "../assets/turing.png"

const testimonials = [
  {
    logo: larace,
    companyType: "Blockchain",
    description: "Excitement of horse racing meets the limitless possibilities of the metaverse.",
    height: "180px"
  },
  {
    logo: dtec,
    companyType: "Retail",
    description: "A Complete Start-up Echosystem",
    height: "70px"
  },
  {
    logo: moosa,
    companyType: "Automotive ",
    description: "Top Automotive firm in Oman.",
    height: "70px"
  },
  {
    logo: bankriyadh,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "50px"
  },
  {
    logo: adventureclub,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "90px"
  },
  {
    logo: arkaan,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "80px"
  },
  {
    logo: seedlogo,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "60px"
  },
  {
    logo: techgalaxy,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "60px"
  },
  {
    logo: turing,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "75px"
  },
  {
    logo: universalskills,
    companyType: "Finance",
    description: "One of the largest financial institutions in the Kingdom of Saudi Arabia and the Middle East.",
    height: "90px"
  },
  
];

const ClientsSection = () => (
  <div className="bg-gray-900 text-gray-100 pt-12">
    <div className="mt-24 py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-lg">
      <div>
        <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
          Our Clients
        </h2>
        <div className="my-4 mx-auto w-[90vh] h-2 border-4 border-indigo-500"></div>
        <div className="text-center text-gray-700 font-light">
          We are proud of contributing to the success of the world’s leading
          brands
        </div>
      </div>
      <div className="grid grid-cols-5 p-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative  border border-gray-200 h-[15rem] hover:text-black shadow p-3 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between overflow-hidden group"
          >
            <div className="flex flex-col justify-center items-center flex-grow z-10 transition-all duration-500 ease-in-out group-hover:transform group-hover:translate-y-[-3rem]">
              <img src={testimonial.logo} style={{ height: testimonial.height }} className="" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <div className="text-center text-black text-sm">
                {testimonial.description}
              </div>
            </div>
            <div className="text-center  mt-4 z-10">
              <span className="text-sm font-medium border py-1 px-2 border-gray-600 hover:border-white rounded-lg">
                {testimonial.companyType}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-500 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ClientsSection;
