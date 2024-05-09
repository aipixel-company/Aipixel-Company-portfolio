import React, { useState, useEffect } from 'react';
import { Typography } from '@material-tailwind/react';
import fianance from "../assets/fianance.jpg";
import arkaan from "../assets/arkantrans.png";

const cards = [
  {
    id: 1,
    title: 'Card 1',
    logo: arkaan,
    description: "adoncncnoncioncn",
    backgroundImage: fianance, // Placeholder image from Unsplash
  },
  {
    id: 2,
    title: 'Card 2',
    logo: arkaan,
    description: "dkojncdkcnklnk",
    backgroundImage: fianance, // Placeholder image from Unsplash
  },
  {
    id: 3,
    title: 'Card 3',
    logo: arkaan,
    description: "dklnckldncnklcdn",
    backgroundImage: fianance, // Placeholder image from Unsplash
  },
  {
    id: 4,
    title: 'Card 4',
    logo: arkaan,
    description: "dklcnklncklnkl",
    backgroundImage: fianance, // Placeholder image from Unsplash
  },
];

function HomeSlider() {
  const [activeCardId, setActiveCardId] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardId((prevId) => (prevId % cards.length) + 1);
    }, 3000); // Change the time interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId);
  };

  const activeCard = cards.find((card) => card.id === activeCardId);

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${activeCard.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex justify-center space-x-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex-shrink-0 w-80 h-44 rounded-lg cursor-pointer ${
              activeCardId === card.id ? 'bg-gray-400' : 'bg-white'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="p-4">
              <div className="mb-4">
                <img src={card.logo} alt={card.title} className="w-20 h-20 " />
              </div>
              <Typography color="blueGray" className="text-lg font-semibold text-center mb-1">
                {card.title}
              </Typography>
              <Typography color="blueGray" className="text-sm text-center mb-2">
                {card.description}
              </Typography>
              {/* Add card description here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSlider;
