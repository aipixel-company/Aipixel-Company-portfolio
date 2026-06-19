import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const problems = [
  {
    title: "Build your perfect development team",
    description:
      "We assemble elite squads of specialists — developers, designers, and product managers — tailored precisely to your project needs, culture, and timeline. No overhead, no agency bloat.",
  },
  {
    title: "Adopt digital transformations",
    description:
      "From legacy modernization to cloud-native architectures, we guide your business through every phase of digital transformation with a clear roadmap and measurable outcomes.",
  },
  {
    title: "Unify your enterprise's digital ecosystem",
    description:
      "Seamlessly integrate disparate systems, data streams, and workflows into a cohesive digital ecosystem that enhances operational efficiency and delivers real-time insights.",
  },
];

export default function SolutionsSection() {
  return (
    <div className="w-full bg-[#070508] border-t border-[#2D2B3B]/30">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
            Solutions
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">
            Problems We'll Help You Solve
          </h2>
          <p className="text-[#8791AD] mt-3 max-w-xl mx-auto">
            Real challenges. Practical solutions. Proven outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="glow-card rounded-2xl p-7 group">
              <div className="flex items-center gap-3 mb-4">
                <GoDotFill className="text-[#3567FF] flex-shrink-0 w-4 h-4" />
                <h3 className="font-semibold text-lg text-white group-hover:text-[#3567FF] transition-colors duration-300">
                  {problem.title}
                </h3>
              </div>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="py-14 px-6"
        style={{
          background: "linear-gradient(135deg, #1E1D28 0%, #0f0e18 100%)",
          borderTop: "1px solid rgba(53,103,255,0.15)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Ready to realise your{" "}
            <span className="gradient-text-accent">product vision?</span>
          </p>
          <Link
            to="/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 btn-premium-blue px-8 py-3 rounded-full text-sm font-semibold"
          >
            Partner with us <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
