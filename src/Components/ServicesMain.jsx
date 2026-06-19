import React from "react";

function ServicesMain() {
  return (
    <section className="relative pt-[4rem] xl:h-[70vh] h-[60vh] flex items-center overflow-hidden bg-[#070508]">
      {/* Deep space radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 80% 20%, rgba(53,103,255,0.18), transparent 65%),
            radial-gradient(ellipse 60% 50% at 15% 75%, rgba(97,206,112,0.10), transparent 65%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(53,103,255,0.06), transparent 65%)
          `,
        }}
      />

      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #3567FF 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 lg:px-20">
        {/* Pre-heading badge */}
        <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
          Our Services
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl">
          Powering the Future with{" "}
          <span className="gradient-text-accent">AI & Innovation</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#8791AD] max-w-3xl leading-relaxed">
          At{" "}
          <span className="font-semibold text-white">AI-PIXAL</span>, we design
          next-gen digital products with intelligent automation, scalable
          technology, and human-centered design — helping your business thrive
          in the AI era.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#engineering"
            className="btn-premium-blue px-8 py-3 rounded-full text-sm font-semibold"
          >
            Explore Services
          </a>
          <a
            href="/contact-us"
            className="px-8 py-3 rounded-full text-sm font-semibold border border-white/10 text-[#8791AD] hover:text-white hover:border-white/25 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesMain;
