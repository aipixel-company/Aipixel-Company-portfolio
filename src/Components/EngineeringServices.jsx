import React from "react";

const services = [
  {
    title: "Application Development",
    description:
      "At AI-Pixel, we specialize in building robust and scalable applications tailored to your unique business needs. Leverage our expertise in cutting-edge technologies to create applications that drive efficiency, engagement, and growth.",
  },
  {
    title: "Cloud Migration",
    description:
      "AI-Pixel offers seamless cloud migration services to help you transition your applications and data with minimal downtime. Our cloud experts design a customized migration strategy to ensure security, scalability, and cost-efficiency.",
  },
  {
    title: "Application Re-engineering",
    description:
      "Modernize your legacy applications with AI-Pixel's application re-engineering services. We enhance and transform your existing software to improve performance, usability, and maintainability.",
  },
];

export default function EngineeringServices() {
  return (
    <div className="w-full bg-gradient-to-r from-[#647A82] to-[#00BFA6] py-16">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Engineering Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
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
