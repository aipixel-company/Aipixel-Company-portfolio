import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    icon: "📅",
    title: "Monthly Retainer",
    description:
      "Best for steady capacity and ongoing product iteration. Get a dedicated team with predictable monthly costs.",
    features: [
      "Dedicated developer(s)",
      "Weekly sprint updates",
      "Flexible scope changes",
      "Priority support",
    ],
  },
  {
    icon: "✅",
    title: "Fixed Project",
    description:
      "Best for a launch, redesign, migration, or a clearly scoped product build with defined milestones.",
    features: [
      "Fixed timeline & budget",
      "Milestone-based delivery",
      "Full documentation",
      "Post-launch support",
    ],
  },
  {
    icon: "🤝",
    title: "Team Augmentation",
    description:
      "Best for companies that need a reliable extension of their existing engineering or design team.",
    features: [
      "Plug-and-play engineers",
      "Your tools & workflow",
      "Full integration with team",
      "Scale up or down anytime",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
            🛒 Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Choose the engagement model
            <br />
            that fits how you work
          </h2>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div key={i} className="glow-card rounded-2xl p-8 group flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#3567FF]/10 border border-[#3567FF]/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#3567FF] group-hover:border-[#3567FF] transition-all duration-300">
                {pkg.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3567FF] transition-colors duration-300">
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="text-[#8791AD] text-sm leading-relaxed mb-6 flex-1">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#8791AD]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#61CE70" className="w-4 h-4 flex-shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
