import React from "react";

const painPoints = [
  {
    icon: "📉",
    title: "Projects that stall mid-development",
    description:
      "Without clear architecture, scope creep and missed deadlines drain your budget and momentum.",
  },
  {
    icon: "🔗",
    title: "Disconnected tech and business goals",
    description:
      "Technology built without strategy creates tools nobody uses and investments that don't compound.",
  },
  {
    icon: "👤",
    title: "Talent gaps that slow everything down",
    description:
      "Hiring and retaining senior engineers is expensive — and a single knowledge gap can block an entire roadmap.",
  },
  {
    icon: "📊",
    title: "Scaling breaks what already works",
    description:
      "Without proper foundations, every new feature introduces bugs, inconsistency, and technical debt.",
  },
  {
    icon: "🔒",
    title: "Security treated as an afterthought",
    description:
      "Vulnerabilities discovered late in the cycle are 10x more expensive to fix and put trust at risk.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
            ⚙️ Common Challenges
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            When technology is weak,
            <br />
            the business pays for it
          </h2>
          <p className="text-[#8791AD] mt-4 max-w-2xl mx-auto text-lg">
            Products don't fail because they're ugly. They fail because they create confusion,
            slow launches, and leak opportunities.
          </p>
        </div>

        {/* Cards grid — top row 3 cards, bottom row 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`glow-card rounded-2xl p-8 group ${
                i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1E1D28] border border-[#2D2B3B] flex items-center justify-center text-2xl mb-5 group-hover:border-[#3567FF]/40 transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3567FF] transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
