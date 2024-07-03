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
    <div className="w-full">
      <h1 className="text-4xl font-semibold flex sm:ml-5 px-4 mt-5">
        Engineering Services
      </h1>
      <div className="grid grid-cols-3 cards gap-3 p-[2rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-2 sm:p-3 h-auto rounded-lg bg-gray-100 my-4 xl:hover:shadow-teal-100 xl:hover:shadow-xl hover:cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
           >
             <div className="sm:absolute sm:top-0 sm:left-0  text-blue-800 rounded-full h-7 w-7 sm:p-7 flex items-center justify-center font-semibold">
              0{index + 1}
            </div>
            <div className="flex flex-col items-center bg-opacity-80 p-4 rounded-md">
              <h1 className="font-body font-medium text-lg mb-2">
                {service.title}
              </h1>
              <p className="mt-4 text-gray-600 text-sm hidden sm:block">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
