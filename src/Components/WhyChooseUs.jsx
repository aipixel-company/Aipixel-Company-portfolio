import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Proven Track Record",
    description: "50+ successful projects delivered across 8+ countries with a 98% client satisfaction rate.",
    icon: "🏆",
  },
  {
    title: "Cutting-Edge Tech Stack",
    description: "We leverage the latest technologies — React, AI/ML, Cloud platforms, and modern DevOps practices.",
    icon: "⚡",
  },
  {
    title: "Agile & Transparent",
    description: "Weekly sprints, real-time progress updates, and full transparency throughout the development lifecycle.",
    icon: "🔄",
  },
  {
    title: "End-to-End Delivery",
    description: "From concept and design to development, deployment, and ongoing support — we handle everything.",
    icon: "🚀",
  },
  {
    title: "Dedicated Teams",
    description: "Your project gets a dedicated team of senior engineers, designers, and project managers.",
    icon: "👥",
  },
  {
    title: "Global Reach",
    description: "Headquartered in Pakistan with active clients across UAE, Oman, UK, Saudi Arabia, and Malaysia.",
    icon: "🌍",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left sticky text column */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#61CE70] border border-[#61CE70]/30 bg-[#61CE70]/10">
              Why AI Pixal
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              We Build More Than{" "}
              <span className="gradient-text-accent">Software</span>
            </h2>
            <p className="text-[#8791AD] text-lg leading-relaxed mb-8">
              We partner with businesses to architect intelligent digital solutions — combining engineering
              excellence with strategic thinking to deliver outcomes that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="btn-premium-blue px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                to="/aboutus"
                className="px-7 py-3 rounded-full text-sm font-semibold border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20 transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>

            {/* Mini trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["ISO Certified", "GDPR Compliant", "Agile Team"].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#8791AD] border border-[#2D2B3B] bg-[#1E1D28]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#61CE70" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right feature grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="glow-card rounded-2xl p-6 group flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E1D28] border border-[#2D2B3B] flex items-center justify-center text-xl group-hover:border-[#3567FF]/40 transition-all duration-300">
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
      </div>
    </section>
  );
}
