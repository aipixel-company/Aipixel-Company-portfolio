import React from "react";

function ServicesMain() {
  return (
    <section className="relative pt-[4rem] xl:h-[70vh] h-[60vh] flex items-center overflow-hidden">
      {/* Professional Bluish Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1B3C73] via-[#2E8BC0] to-[#00BFA6]" />

      {/* Soft Aurora Glow Overlay for Depth */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.45), transparent 68%),
            radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.35), transparent 68%),
            radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.45), transparent 68%),
            radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.25), transparent 68%)
          `,
        }}
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

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
