import React from "react"
import industriesbg from "../assets/industries-bg.jpg"
const DUMMY_BACKGROUND_URL = industriesbg; 
// This image provides a dark, abstract, and high-tech/futuristic aesthetic suitable for the design.

// The original industries array remains the same
const industries = [
  {
    name: "Logistics",
    cardtitle: "Logistics & Supply Chain Management",
    description:
      "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information. This sector includes activities such as transportation, warehousing, inventory management, and order fulfillment. Logistics companies play a vital role in ensuring that products are delivered efficiently and effectively, supporting the global economy and enabling businesses to meet customer demands.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Flogistics.avif?alt=media&token=058968db-a457-489e-b89e-f8c614f2f14b",
  },
  {
    name: "Ecommerce",
    cardtitle: "Building Scalable and Engaging Online Stores",
    description:
      "The B2B (Business-to-Business) industry involves transactions between businesses rather than between a business and individual consumers. This sector includes a wide range of services and products that one business needs to operate, such as consultancy, software solutions, raw materials, and professional services. The B2B industry is essential for the supply chain and enables businesses to improve their efficiencies and productivity through strategic partnerships.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fecommerce.avif?alt=media&token=785b25c8-10f5-4fdb-a380-57297ecb49aa",
  },
  {
    name: "FinTech",
    cardtitle: "Fintech Solutions for a Secure and Efficient Future",
    description:
      "The Fintech industry is a dynamic and rapidly evolving sector that combines finance and technology. It encompasses a wide range of applications, including mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency. Fintech companies aim to make financial services more accessible, efficient, and user-friendly, disrupting traditional banking models and offering innovative solutions to both businesses and consumers.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ffintech.avif?alt=media&token=474792c3-220d-4e85-8304-4e6872f15e20",
  },
  {
    name: "Trading",
    cardtitle: "Developing the AI powered Trading Applications",
    description:
      "The Trading industry involves the buying and selling of goods and services across different markets. This industry is crucial for the global economy as it facilitates the flow of products, resources, and capital. Trading can be divided into domestic and international markets, with activities ranging from retail and wholesale trading to complex financial instruments and commodities trading. Modern technology has transformed trading, making it faster and more accessible.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftrading.avif?alt=media&token=4afcab9a-1198-4554-b75f-9c8d54577a11",
  },
  {
    name: "Tourism",
    cardtitle:
      "Building intelligent travel platforms with AI-powered recommendations",
    description:
      "The Tourism industry encompasses a broad range of businesses and services that cater to travelers. This includes accommodations, transportation, travel agencies, tour operators, and entertainment venues. The industry plays a significant role in global economies by generating income, creating jobs, and promoting cultural exchange. Tourism is constantly evolving, with trends like eco-tourism, adventure travel, and luxury experiences shaping the market.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Ftourism.avif?alt=media&token=ecacc06c-6c71-42d5-a4ee-128768193f36",
  },
  {
    name: "Automotive",
    cardtitle: "Developing connected car solutions, electric vehicle (EV)",
    description:
      "The AutoMobile industry refers to companies and activities involved in the production of vehicles, including cars, trucks, and motorcycles. This industry plays a crucial role in the global economy, providing millions of jobs and enabling the movement of goods and people. The industry is also at the forefront of technological innovations, such as electric vehicles and autonomous driving systems, which are transforming the way we think about transportation.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/ai-pixel-portfolio.appspot.com/o/assets%2Fautomotive.avif?alt=media&token=b43bd526-04bc-400a-9eac-226b310d433f",
  },
];

const IndustriesWeWorkWith = () => {
  // Use a temporary combined array for the infinite loop effect: original + copy
  const carouselItems = [...industries, ...industries];

  const IndustryCard = ({ industry, index }) => (
    <div
      // Adjusted card styling for dark background: darker background, vibrant border
      className="flex-shrink-0 w-80 lg:w-96 p-6 mx-4 rounded-3xl bg-slate-900/90 shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-blue-700/50 backdrop-blur-sm"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
        <img
          src={industry.imageUrl}
          alt={industry.cardtitle}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Industry Tag Overlay */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          {industry.name}
        </span>
      </div>
      {/* Adjusted text colors for dark mode */}
      <h3 className="text-xl font-bold text-white mb-3">{industry.cardtitle}</h3>
      <p className="text-gray-400 text-sm line-clamp-4">{industry.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center">
      {/* Image Background Layer (Z-index 0) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // Using the publicly accessible URL instead of the failed local import
          backgroundImage: `url(${DUMMY_BACKGROUND_URL})`,
        }}
      >
        {/* Dark overlay for contrast and mood */}
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content/Carousel Section (Z-index 10) */}
      <div className="relative z-10 w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title on Top (Text colors adjusted for dark background) */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
              Industries We Transform
            </h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Partnering with leading businesses to build the future of their respective sectors.
            </p>
          </div>

          {/* Auto-Scrolling Carousel Container */}
          <div className="relative overflow-hidden group py-4">
            {/* CSS for the auto-scroll animation (inline for simplicity/Tailwind-like usage) */}
            <style jsx="true">{`
              @keyframes infinite-scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  /* Move exactly half the container's width (which is the width of all original items) */
                  transform: translateX(-50%);
                }
              }

              /* Base speed for the scroll */
              .carousel-scroll {
                animation: infinite-scroll 40s linear infinite;
              }

              
            `}</style>
            
            {/* Gradient Fade to create the 'infinite' effect at the edges. Blends with dark background. */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none"></div>

            {/* The scrolling track */}
            <div
              className="flex carousel-scroll"
              // Set min-width to double the content length to accommodate the duplicated items
              // 20rem (card width + margin) * 12 items = 240rem. Using a higher value for safety.
              style={{ minWidth: `250rem` }} 
            >
              {carouselItems.map((industry, index) => (
                <IndustryCard
                  key={index} 
                  industry={industry}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeWorkWith;
