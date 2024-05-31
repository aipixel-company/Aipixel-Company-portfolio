import React from "react";

const services = [
  {
    title: "Application Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGljYXRpb24lMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cloud Migration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://t3.ftcdn.net/jpg/07/15/61/68/240_F_715616862_Lwir3iM7oCKNo0hN4wkXUXqTRHAFstxn.jpg",
  },
  {
    title: "Application Re-engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique",
    image: "https://t4.ftcdn.net/jpg/08/12/04/85/240_F_812048545_sRrAc26harFaJCAn7hNEGJrKFijU0wM2.jpg",
  },
];

export default function EngineeringServices() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold flex justify-center font-serif pt-5 mt-5">
        Engineering Services
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
      <hr />
    </div>
  );
}
