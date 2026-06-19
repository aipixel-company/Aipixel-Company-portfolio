import React from "react";
import { motion } from "framer-motion";

function AboutSlider() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh] px-6">
      {/* Dark Theme Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #070508 40%, rgba(53, 103, 255, 0.12) 100%)",
        }}
      />

      {/* Soft Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#3567FF]/20 via-[#61CE70]/5 to-transparent blur-[160px] rounded-full pointer-events-none"
      />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-gray-200 relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 gradient-text-accent bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          Redefining Innovation with Artificial Intelligence
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#8791AD] leading-relaxed max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          At <span className="font-semibold text-white">AIPixal</span>, we
          empower businesses to shape the digital future with human-centered
          design, AI-powered automation, and intelligent experiences that
          transform industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="space-y-3"
        >
          <p className="text-[#8791AD] italic border-l-4 border-[#3567FF] pl-4 text-base md:text-lg">
            “Empowering industries through intelligence, innovation, and impact.”
          </p>
          <p className="text-[#8791AD]/70 text-sm md:text-base">
            Delivering the future — one pixal of intelligence at a time.
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#070508] via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

export default AboutSlider;
