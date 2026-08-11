 import React from "react";
import { Link } from "react-router-dom";

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
    name: "AI-Powered Web Apps",
    description: "We build intelligent web applications with embedded ML models, automated personalization engines, and AI-driven analytics dashboards for real-time decision making.",
    image: techImages.webDev,
    gradient: "from-blue-500 to-cyan-500",
    icon: "🌐"
  },
  {
    id: 2,
    field: "UI/UX Design",
    name: "AI-Enhanced UX Design",
    description: "Data-driven interface design powered by ML-based user behavior analysis, automated A/B testing, and AI heatmap insights for optimal conversion flows.",
    image: techImages.uiUx,
    gradient: "from-purple-500 to-pink-500",
    icon: "🎨"
  },
  {
    id: 3,
    field: "Artificial Intelligence",
    name: "AI & Machine Learning",
    description: "End-to-end AI/ML solutions — from predictive analytics and NLP to computer vision and deep learning models that automate complex business operations.",
    image: techImages.ai,
    gradient: "from-green-500 to-emerald-500",
    icon: "🤖"
  },
  {
    id: 4,
    field: "DevOps",
    name: "AI-Driven DevOps",
    description: "Intelligent CI/CD pipelines with automated testing, ML-powered anomaly detection, and AI-driven infrastructure scaling for zero-downtime deployments.",
    image: techImages.devops,
    gradient: "from-orange-500 to-red-500",
    icon: "⚙️"
  },
  {
    id: 5,
    field: "Mobile App Development",
    name: "Smart Mobile Apps",
    description: "AI-integrated mobile apps with on-device ML models, intelligent push notifications, automated content personalization, and predictive user engagement.",
    image: techImages.mobile,
    gradient: "from-indigo-500 to-purple-500",
    icon: "📱"
  },
  {
    id: 6,
    field: "BlockChain",
    name: "AI + Blockchain",
    description: "Smart contract automation enhanced with AI-powered fraud detection, ML-driven consensus optimization, and intelligent decentralized application workflows.",
    image: techImages.blockchain,
    gradient: "from-gray-700 to-gray-900",
    icon: "⛓️"
  },
  {
    id: 7,
    field: "Quality Assurance",
    name: "AI-Powered QA",
    description: "Automated testing powered by ML — intelligent test case generation, AI-driven regression detection, and predictive bug analysis for flawless releases.",
    image: techImages.qa,
    gradient: "from-green-600 to-lime-500",
    icon: "✅"
  },
  {
    id: 8,
    field: "Software Testing",
    name: "Intelligent Testing Automation",
    description: "AI-accelerated test automation with self-healing scripts, ML-based test prioritization, and intelligent coverage analysis across platforms.",
    image: techImages.testing,
    gradient: "from-teal-500 to-cyan-500",
    icon: "🔍"
  },
  {
    id: 9,
    field: "WordPress",
    name: "AI-Optimized CMS",
    description: "WordPress solutions with AI-powered content recommendations, automated SEO optimization, intelligent chatbot integration, and ML-driven analytics.",
    image: techImages.wordpress,
    gradient: "from-blue-700 to-blue-900",
    icon: "💻"
  },
  {
    id: 10,
    field: "Fintech",
    name: "AI-Driven FinTech",
    description: "Intelligent financial platforms with ML-powered risk scoring, automated fraud detection, AI-driven credit analysis, and predictive market insights.",
    image: techImages.fintech,
    gradient: "from-green-600 to-emerald-600",
    icon: "💰"
  },
  {
    id: 11,
    field: "Application Maintenance",
    name: "AI-Managed Maintenance",
    description: "Proactive AI-monitored application health — automated performance tuning, ML-driven anomaly alerts, and intelligent incident resolution for 24/7 reliability.",
    image: techImages.maintenance,
    gradient: "from-yellow-500 to-orange-500",
    icon: "🔧"
  },
  {
    id: 12,
    field: "Software Development",
    name: "AI-Integrated Software",
    description: "Custom software embedded with intelligent automation — from AI-assisted code generation to ML-powered feature recommendations and smart data pipelines.",
    image: techImages.software,
    gradient: "from-blue-600 to-indigo-600",
    icon: "💻"
  },
  {
    id: 13,
    field: "Project Management",
    name: "AI-Powered Project Delivery",
    description: "ML-driven sprint planning, automated risk prediction, AI-powered resource allocation, and intelligent milestone tracking for on-time AI project delivery.",
    image: techImages.project,
    gradient: "from-purple-600 to-indigo-600",
    icon: "📊"
  },
  {
    id: 14,
    field: "AWS",
    name: "AI on AWS Cloud",
    description: "Leveraging AWS SageMaker, Bedrock, and Lambda for scalable ML model training, automated inference pipelines, and intelligent cloud infrastructure.",
    image: techImages.aws,
    gradient: "from-orange-400 to-red-500",
    icon: "☁️"
  },
  {
    id: 15,
    field: "Data Structures and Algorithms",
    name: "ML Algorithms & Data Pipelines",
    description: "Optimized data structures and algorithms powering efficient ML training pipelines, real-time data processing, and intelligent feature engineering at scale.",
    image: techImages.dsa,
    gradient: "from-blue-500 to-teal-500",
    icon: "📊"
  },
  {
    id: 16,
    field: "Programming Languages",
    name: "AI/ML Programming",
    description: "Expert proficiency in Python, TensorFlow, PyTorch, and R — building production-grade ML models, AI microservices, and automated data science workflows.",
    image: techImages.programming,
    gradient: "from-indigo-500 to-purple-500",
    icon: "👨‍💻"
  },
  {
    id: 17,
    field: "Cloud Platform Integration",
    name: "AI Cloud Integration",
    description: "Seamless integration with AI cloud services — Azure Cognitive Services, Google AI Platform, and AWS AI — for intelligent multi-cloud automation.",
    image: techImages.cloud,
    gradient: "from-cyan-500 to-blue-500",
    icon: "🌩️"
  },
  {
    id: 18,
    field: "Text Editors",
    name: "AI-Assisted Development Tools",
    description: "AI-powered coding environments with intelligent code completion, automated refactoring suggestions, and ML-driven productivity optimization.",
    image: techImages.editors,
    gradient: "from-gray-600 to-gray-800",
    icon: "📝"
  },
  {
    id: 19,
    field: "Integrated Development Environments",
    name: "AI-Enhanced IDEs",
    description: "Modern IDEs supercharged with AI copilots, automated debugging assistants, intelligent test generation, and ML-powered code review.",
    image: techImages.ides,
    gradient: "from-purple-500 to-pink-500",
    icon: "🔧"
  },
  {
    id: 20,
    field: "Databases",
    name: "Intelligent Data Systems",
    description: "AI-optimized database architectures with automated query tuning, ML-driven data classification, intelligent caching, and predictive storage scaling.",
    image: techImages.databases,
    gradient: "from-blue-600 to-cyan-600",
    icon: "🗄️"
  },
  {
    id: 22,
    field: "Networking Basics",
    name: "AI Network Automation",
    description: "Intelligent network management with ML-powered traffic analysis, automated threat detection, and AI-driven performance optimization across infrastructure.",
    image: techImages.networking,
    gradient: "from-green-500 to-blue-500",
    icon: "🌐"
  },
  {
    id: 23,
    field: "Basics of Testing",
    name: "AI Testing Fundamentals",
    description: "Foundation-level AI testing skills — automated test frameworks, ML model validation techniques, and intelligent quality gates for AI-powered products.",
    image: techImages.testingBasics,
    gradient: "from-red-500 to-pink-500",
    icon: "🧪"
  },
  {
    id: 26,
    field: "Software Development Life Cycle",
    name: "AI-Augmented SDLC",
    description: "AI-enhanced development lifecycle — from automated requirements analysis and ML-powered estimation to intelligent deployment and AI-driven post-release monitoring.",
    image: techImages.sdlc,
    gradient: "from-indigo-500 to-purple-500",
    icon: "🔄"
  },
  {
    id: 28,
    field: "SEO (Search Engine Optimization)",
    name: "AI-Powered SEO",
    description: "ML-driven keyword analysis, automated content optimization, AI-powered competitor tracking, and intelligent search ranking strategies for maximum visibility.",
    image: techImages.seo,
    gradient: "from-yellow-500 to-orange-500",
    icon: "🔎"
  },
];

