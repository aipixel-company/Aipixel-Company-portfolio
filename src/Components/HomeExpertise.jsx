import React from "react";

// --- Expertise Data ---
const expertiseData = [
  {
    id: 1,
    field: "Web Development",
    name: "Web Development",
    description:
      "AI Pixel builds scalable and visually appealing web applications that deliver outstanding performance and adapt seamlessly to future business growth.",
  },
  {
    id: 2,
    field: "UI/UX Design",
    name: "User Interface Design",
    description:
      "Our design team creates engaging, user-friendly interfaces that balance aesthetics with usability, ensuring intuitive digital experiences for every user.",
  },
  {
    id: 3,
    field: "Artificial Intelligence",
    name: "AI Solutions",
    description:
      "We deliver AI-driven solutions that automate workflows, personalize customer journeys, and help businesses solve complex challenges with advanced intelligence.",
  },
  {
    id: 4,
    field: "DevOps",
    name: "DevOps",
    description:
      "Our DevOps experts streamline collaboration between development and operations, enabling faster deployments, smoother workflows, and continuous delivery pipelines.",
  },
  {
    id: 5,
    field: "Mobile App Development",
    name: "Mobile App Development",
    description:
      "AI Pixel designs and develops mobile apps that offer seamless user experiences across all platforms, supported by prototypes to validate ideas effectively.",
  },
  {
    id: 6,
    field: "BlockChain",
    name: "BlockChain",
    description:
      "We create secure and transparent blockchain-based applications that enhance trust, improve traceability, and empower businesses with decentralized technologies.",
  },
  {
    id: 7,
    field: "Quality Assurance",
    name: "Quality Assurance",
    description:
      "AI Pixel ensures top quality by performing rigorous testing processes that eliminate bugs and guarantee optimal stability across every software product.",
  },
  {
    id: 8,
    field: "Software Testing",
    name: "Software Testing",
    description:
      "Our testing team validates functionality, security, and usability, ensuring flawless performance across platforms and delivering reliable software solutions.",
  },
  {
    id: 9,
    field: "WordPress",
    name: "WordPress",
    description:
      "We build creative, flexible, and fully optimized WordPress websites that empower businesses to publish, manage, and scale content effortlessly.",
  },
  {
    id: 10,
    field: "Fintech",
    name: "Fintech",
    description:
      "AI Pixel develops innovative financial solutions, empowering businesses with secure, modern, and compliant technologies to transform the digital finance landscape.",
  },
  {
    id: 11,
    field: "Application Maintenance",
    name: "Application Maintenance",
    description:
      "We provide proactive support and regular maintenance services to keep software systems updated, stable, secure, and running without unexpected interruptions.",
  },
  {
    id: 12,
    field: "Software Development",
    name: "Software Development",
    description:
      "Our software engineers design and deliver interactive applications that combine reliability, usability, and performance for modern business needs.",
  },
  {
    id: 13,
    field: "Project Management",
    name: "Project Management",
    description:
      "AI Pixel ensures projects are delivered on time, within scope, and with maximum efficiency by applying proven project management frameworks and strategies.",
  },
  {
    id: 14,
    field: "AWS",
    name: "AWS",
    description:
      "We leverage Amazon Web Services to deliver secure, scalable, and cost-effective cloud infrastructure that supports growth and business transformation.",
  },
  {
    id: 15,
    field: "Data Structures and Algorithms",
    name: "Data Structures & Algorithms",
    description:
      "Our experts apply data structures and algorithms to build efficient, optimized, and reliable systems that handle complex problems with precision.",
  },
  {
    id: 16,
    field: "Programming Languages",
    name: "Programming Languages",
    description:
      "AI Pixel developers are proficient in a wide range of programming languages, enabling tailored solutions across diverse platforms and technologies.",
  },
  {
    id: 17,
    field: "Cloud Platform Integration",
    name: "Cloud Platform Integration",
    description:
      "We integrate applications with leading cloud platforms, providing flexibility, scalability, and seamless connections for businesses to grow effectively.",
  },
  {
    id: 18,
    field: "Text Editors",
    name: "Text Editors",
    description:
      "Our team equips developers with the best text editors that streamline productivity, simplify coding, and enhance the software development workflow.",
  },
  {
    id: 19,
    field: "Integrated Development Environments",
    name: "IDEs",
    description:
      "We enable access to modern IDEs that simplify coding, debugging, and testing, creating efficient workflows for developers and engineering teams.",
  },
  {
    id: 20,
    field: "Databases",
    name: "Databases",
    description:
      "AI Pixel designs secure, efficient, and scalable database systems that ensure reliable data storage, management, and access for modern applications.",
  },
  {
    id: 22,
    field: "Networking Basics",
    name: "Networking Basics",
    description:
      "We provide comprehensive networking training and solutions, empowering teams with strong foundations in connectivity, protocols, and data communication.",
  },
  {
    id: 23,
    field: "Basics of Testing",
    name: "Software Testing",
    description:
      "Our training in software testing equips professionals with essential skills to identify bugs, optimize functionality, and ensure reliable products.",
  },
  {
    id: 26,
    field: "Software Development Life Cycle",
    name: "SDLC",
    description:
      "AI Pixel follows a structured SDLC methodology to ensure projects move smoothly from concept to deployment with quality at every step.",
  },
  {
    id: 28,
    field: "SEO (Search Engine Optimization)",
    name: "SEO",
    description:
      "Our SEO experts apply proven strategies that improve search visibility, drive organic traffic, and enhance brand presence across digital platforms.",
  },
];

// --- Expertise Card ---
const ExpertiseCard = ({ expertise }) => {
  const accentClass =
    expertise.id % 2 === 0
      ? "border-l-4 border-blue-600"
      : "border-l-4 border-black";

  return (
    <div
      key={expertise.id}
      className={`relative flex flex-col flex-shrink-0 w-[16rem] lg:w-80 h-[226px] p-6 bg-white rounded-xl shadow-lg 
                  ${accentClass}
                  hover:shadow-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
    >
      <div className="flex flex-col justify-start h-full">
        {/* Field */}
        {/* <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-md">
            {expertise.field.toUpperCase()}
          </span>
        </div> */}

        {/* Title */}
        <h2 className="text-xl font-extrabold text-gray-900 mb-2 pt-2">
          {expertise.name}
        </h2>

        {/* Accent bar */}
        <div className="w-1/3 h-1 bg-blue-600 mb-4 rounded-full opacity-75" />

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {expertise.description}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---
export default function HomeExpertise() {
  // Duplicate array so scroll loops seamlessly
  const loopedData = [...expertiseData, ...expertiseData];

  return (
    <div className="flex flex-col items-center w-full h-full p-4 lg:p-10 bg-gray-50">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 lg:pb-10 max-w-4xl text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
          Unlock the Power of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
            AI Pixel's Expertise
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Navigate your digital transformation with our comprehensive suite of
          cutting-edge services.
        </p>
      </div>

      {/* Infinite Scroll */}
      <div className="relative w-full overflow-hidden mt-12">
        <div className="flex animate-scroll gap-6 w-max">
          {loopedData.map((expertise, index) => (
            <ExpertiseCard key={index} expertise={expertise} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite; /* slowed down */
        }
        // .animate-scroll:hover {
        //   animation-play-state: paused; /* still pauses on hover */
        // }
      `}</style>
    </div>
  );
}
