import React, { useState, useEffect, useCallback, memo } from "react";
// Import assets - assuming these paths are correct
import larace from "../assets/larace.png";
import adventureclub from "../assets/adventureclub.png";
import dtecch from "../assets/dtec.png";
import bankmusqat from "../assets/bankmusqat.png";
import moosa from "../assets/moosa.png";
import dtec from "../assets/dtec.jpg";
import background from "../assets/background.jpg";
import bankmusqatt from "../assets/bankmusqatt.jpg";
import laracee from "../assets/larace.jpg";
import moosagroup from "../assets/moosagroup.jpg";

// Card data is kept as is, but could be fetched from an API in a real-world app.
const cards = [
  {
    id: 1,
    title: "Dtec",
    logo: dtecch,
    description:
      "DTEC provides innovative tech solutions to enhance business efficiency and drive growth in various sectors.",
    backgroundImage: dtec,
    logoHeight: "50px",
  },
  {
    id: 2,
    title: "Moosa Group",
    logo: moosa,
    description:
      "Moosa Group is a conglomerate with diverse business interests, delivering quality products and services.",
    backgroundImage: moosagroup,
    logoHeight: "60px",
  },
  {
    id: 3,
    title: "Bank Muscat",
    logo: bankmusqat,
    description:
      "Bank Muscat is a leading financial institution in Oman, offering a wide range of banking services and solutions.",
    backgroundImage: bankmusqatt,
    logoHeight: "35px",
  },
  {
    id: 4,
    title: "Adventure Club",
    logo: adventureclub,
    description:
      "Adventure Club offers thrilling and adventurous activities for those who seek excitement and unforgettable experiences.",
    backgroundImage: background,
    logoHeight: "70px",
  },
  {
    id: 5,
    title: "LA Race",
    logo: larace,
    description:
      "LA Race is an organization dedicated to organizing exciting and competitive racing events.",
    backgroundImage: laracee,
    logoHeight: "75px",
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
      className={`w-56 h-auto cursor-pointer transition-all duration-300 ease-in-out hover:ring-4 hover:ring-blue-500/50 rounded-xl ${
        isActive
          ? "bg-white shadow-2xl transform scale-105 ring-4 ring- z-10" // Prominent active state
          : "bg-white rounded-xl shadow-lg border border-gray-100 opacity-90 hover:opacity-100" // Subtle inactive state
      }`}
      onClick={() => onClick(card.id)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col justify-between h-full p-6">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Logo with a more pronounced upward shift on active */}
          <div
            className={`flex items-center transition-all duration-500 ${
              isActive ? "translate-y-[-20%] mb-4" : "translate-y-0"
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
            <div className="mt-5 transition-opacity duration-500 opacity-100 animate-fadeIn">
              <p className="text-black text-sm font-light text-center cario-db">
                {card.description}
              </p>
            </div>
          )}
        </div>
        {/* Modern Progress Bar */}
        {isActive && (
          <div className="w-full h-1 mt-6 rounded-full bg-gray-200 overflow-hidden">
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
      
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16">
        {/* Modern & Catchy Header Content */}
        <div className="lg:mb-28 mb-16 mt-10 cursor-default text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl animate-pulseOnce">
            Empowering Digital Transformation.
          </h1>
         
        </div>
        
        {/* Desktop/Tablet Card Layout */}
        <div className="hidden md:flex flex-row flex-wrap justify-center h-auto space-x-6">
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