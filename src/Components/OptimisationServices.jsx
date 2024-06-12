import React from "react";

const services = [
  {
    title: "Software Audit",
    description:
      "At AI-Pixel, we conduct thorough software audits to identify potential issues and ensure compliance with industry standards. Our expert team provides detailed analysis and actionable insights to enhance your software’s performance, security, and reliability.",
  },
  {
    title: "Support",
    description:
      "AI-Pixel offers comprehensive support services to ensure the smooth operation and maintenance of your software systems. Our dedicated support team is available to address any technical issues, perform updates, and provide ongoing assistance.",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure your software meets the highest standards of quality and reliability with AI-Pixel's rigorous quality assurance services. Our team implements advanced testing processes to detect and rectify any issues before deployment.",
  },
];

export default function OptimisationServices() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold ml-5 px-4 mt-5">
        Optimisation
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-6 p-[4rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-3 h-[16.5rem] rounded-lg bg-gray-100 my-4 hover:shadow-teal-100 hover:shadow-xl hover:cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
          >
            <div className="absolute top-0 left-0  text-blue-800 rounded-full h-7 w-7 p-7 flex items-center justify-center font-semibold">
              0{index + 1}
            </div>
            <div className="flex flex-col items-center bg-opacity-80 p-4 rounded-md">
              <h1 className="font-body font-medium text-lg mb-2">
                {service.title}
              </h1>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
