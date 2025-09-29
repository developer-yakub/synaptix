"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Building2, FlaskConical, Users, BookOpen, Zap } from "lucide-react";

const SynaptixLanding = () => {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Exceptional 3D with Z-axis for Pasha Bhai (Manually Typed By the way)
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [32, 9, 0, -9, -32]);
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-14, -3.5, 0, 3.5, 14]);
  const z = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-280, -110, 0, -110, -280]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.72, 0.92, 1.04, 0.92, 0.72]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.9, 1, 0.9, 0]);

  // Z-depth parallax by Rayan Khan
  const layer1Z = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const layer2Z = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, -620]);
  const layer1RotateY = useTransform(scrollYProgress, [0, 1], [0, 330]);
  const layer2RotateX = useTransform(scrollYProgress, [0, 1], [0, -330]);
  const layer3RotateZ = useTransform(scrollYProgress, [0, 1], [0, 660]);

  const offerings = [
    {
      icon: Building2,
      title: "Institution Partnership",
      description: "Complete robotics infrastructure for your institution",
      metrics: ["500+ Schools", "10K+ Students"]
    },
    {
      icon: FlaskConical,
      title: "Laboratory Solutions",
      description: "Fully equipped labs with cutting-edge equipment",
      metrics: ["Custom Design", "Latest Tech"]
    },
    {
      icon: BookOpen,
      title: "Workshop Programs",
      description: "Hands-on training sessions with expert mentors",
      metrics: ["Real Projects", "Live Coding"]
    }
  ];

  // Auto-rotate cards by Rayan Khan
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % offerings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden" data-3d-section>
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", perspective: "2000px" }}>
        {/* Animated grid with depth */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, white 1px, transparent 1px),
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px, 80px 80px, 80px 80px',
              backgroundPosition: '0 0, 0 0, 0 0'
            }}
          />
        </div>

        {/* 3D Floating geometric layer */}
        <motion.div
          style={{
            z: layer1Z,
            rotateY: layer1RotateY,
            transformStyle: "preserve-3d"
          }}
          className="absolute top-20 right-20 w-96 h-96"
        >
          <div className="w-full h-full border border-white/10 rotate-45 rounded-3xl" />
        </motion.div>

        <motion.div
          style={{
            z: layer2Z,
            rotateX: layer2RotateX,
            transformStyle: "preserve-3d"
          }}
          className="absolute bottom-32 left-20 w-80 h-80"
        >
          <div className="w-full h-full border border-white/8 -rotate-12 rounded-2xl" />
        </motion.div>

        <motion.div
          style={{
            z: layer3Z,
            rotateZ: layer3RotateZ,
            transformStyle: "preserve-3d"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        >
          <div className="w-full h-full border border-white/5 rotate-[30deg] rounded-xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          style={{
            opacity,
            rotateX,
            rotateY,
            z,
            scale,
            transformStyle: "preserve-3d"
          }}
          className="space-y-24"
        >
          {/* Hero Title Section */}
          <div className="text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {/* Minimalist Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 px-6 py-3 border border-white/20 rounded-full"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              >
                <Sparkles className="w-4 h-4 text-white/60" />
                <span className="text-sm font-light tracking-wider text-white/60 uppercase">
                  Educational Partnership
                </span>
              </motion.div>

              {/* Main Title with Geometric Accents */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-6">
                  <motion.div
                    className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    REGISTER
                  </h1>
                  <motion.div
                    className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                  />
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-2 h-2 border border-white/40 rotate-45" />
                  <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white/80" style={{ fontFamily: 'var(--font-display)' }}>
                    WITH SYNAPTIX
                  </h2>
                  <div className="w-2 h-2 border border-white/40 rotate-45" />
                </div>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xl font-light text-white/60 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Empower your institution with next-generation robotics education.
                <br />
                <span className="text-white/40">Where innovation meets learning.</span>
              </motion.p>
            </motion.div>

            {/* Offerings Cards - Horizontal Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {offerings.map((offering, index) => {
                  const Icon = offering.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative p-8 border rounded-2xl cursor-pointer transition-all duration-500 ${
                        activeCard === index
                          ? 'border-white/40 bg-white/5'
                          : 'border-white/10 bg-transparent'
                      }`}
                      onMouseEnter={() => setActiveCard(index)}
                      whileHover={{ y: -10 }}
                    >
                      {/* Card Content */}
                      <div className="space-y-6">
                        {/* Icon */}
                        <motion.div
                          className={`w-14 h-14 flex items-center justify-center border rounded-xl transition-colors duration-500 ${
                            activeCard === index ? 'border-white/50 bg-white/10' : 'border-white/20'
                          }`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className={`w-7 h-7 ${activeCard === index ? 'text-white' : 'text-white/40'}`} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl font-light tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                          {offering.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm font-light text-white/50 leading-relaxed">
                          {offering.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex items-center space-x-4 pt-4">
                          {offering.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-white/40 rounded-full" />
                              <span className="text-xs text-white/40 uppercase tracking-wider">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Active Indicator */}
                      <AnimatePresence>
                        {activeCard === index && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-center space-x-3 mt-8">
                {offerings.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className="group relative"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      activeCard === index ? 'bg-white scale-125' : 'bg-white/20'
                    }`} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <motion.button
                className="group relative px-10 py-5 border border-white/30 rounded-full text-white font-light tracking-wider overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Schedule Workshop</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="group px-10 py-5 bg-white text-black font-light tracking-wider rounded-full hover:bg-white/90 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Get Lab Quotation</span>
              </motion.button>
            </motion.div>

            {/* Stats Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center justify-center space-x-12 pt-12"
            >
              {[
                { value: "500+", label: "Institutions" },
                { value: "10K+", label: "Students Trained" },
                { value: "15+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl font-light tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Exceptional 3D floating particles with Z-depth */}
      <motion.div
        style={{
          z: layer1Z,
          rotateY: layer1RotateY,
          rotateX: layer2RotateX,
          transformStyle: "preserve-3d"
        }}
        className="absolute top-1/4 right-20 w-4 h-4 bg-gradient-to-br from-white/35 to-white/10 rounded-full shadow-2xl"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          z: layer2Z,
          rotateX: layer2RotateX,
          rotateZ: layer3RotateZ,
          transformStyle: "preserve-3d"
        }}
        className="absolute bottom-1/3 left-20 w-3.5 h-3.5 bg-gradient-to-br from-white/40 to-white/15 rounded-full shadow-xl"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        style={{
          z: layer3Z,
          rotateZ: layer3RotateZ,
          rotateY: useTransform(scrollYProgress, [0, 1], [0, -200]),
          transformStyle: "preserve-3d"
        }}
        className="absolute top-1/2 left-1/4 w-2.5 h-2.5 bg-gradient-to-br from-white/30 to-white/8 rounded-full shadow-lg"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default SynaptixLanding;