import React from "react";

const oldWay = [
  "Generic solutions that don't fit your business model",
  "One developer juggling multiple codebases",
  "Communication gaps and missed deadlines",
  "Security and scalability treated as extras",
  "No documentation, knowledge locked in one person",
  "Maintenance costs that grow unpredictably",
];

const ourWay = [
  "Custom architecture designed for your exact requirements",
  "Dedicated cross-functional teams with domain expertise",
  "Agile sprints with transparent reporting and weekly demos",
  "Security-first approach with built-in compliance",
  "Full documentation and hands-on knowledge transfer",
  "Predictable costs with fixed-scope or retainer models",
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#61CE70] border border-[#61CE70]/30 bg-[#61CE70]/10">
            ✅ Better Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Old way vs{" "}
            <span className="gradient-text-accent">AIPixal way</span>
          </h2>
          <p className="text-[#8791AD] mt-4 max-w-2xl mx-auto text-lg">
            Setting a new standard for digital product development.
          </p>
        </div>

        {/* Comparison layout */}
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* VS badge (center) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-14 h-14 rounded-xl bg-[#070508] border-2 border-[#2D2B3B] flex items-center justify-center text-white font-bold text-sm shadow-xl">
              VS
            </div>
          </div>

          {/* The old way */}
          <div className="flex-1 glow-card rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-8">The old way</h3>
            <ul className="space-y-5">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-red-400 text-lg">✕</span>
                  <span className="text-[#8791AD] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS badge (mobile) */}
          <div className="flex lg:hidden justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#070508] border-2 border-[#2D2B3B] flex items-center justify-center text-white font-bold text-sm">
              VS
            </div>
          </div>

          {/* The AIPixal way */}
          <div className="flex-1 rounded-2xl p-8 lg:p-10 bg-[#3567FF] relative overflow-hidden">
            {/* Subtle radial glow inside blue card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">
                The AIPixal way
              </h3>
              <ul className="space-y-5">
                {ourWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#61CE70" className="w-5 h-5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
