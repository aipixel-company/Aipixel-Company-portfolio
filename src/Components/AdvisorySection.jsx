import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const services = [
  {
    title: "Product Design",
    description:
      "Create visually appealing and user-friendly designs that enhance user experience and engagement.",
  },
  {
    title: "Web Development",
    description:
      "Develop robust and scalable web applications tailored to your business needs.",
  },
  {
    title: "Project Management",
    description:
      "Efficiently plan, execute, and finalize projects to meet your goals and deadlines.",
  },
  {
    title: "Responsiveness",
    description:
      "Ensure your web applications are fully responsive and provide a seamless experience across all devices.",
  },
  {
    title: "SEO",
    description:
      "Optimize your website to rank higher in search engine results and attract more organic traffic.",
  },
  {
    title: "IT Consulting Services",
    description:
      "Provide expert advice on IT strategies, solutions, and best practices to drive business success.",
  },
  {
    title: "Software Development",
    description:
      "Build custom software solutions to streamline your business processes and improve efficiency.",
  },
  {
    title: "Technical Feasibility Study",
    description:
      "Analyze the technical aspects of your project to ensure it is viable and cost-effective.",
  },
  {
    title: "Mobile App Development",
    description:
      "Design and develop high-quality mobile applications for both Android and iOS platforms.",
  },
];

export default function AdvisorySection() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold ml-5 px-3 mt-5">
        Advisory Services
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-2 p-[4rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-3 h-[16.5rem] rounded-lg bg-gray-100 my-4 hover:shadow-teal-100 hover:shadow-xl hover:cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
          >
            <div className="absolute top-0 left-0  text-blue-800 rounded-full h-7 w-7 p-7 flex items-center justify-center font-semibold">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-md">
              <h1 className="font-body font-medium text-lg mb-2">
                {service.title}
              </h1>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-gray-700 to-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-white text-center lg:text-left">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="w-1 text-5xl text-blue-500  mr-4">|</div>
              <p className="text-xl">
                Evolve your business with one of the world’s leading <br /> software
                partners.
              </p>
            </div>
            <div className="  m-auto">
              <a
                href="/contact-us"
                className="text-xl text-white inline-flex items-center"
              >
                Partner with us <FaAngleRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
