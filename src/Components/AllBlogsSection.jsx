import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog from "../assets/blog.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const categories = ["All", "AI & Technology", "Blockchain", "Cybersecurity", "Infrastructure", "Sustainability"];

const cardsData = [
  {
    id: 1,
    imgSrc: blog2,
    category: "AI & Technology",
    date: "Sep 20, 2025",
    readTime: "5 min read",
    title: "The Rise of Generative AI in Everyday Applications",
    description:
      "Go beyond chat. Generative AI is now creating art, music, and code — a massive shift enabling unprecedented content creation across all industries.",
  },
  {
    id: 2,
    imgSrc: blog1,
    category: "Blockchain",
    date: "Oct 1, 2025",
    readTime: "6 min read",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    description:
      "Explore the transformative power of blockchain in supply chain transparency, secure healthcare records, and next-gen financial architecture.",
  },
  {
    id: 3,
    imgSrc: blog,
    category: "Cybersecurity",
    date: "Oct 1, 2025",
    readTime: "7 min read",
    title: "Cybersecurity in the Age of AI: Challenges and Solutions",
    description:
      "Learn how AI is simultaneously arming defenders with predictive analysis and empowering attackers with sophisticated automation.",
  },
  {
    id: 4,
    imgSrc: blog3,
    category: "Infrastructure",
    date: "Oct 5, 2025",
    readTime: "5 min read",
    title: "Edge Computing: Powering the Next Wave of IoT",
    description:
      "Edge computing brings processing right to the device, delivering instant insights and ultra-low latency for industrial IoT applications.",
  },
  {
    id: 5,
    imgSrc: blog4,
    category: "Sustainability",
    date: "Oct 10, 2025",
    readTime: "4 min read",
    title: "Sustainable Tech: Green Cloud and Eco-Friendly Computing",
    description:
      "Discover the principles of Green Cloud, energy-efficient data centers, and eco-friendly hardware driving the industry toward net-zero.",
  },
];

export default function AllBlogsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? cardsData
      : cardsData.filter((b) => b.category === activeCategory);

  return (
    <div id="blogs" className="py-16 lg:py-24 bg-[#070508] border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                  ? "bg-[#3567FF] text-white border-[#3567FF]"
                  : "border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((card) => (
            <Link
              key={card.id}
              to={`/blog/${card.id}`}
              className="group glow-card rounded-2xl overflow-hidden flex flex-col no-underline"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D28] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3567FF] text-white text-xs font-semibold tracking-wide">
                  {card.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs text-[#8791AD]">
                  <span>{card.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8791AD]" />
                  <span>{card.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#3567FF] transition-colors duration-300 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-[#8791AD] text-sm leading-relaxed line-clamp-3 flex-1">
                  {card.description}
                </p>
                <div className="flex items-center gap-2 text-[#3567FF] text-sm font-semibold mt-2 group-hover:gap-3 transition-all duration-300">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#8791AD]">
            No posts found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}