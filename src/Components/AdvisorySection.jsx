import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const services = [
  {
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
  },
  {
    title: "Responsiveness",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3BvbnNpdmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://plus.unsplash.com/premium_photo-1661678060948-b8d1d293889a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VvfGVufDB8fDB8fHww",
  },
  {
    title: "IT Consulting Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGl0JTIwY29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://t4.ftcdn.net/jpg/02/34/09/25/240_F_234092554_wF3dTfJtJHS8AIkJ8ouIdLiDHgL3iodU.jpg",
  },
  {
    title: "Technical Feasibility Study",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
];

export default function AdvisorySection() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold flex justify-center font-serif pt-5">
        Advisory Services
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-2 p-[4rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-3 h-[16.5rem] rounded-lg bg-gray-100 my-4 hover:shadow-teal-100 hover:shadow-xl hover:cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="flex flex-col items-center text-center bg-white bg-opacity-80 p-4 rounded-md">
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
