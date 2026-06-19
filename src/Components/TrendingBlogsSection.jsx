// BlogDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    date: "September 20, 2025",
    category: "AI & Technology",
    title: "The Rise of Generative AI in Everyday Applications",
    sections: [
      {
        heading: "Introduction",
        content:
          "Generative AI is rapidly transforming industries by enabling machines to create content, from text and images to code and music. This blog explores how generative AI is shaping everyday applications and what it means for businesses and consumers.",
      },
      {
        heading: "What is Generative AI?",
        content:
          "Generative AI refers to AI systems that can generate original content based on input prompts. Tools like ChatGPT, MidJourney, and GitHub Copilot exemplify this trend.",
      },
      {
        heading: "Impact Across Industries",
        content: "Generative AI is influencing various sectors:",
        subpoints: [
          "Healthcare: Assisting in drug discovery and personalized patient care.",
          "Education: Offering AI tutors and content generation for learning.",
          "Software Development: Helping developers with code suggestions and automation.",
        ],
      },
      {
        heading: "Opportunities for Businesses",
        content: "Companies can leverage generative AI to gain a competitive edge:",
        subpoints: [
          "Content Creation: Automating marketing and creative content.",
          "Customer Support: Powering intelligent chatbots and virtual assistants.",
          "Product Design: Creating prototypes and simulations faster.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Generative AI is no longer just a futuristic concept—it's becoming part of daily life. Businesses and developers who embrace it early will unlock greater efficiency and innovation.",
      },
    ],
  },
  {
    id: 2,
    date: "October 1, 2025",
    category: "Blockchain",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    sections: [
      {
        heading: "Introduction",
        content:
          "While blockchain is often associated with cryptocurrency, its potential goes far beyond digital money. This blog explores how blockchain technology is being used in industries like supply chain, healthcare, and finance.",
      },
      {
        heading: "Key Features of Blockchain",
        content: "Blockchain offers unique features that make it valuable:",
        subpoints: [
          "Transparency: All participants can access the same data.",
          "Security: Cryptographic protection ensures data integrity.",
          "Decentralization: No single entity controls the system.",
        ],
      },
      {
        heading: "Use Cases Beyond Crypto",
        content: "Blockchain is finding adoption in several real-world scenarios:",
        subpoints: [
          "Supply Chain: Tracking goods from source to destination.",
          "Healthcare: Securing patient data and medical records.",
          "Finance: Enabling faster and safer cross-border payments.",
        ],
      },
      {
        heading: "Opportunities for Developers",
        content: "Developers can tap into blockchain opportunities by building:",
        subpoints: [
          "Smart Contracts: Automating agreements with code.",
          "Decentralized Applications (DApps): Creating apps without central authority.",
          "NFT Platforms: Enabling digital asset ownership and trading.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Blockchain's future lies in its ability to solve real-world challenges. As industries adopt it, developers have a chance to shape a decentralized digital future.",
      },
    ],
  },
  {
    id: 3,
    date: "October 1, 2025",
    category: "Cybersecurity",
    title: "Cybersecurity in the Age of AI: Challenges and Solutions",
    sections: [
      {
        heading: "Introduction",
        content:
          "AI is becoming a double-edged sword in cybersecurity—helping both defenders and attackers. This blog examines the new challenges and solutions AI brings to cybersecurity.",
      },
      {
        heading: "AI-Powered Threats",
        content: "Cybercriminals are using AI to:",
        subpoints: [
          "Automate phishing campaigns.",
          "Bypass traditional security systems.",
          "Launch adaptive malware that evolves in real time.",
        ],
      },
      {
        heading: "AI in Defense",
        content: "Organizations are leveraging AI for protection by:",
        subpoints: [
          "Threat Detection: Identifying anomalies faster.",
          "Predictive Analysis: Anticipating attacks before they happen.",
          "Incident Response: Automating containment and recovery.",
        ],
      },
      {
        heading: "Best Practices for Businesses",
        content: "To stay secure, companies should:",
        subpoints: [
          "Adopt Zero Trust frameworks.",
          "Invest in AI-driven security tools.",
          "Train employees on evolving cyber threats.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "AI has changed the cybersecurity battlefield. Companies that combine human expertise with AI-powered defenses will stand the strongest against future threats.",
      },
    ],
  },
  {
    id: 4,
    date: "October 1, 2025",
    category: "Infrastructure",
    title: "Edge Computing: Powering the Next Wave of IoT",
    sections: [
      {
        heading: "Introduction",
        content:
          "As the Internet of Things (IoT) expands, the need for faster data processing grows. Edge computing addresses this by bringing computation closer to devices, reducing latency and bandwidth use.",
      },
      {
        heading: "What is Edge Computing?",
        content:
          "Edge computing processes data at or near the source (such as IoT devices) instead of sending it to centralized servers.",
      },
      {
        heading: "Benefits of Edge Computing",
        content: "Key advantages include:",
        subpoints: [
          "Reduced Latency: Real-time decision-making closer to devices.",
          "Lower Bandwidth Costs: Less data sent to central servers.",
          "Improved Reliability: Systems continue working even with poor connectivity.",
        ],
      },
      {
        heading: "Applications Across Industries",
        content: "Edge computing is driving innovation in:",
        subpoints: [
          "Smart Cities: Traffic management and public safety systems.",
          "Healthcare: Remote monitoring and real-time diagnostics.",
          "Manufacturing: Predictive maintenance and automation.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Edge computing is becoming the backbone of IoT innovation. Businesses investing in it now will gain faster, smarter, and more efficient systems.",
      },
    ],
  },
  {
    id: 5,
    date: "October 1, 2025",
    category: "Sustainability",
    title: "Sustainable Tech: Green Cloud and Eco-Friendly Computing",
    sections: [
      {
        heading: "Introduction",
        content:
          "As climate concerns grow, the tech industry is focusing on sustainability. Green cloud computing and eco-friendly practices are becoming vital for businesses.",
      },
      {
        heading: "What is Green Cloud?",
        content:
          "Green cloud computing focuses on optimizing energy use and reducing carbon footprints in data centers.",
      },
      {
        heading: "Benefits of Sustainable Tech",
        content: "Key advantages include:",
        subpoints: [
          "Cost Savings: Efficient energy use reduces expenses.",
          "Corporate Responsibility: Builds trust with eco-conscious customers.",
          "Innovation: Drives development of cleaner technologies.",
        ],
      },
      {
        heading: "Trends in Green Tech",
        content: "Companies are adopting:",
        subpoints: [
          "Renewable Energy-Powered Data Centers.",
          "Serverless and Edge Computing for efficiency.",
          "AI to monitor and optimize energy usage.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Sustainable tech is not just good for the planet—it's good for business. Green computing will define the future of digital transformation.",
      },
    ],
  },
  {
    id: 6,
    date: "October 15, 2025",
    category: "Mobile",
    title: "Flutter vs React Native: Which to Choose in 2025?",
    sections: [
      {
        heading: "Introduction",
        content:
          "In 2025, cross-platform mobile development remains dominated by two major frameworks: Google's Flutter and Meta's React Native. Choosing the right one for your product is a critical decision that influences velocity, cost, and user experience.",
      },
      {
        heading: "Architecture Differences",
        content:
          "Flutter uses the Dart programming language and compiles to native machine code, painting its own pixel UI canvas. React Native leverages JavaScript/TypeScript and binds with native components via a bridge or the modern JSI (JavaScript Interface).",
      },
      {
        heading: "Comparing the Frameworks",
        content: "Here is a quick look at the strengths of each technology:",
        subpoints: [
          "Performance: Flutter has a minor edge in heavy graphics and smooth animations.",
          "Developer Velocity: React Native allows sharing code with web React codebases, speeding up delivery.",
          "Ecosystem: React Native leverages the vast npm repository, while Flutter relies on pub.dev packages.",
        ],
      },
      {
        heading: "Making the Choice",
        content: "We recommend selecting based on your project goals:",
        subpoints: [
          "Choose Flutter if you require custom, design-heavy UIs and highly consistent rendering across older hardware.",
          "Choose React Native if you have an existing React web team or need to integrate extensively with native device features and micro-frontends.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Both frameworks are mature, highly capable, and fully supported. Partnering with a team like AI Pixal ensures you pick the architecture best aligned to scale.",
      },
    ],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#070508] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
        <p className="text-[#8791AD] mb-8">The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blogs"
          className="btn-premium-blue px-6 py-3 rounded-full text-sm font-semibold"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070508]">
      {/* Hero */}
      <div className="relative pt-28 pb-16 px-6 border-b border-[#2D2B3B]/40">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(53,103,255,0.10), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-[#8791AD] text-sm">{blog.date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {blog.sections.map((section, index) => (
            <div key={index} className="glow-card rounded-2xl p-7 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3567FF]/15 border border-[#3567FF]/25 text-[#3567FF] text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                {section.heading}
              </h2>
              <p className="text-[#8791AD] leading-relaxed mb-3">{section.content}</p>
              {section.subpoints && (
                <ul className="space-y-2 mt-3">
                  {section.subpoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#8791AD] text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3567FF] mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-14 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-[#3567FF]/40 transition-all duration-200 text-sm font-medium"
          >
            ← Back to all blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
