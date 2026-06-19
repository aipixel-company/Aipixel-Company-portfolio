import React from "react";
import { Link } from "react-router-dom";
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
  { logo: finance, industryType: "Finance", height: "75px" },
  { logo: insurance, industryType: "Insurance", height: "70px" },
  { logo: marketplace, industryType: "Marketplace", height: "60px" },
  { logo: ecommerce, industryType: "Ecommerce", height: "60px" },
  { logo: ar, industryType: "Augmented Reality", height: "80px" },
  { logo: logistics, industryType: "Logistics", height: "80px" },
  { logo: automotive, industryType: "Automotive", height: "60px" },
  { logo: retail, industryType: "Education", height: "80px" },
  { logo: tourism, industryType: "Tourism", height: "80px" },
  { logo: trading, industryType: "Food", height: "65px" },
];

const getIndustrySlug = (type) => {
  const mapping = {
    "Finance": "finance",
    "Insurance": "insurance",
    "Marketplace": "marketplace",
    "Ecommerce": "ecommerce",
    "Augmented Reality": "augmented-reality",
    "Logistics": "logistics",
    "Automotive": "automotive",
    "Education": "education",
    "Tourism": "tourism",
    "Food": "food"
  };
  return mapping[type] || type.toLowerCase().replace(/[^a-z0-9]+/g, "-");
};

const IndustriesWeWorkServices = () => (
  <div className="bg-[#070508] py-10 lg:py-14 px-6 border-t border-[#2D2B3B]/30">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
        Sectors We Serve
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
        Industries We Work With
      </h2>
      <p className="text-[#8791AD] mt-4 text-lg max-w-xl mx-auto">
        We are proud to serve a diverse range of industries with innovation and impact.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
      {industries.map((industry, index) => (
        <Link
          key={index}
          to={`/industries/${getIndustrySlug(industry.industryType)}`}
          className="group glow-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer no-underline"
        >
          {/* Logo with dark filter that clears on hover */}
          <div className="relative flex items-center justify-center h-20">
            <img
              src={industry.logo}
              alt={industry.industryType}
              style={{ height: industry.height }}
              className="transition-all duration-500"
            />
          </div>

          <span className="text-sm font-semibold text-[#8791AD] group-hover:text-white transition-colors duration-300 text-center">
            {industry.industryType}
          </span>
        </Link>
      ))}
    </div>
  </div>
);

export default IndustriesWeWorkServices;
