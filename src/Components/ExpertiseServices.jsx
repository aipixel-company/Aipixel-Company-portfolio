import React, { useState } from "react";
import expertiseservices from "../assets/expertiseservices.jpg";

const expertise = [
  {
    question: "DevOps",
    answer:
      "AI Pixal bridges the gap between development and operations, utilizing continuous integration/delivery (CI/CD) and infrastructure as code (IaC) practices to streamline development lifecycles, ensure consistent quality, and automate deployments. This harmonious approach minimizes disruptions and delivers software faster.",
  },
  {
    question: "VR/AR/MR",
    answer:
      "AI Pixal isn't confined to the physical plane. They leverage the immersive power of virtual reality (VR), augmented reality (AR), and mixed reality (MR) to create next-generation experiences. Imagine training employees in a virtual environment or showcasing products in an interactive AR setting. AI Pixal brings these possibilities to life.",
  },
  {
    question: "Market Research",
    answer:
      "They act as your digital compass, conducting market research to understand your target audience, competitor landscape, and industry trends. This intelligence empowers you to make data-driven decisions and develop products that resonate with your market.",
  },
  {
    question: "Digital Enterprise Solutions",
    answer:
      "AI Pixal understands the modern digital enterprise. They offer a comprehensive suite of solutions to streamline internal processes, enhance collaboration, and foster a data-driven culture.  This empowers your organization to operate more efficiently and achieve its full potential.",
  },
  {
    question: "Human-Centered Interface (HCI) Design",
    answer:
      "AI Pixal goes beyond aesthetics with a focus on Human-Centered Interface (HCI) design. They prioritize usability, accessibility, and user psychology to create interfaces that are intuitive, engaging, and cater to a diverse range of users. This translates to increased user adoption and satisfaction.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="py-5">
      <div
        className="flex justify-between items-center font-medium cursor-pointer list-none"
        onClick={onClick}
      >
        <span>{question}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            fill="none"
            height="24"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
      {isOpen && <p className="text-gray-800 mt-3 font-normal text-sm animate-fadeIn">{answer}</p>}
    </div>
  );
}

export default function ExpertiseServices() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <div className="bg-[#070508] py-16 lg:py-24 border-t border-[#2D2B3B]/30">
  <div className="text-center mb-12">
    <h2 className="font-bold text-4xl text-white tracking-tight">Our Expertise</h2>
    <p className="text-[#8791AD] mt-3">
      We work with advanced technologies covering a broad spectrum of specialisms.
    </p>
  </div>
  <div className="flex flex-col lg:flex-row px-6 max-w-7xl mx-auto gap-10 items-center">
    {/* Accordion */}
    <div className="w-full lg:w-1/2 bg-[#1E1D28] rounded-2xl border border-[#2D2B3B] shadow-xl p-8">
      {expertise.map((item, index) => (
        <div key={index} className="border-b border-[#2D2B3B]/60 last:border-b-0 py-4">
          <button
            onClick={() => handleClick(index)}
            className="flex justify-between items-center w-full text-left group py-2"
          >
            <span className={`text-lg font-semibold transition-colors duration-200 ${
              openIndex === index ? "text-[#3567FF]" : "text-white group-hover:text-[#3567FF]"
            }`}>
              {item.question}
            </span>
            <span className={`text-xl font-medium transition-colors duration-200 ${
              openIndex === index ? "text-[#3567FF]" : "text-[#8791AD]"
            }`}>
              {openIndex === index ? "–" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <p className="text-sm text-[#8791AD] mt-2 leading-relaxed transition-all duration-300 animate-fadeIn">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <img
        src={expertiseservices}
        alt="Expertise"
        className="rounded-2xl shadow-lg border border-[#2D2B3B]/40"
      />
    </div>
  </div>
</div>

    </>
  );
}
