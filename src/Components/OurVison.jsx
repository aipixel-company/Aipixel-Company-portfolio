import React from "react";
import ourvision from "../assets/ourvision.jpg";

const OurVision = () => {
  

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-12 items-center">
        
        {/* Left Content */}
        <div className="w-full flex items-center justify-center flex-col lg:items-start lg:w-2/5">
          <div className="block text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Our <span className="text-indigo-600">Vision</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-lg:max-w-xl max-lg:mx-auto">
              At <span className="font-semibold text-indigo-600">AI-PIXEL</span>, 
              we envision a future where businesses harness the full power of 
              Artificial Intelligence to innovate fearlessly and scale effortlessly.  
              We don’t just deliver software — we build <em>impactful solutions</em> 
              that transform challenges into opportunities.  
              <br /> <br />
              By aligning innovation with customer success, we empower 
              organizations to embrace next-gen technologies with confidence, 
              agility, and measurable growth.
            </p>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-3/5 sm:py-3 rounded-lg">
          <div className="max-w-xl mx-auto">
            <img
              src={ourvision}
              alt="Our Vision"
              className="rounded-2xl w-full mb-6 h-[22rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
