import React, { useState } from "react";

const expertise = [
  {
    question: "HR",
    answer:
      "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.",
  },
  {
    question: "Figma Design",
    answer:
      "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "Web Development",
    answer:
      "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
  },
  {
    question: "Bussiness Development",
    answer:
      "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
  },
  {
    question: "HR Consultation",
    answer:
      "We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
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
      {isOpen && <p className="text-gray-800 mt-3 animate-fadeIn">{answer}</p>}
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
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl mt-5 tracking-tight">
          Our Expertise
        </h2>
        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt soluta
          veniam esse.
        </p>
      </div>

      <div className="px-10 bg-white min-h-screen flex">
        <div className="w-1/2 pr-5">
          <div className="grid divide-y divide-neutral-200 mt-8">
            {expertise.map((expertise, index) => (
              <FAQItem
                key={index}
                question={expertise.question}
                answer={expertise.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 pl-5 mt-11">
          <img
            src="https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNvZnR3YXJlJTIwZXhwZXJ0aXNlfGVufDB8fDB8fHww"
            alt="Expertise illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
