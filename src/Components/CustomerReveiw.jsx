import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
    author: "Mathew",
  },
  {
    quote:
      "we just ask for development! they build the whole product with branding I,d happily describe them A reliable service company",
    author: "Badar-al-sahi",
  },
  {
   
    quote:
      "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Ai-Pixel. The company proved itself a reliable provider of IT services.",
    author: "Horizon Trading",
  },
  {
   
    quote:
      "Your software is a must-have for anyone who wants to create a DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd.",
    author: "Robsoreson",
  },
  {
   
    quote:
      "Ai-Pixel was chosen to replace our previous development team and to work on relaunching our freight forwarding logistics web-service after careful research and several conversations.",
    author: "Muhanad",
  },
];

const transitions = {
  enter: "transition transform duration-500 ease-in-out",
  enterActive: "translate-x-0 opacity-100",
  exit: "transition transform duration-500 ease-in-out",
  exitActive: "translate-x-full opacity-0",
};

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(true);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className="min-w-screen flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-3xl shadow-lg bg-[#383742] px-10 pt-16 pb-10 text-gray-600"
        style={{ maxWidth: "350px" }}
      >
        <div className="overflow-hidden relative mb-10 h-[10rem]">
          <div className="overflow-hidden relative h-full">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`w-full  text-center select-none absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{
                  display:
                    index === currentIndex || index === prevIndex
                      ? "block"
                      : "none",
                }}
              >
                
                <p className="text-sm leading-tight text-white">{item.quote}</p>
                <p className="text-sm font-semibold mt-3 text-gray-400">
                  ~ {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          {testimonials.map((item, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-indigo-500" : "bg-gray-200"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
