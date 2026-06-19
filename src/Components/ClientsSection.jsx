import React from "react";
import { Link } from "react-router-dom";
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
import halalchef from "../assets/halalchef.png";
import royaldelhi from "../assets/royaldelhi.png";
import singaf from "../assets/singaf.png";

const testimonials = [
  {
    logo: dtec,
    slug: "dtec",
    companyType: "Retail",
    description:
      "Discover a comprehensive start-up ecosystem designed for retail innovation and success.",
    height: "70px",
  },
  {
    logo: moosa,
    slug: "moosa",
    companyType: "Automotive",
    description:
      "Leading automotive company in Oman, renowned for excellence and innovation.",
    height: "70px",
  },
  {
    logo: bankmusqat,
    slug: "bankmusqat",
    companyType: "Finance",
    description:
      "Top financial institution in the Middle East, providing exceptional banking services.",
    height: "50px",
  },
  {
    logo: adventureclub,
    slug: "adventureclub",
    companyType: "Travel & Adventure",
    description:
      "Creating unforgettable travel experiences with a focus on exploration and adventure.",
    height: "90px",
  },
  {
    logo: arkaan,
    slug: "arkaan",
    companyType: "Construction",
    description:
      "A leader in the construction industry, delivering quality and excellence in every project.",
    height: "80px",
  },
  {
    logo: larace,
    slug: "larace",
    companyType: "Blockchain",
    description:
      "Horse racing meets blockchain — redefining virtual sports and metaverse innovation.",
    height: "180px",
  },
  {
    logo: seedlogo,
    slug: "seedlogo",
    companyType: "Finance",
    description:
      "Prominent financial services provider with a strong focus on digital innovation.",
    height: "60px",
  },
  {
    logo: techgalaxy,
    slug: "techgalaxy",
    companyType: "Technology",
    description:
      "Building next-generation tech solutions that power digital transformation.",
    height: "60px",
  },
  {
    logo: turing,
    slug: "turing",
    companyType: "IT Solutions",
    description:
      "Leading IT company offering scalable, secure, and AI-driven software systems.",
    height: "75px",
  },
  {
    logo: universalskills,
    slug: "universalskills",
    companyType: "Education",
    description:
      "Empowering global learners through innovative skill development platforms.",
    height: "90px",
  },
  {
    logo: absher,
    slug: "absher",
    companyType: "NFC",
    description:
      "Revolutionizing digital interactions with NFC-powered smart business cards.",
    height: "80px",
  },
  {
    logo: airhub,
    slug: "airhub",
    companyType: "Surveillance",
    description:
      "Complete drone operations management with compliance and real-time awareness.",
    height: "80px",
  },
  {
    logo: birdsworld,
    slug: "birdsworld",
    companyType: "E-commerce",
    description:
      "A multi-vendor platform bringing global sellers and buyers together seamlessly.",
    height: "80px",
  },
  {
    logo: halalchef,
    slug: "halalchef",
    companyType: "Food & Beverage",
    description:
      "Premium culinary services and gourmet food preparation adhering to the highest halal standards.",
    height: "80px",
  },
  {
    logo: royaldelhi,
    slug: "royaldelhi",
    companyType: "Food & Beverage",
    description:
      "Traditional Indian culinary delicacies and premium fast-food cuisines crafted with authentic taste.",
    height: "75px",
  },
  {
    logo: singaf,
    slug: "singaf",
    companyType: "E-commerce",
    description:
      "A premier Omani fashion and lifestyle boutique marketplace connecting local designers with global buyers.",
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
            "radial-gradient(125% 125% at 50% 100%, #070508 40%, #1E1D28 100%)",
        }}
      />

      {/* Soft glowing orb (Subtle light source) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3567FF]/10 blur-[160px] rounded-full pointer-events-none" />

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
        <p className="text-[#8791AD] text-lg max-w-2xl mx-auto">
          Proudly partnering with global innovators, pioneers, and industry leaders
          to shape the digital future.
        </p>
        <div className="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-[#3567FF] via-[#3567FF]/60 to-[#61CE70] rounded-full" />
      </motion.div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {testimonials.map((client, index) => (
          <Link
            key={index}
            to={`/clients/${client.slug}`}
            className="w-full no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="group relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 w-full h-[15rem] flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg hover:-translate-y-2 text-[#070508] cursor-pointer transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.companyType}
                style={{ height: client.height }}
                className="object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="
                font-bold text-sm mb-2 
                text-black group-hover:text-[#3567FF] transition-colors
              ">
                {client.companyType}
              </h3>

              <p className="
                text-black text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed
              ">
                {client.description}
              </p>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-transparent to-[#3567FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Bottom fade (Adjusted to match background color) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#070508] via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default ClientsSection;