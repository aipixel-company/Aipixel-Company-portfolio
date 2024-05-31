import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import fianance from "../assets/fianance.jpg";
import adventureclubbackgorund from "../assets/adventureclubbackground.jpg";
import dtec from "../assets/dtec.jpg";
import seed from "../assets/background.jpg";
import larace from "../assets/larace.png";
import dofar from "../assets/dofar.png";
import dtecch from "../assets/dtec.png";
import riyadhbank from "../assets/bankriyadh.png";
import moosa from "../assets/moosa.png";
import laracee from "../assets/larace.jpg";
import moosagroup from "../assets/moosagroup.jpg";

const cards = [
  {
    id: 1,
    title: "Riyad Bank",
    logo: riyadhbank,
    description: "Bank AL-Riyad",
    backgroundImage: fianance,
    logoHeight: "35px",
  },
  {
    id: 2,
    title: "Dtec",
    logo: dtecch,
    description: "DTEC",
    backgroundImage: dtec,
    logoHeight: "50px",
  },
  {
    id: 3,
    title: "Dofar",
    logo: dofar,
    description: "Dhofar",
    backgroundImage: seed,
    logoHeight: "50px",
  },
  {
    id: 4,
    title: "Moosa Group",
    logo: moosa,
    description: "Moosa Group",
    backgroundImage: moosagroup,
    logoHeight: "55px",
  },
  {
    id: 5,
    title: "LA Race",
    logo: larace,
    description: "LARACE",
    backgroundImage: laracee,
    logoHeight: "65px",
  },
];

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

  const activeCard = cards.find((card) => card.id === activeCardId);

  return (
    <div
      className="flex items-center justify-around h-screen"
      style={{
        backgroundImage: `url(${activeCard.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div>
        <div className="mb-28 mt-10 cursor-default">
          <h
            className="text-6xl text-white 
          
prosto-one-regular 
          
          
          "
          >
            Built in Your Way
          </h>
          <h1 className=" prosto-one-regular  text-6xl text-white">
           but with Our Expert Approach
          </h1>
        </div>
        <div className="flex flex-row">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-52 h-36 cursor-pointer transition-transform duration-500 ${
                activeCardId === card.id
                  ? "bg-white shadow-md text-white transform scale-105 rounded-lg"
                  : "bg-white shadow-md border text-white opacity-70"
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flex flex-col justify-between h-full p-1">
                <div className="flex flex-col justify-center items-center h-full">
                  <div
                    className={`flex items-center transition-all duration-500 ${
                      activeCardId === card.id
                        ? "translate-y-[-20%]"
                        : "translate-y-0"
                    }`}
                  >
                    <img
                      src={card.logo}
                      alt={card.title}
                      style={{ height: card.logoHeight }}
                      className="mx-auto"
                    />
                  </div>
                  {activeCardId === card.id && (
                    <div className="mt-5 transition-opacity duration-500 opacity-100">
                      <p className="text-black font-semibold  mx-auto">
                        {card.description}
                      </p>
                    </div>
                  )}
                </div>
                {activeCardId === card.id && (
                  <div className="w-full h-1 mt-2">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
