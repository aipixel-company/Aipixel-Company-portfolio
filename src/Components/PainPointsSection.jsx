import React from "react";

const painPoints = [
  {
    icon: "📉",
    title: "No AI strategy means falling behind",
    description:
      "Competitors using AI automation are moving 3x faster without intelligent workflows, your team burns hours on tasks machines could handle.",
  },
  {
    icon: "🔗",
    title: "Disconnected data, zero intelligence",
    description:
      "Without ML driven insights, your data sits in silos. No predictive analytics means missed patterns and wasted opportunities.",
  },
  {
    icon: "👤",
    title: "Manual processes drain your best talent",
    description:
      "Skilled employees stuck on repetitive tasks instead of strategic work without automation, human potential is wasted at scale.",
  },
  {
    icon: "📊",
    title: "Scaling without AI breaks everything",
    description:
      "Manual operations crumble under growth. Without intelligent automation, every new customer multiplies costs instead of revenue.",
  },
  {
    icon: "🔒",
    title: "Security without AI is reactive, not proactive",
    description:
      "Traditional security can't keep up with evolving threats. Without AI powered monitoring, breaches are detected too late.",
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
            Without AI and intelligent automation, businesses leak revenue through manual bottlenecks,
            missed insights, and reactive operations that can't scale.
          </p>
        </div>

        {/* Cards grid top row 3 cards, bottom row 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`glow-card rounded-2xl p-8 group ${i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
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
