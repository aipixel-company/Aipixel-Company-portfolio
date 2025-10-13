 import React from "react";

// --- Technology Splash Images ---
const techImages = {
  webDev: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  uiUx: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  ai: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  devops: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  blockchain: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  qa: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  testing: "https://images.unsplash.com/photo-1563013541-2d0c14a56bd8?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  wordpress: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  fintech: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  maintenance: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  software: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  project: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  aws: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  dsa: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  programming: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  editors: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  ides: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  databases: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  networking: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  testingBasics: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  sdlc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
  seo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.1&auto=format&fit=crop&w=400&q=80",
};

// --- Expertise Data with Splash Images ---
const expertiseData = [
  {
    id: 1,
    field: "Web Development",
    name: "Web Development",
    description: "AI Pixel builds scalable and visually appealing web applications that deliver outstanding performance and adapt seamlessly to future business growth.",
    image: techImages.webDev,
    gradient: "from-blue-500 to-cyan-500",
    icon: "🌐"
  },
  {
    id: 2,
    field: "UI/UX Design",
    name: "User Interface Design",
    description: "Our design team creates engaging, user-friendly interfaces that balance aesthetics with usability, ensuring intuitive digital experiences.",
    image: techImages.uiUx,
    gradient: "from-purple-500 to-pink-500",
    icon: "🎨"
  },
  {
    id: 3,
    field: "Artificial Intelligence",
    name: "AI Solutions",
    description: "We deliver AI-driven solutions that automate workflows, personalize customer journeys, and help businesses solve complex challenges.",
    image: techImages.ai,
    gradient: "from-green-500 to-emerald-500",
    icon: "🤖"
  },
  {
    id: 4,
    field: "DevOps",
    name: "DevOps",
    description: "Our DevOps experts streamline collaboration between development and operations, enabling faster deployments and continuous delivery pipelines.",
    image: techImages.devops,
    gradient: "from-orange-500 to-red-500",
    icon: "⚙️"
  },
  {
    id: 5,
    field: "Mobile App Development",
    name: "Mobile App Development",
    description: "AI Pixel designs and develops mobile apps that offer seamless user experiences across all platforms with effective prototyping.",
    image: techImages.mobile,
    gradient: "from-indigo-500 to-purple-500",
    icon: "📱"
  },
  {
    id: 6,
    field: "BlockChain",
    name: "BlockChain",
    description: "We create secure and transparent blockchain-based applications that enhance trust and empower businesses with decentralized technologies.",
    image: techImages.blockchain,
    gradient: "from-gray-700 to-gray-900",
    icon: "⛓️"
  },
  {
    id: 7,
    field: "Quality Assurance",
    name: "Quality Assurance",
    description: "AI Pixel ensures top quality by performing rigorous testing processes that eliminate bugs and guarantee optimal stability.",
    image: techImages.qa,
    gradient: "from-green-600 to-lime-500",
    icon: "✅"
  },
  {
    id: 8,
    field: "Software Testing",
    name: "Software Testing",
    description: "Our testing team validates functionality, security, and usability, ensuring flawless performance across platforms.",
    image: techImages.testing,
    gradient: "from-teal-500 to-cyan-500",
    icon: "🔍"
  },
  {
    id: 9,
    field: "WordPress",
    name: "WordPress",
    description: "We build creative, flexible, and fully optimized WordPress websites that empower businesses to publish and scale content effortlessly.",
    image: techImages.wordpress,
    gradient: "from-blue-700 to-blue-900",
    icon: "💻"
  },
  {
    id: 10,
    field: "Fintech",
    name: "Fintech",
    description: "AI Pixel develops innovative financial solutions, empowering businesses with secure, modern, and compliant technologies.",
    image: techImages.fintech,
    gradient: "from-green-600 to-emerald-600",
    icon: "💰"
  },
  {
    id: 11,
    field: "Application Maintenance",
    name: "Application Maintenance",
    description: "We provide proactive support and regular maintenance services to keep software systems updated, stable, and secure.",
    image: techImages.maintenance,
    gradient: "from-yellow-500 to-orange-500",
    icon: "🔧"
  },
  {
    id: 12,
    field: "Software Development",
    name: "Software Development",
    description: "Our software engineers design and deliver interactive applications that combine reliability, usability, and performance.",
    image: techImages.software,
    gradient: "from-blue-600 to-indigo-600",
    icon: "💻"
  },
  {
    id: 13,
    field: "Project Management",
    name: "Project Management",
    description: "AI Pixel ensures projects are delivered on time, within scope, and with maximum efficiency using proven frameworks.",
    image: techImages.project,
    gradient: "from-purple-600 to-indigo-600",
    icon: "📊"
  },
  {
    id: 14,
    field: "AWS",
    name: "AWS",
    description: "We leverage Amazon Web Services to deliver secure, scalable, and cost-effective cloud infrastructure for business transformation.",
    image: techImages.aws,
    gradient: "from-orange-400 to-red-500",
    icon: "☁️"
  },
  {
    id: 15,
    field: "Data Structures and Algorithms",
    name: "Data Structures & Algorithms",
    description: "Our experts apply data structures and algorithms to build efficient, optimized, and reliable systems for complex problems.",
    image: techImages.dsa,
    gradient: "from-blue-500 to-teal-500",
    icon: "📊"
  },
  {
    id: 16,
    field: "Programming Languages",
    name: "Programming Languages",
    description: "AI Pixel developers are proficient in a wide range of programming languages, enabling tailored solutions across diverse platforms.",
    image: techImages.programming,
    gradient: "from-indigo-500 to-purple-500",
    icon: "👨‍💻"
  },
  {
    id: 17,
    field: "Cloud Platform Integration",
    name: "Cloud Platform Integration",
    description: "We integrate applications with leading cloud platforms, providing flexibility and seamless connections for business growth.",
    image: techImages.cloud,
    gradient: "from-cyan-500 to-blue-500",
    icon: "🌩️"
  },
  {
    id: 18,
    field: "Text Editors",
    name: "Text Editors",
    description: "Our team equips developers with the best text editors that streamline productivity and enhance the software development workflow.",
    image: techImages.editors,
    gradient: "from-gray-600 to-gray-800",
    icon: "📝"
  },
  {
    id: 19,
    field: "Integrated Development Environments",
    name: "IDEs",
    description: "We enable access to modern IDEs that simplify coding, debugging, and testing for efficient developer workflows.",
    image: techImages.ides,
    gradient: "from-purple-500 to-pink-500",
    icon: "🔧"
  },
  {
    id: 20,
    field: "Databases",
    name: "Databases",
    description: "AI Pixel designs secure, efficient, and scalable database systems that ensure reliable data storage and management.",
    image: techImages.databases,
    gradient: "from-blue-600 to-cyan-600",
    icon: "🗄️"
  },
  {
    id: 22,
    field: "Networking Basics",
    name: "Networking Basics",
    description: "We provide comprehensive networking training and solutions, empowering teams with strong foundations in connectivity.",
    image: techImages.networking,
    gradient: "from-green-500 to-blue-500",
    icon: "🌐"
  },
  {
    id: 23,
    field: "Basics of Testing",
    name: "Software Testing",
    description: "Our training in software testing equips professionals with essential skills to identify bugs and ensure reliable products.",
    image: techImages.testingBasics,
    gradient: "from-red-500 to-pink-500",
    icon: "🧪"
  },
  {
    id: 26,
    field: "Software Development Life Cycle",
    name: "SDLC",
    description: "AI Pixel follows a structured SDLC methodology to ensure projects move smoothly from concept to deployment with quality.",
    image: techImages.sdlc,
    gradient: "from-indigo-500 to-purple-500",
    icon: "🔄"
  },
  {
    id: 28,
    field: "SEO (Search Engine Optimization)",
    name: "SEO",
    description: "Our SEO experts apply proven strategies that improve search visibility, drive organic traffic, and enhance brand presence.",
    image: techImages.seo,
    gradient: "from-yellow-500 to-orange-500",
    icon: "🔎"
  },
];

