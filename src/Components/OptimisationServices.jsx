import React from "react";

const services = [
  {
    title: "Software Audit",
    description:
      "At AI-Pixal, we conduct thorough software audits to identify potential issues and ensure compliance with industry standards. Our expert team provides detailed analysis and actionable insights to enhance your software's performance, security, and reliability.",
  },
  {
    title: "Support",
    description:
      "AI-Pixal offers comprehensive support services to ensure the smooth operation and maintenance of your software systems. Our dedicated support team is available to address any technical issues, perform updates, and provide ongoing assistance.",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure your software meets the highest standards of quality and reliability with AI-Pixal's rigorous quality assurance services. Our team implements advanced testing processes to detect and rectify any issues before deployment.",
  },
];

export default function OptimisationServices() {
  return (
    <div className="w-full bg-[#070508] py-16 lg:py-24 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#61CE70] uppercase tracking-widest">
            Optimisation
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">
            Optimisation Services
          </h2>
          <p className="text-[#8791AD] mt-3 max-w-xl mx-auto">
            Continuous improvement, support, and quality assurance for all your software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glow-card-green rounded-2xl p-7 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-2xl font-bold text-[#61CE70]/60 group-hover:text-[#61CE70] transition-colors duration-300 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#2D2B3B] group-hover:bg-[#61CE70]/30 transition-colors duration-300" />
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
