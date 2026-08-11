import React, { useState, useEffect, useCallback, memo } from "react";
// Import assets - assuming these paths are correct
import absher from "../assets/absher.png";
import adventureclub from "../assets/adventureclub.png";
import dtecch from "../assets/dtec.png";
import bankmusqat from "../assets/bankmusqat.png";
import moosa from "../assets/moosa.png";
import dtec from "../assets/dtec.jpg";
import background from "../assets/background.jpg";
import bankmusqatt from "../assets/bankmusqatt.jpg";
import laracee from "../assets/absherbg.png";
import moosagroup from "../assets/moosagroup.jpg";

// Card data is kept as is, but could be fetched from an API in a real-world app.
const cards = [
  {
    id: 1,
    title: "Dtec",
    logo: dtecch,
    description:
      "AI-powered workflow automation and predictive analytics platform — boosting operational efficiency by 40% for DTEC's tech ecosystem.",
    backgroundImage: dtec,
    logoHeight: "50px",
  },
  {
    id: 2,
    title: "Moosa Group",
    logo: moosa,
    description:
      "Intelligent supply-chain automation and ML-driven demand forecasting — enabling smarter decisions across Moosa Group's diverse portfolio.",
    backgroundImage: moosagroup,
    logoHeight: "60px",
  },
  {
    id: 3,
    title: "Bank Muscat",
    logo: bankmusqat,
    description:
      "AI-enhanced fraud detection and automated compliance monitoring — securing millions of transactions for Oman's leading bank.",
    backgroundImage: bankmusqatt,
    logoHeight: "35px",
  },
  {
    id: 4,
    title: "Adventure Club",
    logo: adventureclub,
    description:
      "ML-driven personalized booking recommendations and automated customer engagement — transforming adventure experiences.",
    backgroundImage: background,
    logoHeight: "70px",
  },
  {
    id: 5,
    title: "Absher",
    logo: absher,
    description:
      "AI-powered smart networking with NFC technology — automated lead scoring and intelligent contact management with ABSHER.",
    backgroundImage: laracee,
    logoHeight: "70px",
  },
];

// Preload images logic is fine for performance
const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// **Enhanced Card Component** - Added hover state effects
const Card = memo(
  ({ card, isActive, progress, onClick, onMouseEnter, onMouseLeave }) => (
    <div
      key={card.id}
      className={`w-64 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-auto cursor-pointer transition-all duration-300 ease-in-out hover:ring-4 hover:ring-blue-500/50 rounded-xl ${isActive
        ? "bg-white shadow-2xl transform scale-105 ring-4 ring-blue-500/30 z-10" // Prominent active state
        : "bg-white rounded-xl shadow-lg border border-gray-100 opacity-90 hover:opacity-100" // Subtle inactive state
        }`}
      onClick={() => onClick(card.id)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col justify-between h-full p-4 lg:p-5">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Logo with a more pronounced upward shift on active */}
          <div
            className={`flex items-center transition-all duration-500 ${isActive ? "translate-y-[-15%] mb-3" : "translate-y-0"
              }`}
          >
            <img
              src={card.logo}
              alt={card.title}
              style={{ height: card.logoHeight }}
              className="mx-auto"
              loading="lazy"
            />
          </div>
          {/* Description visible only when active */}
          {isActive && (
            <div className="mt-3 lg:mt-4 transition-opacity duration-500 opacity-100 animate-fadeIn">
              <p className="text-black text-xs lg:text-sm font-light text-center cario-db">
                {card.description}
              </p>
            </div>
          )}
        </div>
        {/* Modern Progress Bar */}
        {isActive && (
          <div className="w-full h-1 mt-4 lg:mt-5 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-100 ease-linear" // Smooth but fast transition for progress bar
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
);

// Define animation for description text
// This class is not necessary if using Tailwind's default `transition-opacity duration-500`, 
// but is good for more complex effects. For this example, I'll rely on the simple transition 
// and add a minor custom `animate-fadeIn` class via an external CSS or utility if available, 
// but will keep it simple with standard Tailwind for compliance. (The animate-fadeIn 
// is removed to rely on opacity transition).

const SLIDE_DURATION = 5000; // 5 seconds for full slide
const PROGRESS_TICK = 50; // Update progress every 50ms

function HomeSlider() {
  const [activeCardId, setActiveCardId] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Memoized click handler
  const handleCardClick = useCallback((cardId) => {
    setActiveCardId(cardId);
    setProgress(0); // Reset progress on manual click
  }, []);

  // Handlers for pausing the slider on hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Effect for preloading images
  useEffect(() => {
    preloadImages(
      cards.flatMap((card) => [card.logo, card.backgroundImage])
    );
  }, []);

  // Effect for automatic sliding and progress update
  useEffect(() => {
    let slideTimer;
    let progressTimer;

    // Reset progress to 0 every time activeCardId changes (either auto or manual)
    setProgress(0);

    // Only start timers if not hovered
    if (!isHovered) {
      // 1. Progress Bar Update
      progressTimer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (PROGRESS_TICK / SLIDE_DURATION) * 100;
          return Math.min(newProgress, 100);
        });
      }, PROGRESS_TICK);

      // 2. Card Change Timer
      // Use setTimeout so the progress bar can reach 100% first
      slideTimer = setTimeout(() => {
        setActiveCardId((prevId) => (prevId % cards.length) + 1);
      }, SLIDE_DURATION);
    }

    // Cleanup timers
    return () => {
      clearTimeout(slideTimer);
      clearInterval(progressTimer);
    };
  }, [activeCardId, isHovered]); // Reruns on card change or hover state change

  const activeCard = cards.find((card) => card.id === activeCardId) || cards[0];

  return (
    <div
      className="flex items-center justify-around bg-cover bg-center w-full xl:min-h-screen relative"
      style={{
        backgroundImage: `url(${activeCard.backgroundImage})`,
        transition: "background-image 0.7s ease-in-out", // Slightly longer background transition
      }}
    >
      {/* Catchy: Dark Overlay for text contrast on any background image */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-700"></div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-8 md:py-10 lg:py-12">
        {/* Modern & Catchy Header Content */}
        <div className="lg:mb-12 mb-8 mt-4 lg:mt-6 cursor-default text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold mb-5 tracking-wide">
            <span className="w-2 h-2 bg-[#61CE70] rounded-full animate-pulse"></span>
            AI-Powered Digital Agency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Where Pixal gets Smarter
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white/90 font-light mt-3 lg:mt-4 drop-shadow-lg">
            AI-powered automation that reduces manual effort by 60%+
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-4 lg:mt-5 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            We partner with businesses to architect intelligent digital solutions.
            We leverage the latest technologies — React, AI/ML, Cloud platforms, and modern DevOps practices.
          </p>
          <div className="mt-6 lg:mt-8">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#3567FF] text-white text-sm font-semibold
                         hover:bg-[#1a4fd9] hover:shadow-[0_0_25px_rgba(53,103,255,0.5)] transition-all duration-300 no-underline"
            >
              Explore Our Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop/Tablet Card Layout */}
        <div className="hidden md:flex flex-row flex-wrap justify-center h-auto space-x-3 xl:space-x-4 2xl:space-x-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={activeCardId === card.id}
              progress={activeCardId === card.id ? progress : 0}
              onClick={handleCardClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        {/* Mobile Card Layout - Stacked and centered */}
        <div className="flex md:hidden flex-col space-y-4 mx-auto items-center mb-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={activeCardId === card.id}
              progress={activeCardId === card.id ? progress : 0}
              onClick={handleCardClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;