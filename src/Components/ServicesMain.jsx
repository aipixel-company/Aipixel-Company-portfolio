import React from "react";

function ServicesMain() {
  return (
    <section className="relative xl:h-[70vh] h-[60vh] bg-gradient-to-r from-[#647A82] to-[#00BFA6] flex items-center">
      {/* Overlay (optional subtle dark layer for readability) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Powering the Future with{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            AI & Innovation
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl">
          At <span className="font-semibold text-yellow-300">AI-PIXEL</span>, we
          design next-gen digital products with intelligent automation,
          scalable technology, and human-centered design — helping your business
          thrive in the AI era.
        </p>
      </div>
    </section>
  );
}

export default ServicesMain;
