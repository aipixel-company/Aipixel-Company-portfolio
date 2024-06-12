import React from "react";
import about from "../assets/about.gif";

function HomeSlider() {
  return (
    <div className="flex items-center h-[90vh] bg-gradient-to-br from-blue-50 to-blue-700 ">
      <div className="flex-1">
        <img
          src={about}
          alt="About us"
          className="h-full object-cover mx-auto"
        />
      </div>
      <div className="flex-1 p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">
          AI Pixel: Where Innovation Meets Ingenuity
        </h1>
        <p className="text-md text-white">
          Welcome to the forefront of digital evolution. At AI Pixel, we're not
          just software engineers; we're architects of the future. We forge
          groundbreaking ideas into reality, crafting cutting-edge AI-powered
          solutions that propel businesses into a new era of success.
        </p>
      </div>
    </div>
  );
}

export default HomeSlider;
