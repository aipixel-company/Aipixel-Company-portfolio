import React from "react";
import about from "../assets/about.gif";

function HomeSlider() {
  return (
    <section className="flex items-center xl:h-[90vh] bg-gradient-to-br from-blue-50 to-blue-700">
      {/* Left Side Image */}
      <div className="md:flex-1 hidden md:block">
        <img
          src={about}
          alt="AI Innovation"
          className="h-full object-cover mx-auto"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 md:p-12 p-6 mx-auto text-white">
        <h1 className="lg:text-5xl text-3xl font-extrabold mb-6 leading-snug">
          Driving Digital Transformation with AI & Innovation
        </h1>
        <p className="md:text-lg text-base opacity-90 mb-6">
          At <span className="font-semibold">AIPixel</span>, we empower
          businesses to stay ahead of the curve. Our team blends engineering
          expertise with AI-driven creativity to design intelligent solutions
          that accelerate growth, streamline operations, and shape the future of
          technology.
        </p>
        
      </div>
    </section>
  );
}

export default HomeSlider;
