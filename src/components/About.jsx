"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  GraduationCap,
  Building,
  Rocket,
  Minus,
  Plus,
} from "lucide-react";

const AboutSection = () => {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const metrics = [
    { value: "500+", label: "Schools & Colleges", desc: "Educational partnerships" },
    { value: "2000+", label: "Students & Innovators", desc: "Minds empowered" },
    { value: "150+", label: "Industries", desc: "Corporate collaborations" },
    { value: "75+", label: "Startups & Entrepreneurs", desc: "Innovation ventures" },
  ];

  const specializations = [
    "Robotics",
    "IoT Systems",
    "3D Design & Prototyping",
    "Embedded Systems",
    "Custom Tech Solutions",
    "Educational Programs",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

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
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Rotating geometric shapes */}
        <motion.div
          style={{ rotateY }}
          className="absolute top-32 left-16 w-80 h-80 border border-white/5"
        />
        <motion.div
          style={{ rotateY: useTransform(scrollYProgress, [0, 1], [10, -10]) }}
          className="absolute top-40 right-24 w-64 h-64 border border-white/3 rotate-45"
        />
        <motion.div
          style={{ rotateY: useTransform(scrollYProgress, [0, 1], [-5, 20]) }}
          className="absolute bottom-40 left-20 w-48 h-48 border border-white/2 -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div style={{ opacity }} className="text-center mb-32">
          {/* Minimalist title design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center space-x-8 mb-8">
              <Minus className="w-12 h-px bg-white/30" />
              <h1 className="text-6xl md:text-8xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                ABOUT
              </h1>
              <Minus className="w-12 h-px bg-white/30" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-lg font-light text-white/70 leading-relaxed max-w-2xl mx-auto">
                Next-generation technology company bridging imagination and innovation
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core information grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-thin mb-8">Identity</h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <p>
                  Synaptix Robotics represents the convergence of technology and creativity.
                  We exist at the intersection of innovation and education.
                </p>
                <p>
                  Our foundation rests on the belief that every technological advancement
                  begins with human curiosity and ends with transformative impact.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-6 text-white/90">Specializations</h3>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-sm text-white/60 font-light tracking-wide"
                  >
                    {spec}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-thin mb-8">Purpose</h2>
              <div className="space-y-8">
                <div className="border-l border-white/20 pl-8">
                  <h3 className="text-lg font-medium mb-4 text-white/90">Mission</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    To democratize technological innovation by providing comprehensive
                    solutions that empower educational institutions, industries, and individuals
                    to create future-ready technologies.
                  </p>
                </div>

                <div className="border-l border-white/20 pl-8">
                  <h3 className="text-lg font-medium mb-4 text-white/90">Vision</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    A world where technological boundaries cease to exist, and every
                    innovative idea finds its path to realization through accessible,
                    scalable, and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin tracking-wider mb-4">Impact</h2>
            <p className="text-white/50 font-light">Quantitative transformation</p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const isActive = selectedMetric === index;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative cursor-pointer"
                  onClick={() => setSelectedMetric(index)}
                >
                  <motion.div
                    className={`relative border rounded-lg p-8 transition-all duration-500 ${
                      isActive
                        ? 'border-white bg-white/5'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -inset-1 border border-white/30 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <div className="text-center">
                      <motion.div
                        className={`text-4xl font-thin mb-4 transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-white/60'
                        }`}
                        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {metric.value}
                      </motion.div>

                      <h3 className={`text-sm font-medium mb-2 transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/70'
                      }`}>
                        {metric.label}
                      </h3>

                      <p className="text-xs text-white/50 font-light">
                        {metric.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="border border-white/20 rounded-2xl p-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-thin mb-8">Future Forward</h2>
              <p className="text-lg font-light text-white/70 leading-relaxed mb-8">
                We don't merely participate in technological evolution—we drive it.
                Every project, every partnership, every innovation contributes to
                a future where technology serves humanity's highest aspirations.
              </p>

              <div className="flex items-center justify-center space-x-2 text-sm text-white/50 uppercase tracking-widest">
                <Rocket className="w-4 h-4" />
                <span>Building Tomorrow</span>
                <Rocket className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        className="absolute top-1/4 right-32 w-2 h-2 border border-white/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-32 w-1 h-1 border border-white/30 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default AboutSection;
