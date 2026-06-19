import React, { useRef, useEffect, useState } from "react";

const stats = [
  { value: "5+", label: "Years of Experience", icon: "🏆" },
  { value: "50+", label: "Projects Delivered", icon: "🚀" },
  { value: "60+", label: "Happy Clients", icon: "😊" },
  { value: "8+", label: "Countries Served", icon: "🌍" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#070508] py-8 border-y border-[#2D2B3B]/40 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(53,103,255,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1E1D28] border border-[#2D2B3B] text-2xl mb-4 group-hover:border-[#3567FF]/40 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-[#8791AD] mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
