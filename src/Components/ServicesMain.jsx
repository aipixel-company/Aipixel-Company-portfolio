import React from "react";
import servicesbackground from "../assets/servicesbackground.jpg";
// import awardsImage from "../assets/awards.png";  
function ServicesMain() {
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${servicesbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gray-900 opacity-70" />
      <div className="relative z-10 flex items-center justify-between h-full px-8">
        <div className="flex flex-col text-left space-y-4">
          <h1 className="text-white text-4xl">AI-PIXEL Services</h1>
          <h3 className=" text-gray-500 font-normal max-w-2xl">
            Ai-Pixel provides expert software engineering and consultancy services to
            global enterprises, SMEs, and technology challengers. Since 2021, we
            have been helping businesses in multiple industries design, develop
            and deliver products and services faster and more cost-effectively.
          </h3>
        </div>
        <div className="w-1/3 flex justify-end">
          {/* <img src={awardsImage} alt="Awards" className="w-full h-auto object-contain" /> */}
        </div>
      </div>
    </div>
  );
}

export default ServicesMain;
