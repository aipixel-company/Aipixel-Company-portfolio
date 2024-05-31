import React from "react";

const services = [
  {
    title: "Software Audit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdyZSUyMGF1ZGl0fGVufDB8fDB8fHww",
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBzdXBwb3J0fGVufDB8fDB8fHww",
  },
  {
    title: "Quality Assurance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://t4.ftcdn.net/jpg/04/79/74/25/240_F_479742590_Fg7zvckN4TYTQqbAiM1mkZdBgBt6VMFg.jpg",
  },
];

export default function OptimisationServices() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold ml-10 font-serif pt-5 mt-5">
        Optimisation
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-6 p-[4rem]">
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
