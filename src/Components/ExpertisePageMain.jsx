import React from "react";

// Data for the section
const sectionData = {
  title: "Our Expertise",
  description:
    "Our team of skilled professionals is dedicated to delivering innovative, reliable, and efficient software solutions that propel your business forward.",
  
  images: [
    "https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png",
    "https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png",
    "https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png",
  ],
};

const SectionHeader = ({ title, subtitle, description, button }) => (
  <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
    <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
      {title}
    </h1>
    <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
      {subtitle}
    </h2>
    <p className="text-sm md:text-base text-gray-50 mb-4">{description}</p>
    
  </div>
);

const SectionImages = ({ images }) => (
  <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
    <div className="h-[40vh] flex flex-wrap content-center">
      {images.map((src, index) => (
        <div
          key={index}
          className={`inline-block ${
            index % 2 === 0 ? "mt-28 xl:block" : "mt-24 md:mt-0 p-8 md:p-0"
          }`}
        >
          <img src={src} />
        </div>
      ))}
    </div>
  </div>
);

const ExpertisePageMain = () => (
  <section>
    <div className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <SectionHeader
          title={sectionData.title}
          description={sectionData.description}
          
        />
        <SectionImages images={sectionData.images} />
      </div>
    </div>
  </section>
);

export default ExpertisePageMain;
