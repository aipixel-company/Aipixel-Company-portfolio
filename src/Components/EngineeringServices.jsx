import React from "react";

const services = [
  {
    title: "Application Development",
    description:
      "Build robust and scalable applications tailored to your business needs.",
  },
  {
    title: "Cloud Migration",
    description:
      "Seamlessly transition your applications and data to the cloud with minimal downtime.",
  },
  {
    title: "Application Re-engineering",
    description:
      "Modernize and enhance your existing applications for improved performance and usability.",
  },
];

export default function EngineeringServices() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold flex   px-3 mt-5">
        Engineering Services
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
            <div className="flex flex-col items-center text-center bg-opacity-80 p-4 rounded-md">
              <h1 className="font-body font-medium text-lg mb-2">
                {service.title}
              </h1>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