const getExpertiseSlug = (expertise) => {
  const fieldMapping = {
    "Web Development": "web-development",
    "UI/UX Design": "user-interface-design",
    "Artificial Intelligence": "artificial-intelligence",
    "DevOps": "devops",
    "Mobile App Development": "mobile-app-development",
    "BlockChain": "blockchain",
    "Quality Assurance": "quality-assurance",
    "Software Testing": "software-testing",
    "WordPress": "wordpress",
    "Fintech": "fintech",
    "Application Maintenance": "application-maintenance",
    "Software Development": "software-development",
    "Project Management": "project-management",
    "AWS": "aws",
    "Data Structures and Algorithms": "data-structures-and-algorithms",
    "Programming Languages": "programming-languages",
    "Cloud Platform Integration": "cloud-platform-integration",
    "Text Editors": "text-editors",
    "Integrated Development Environments": "integrated-development-environments",
    "Databases": "databases",
    "Networking Basics": "networking-basics",
    "Basics of Testing": "basics-of-testing",
    "Software Development Life Cycle": "software-development-life-cycle",
    "SEO (Search Engine Optimization)": "seo-search-engine-optimization"
  };
  return fieldMapping[expertise.field] || expertise.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
};

// --- Enhanced Expertise Card with Splash Background ---
const ExpertiseCard = ({ expertise }) => {
  const slug = getExpertiseSlug(expertise);
  return (
    <Link
      to={`/expertise/${slug}`}
      className="relative flex flex-col flex-shrink-0 w-[18rem] lg:w-80 h-[280px] p-6 rounded-2xl shadow-xl 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group
                  border border-white/5 overflow-hidden bg-[#1E1D28]/40 no-underline"
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
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300 pr-20 drop-shadow-lg text-left">
          {expertise.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-200 leading-relaxed line-clamp-5 group-hover:text-white transition-colors duration-300 drop-shadow-md text-left">
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
    </Link>
  );
};

// --- Main Component ---
export default function HomeExpertise() {
  // Duplicate array so scroll loops seamlessly
  const loopedData = [...expertiseData, ...expertiseData];

  return (
    <div className="flex flex-col items-center w-[98%] my-4 mx-auto rounded-md h-full py-4 lg:py-6 px-4 lg:px-10 bg-[#070508]">
      {/* Header */}
      <div className="w-full flex flex-col items-center pt-8 lg:pb-6 max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3567FF]/10 text-[#3567FF] text-sm font-semibold mb-6 border border-[#3567FF]/20">
          <span className="w-2 h-2 bg-[#61CE70] rounded-full animate-pulse"></span>
          Our Expertise Areas
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Unleash{" "}
          <span className="gradient-text-accent">
            Digital Excellence
          </span>
        </h1>
        
        <p className="text-xl text-[#8791AD] leading-relaxed max-w-4xl mb-8">
          Transform your vision into reality with our comprehensive suite of cutting-edge technologies 
          and innovative solutions tailored for your success.
        </p>
 
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden mt-4 mb-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#070508] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#070508] to-transparent z-10" />
        
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