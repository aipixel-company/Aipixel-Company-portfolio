import React from "react";

const services = [
  {
    title: "Application Development",
    description:
      "At AI-Pixal, we specialize in building robust and scalable applications tailored to your unique business needs. Leverage our expertise in cutting-edge technologies to create applications that drive efficiency, engagement, and growth.",
  },
  {
    title: "Cloud Migration",
    description:
      "AI-Pixal offers seamless cloud migration services to help you transition your applications and data with minimal downtime. Our cloud experts design a customized migration strategy to ensure security, scalability, and cost-efficiency.",
  },
  {
    title: "Application Re-engineering",
    description:
      "Modernize your legacy applications with AI-Pixal's application re-engineering services. We enhance and transform your existing software to improve performance, usability, and maintainability.",
  },
];

export default function EngineeringServices() {
  return (
    <div className="w-full bg-[#070508] py-16 lg:py-24 border-t border-[#2D2B3B]/30" id="engineering">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
            Engineering
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">
            Engineering Services
          </h2>
          <p className="text-[#8791AD] mt-3 max-w-xl mx-auto">
            Robust, scalable engineering solutions built to power your digital ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glow-card rounded-2xl p-7 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-2xl font-bold text-[#3567FF]/60 group-hover:text-[#3567FF] transition-colors duration-300 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#2D2B3B] group-hover:bg-[#3567FF]/30 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
