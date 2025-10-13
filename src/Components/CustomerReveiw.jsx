import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
    author: "Mathew",
    title: "Freelance Designer", // Added role/title for more professionalism
  },
  {
    quote:
      "We just asked for development! They built the whole product with branding. I'd happily describe them as a reliable service company.",
    author: "Badar-al-sahi",
    title: "Tech Startup CEO",
  },
  {
    quote:
      "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Ai-Pixel. The company proved itself a reliable provider of IT services.",
    author: "Horizon Trading",
    title: "Project Manager",
  },
  {
    quote:
      "Your software is a must-have for anyone who wants to create a DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd.",
    author: "Robsoreson",
    title: "Data Analyst",
  },
  {
    quote:
      "Ai-Pixel was chosen to replace our previous development team and to work on relaunching our freight forwarding logistics web-service after careful research and several conversations.",
    author: "Muhanad",
    title: "Logistics Director",
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality (Simplified the logic by removing prevIndex/isAnimating)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Increased interval for better readability and a smoother experience
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      {/* Testimonial Card - The Glassmorphic Element */}
      <div
        className="w-full mx-auto p-8 md:p-10 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 text-white transition duration-500"
        style={{ maxWidth: "450px" }} // Increased max-width for better use of space
      >
        <div className="flex justify-center mb-6">
            
            <h3 className="text-3xl font-extrabold text-white ms-2">Client Success</h3>
        </div>
        

        {/* Testimonial Slider Content */}
        <div className="relative h-[17rem] overflow-hidden">
          {testimonials.map((item, index) => (
            <div
              key={index}
              // This transition handles the fade-in/out and position change
              className={`absolute inset-0 w-full text-center p-2 transition-all duration-700 ease-in-out transform ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              
              
              <p className="text-lg italic leading-relaxed text-white/90">"{item.quote}"</p>
              
              <div className="mt-5">
                <p className="text-xl font-bold text-cyan-400">{item.author}</p>
                {/* Displaying the added title/role */}
                <p className="text-sm text-white/60">{item.title}</p> 
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-400 w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;