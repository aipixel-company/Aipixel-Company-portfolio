import React from "react";
import { Link } from "react-router-dom";

/* ───────────────────────────────────────────────
   Exactly the two AI-focused articles requested
   ─────────────────────────────────────────────── */
const aiArticles = [
  {
    id: 1,
    category: "AI & Technology",
    date: "September 20, 2025",
    title: "The Rise of Generative AI in Everyday Applications",
    description:
      "Generative AI is rapidly transforming industries by enabling machines to create content, from text and images to code and music. Discover how businesses are leveraging this technology to streamline operations and unlock new creative possibilities.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Cybersecurity",
    date: "October 1, 2025",
    title: "Cybersecurity in the Age of AI: Challenges and Solutions",
    description:
      "AI is becoming a double-edged sword in cybersecurity — helping both defenders and attackers. Explore the latest defense strategies and learn how intelligent systems are reshaping the security landscape.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    readTime: "7 min read",
  },
];

export default function AIInsightsSection() {
  return (
    <section
      id="ai-insights"
      className="py-10 lg:py-14 bg-[#070508] border-t border-[#2D2B3B]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
              <span className="w-2 h-2 bg-[#61CE70] rounded-full animate-pulse"></span>
              AI-Focused Insights
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Intelligence{" "}
              <span className="gradient-text-accent">Unlocked</span>
            </h2>
            <p className="text-[#8791AD] mt-3 max-w-lg">
              Deep dives into the AI-driven trends shaping technology,
              security, and the future of business.
            </p>
          </div>

          <Link
            to="/blogs"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-200 no-underline"
          >
            View all insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Two-article grid — 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group glow-card rounded-2xl overflow-hidden flex flex-col no-underline"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D28] to-transparent opacity-60" />

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3567FF] text-white text-xs font-semibold tracking-wide">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs text-[#8791AD]">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8791AD]" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-white font-bold text-xl leading-snug group-hover:text-[#3567FF] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-[#8791AD] text-sm leading-relaxed flex-1">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 text-[#3567FF] text-sm font-semibold mt-2 group-hover:gap-3 transition-all duration-300">
                  Read article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
