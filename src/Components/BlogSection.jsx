import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "AI & Technology",
    date: "September 20, 2025",
    title: "The Rise of Generative AI in Everyday Applications",
    description:
      "Generative AI is rapidly transforming industries by enabling machines to create content, from text and images to code and music.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Blockchain",
    date: "October 1, 2025",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    description:
      "While blockchain is often associated with cryptocurrency, its potential goes far beyond digital money into supply chain and healthcare.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Cybersecurity",
    date: "October 1, 2025",
    title: "Cybersecurity in the Age of AI: Challenges and Solutions",
    description:
      "AI is becoming a double-edged sword in cybersecurity — helping both defenders and attackers. Learn the latest defense strategies.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Infrastructure",
    date: "October 5, 2025",
    title: "Edge Computing: Powering the Next Wave of IoT",
    description:
      "As the Internet of Things expands, edge computing addresses the need for faster data processing by bringing computation closer to devices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Sustainability",
    date: "October 10, 2025",
    title: "Sustainable Tech: Green Cloud and Eco-Friendly Computing",
    description:
      "As climate concerns grow, the tech industry is focusing on sustainability. Green cloud computing is becoming vital for businesses.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80",
    readTime: "4 min read",
  },
  {
    id: 6,
    category: "Mobile",
    date: "October 15, 2025",
    title: "Flutter vs React Native: Which to Choose in 2025?",
    description:
      "An in-depth comparison of the two dominant cross-platform mobile frameworks to help you make the right choice for your next app.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
    readTime: "8 min read",
  },
];

const BlogSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-[#070508] border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
              Insights & Updates
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Expert <span className="text-[#3567FF]">Insights</span>
            </h2>
            <p className="text-[#8791AD] mt-3 max-w-lg">
              Explore insightful articles, expert tips, and the latest trends in technology and digital transformation.
            </p>
          </div>
          <Link
            to="/blogs"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2D2B3B] text-[#8791AD] hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-200"
          >
            View all posts
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group glow-card rounded-2xl overflow-hidden flex flex-col no-underline"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1D28] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3567FF] text-white text-xs font-semibold tracking-wide">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-xs text-[#8791AD]">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8791AD]" />
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#3567FF] transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[#8791AD] text-sm leading-relaxed line-clamp-3 flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center gap-2 text-[#3567FF] text-sm font-semibold mt-2 group-hover:gap-3 transition-all duration-300">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
