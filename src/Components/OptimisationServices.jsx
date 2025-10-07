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
    <div className="w-full bg-gradient-to-r from-[#647A82] to-[#00BFA6] py-16">
    <h1 className="text-4xl font-bold text-white text-center mb-10">
      Optimisation
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg font-bold text-[#647A82]">
              0{index + 1}
            </span>
            <h1 className="font-semibold text-lg">{service.title}</h1>
          </div>
          <p className="text-gray-700 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
}
