import React from "react";

const cardData = [
  {
    title: "React.js",
    description:
      "A popular JavaScript library for building user interfaces, React.js excels in creating reusable UI components and efficiently managing application state. Its strengths lie in performance, flexibility, and a thriving community for ongoing support.",
  },
  {
    title: "Node.js",
    description:
      "This runtime environment empowers developers to run JavaScript on the server-side. Built on Chrome's V8 JavaScript engine, Node.js is renowned for its non-blocking, event-driven architecture, making it ideal for building scalable network applications and APIs.",
  },
  {
    title: "DevOps",
    description:
      "AI Pixel embraces DevOps practices to bridge the gap between development and operations. This approach utilizes tools and techniques like continuous integration, continuous delivery, infrastructure as code, and monitoring to shorten the development lifecycle, ensure consistent quality, and automate processes.  This collaborative approach fosters efficient software delivery and minimizes deployment disruptions.",
  },
  
  {
    title: "No-Code Platforms",
    description:
      "  AI Pixel understands the growing demand for user-friendly website and application development tools.  They leverage leading no-code platforms like Bubble.io, Flutter Flow, Wix, and Webflow, empowering businesses to create functional websites and applications without extensive coding knowledge. These platforms offer intuitive interfaces, drag-and-drop functionality, and pre-built templates, allowing businesses to launch their digital presence quickly and efficiently.",
  },
  {
    title: "Angular",
    description:
      "Developed and maintained by Google, Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It provides a comprehensive solution with features like two-way data binding, dependency injection, and a modular architecture, streamlining front-end development.",
  },
  {
    title: "Flutter",
    description:
      " Google's UI toolkit, Flutter, allows developers to create natively compiled applications for mobile, web, and desktop using a single codebase.  This translates to efficient development and high-performance applications with a visually appealing user experience across platforms.",
  },
  
];

export default function IndustriesCards() {
  return (
    <>
      <div className="bg-black">
        <div className=" sm:px-6 p-3 py-10 mx-auto">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
            AI Pixel: Powering Innovation with Cutting-Edge Technologies
          </h1>

          <p className="mt-4 xl:mt-6 text-gray-300">
            AI Pixel stays at the forefront of technological advancements to
            deliver the most robust and innovative solutions for your business
            needs. Here's a glimpse into the key technologies that fuel their
            expertise:
          </p>

          <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"
              >
                <h1 className="text-2xl font-semibold text-white">
                  {card.title}
                </h1>

                <p className="text-gray-300">{card.description}</p>

                {/* <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
