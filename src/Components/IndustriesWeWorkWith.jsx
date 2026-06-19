import React from "react";
import { Link } from "react-router-dom";
import industriesbg from "../assets/industries-bg.jpg";
const DUMMY_BACKGROUND_URL = industriesbg;

const industries = [
  {
    name: "Logistics",
    cardtitle: "Logistics & Supply Chain Management",
    description:
      "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Flogistics.avif?alt=media&token=058968db-a457-489e-b89e-f8c614f2f14b",
  },
  {
    name: "Ecommerce",
    cardtitle: "Building Scalable and Engaging Online Stores",
    description:
      "The B2B industry involves transactions between businesses rather than between a business and individual consumers, enabling businesses to improve their efficiencies and productivity through strategic partnerships.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fecommerce.avif?alt=media&token=785b25c8-10f5-4fdb-a380-57297ecb49aa",
  },
  {
    name: "FinTech",
    cardtitle: "Fintech Solutions for a Secure and Efficient Future",
    description:
      "The Fintech industry combines finance and technology, encompassing mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency to make financial services more accessible.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ffintech.avif?alt=media&token=474792c3-220d-4e85-8304-4e6872f15e20",
  },
  {
    name: "Trading",
    cardtitle: "Developing the AI powered Trading Applications",
    description:
      "The Trading industry involves the buying and selling of goods and services across different markets. Modern technology has transformed trading, making it faster and more accessible.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftrading.avif?alt=media&token=4afcab9a-1198-4554-b75f-9c8d54577a11",
  },
  {
    name: "Tourism",
    cardtitle: "Building intelligent travel platforms with AI-powered recommendations",
    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers — from accommodations and transportation to travel agencies and entertainment venues.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftourism.avif?alt=media&token=ecacc06c-6c71-42d5-a4ee-128768193f36",
  },
  {
    name: "Automotive",
    cardtitle: "Developing connected car solutions, electric vehicle (EV)",
    description:
      "The AutoMobile industry is at the forefront of technological innovations, including electric vehicles and autonomous driving systems that are transforming the way we think about transportation.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fautomotive.avif?alt=media&token=b43bd526-04bc-400a-9eac-226b310d433f",
  },
];

const IndustriesWeWorkWith = () => {
  const carouselItems = [...industries, ...industries];

  const IndustryCard = ({ industry }) => (
    <Link
      to={`/industries/${industry.name.toLowerCase()}`}
      className="flex-shrink-0 w-80 lg:w-96 p-5 mx-3 rounded-2xl bg-[#1E1D28] border border-[#2D2B3B] shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-[#3567FF]/40 hover:shadow-[0_10px_40px_-10px_rgba(53,103,255,0.2)] group no-underline text-left"
    >
      <div className="relative h-48 mb-5 overflow-hidden rounded-xl">
        <img
          src={industry.imageUrl}
          alt={industry.cardtitle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
          loading="lazy"
        />
        {/* Industry Tag Overlay */}
        <span className="absolute top-3 left-3 bg-[#3567FF] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          {industry.name}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3567FF] transition-colors duration-300">
        {industry.cardtitle}
      </h3>
      <p className="text-[#8791AD] text-sm line-clamp-3 leading-relaxed">
        {industry.description}
      </p>
    </Link>
  );

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center bg-[#070508]">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${DUMMY_BACKGROUND_URL})` }}
      >
        <div className="absolute inset-0 bg-[#070508] opacity-85" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
              Industries We Transform
            </h2>
            <p className="mt-4 text-lg text-[#8791AD] max-w-3xl mx-auto">
              Partnering with leading businesses to build the future of their respective sectors.
            </p>
          </div>

          {/* Auto-Scrolling Carousel */}
          <div className="relative overflow-hidden group py-4">
            <style>{`
              @keyframes infinite-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .carousel-scroll {
                animation: infinite-scroll 40s linear infinite;
              }
              .carousel-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070508] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070508] to-transparent z-10 pointer-events-none" />

            <div className="flex carousel-scroll" style={{ minWidth: "250rem" }}>
              {carouselItems.map((industry, index) => (
                <IndustryCard key={index} industry={industry} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWorkWith;
