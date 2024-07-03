import React from "react";
import about from "../assets/about.gif";

function HomeSlider() {
  return (
    <div className="flex items-center xl:h-[90vh] bg-gradient-to-br from-blue-50 to-blue-700">
      <div className="md:flex-1 hidden md:block">
        <img
          src={about}
          alt="About us"
          className="h-full object-cover mx-auto"
        />
      </div>
      <div className="flex-1 md:p-8 p-4 mx-auto">
        <h1 className="lg:text-4xl text-2xl font-bold mb-4 text-white">
          AIPixel: Where Innovation Meets Ingenuity
        </h1>
        <p className="md:text-md text-lg text-white">
          Welcome to the forefront of digital evolution. At AIPixel, we're not
          just software engineers; we're architects of the future. We forge
          groundbreaking ideas into reality, crafting cutting-edge AI-powered
          solutions that propel businesses into a new era of success.
        </p>
      </div>
    </div>
  );
}

export default HomeSlider;
