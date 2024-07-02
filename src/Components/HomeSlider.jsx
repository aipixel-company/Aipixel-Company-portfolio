import React, { useState, useEffect, useMemo, memo } from "react";
import larace from "../assets/larace.png";
import adventureclub from "../assets/adventureclub.png";
import dtecch from "../assets/dtec.png";
import bankmusqat from "../assets/bankmusqat.png";
import moosa from "../assets/moosa.png";
import dtec from "../assets/dtec.jpg"
import background from "../assets/background.jpg"
import bankmusqatt from "../assets/bankmusqatt.jpg"
import laracee from "../assets/larace.jpg"
import moosagroup from "../assets/moosagroup.jpg"


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
    title: "Bank Muscat",
    logo: bankmusqat,
    description:
      "Bank Muscat is a leading financial institution in Oman, offering a wide range of banking services and solutions.",
    backgroundImage:
    bankmusqatt,
    logoHeight: "35px",
  },
  {
    id: 3,
    title: "Adventure Club",
    logo: adventureclub,
    description:
      "Adventure Club offers thrilling and adventurous activities for those who seek excitement and unforgettable experiences.",
    backgroundImage:
      background,
    logoHeight: "70px",
  },
  {
    id: 4,
    title: "Moosa Group",
    logo: moosa,
    description:
      "Moosa Group is a conglomerate with diverse business interests, delivering quality products and services.",
    backgroundImage:
      moosagroup,
    logoHeight: "55px",
  },
  {
    id: 5,
    title: "LA Race",
    logo: larace,
    description:
      "LA Race is an organization dedicated to organizing exciting and competitive racing events.",
    backgroundImage:
      laracee,
    logoHeight: "65px",
  },
];

const Card = memo(({ card, isActive, progress, onClick }) => {
  return (
    <div
      key={card.id}
      className={`w-56 h-auto cursor-pointer transition-transform duration-500 ${
        isActive
          ? "bg-white shadow-md transform scale-105 rounded-lg"
          : "bg-white rounded-lg shadow-md border opacity-70"
      }`}
      onClick={() => onClick(card.id)}
    >
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col justify-center items-center h-full">
          <div
            className={`flex items-center transition-all duration-500 ${
              isActive ? "translate-y-[-20%]" : "translate-y-0"
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
          {isActive && (
            <div className="mt-5 transition-opacity duration-500 opacity-100">
              <p className="text-black text-sm font-light mx-auto">
                {card.description}
              </p>
            </div>
          )}
        </div>
        {isActive && (
          <div className="w-full h-1 mt-2">
            <div
              className="h-full bg-blue-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
});

function HomeSlider() {
  const [activeCardId, setActiveCardId] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardId((prevId) => (prevId % cards.length) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeCardId]);

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId);
  };

  const activeCard = useMemo(
    () => cards.find((card) => card.id === activeCardId),
    [activeCardId]
  );

  return (
    <div
      className="flex items-center justify-around bg-cover bg-center w-full min-h-screen"
      style={{
        backgroundImage: `url(${activeCard.backgroundImage})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 mb-5">
        <div className="mb-28 mt-10 cursor-default text-center max-w-full">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white prosto-one-regular">
            We Turn your Dreams into Reality
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-white prosto-one-regular mt-4">
            Where Pixel gets Smarter
          </h2>
        </div>
        <div className="hidden md:flex flex-row justify-center space-x-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={activeCardId === card.id}
              progress={progress}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <div className="flex md:hidden flex-col space-y-4 mx-auto items-center mb-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={activeCardId === card.id}
              progress={progress}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
