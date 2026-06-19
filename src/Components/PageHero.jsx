import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable page-level hero banner matching DevZiv's consistent section headers.
 * Props: badge, title, highlight (gradient-text portion), subtitle, ctaText, ctaLink, secondaryText, secondaryLink, accentColor ("blue"|"green")
 */
export default function PageHero({
  badge = "Page",
  title = "Page Title",
  highlight = "",
  subtitle = "",
  ctaText = "",
  ctaLink = "/contact-us",
  secondaryText = "",
  secondaryLink = "",
  accentColor = "blue", // "blue" | "green"
}) {
  const badgeClasses =
    accentColor === "green"
      ? "text-[#61CE70] border-[#61CE70]/30 bg-[#61CE70]/10"
      : "text-[#3567FF] border-[#3567FF]/30 bg-[#3567FF]/10";

  return (
    <section className="relative bg-[#070508] pt-32 pb-20 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            accentColor === "green"
              ? "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(97,206,112,0.10), transparent 70%)"
              : "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(53,103,255,0.12), transparent 70%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Bottom border fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D2B3B] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className={`inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border ${badgeClasses}`}>
          {badge}
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
          {highlight ? (
            <>
              {title}{" "}
              <span className="gradient-text-accent">{highlight}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl text-[#8791AD] max-w-2xl mx-auto leading-relaxed mb-10">
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(ctaText || secondaryText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (
              <Link
                to={ctaLink}
                className="btn-premium-blue px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                {ctaText}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            )}
            {secondaryText && (
              <Link
                to={secondaryLink}
                className="px-8 py-3.5 rounded-full text-sm font-semibold border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20 transition-all duration-200 inline-flex items-center justify-center"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
