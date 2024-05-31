import React from "react";
import about from "../assets/about.gif";

function HomeSlider() {
  return (
    <div className="flex items-center h-[90vh] ">
      <div className="flex-1">
        <img
          src={about}
          alt="About us"
          className="h-full object-cover mx-auto"
        />
      </div>
      <div className="flex-1 p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI-PIXEL</h1>
        <p className="text-md">
          At Ai-Pixel, we are dedicated to transforming innovative ideas into
          cutting-edge software solutions. As a leading software house in
          Pakistan, we specialize in AI-driven technologies that empower
          businesses to reach their full potential. Our team of talented
          professionals is committed to excellence, creativity, and customer
          satisfaction. We invite you to explore our portfolio and see how
          Ai-Pixel can drive your success in the digital world
        </p>
      </div>
    </div>
  );
}

export default HomeSlider;
