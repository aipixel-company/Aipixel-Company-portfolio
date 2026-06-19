import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Product Design",
    description:
      "AI Pixal doesn't just design products; they design experiences. Their team goes beyond aesthetics, prioritizing user-centered design principles. They leverage the latest UI/UX trends and conduct user research to create visually appealing and intuitive interfaces that resonate with your target audience.",
  },
  {
    title: "Web Development",
    description:
      "AI Pixal builds robust and secure web applications engineered for growth. They don't just focus on functionality; they prioritize performance optimization. Their developers leverage cutting-edge technologies and best practices to ensure your website loads quickly and delivers a seamless user experience across all devices.",
  },
  {
    title: "Project Management",
    description:
      "AI Pixal understands the importance of efficient project management. Their experienced project managers utilize agile methodologies and industry-leading tools to ensure your project stays on schedule, within budget, and keeps you informed throughout the entire development process.",
  },
  {
    title: "Responsive Design",
    description:
      "In today's mobile-centric world, responsiveness is no longer a luxury; it's a necessity. AI Pixal ensures your website and web applications adapt flawlessly to any screen size, be it desktops, tablets, or smartphones.",
  },
  {
    title: "SEO Optimization",
    description:
      "AI Pixal understands the power of organic search traffic. Their SEO specialists integrate proven strategies into your website development process, optimizing your content and structure to rank higher in search engine results pages for relevant keywords.",
  },
  {
    title: "IT Consulting Services",
    description:
      "Navigating the ever-evolving IT landscape can be challenging. AI Pixal's IT consulting services provide valuable insights and strategic recommendations tailored to your business goals, analyzing your current IT infrastructure and identifying areas for improvement.",
  },
  {
    title: "Software Development",
    description:
      "AI Pixal builds custom software solutions that tackle your specific business challenges. Their development team takes the time to understand your workflows and pain points, crafting software solutions that automate tasks, improve efficiency, and streamline your operations.",
  },
  {
    title: "Technical Feasibility Study",
    description:
      "AI Pixal offers technical feasibility studies to assess the viability and cost-effectiveness of your project before development begins. This in-depth analysis considers technical constraints, resource requirements, and potential challenges.",
  },
  {
    title: "Mobile App Development",
    description:
      "AI Pixal designs and develops high-quality mobile applications for both Android and iOS platforms. They understand the unique user behavior patterns associated with mobile devices and create app experiences that are intuitive, engaging, and optimized for performance.",
  },
];

export default function AdvisorySection() {
  return (
    <section className="w-full bg-[#070508]">
      {/* Section Heading */}
      <div className="text-center py-16 px-6">
        <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
          Advisory
        </span>
        <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">
          Advisory Services
        </h2>
        <p className="text-[#8791AD] max-w-2xl mx-auto mt-3">
          Discover how AI Pixal empowers businesses with cutting-edge technology, strategy, and design solutions tailored for growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16 pb-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative glow-card rounded-2xl p-7 flex flex-col group"
          >
            {/* Number badge */}
            <div className="absolute -top-4 -left-3 w-9 h-9 rounded-full bg-[#3567FF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#3567FF]/30">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>

            <div className="flex flex-col pt-2">
              <h3 className="font-semibold text-lg text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div
        className="py-14 px-6"
        style={{
          background: "linear-gradient(135deg, #1E1D28 0%, #0f0e18 100%)",
          borderTop: "1px solid rgba(53,103,255,0.15)",
          borderBottom: "1px solid rgba(53,103,255,0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-bold text-white leading-snug">
              Evolve your business with one of the world's leading{" "}
              <br className="hidden lg:block" />
              <span className="gradient-text-accent">software partners.</span>
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 btn-premium-blue px-8 py-3 rounded-full text-sm font-semibold"
            >
              Partner with us <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
