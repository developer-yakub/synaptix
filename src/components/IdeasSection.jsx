"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Upload,
  Target,
  Lightbulb,
  Users,
  Wrench,
  Zap,
  Trophy,
  Headphones,
} from "lucide-react";

const IdeasSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Exceptional 3D scroll transforms with true depth
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [45, 15, 0, -15, -45]);
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-25, -8, 0, 8, 25]);
  const z = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-400, -200, 0, -200, -400]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.6, 0.85, 1.1, 0.85, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]);

  // Multi-layer parallax with Z-depth
  const layer1Z = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const layer2Z = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const layer1RotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const layer2RotateY = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const layer3RotateZ = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const steps = [
    {
      id: 1,
      title: "Conceptualization",
      description: "Guide you step-by-step in refining your project",
      icon: Lightbulb,
      detail: "Transform abstract ideas into concrete plans",
    },
    {
      id: 2,
      title: "Technical Support",
      description: "Provide technical support & mentorship",
      icon: Users,
      detail: "Expert guidance throughout development",
    },
    {
      id: 3,
      title: "Prototyping",
      description: "Help with design, prototyping & testing",
      icon: Wrench,
      detail: "Build and validate your innovations",
    },
    {
      id: 4,
      title: "Resources",
      description: "Connect you to the right tools and resources",
      icon: Zap,
      detail: "Access cutting-edge technology and tools",
    },
    {
      id: 5,
      title: "Showcase",
      description: "Nominate and support you in innovation competitions",
      icon: Trophy,
      detail: "Present your work to the world",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden" data-3d-section>
      {/* Exceptional 3D Background with Z-depth */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", perspective: "2000px" }}>
        {/* Layer 1 - Closest with Z-depth */}
        <motion.div
          style={{ 
            z: layer1Z,
            rotateX: layer1RotateX,
            rotateY: useTransform(scrollYProgress, [0, 1], [0, 45]),
            transformStyle: "preserve-3d"
          }}
          className="absolute top-20 left-10 w-96 h-96 border-2 border-white/15 rotate-45 shadow-2xl"
        />
        {/* Layer 2 - Middle depth */}
        <motion.div
          style={{ 
            z: layer2Z,
            rotateY: layer2RotateY,
            rotateX: useTransform(scrollYProgress, [0, 1], [0, -30]),
            transformStyle: "preserve-3d"
          }}
          className="absolute top-40 right-20 w-64 h-64 border-2 border-white/12 rotate-12 shadow-xl"
        />
        {/* Layer 3 - Farthest depth */}
        <motion.div
          style={{ 
            z: layer3Z,
            rotateZ: layer3RotateZ,
            rotateX: useTransform(scrollYProgress, [0, 1], [-20, 20]),
            transformStyle: "preserve-3d"
          }}
          className="absolute bottom-40 left-1/4 w-48 h-48 border border-white/10 -rotate-30 shadow-lg"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
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
          className="text-center mb-24"
        >
          {/* Minimalist Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-wider leading-none mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              TURN YOUR
            </h1>
            <div className="flex items-center justify-center space-x-8">
              <div className="w-24 h-px bg-white/20" />
              <h1 className="text-6xl md:text-8xl font-light tracking-wider leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                IDEAS
              </h1>
              <div className="w-24 h-px bg-white/20" />
            </div>
            <h1 className="text-6xl md:text-8xl font-light tracking-wider leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              INTO REALITY
            </h1>
          </motion.div>

          {/* Description with geometric accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl font-normal text-white/70 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Every innovation begins with a single thought. We transform your vision
              into tangible reality through systematic development and expert guidance.
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-white/50 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Upload Your Vision</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>

        {/* Process Visualization */}
        <div className="relative mb-32">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {steps.map((_, index) => (
              <motion.line
                key={index}
                x1={`${(index * 20) + 15}%`}
                y1="50%"
                x2={`${((index + 1) * 20) + 15}%`}
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={isVisible ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: index * 0.2 }}
              />
            ))}
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step number */}
                  <motion.div
                    className={`relative mb-6 mx-auto w-16 h-16 border rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'border-white bg-white/10'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={`text-sm font-mono transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`}>
                      {step.id}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border border-white/30 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`mb-4 mx-auto w-12 h-12 border rounded-lg flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'border-white/60 bg-white/5'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <IconComponent className={`w-6 h-6 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-sm font-medium mb-2 transition-all duration-500 ${
                    isActive ? 'text-white' : 'text-white/60'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/40 leading-tight">
                    {isActive ? step.detail : step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          {/* Upload zone */}
          <motion.div
            className="relative mx-auto w-80 h-40 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center mb-12 cursor-pointer group hover:border-white/40 transition-colors duration-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Upload className="w-8 h-8 text-white/40 mb-4 group-hover:text-white/60 transition-colors duration-300" />
            <p className="text-white/60 text-sm font-light">
              Drag & drop your idea file here
            </p>
            <p className="text-white/40 text-xs mt-1">
              or click to browse
            </p>
          </motion.div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.button
              className="group relative px-8 py-4 border border-white/20 rounded-full text-white font-light tracking-wide hover:border-white/40 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Headphones className="w-4 h-4 mr-3" />
                Speak with Expert
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
              Start Your Journey
            </motion.button>
          </div>

          {/* Closing message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <p className="text-white/50 text-sm font-light">
              No concept is too ambitious. Every breakthrough starts here.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Exceptional 3D floating particles with real depth */}
      <motion.div
        style={{ 
          z: layer1Z,
          rotateX: layer1RotateX,
          rotateY: layer2RotateY,
          transformStyle: "preserve-3d"
        }}
        className="absolute top-1/4 right-10 w-4 h-4 bg-gradient-to-br from-white/30 to-white/10 rounded-full shadow-2xl"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{ 
          z: layer2Z,
          rotateY: layer2RotateY,
          rotateZ: layer3RotateZ,
          transformStyle: "preserve-3d"
        }}
        className="absolute bottom-1/4 left-10 w-3 h-3 bg-gradient-to-br from-white/40 to-white/20 rounded-full shadow-xl"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        style={{ 
          z: layer3Z,
          rotateX: layer1RotateX,
          rotateZ: useTransform(scrollYProgress, [0, 1], [0, -180]),
          transformStyle: "preserve-3d"
        }}
        className="absolute top-1/2 left-1/3 w-2 h-2 bg-gradient-to-br from-white/25 to-white/5 rounded-full shadow-lg"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default IdeasSection;
