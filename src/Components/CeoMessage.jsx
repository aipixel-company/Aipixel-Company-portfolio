import React from "react";
import ceo from "../assets/ceo.jpg";

const CeoMessage = () => {
  const ceoDetails = {
    name: "Mian Usman",
    message:
      "Welcome to AIPIXEL, where cutting-edge technology meets innovative software solutions. Our mission is to harness the power of artificial intelligence to deliver exceptional products that transform industries and improve lives. At AIPIXEL, we pride ourselves on our commitment to quality, creativity, and customer satisfaction. Our team of experts is dedicated to pushing the boundaries of what's possible, ensuring that our clients stay ahead of the curve in the rapidly evolving tech landscape. Thank you for choosing AIPIXEL as your trusted partner in software development.",
    image: ceo,
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">
      <div>
        <h1 className=" text-center font-semibold text-4xl m-3">CEO`s Message</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-2 md:flex md:items-center md:space-x-6">
        <img
          src={ceoDetails.image}
          alt={`${ceoDetails.name} Image`}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-2xl md:text-left text-center font-semibold text-gray-800">
            {ceoDetails.name}
          </h2>
          <p className="mt-2 text-gray-600 justify-center">{ceoDetails.message}</p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
