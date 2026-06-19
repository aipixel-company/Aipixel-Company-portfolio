import React from "react";
import { Link } from "react-router-dom";

export default function CTABanner({
  title = "Ready to Build Something Amazing?",
  subtitle = "Let's turn your ideas into reality. Partner with AI Pixal and accelerate your digital transformation.",
  primaryText = "Start a Project",
  primaryLink = "/contact-us",
  secondaryText = "View Our Work",
  secondaryLink = "/clients",
}) {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden border-t border-[#2D2B3B]/30 bg-[#070508]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(53,103,255,0.10), transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
          Get Started Today
        </span>

        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {title}
        </h2>

        <p className="text-[#8791AD] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryLink}
            className="btn-premium-blue px-9 py-4 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-[#3567FF]/25 hover:shadow-[#3567FF]/40"
          >
            {primaryText}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            to={secondaryLink}
            className="px-9 py-4 rounded-full text-sm font-semibold border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20 transition-all duration-200 inline-flex items-center justify-center"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
