import React from "react";

const cardData = [
  {
    title: "React.js",
    description:
      "React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the application's state effectively. React is known for its performance, flexibility, and strong community support.",
  },
  {
    title: "Node.js",
    description:
      "Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It is built on Chrome's V8 JavaScript engine and is known for its non-blocking, event-driven architecture. Node.js is widely used for building scalable network applications and APIs.",
  },
  {
    title: "Flutter",
    description:
      "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It offers a rich set of pre-designed widgets, along with capabilities for customization and flexible UI development. Flutter enables developers to deliver high-performance, visually appealing applications across multiple platforms.",
  },
  {
    title: "WordPress",
    description:
      "WordPress is a free and open-source content management system (CMS) based on PHP and MySQL. It is known for its ease of use, flexibility, and extensive plugin ecosystem, making it the most popular CMS in the world. WordPress powers a wide range of websites, from blogs and small business sites to large corporate portals and e-commerce platforms.",
  },
  {
    title: "Angular",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, Angular provides a comprehensive solution for developing front-end applications with features like two-way data binding, dependency injection, and a modular architecture.",
  },
  {
    title: "DevOps",
    description:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and deliver high-quality software continuously. DevOps practices include continuous integration, continuous delivery, infrastructure as code, and monitoring, which help teams collaborate more effectively and automate processes.",
  },
];


export default function IndustriesCards() {
  return (
    <>
      <div className="bg-black">
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
            Technologies We Work On
          </h1>

          <p className="mt-4 xl:mt-6 text-gray-300">
            Our expertise spans a wide range of technologies to deliver robust
            and innovative solutions. Here are some of the key technologies we
            specialize in:
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
