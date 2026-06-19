import React from "react";

const cardData = [
  {
    title: "React.js",
    icon: "⚛️",
    description:
      "A popular JavaScript library for building user interfaces, React.js excels in creating reusable UI components and efficiently managing application state. Its strengths lie in performance, flexibility, and a thriving community for ongoing support.",
  },
  {
    title: "Node.js",
    icon: "🟢",
    description:
      "This runtime environment empowers developers to run JavaScript on the server-side. Built on Chrome's V8 JavaScript engine, Node.js is renowned for its non-blocking, event-driven architecture, making it ideal for building scalable network applications and APIs.",
  },
  {
    title: "DevOps",
    icon: "⚙️",
    description:
      "AI Pixal embraces DevOps practices to bridge the gap between development and operations. This approach utilizes continuous integration, continuous delivery, infrastructure as code, and monitoring to shorten the development lifecycle and automate processes.",
  },
  {
    title: "No-Code Platforms",
    icon: "🧩",
    description:
      "AI Pixal leverages leading no-code platforms like Bubble.io, Flutter Flow, Wix, and Webflow, empowering businesses to create functional websites and applications without extensive coding knowledge.",
  },
  {
    title: "Angular",
    icon: "🔺",
    description:
      "Developed and maintained by Google, Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It provides a comprehensive solution with two-way data binding, dependency injection, and a modular architecture.",
  },
  {
    title: "Flutter",
    icon: "💙",
    description:
      "Google's UI toolkit, Flutter, allows developers to create natively compiled applications for mobile, web, and desktop using a single codebase. This translates to efficient development and high-performance applications with visually appealing experiences across platforms.",
  },
];

export default function IndustriesCards() {
  return (
    <div className="bg-[#070508] border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest">
            Technology Stack
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 tracking-tight lg:text-4xl max-w-2xl">
            AI Pixal: Powering Innovation with Cutting-Edge Technologies
          </h2>
          <p className="mt-4 text-[#8791AD] max-w-2xl">
            AI Pixal stays at the forefront of technological advancements to deliver the most
            robust and innovative solutions for your business needs. Here's a glimpse into the
            key technologies that fuel their expertise:
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="glow-card rounded-2xl p-7 space-y-4 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#3567FF] transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
              <p className="text-[#8791AD] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
