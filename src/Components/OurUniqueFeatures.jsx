import React from "react";

const features = [
  {
    icon: "⚡",
    title: "Engineering with Passion",
    description:
      "We blend innovation and dedication to create AI-driven software solutions that transform ideas into reality. Our passionate team of engineers is committed to pushing boundaries and delivering excellence in every project.",
  },
  {
    icon: "🎯",
    title: "Performance Focus",
    description:
      "We prioritize performance in every aspect of our AI-driven solutions. Our advanced technologies are designed to optimize efficiency, enhance user experience, and deliver exceptional results that drive competitive advantage.",
  },
  {
    icon: "🏆",
    title: "Dedication to Success",
    description:
      "Your success is our mission. We are dedicated to providing innovative AI-driven solutions that drive business growth and deliver outstanding results — with an unwavering commitment to your goals.",
  },
  {
    icon: "🔒",
    title: "Security & Trust",
    description:
      "Every system we build is architected with security at its core. ISO-27001 certified processes, GDPR compliance, and rigorous security audits ensure your data and users are always protected.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    description:
      "Serving clients across 8+ countries, we bring a global perspective to local challenges. Our cross-cultural team understands diverse markets and builds solutions that scale internationally.",
  },
  {
    icon: "🔄",
    title: "Agile & Adaptive",
    description:
      "We follow agile methodologies with transparent communication and iterative development cycles. Weekly sprints, daily stand-ups, and real-time reporting keep you in full control of your project.",
  },
];

export default function OurUniqueFeatures() {
  return (
    <section className="bg-[#070508] py-20 lg:py-28 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#61CE70] border border-[#61CE70]/30 bg-[#61CE70]/10">
            Our Values
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What's <span className="gradient-text-accent">Different</span> About AI-PIXAL?
          </h2>
          <p className="text-[#8791AD] mt-4 max-w-2xl mx-auto text-lg">
            We combine technical mastery with a passion for innovation to build solutions that truly move the needle.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glow-card rounded-2xl p-7 group flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3567FF]/10 border border-[#3567FF]/20 flex items-center justify-center text-2xl group-hover:bg-[#3567FF] group-hover:border-[#3567FF] transition-all duration-300 flex-shrink-0">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg group-hover:text-[#3567FF] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
