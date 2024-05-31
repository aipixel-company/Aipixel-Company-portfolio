import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";

const features = [
  {
    title: "Engineering with passion",
    description:
      "At Ai-Pixel, we blend innovation and dedication to create AI-driven software solutions that transform ideas into reality. Our passionate team is committed to pushing boundaries, delivering excellence, and driving success in every project we undertake.",
  },
  {
    title: "Performance focus",
    description:
      "At Ai-Pixel, we prioritize performance in every aspect of our work. Our AI-driven solutions are designed to optimize efficiency, enhance user experience, and deliver exceptional results. Our commitment to high performance ensures your business thrives in the digital landscape.",
  },
  {
    title: "Dedication to success",
    description:
      "At Ai-Pixel, your success is our mission. We are dedicated to providing innovative AI-driven solutions that drive growth and deliver outstanding results. Our unwavering commitment ensures your business achieves its fullest potential.",
  },
];

export default function OurUniqueFeatures() {
  return (
    <div className=" h-[80vh] mx-14">
      <h1 className="text-center text-4xl font-body pt-5 mt-5">
        What's Different About AI-PIXEL?
      </h1>
      <div className="p-4 mt-6 bg-white">
        <div className="flex">
          {features.map((feature, index) => (
            <div key={index} className="p-3">
              <div className="flex flex-row items-center">
                <GoDotFill className=" text-blue-700" />
                <h1 className="font-body font-medium text-lg ml-2">
                  {feature.title}
                </h1>
              </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
