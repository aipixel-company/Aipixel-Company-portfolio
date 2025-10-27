import React from "react";
import { motion } from "framer-motion";
import moosa from "../assets/moosa.png";
import larace from "../assets/larace.png";
import bankmusqat from "../assets/bankmusqat.png";
import dtec from "../assets/dtec.png";
import adventureclub from "../assets/adventureclub.png";
import arkaan from "../assets/arkaan.png";
import techgalaxy from "../assets/techgalaxy.png";
import absher from "../assets/absher.png";
import airhub from "../assets/airhub.png";
import birdsworld from "../assets/birdsworld.png";
import seedlogo from "../assets/seedlogo.png";
import universalskills from "../assets/universalskills.png";
import turing from "../assets/turing.png";
const testimonials = [
  {
    logo: dtec,
    companyType: "Retail",
    description:
      "Discover a comprehensive start-up ecosystem designed for retail innovation and success.",
    height: "70px",
  },
  {
    logo: moosa,
    companyType: "Automotive",
    description:
      "Leading automotive company in Oman, renowned for excellence and innovation.",
    height: "70px",
  },
  {
    logo: bankmusqat,
    companyType: "Finance",
    description:
      "Top financial institution in the Middle East, providing exceptional banking services.",
    height: "50px",
  },
  {
    logo: adventureclub,
    companyType: "Travel & Adventure",
    description:
      "Creating unforgettable travel experiences with a focus on exploration and adventure.",
    height: "90px",
  },
  {
    logo: arkaan,
    companyType: "Construction",
    description:
      "A leader in the construction industry, delivering quality and excellence in every project.",
    height: "80px",
  },
  {
    logo: larace,
    companyType: "Blockchain",
    description:
      "Horse racing meets blockchain — redefining virtual sports and metaverse innovation.",
    height: "180px",
  },
  {
    logo: seedlogo,
    companyType: "Finance",
    description:
      "Prominent financial services provider with a strong focus on digital innovation.",
    height: "60px",
  },
  {
    logo: techgalaxy,
    companyType: "Technology",
    description:
      "Building next-generation tech solutions that power digital transformation.",
    height: "60px",
  },
  {
    logo: turing,
    companyType: "IT Solutions",
    description:
      "Leading IT company offering scalable, secure, and AI-driven software systems.",
    height: "75px",
  },
  {
    logo: universalskills,
    companyType: "Education",
    description:
      "Empowering global learners through innovative skill development platforms.",
    height: "90px",
  },
  {
    logo: absher,
    companyType: "NFC",
    description:
      "Revolutionizing digital interactions with NFC-powered smart business cards.",
    height: "80px",
  },
  {
    logo: airhub,
    companyType: "Surveillance",
    description:
      "Complete drone operations management with compliance and real-time awareness.",
    height: "80px",
  },
  {
    logo: birdsworld,
    companyType: "E-commerce",
    description:
    "A multi-vendor platform bringing global sellers and buyers together seamlessly.",
    height: "80px",
  },
];

const ClientsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background (Kept dark for strong contrast) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Soft glowing orb (Subtle light source) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Valued Clients
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Proudly partnering with global innovators, pioneers, and industry leaders
          to shape the digital future.
        </p>
        <div className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />
      </motion.div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {testimonials.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="group relative 
              
              bg-white/50 backdrop-blur-sm border border-white/50 
              rounded-xl p-6 w-full h-[15rem] flex flex-col items-center justify-center text-center shadow-xl
              
              hover:bg-white/70 hover:shadow-cyan-400/50 
              hover:-translate-y-2 transition-all duration-500 ease-out 
              
              /* Ensure inner text/icons look good on the lighter card */
              text-gray-900
            "
          >
            <img
              src={client.logo}
              alt={client.companyType}
              style={{ height: client.height }}
              className="object-contain mb-4 filter drop-shadow-md" // Added filter for better contrast
            />
            
            <h3 className="
              font-bold text-sm mb-2 
              text-gray-900 group-hover:text-blue-700
            ">
              {client.companyType}
            </h3>
            
            <p className="
              text-gray-700 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed
            ">
              {client.description}
            </p>

            {/* Glow effect (Adjusted to a lighter glow color) */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Added an overlay element to handle the logo and text color for mixed logos */}
             <div className="absolute inset-0 rounded-xl bg-gray-50/10 mix-blend-multiply pointer-events-none" /> 
          </motion.div>
        ))}
      </div>

      {/* Bottom fade (Adjusted to match background color) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#000000] via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default ClientsSection;