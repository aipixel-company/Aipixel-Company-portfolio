import React from "react";

const deliverables = [
  "End-to-end product development from concept to deployment",
  "AI-powered automation that reduces manual effort by 60%+",
  "Scalable architecture that grows with your business",
  "Dedicated team of senior engineers and designers",
  "Full documentation and knowledge transfer so your team stays empowered",
  "Ongoing maintenance, monitoring, and 24/7 support",
];

export default function DeliverablesSection() {
  return (
    <section className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left — checklist */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
              🚀 AIPixal Deliverables
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-10">
              What you get with{" "}
              <span className="gradient-text-accent">AIPixal</span>
            </h2>

            <ul className="space-y-5">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#3567FF] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[#8791AD] text-base leading-relaxed group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — decorative glow card */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-4 bg-[#3567FF]/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative glow-card rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3567FF]/15 border border-[#3567FF]/30 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Result-Driven</h3>
                    <p className="text-[#8791AD] text-sm">Every project built to deliver ROI</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61CE70]/15 border border-[#61CE70]/30 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Fast Delivery</h3>
                    <p className="text-[#8791AD] text-sm">Agile sprints with bi-weekly demos</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3567FF]/15 border border-[#3567FF]/30 flex items-center justify-center text-2xl">
                    🔒
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Enterprise Security</h3>
                    <p className="text-[#8791AD] text-sm">SOC2 ready, GDPR compliant</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#61CE70]/15 border border-[#61CE70]/30 flex items-center justify-center text-2xl">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Global Reach</h3>
                    <p className="text-[#8791AD] text-sm">Serving 8+ countries worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
