import React from "react";
import moosa from "../assets/moosa.png";
import larace from "../assets/larace.png";
import bankmusqat from "../assets/bankmusqat.png";
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
    description: "Experience the thrill of horse racing combined with the endless opportunities of the blockchain-powered metaverse.",
    height: "180px"
  },
  {
    logo: dtec,
    companyType: "Retail",
    description: "Discover a comprehensive start-up ecosystem designed for retail innovation and success.",
    height: "70px"
  },
  {
    logo: moosa,
    companyType: "Automotive",
    description: "Leading automotive company in Oman, renowned for excellence and innovation.",
    height: "70px"
  },
  {
    logo: bankmusqat,
    companyType: "Finance",
    description: "Top financial institution in Saudi Arabia and the Middle East, providing exceptional banking services.",
    height: "50px"
  },
  {
    logo: adventureclub,
    companyType: "Finance",
    description: "Premier financial institution in Saudi Arabia and the Middle East, offering unmatched financial solutions.",
    height: "90px"
  },
  {
    logo: arkaan,
    companyType: "Finance",
    description: "Leading financial institution in Saudi Arabia and the Middle East, delivering outstanding financial services.",
    height: "80px"
  },
  {
    logo: seedlogo,
    companyType: "Finance",
    description: "Prominent financial institution in Saudi Arabia and the Middle East, specializing in comprehensive financial services.",
    height: "60px"
  },
  {
    logo: techgalaxy,
    companyType: "Finance",
    description: "Top-tier financial institution in Saudi Arabia and the Middle East, offering cutting-edge financial services.",
    height: "60px"
  },
  {
    logo: turing,
    companyType: "Finance",
    description: "Leading financial institution in Saudi Arabia and the Middle East, renowned for exceptional financial solutions.",
    height: "75px"
  },
  {
    logo: universalskills,
    companyType: "Finance",
    description: "Premier financial institution in Saudi Arabia and the Middle East, delivering top-notch financial services.",
    height: "90px"
  },
];


const ClientsSection = () => (
  <div className="bg-gray-900 text-gray-100 sm:pt-12">
    <div className="sm:mt-24 py-5 sm:py-16 mx-auto bg-gray-100 text-gray-900 sm:rounded-lg shadow-lg">
      <div>
        <h2 className="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">
          Our Clients
        </h2>
        <div className="my-4 mx-auto sm:w-[90vh] h-2 border-4 border-indigo-500"></div>
        <div className="text-center text-gray-700 font-light">
          We are proud of contributing to the success of the world’s leading
          brands
        </div>
      </div>
      <div className="grid sm:grid-cols-5 p-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative border border-gray-200 h-[15rem] hover:text-black shadow p-3 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between overflow-hidden group"
          >
            <div className="flex flex-col justify-center items-center flex-grow sm:z-10 transition-all duration-500 sm:ease-in-out sm:group-hover:transform sm:group-hover:translate-y-[-3rem]">
              <img src={testimonial.logo} style={{ height: testimonial.height }} className="" />
            </div>
            <div className=" hidden absolute inset-0 mt-3 sm:flex justify-center items-center z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <div className=" px-3 pt-2 text-black text-sm">
                {testimonial.description}
              </div>
            </div>
            <div className=" hidden sm:block text-center  mt-4 z-10">
              <span className="text-sm font-medium border py-1 px-2 border-gray-600 hover:border-white rounded-lg">
                {testimonial.companyType}
              </span>
            </div>
            <div className=" hidden sm:block absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-500 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ClientsSection;
