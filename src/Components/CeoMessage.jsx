import React from "react";
import { motion } from "framer-motion";
import ceo from "../assets/ceo.jpeg";

const CeoMessage = () => {
  const ceoDetails = {
    name: "Mian Usman",
    title: "Founder & CEO, AIPIXAL",
    message:
      "Welcome to AIPIXAL — where intelligence meets innovation. We believe in transforming ideas into digital realities through the power of artificial intelligence, automation, and design excellence. Our vision is to empower businesses globally with smart, scalable, and future-driven technology solutions. Every line of code we write, every system we build, and every experience we design is guided by one mission — shaping the future of intelligent software.",
    image: ceo,
  };

  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Subtle glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-700/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
      >
        CEO’s Message
      </motion.h1>

      {/* CEO Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10 max-w-5xl w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
      >
        {/* CEO Image */}
        <motion.img
          src={ceoDetails.image}
          alt={ceoDetails.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />

        {/* CEO Text */}
        <div className="text-center md:text-left text-gray-200 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {ceoDetails.name}
          </h2>
          <p className="text-blue-400 text-sm md:text-base italic">
            {ceoDetails.title}
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            {ceoDetails.message}
          </p>
        </div>
      </motion.div>

      {/* Bottom accent gradient */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#010133] via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default CeoMessage;
