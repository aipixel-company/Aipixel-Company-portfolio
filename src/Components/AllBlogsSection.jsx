import React from "react";
import { Link } from "react-router-dom";
// Assuming these assets are the images you want to use
import blog from "../assets/blog.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"


const cardsData = [
  {
    id: 1,
    imgSrc: blog2,
    title: "The Rise of Generative AI in Everyday Applications",
    description:
      "Go beyond chat. Generative AI is now creating art, music, and code—a massive shift enabling unprecedented content creation. See how this technology is fundamentally reshaping daily life and business.",
  },
  {
    id: 2,
    imgSrc: blog1,
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    description:
      "It's not just crypto. Explore the transformative power of the blockchain in supply chain transparency, secure healthcare records, and next-gen financial architecture. The distributed ledger is rewriting industry rules.",
  },
  {
    id: 3,
    imgSrc: blog,
    title: "Cybersecurity in the Age of AI: Challenges and Solutions",
    description:
      "The ultimate defense is under threat. Learn how AI is simultaneously arming defenders with predictive analysis and empowering attackers with sophisticated automation. The future of security rests on adaptive AI solutions.",
  },
  {
    id: 4,
    imgSrc: blog3,
    title: "Edge Computing: Powering the Next Wave of IoT",
    description:
      "Stop waiting for the cloud. Edge computing brings processing right to the device, delivering instant insights and ultra-low latency. This is the critical infrastructure powering self-driving cars and industrial IoT's next wave.",
  },
  {
    id: 5,
    imgSrc: blog4,
    title: "Sustainable Tech: Green Cloud and Eco-Friendly Computing",
    description:
      "Tech responsibility is the new imperative. Discover the principles of Green Cloud, energy-efficient data centers, and eco-friendly hardware that are driving the industry toward a net-zero environmental footprint.",
  },
];

// --- Card Component (Kept White for Contrast) ---
const Card = ({ imgSrc, title, description, id }) => (
  <div className="w-full max-w-sm mb-12 mx-auto sm:w-1/2 md:w-1/3 p-4">
    {/* Card UI: Added a deeper blue accent and a bolder hover shadow */}
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-blue-500/60 flex flex-col h-full border-b-4 border-blue-600 hover:border-b-8">
      
      <div className="relative overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90" 
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Title now uses a strong Blue color */}
        <h3 className="mb-3 text-xl font-bold text-blue-600 leading-tight">
          {title}
        </h3>
        
        <p className="mb-6 text-gray-600 text-sm line-clamp-4">
          {description}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${id}`} 
            // CTA color changed to match the blue accent
            className="inline-flex items-center text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg" 
          >
            Read More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// --- Section Component with Colorful Gradient UI ---
export default function AllBlogsSection() {
  return (
    // **** UPDATED: Colorful, Professional Dark-to-Light Gradient ****
    // Starts with a deep, dark blue, transitions through a vibrant purple, and fades to white.
    // from-blue-900: Deep, navy blue.
    // via-fuchsia-900/90: A rich, professional magenta/purple.
    // to-white: Fades to a clean white for a modern edge.
    <div className="flex justify-center items-center py-20 min-h-screen bg-gradient-to-b from-blue-900 via-fuchsia-900/90 to-white relative z-0">
      
      {/* Container for Content */}
      <section className="container mx-auto px-4 z-10">
        
        {/* Section Title - Text color changed to white for contrast */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-white leading-tight mb-2">
            LATEST INSIGHTS
          </h2>
          <p className="mt-3 text-xl text-fuchsia-300 font-medium">
            Cutting-edge topics shaping the future of technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap -mx-4">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}