// --- Enhanced Expertise Card with Splash Background ---
const ExpertiseCard = ({ expertise }) => {
  return (
    <div
      key={expertise.id}
      className="relative flex flex-col flex-shrink-0 w-[18rem] lg:w-80 h-[280px] p-6 rounded-2xl shadow-xl 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group
                  border border-gray-100 overflow-hidden"
    >
      {/* Splash Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${expertise.image})` }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${expertise.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
      </div>

      {/* Gradient Top Bar */}
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${expertise.gradient} rounded-t-2xl z-20`} />
      
      {/* Icon/Image Container */}
      <div className={`absolute top-4 right-4 w-16 h-16 rounded-xl bg-gradient-to-br ${expertise.gradient} 
                      flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg z-20`}>
        {expertise.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start h-full mt-8">
        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300 pr-20 drop-shadow-lg">
          {expertise.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-200 leading-relaxed line-clamp-5 group-hover:text-white transition-colors duration-300 drop-shadow-md">
          {expertise.description}
        </p>

        {/* Learn More Button */}
        {/* <div className="mt-auto pt-4">
          <button className={`text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r ${expertise.gradient} 
                           text-white hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 
                           backdrop-blur-sm bg-white/10 border border-white/20 hover:border-white/30`}>
            Learn More →
          </button>
        </div> */}
      </div>

      {/* Hover Effect Glow */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${expertise.gradient} 
                      opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
    </div>
  );
};

// --- Main Component ---
export default function HomeExpertise() {
  // Duplicate array so scroll loops seamlessly
  const loopedData = [...expertiseData, ...expertiseData];

  return (
    <div className="flex flex-col items-center w-[98%] my-4 mx-auto rounded-md h-full p-4 lg:p-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-16 lg:pb-10 max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Our Expertise Areas
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Unleash{" "}
          <span className="bg-g  bg text-white -clip-text">
            Digital Excellence
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
          Transform your vision into reality with our comprehensive suite of cutting-edge technologies 
          and innovative solutions tailored for your success.
        </p>
 
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden mt-4 mb-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
        
        <div className="flex animate-scroll gap-6 w-max">
          {loopedData.map((expertise, index) => (
            <ExpertiseCard key={index} expertise={expertise} />
          ))}
        </div>
      </div>

      {/* CTA Button */}
     

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
          animation: scroll 80s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}