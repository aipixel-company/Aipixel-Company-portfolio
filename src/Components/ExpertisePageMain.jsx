import React from "react";
import { motion } from "framer-motion";

const sectionData = {
  title: "Our Expertise",
  description:
    "We bring together innovation, technology, and strategic thinking to deliver powerful solutions that help businesses transform digitally. Our team combines deep technical knowledge with creative problem-solving to deliver value across industries.",
 
  points: [
    {
      title: "Custom Software Development",
      desc: "We build robust, scalable, and secure custom applications tailored to your business objectives — from concept to deployment.",
    },
    {
      title: "Cloud Integration & Scalability",
      desc: "Our solutions are cloud-ready and optimized for growth, ensuring performance, reliability, and seamless scalability.",
    },
    {
      title: "UX-Focused Design",
      desc: "We design digital experiences that not only look great but also enhance user engagement and drive results.",
    },
    {
      title: "Data-Driven Insights",
      desc: "We help businesses harness the power of data and analytics to make smarter decisions and predict future trends.",
    },
  ],
};

const ExpertisePageMain = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dark Horizon Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #070508 40%, #1E1D28 100%)",
        }}
      />

      {/* Subtle Accent Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_60%)]" />

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl text-center px-6 md:px-12 py-24">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#3567FF] via-[#3567FF]/80 to-[#61CE70] mb-6"
        >
          {sectionData.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#8791AD] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12"
        >
          {sectionData.description}
        </motion.p>

        

        {/* Expertise Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-200">
          {sectionData.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              className="bg-[#1E1D28]/45 border border-white/5 hover:border-[#3567FF]/30 hover:bg-[#1E1D28]/60 transition-all duration-300 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#3567FF] mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-[#8791AD] leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] bottom-[-20%] right-[-10%] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[200px] top-[-10%] left-[-10%] animate-pulse"></div>
    </section>
  );
};

export default ExpertisePageMain;
