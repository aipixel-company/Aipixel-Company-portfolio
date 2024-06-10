import React from "react";

const services = [
  {
    title: "Software Audit",
    description:
      "Conduct a thorough analysis of your software to identify potential issues and ensure compliance with industry standards.",
  },
  {
    title: "Support",
    description:
      "Provide comprehensive support services to ensure smooth operation and maintenance of your software systems.",
  },
  {
    title: "Quality Assurance",
    description:
      "Implement rigorous testing processes to ensure your software meets the highest standards of quality and reliability.",
  },
];

export default function OptimisationServices() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold ml-10 px-3 mt-5">
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
            <div className="flex flex-col items-center text-center  bg-opacity-80 p-4 rounded-md">
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
