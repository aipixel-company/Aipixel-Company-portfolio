import React from "react";
import { Link } from "react-router-dom";

/* ───────────────────────────────────────────────
   Services data AI / Automation are items 1-3
   ─────────────────────────────────────────────── */
const services = [
  // ─── TOP 3: AI & AUTOMATION (featured) ───
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Intelligent automation, predictive analytics, and AI driven products that transform your business operations.",
    link: "/services/ai-machine-learning",
    featured: true,
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "We deliver AI driven solutions that automate workflows, personalize customer journeys, and help businesses solve complex challenges.",
    link: "/services/ai-solutions",
    featured: true,
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "End to end process automation powered by AI from intelligent document processing and RPA to smart workflow orchestration that eliminates manual bottlenecks.",
    link: "/services/automation",
    featured: true,
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Secure, scalable cloud infrastructure with CI/CD pipelines, containerization, and 24/7 monitoring.",
    link: "/services/cloud-devops",
    featured: true,
  },
  // ─── REMAINING SERVICES (standard) ───
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks React, Next.js, Node.js and beyond.",
    link: "/services/web-development",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
    link: "/services/mobile-app-development",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Human centered design that balances beauty and usability wireframes, prototypes, and pixel perfect interfaces.",
    link: "/services/ui-ux-design",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "End to end security audits, penetration testing, and compliance solutions to protect your digital assets.",
    link: "/services/cybersecurity",
  },
  {
    icon: "⛓️",
    title: "Blockchain",
    description:
      "Secure and transparent blockchain-based applications that enhance trust and empower decentralized technologies.",
    link: "/services/blockchain",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description:
      "Rigorous testing processes that eliminate bugs, guarantee optimal stability, and ensure flawless performance.",
    link: "/services/quality-assurance",
  },
  {
    icon: "💰",
    title: "FinTech",
    description:
      "Innovative financial solutions empowering businesses with secure, modern, and compliant technologies.",
    link: "/services/fintech",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="bg-[#070508] py-10 lg:py-14 border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="text-[#8791AD] mt-4 max-w-2xl mx-auto text-lg">
            From strategy to deployment we deliver end to end digital solutions that drive real business growth.
          </p>
        </div>

        {/* Service Cards Grid 1 col → 2 col → 3 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className={`group rounded-2xl p-8 flex flex-col gap-4 cursor-pointer no-underline relative overflow-hidden transition-all duration-300
                ${service.featured
                  ? "glow-card border-l-4 border-l-[#3567FF]"
                  : "glow-card"
                }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#3567FF]/15 text-[#3567FF] border border-[#3567FF]/25">
                  Featured
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300
                  ${service.featured
                    ? "bg-[#3567FF]/20 border border-[#3567FF]/30 group-hover:bg-[#3567FF] group-hover:border-[#3567FF]"
                    : "bg-[#3567FF]/10 border border-[#3567FF]/20 group-hover:bg-[#3567FF] group-hover:border-[#3567FF]"
                  }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#3567FF] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#8791AD] text-sm leading-relaxed flex-1 group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-2 text-[#3567FF] text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-2">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 btn-premium-blue px-8 py-3.5 rounded-full text-sm font-semibold"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
