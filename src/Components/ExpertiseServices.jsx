import React, { useState } from "react";
import expertiseservices from "../assets/expertiseservices.jpg";

const expertise = [
  {
    question: "DevOps",
    answer:
      "AI Pixel bridges the gap between development and operations, utilizing continuous integration/delivery (CI/CD) and infrastructure as code (IaC) practices to streamline development lifecycles, ensure consistent quality, and automate deployments. This harmonious approach minimizes disruptions and delivers software faster.",
  },
  {
    question: "VR/AR/MR",
    answer:
      "AI Pixel isn't confined to the physical plane. They leverage the immersive power of virtual reality (VR), augmented reality (AR), and mixed reality (MR) to create next-generation experiences. Imagine training employees in a virtual environment or showcasing products in an interactive AR setting. AI Pixel brings these possibilities to life.",
  },
  {
    question: "Market Research",
    answer:
      "They act as your digital compass, conducting market research to understand your target audience, competitor landscape, and industry trends. This intelligence empowers you to make data-driven decisions and develop products that resonate with your market.",
  },
  {
    question: "Digital Enterprise Solutions",
    answer:
      "AI Pixel understands the modern digital enterprise. They offer a comprehensive suite of solutions to streamline internal processes, enhance collaboration, and foster a data-driven culture.  This empowers your organization to operate more efficiently and achieve its full potential.",
  },
  {
    question: "Human-Centered Interface (HCI) Design",
    answer:
      "AI Pixel goes beyond aesthetics with a focus on Human-Centered Interface (HCI) design. They prioritize usability, accessibility, and user psychology to create interfaces that are intuitive, engaging, and cater to a diverse range of users. This translates to increased user adoption and satisfaction.",
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
     <div className="bg-gradient-to-r from-[#647A82] to-[#00BFA6] py-16">
  <div className="text-center mb-10">
    <h2 className="font-bold text-4xl text-white">Our Expertise</h2>
    <p className="text-gray-200 mt-3">
      We work with advanced technologies covering a broad spectrum of specialisms.
    </p>
  </div>
  <div className="flex flex-col lg:flex-row px-6 gap-10 items-center">
    {/* Accordion */}
    <div className="lg:w-1/2 bg-white/90 rounded-xl shadow-md p-6">
      {expertise.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => handleClick(index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="font-semibold text-[#647A82]">{item.question}</span>
            <span>{openIndex === index ? "–" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="text-sm text-gray-700 mt-2 transition-all duration-300">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
    {/* Image */}
    <div className="lg:w-1/2">
      <img
        src={expertiseservices}
        alt="Expertise"
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>

    </>
  );
}
