// BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    date: "September 20, 2025",
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
        content:
          "Companies can leverage generative AI to gain a competitive edge:",
        subpoints: [
          "Content Creation: Automating marketing and creative content.",
          "Customer Support: Powering intelligent chatbots and virtual assistants.",
          "Product Design: Creating prototypes and simulations faster.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Generative AI is no longer just a futuristic concept—it’s becoming part of daily life. Businesses and developers who embrace it early will unlock greater efficiency and innovation.",
      },
    ],
  },
  {
    id: 2,
    date: "October 1, 2025",
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
        content:
          "Blockchain is finding adoption in several real-world scenarios:",
        subpoints: [
          "Supply Chain: Tracking goods from source to destination.",
          "Healthcare: Securing patient data and medical records.",
          "Finance: Enabling faster and safer cross-border payments.",
        ],
      },
      {
        heading: "Opportunities for Developers",
        content:
          "Developers can tap into blockchain opportunities by building:",
        subpoints: [
          "Smart Contracts: Automating agreements with code.",
          "Decentralized Applications (DApps): Creating apps without central authority.",
          "NFT Platforms: Enabling digital asset ownership and trading.",
        ],
      },
      {
        heading: "Conclusion",
        content:
          "Blockchain’s future lies in its ability to solve real-world challenges. As industries adopt it, developers have a chance to shape a decentralized digital future.",
      },
    ],
  },
  {
    id: 3,
    date: "October 1, 2025",
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
  // 🟢 ADDED BLOG 5
  {
    id: 5,
    date: "October 1, 2025",
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
          "Sustainable tech is not just good for the planet—it’s good for business. Green computing will define the future of digital transformation.",
      },
    ],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-200 to-indigo-600">
      <div className=" mt-[6rem] p-6 mx-auto bg-white ">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-4">{blog.date}</p>
          {blog.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
              <p className="text-gray-800 mb-2">{section.content}</p>
              {section.subpoints && (
                <ul className="list-disc list-inside ml-4">
                  {section.subpoints.map((point, idx) => (
                    <li key={idx} className="text-gray-800">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
