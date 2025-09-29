"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Grid3X3 } from "lucide-react";

const SynaptixLanding = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced geometric background */}
      <div className="absolute inset-0">
        {/* Primary grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Rotating geometric shapes */}
        <motion.div
          style={{ rotateX }}
          className="absolute top-32 left-16 w-96 h-96 border border-white/3"
        />
        <motion.div
          style={{ rotateX: useTransform(scrollYProgress, [0, 1], [5, -5]) }}
          className="absolute top-48 right-32 w-80 h-80 border border-white/2 rotate-45"
        />
        <motion.div
          style={{ rotateX: useTransform(scrollYProgress, [0, 1], [-8, 15]) }}
          className="absolute bottom-40 left-24 w-72 h-72 border border-white/4 -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div style={{ opacity }} className="grid lg:grid-cols-2 gap-24 items-center min-h-screen">
          {/* Left side - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative border border-white/20 rounded-2xl p-12 h-[500px] flex flex-col items-center justify-center">
              {/* Modular grid visualization */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-16 h-16 border border-white/30 rounded flex items-center justify-center"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.6)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 border border-white/40 rounded" />
                  </motion.div>
                ))}
              </div>

              <Grid3X3 className="w-12 h-12 text-white/40 mb-6" />

              <p className="text-white/60 text-sm font-light text-center max-w-xs">
                System architecture visualization.
                Modular design principles in action.
              </p>

              {/* Connection lines animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1={`${20 + i * 15}%`}
                    y1={`${20 + (i % 2) * 60}%`}
                    x2={`${35 + i * 15}%`}
                    y2={`${40 + (i % 2) * 40}%`}
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12 order-1 lg:order-2"
          >
            {/* Title */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-px h-16 bg-white/30" />
                  <h1 className="text-5xl md:text-7xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    REGISTER
                  </h1>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-px h-12 bg-white/30" />
                  <h1 className="text-4xl md:text-6xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    WITH SYNAPTIX
                  </h1>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="border-l border-white/30 pl-6">
                  <p className="text-lg font-light text-white/70 leading-relaxed">
                    Bring innovation to your institution.
                    Transform learning through technology.
                  </p>
                </div>

                <div className="border-l border-white/30 pl-6">
                  <p className="text-lg font-light text-white/70 leading-relaxed">
                    Partner with us for hands-on robotics workshops
                    and fully equipped laboratory solutions.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                className="group relative px-8 py-4 border border-white/20 rounded-full text-white font-light tracking-wide hover:border-white/40 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Book Workshop
                  <ArrowRight className="w-4 h-4 ml-3" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white text-black font-light tracking-wide rounded-full hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Lab Quotation
              </motion.button>
            </motion.div>

            {/* Core values */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-center justify-center space-x-8 pt-8"
            >
              {["Innovation", "Education", "Technology"].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-2 text-sm text-white/50 uppercase tracking-wider"
                  whileHover={{ scale: 1.1, color: "rgba(255,255,255,0.9)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 border border-white/40 rounded-full" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient floating elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-2 h-2 border border-white/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-1.5 h-1.5 border border-white/40 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default SynaptixLanding;
