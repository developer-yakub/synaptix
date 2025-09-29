"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Code,
  Smartphone,
  Box,
  Users,
  Zap,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Lightbulb,
  Cpu,
  Globe,
  Wrench,
  ArrowUpRight,
  Grid3X3,
} from "lucide-react";

const CustomizeSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Exceptional 3D transforms with Z-axis depth
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [40, 12, 0, -12, -40]);
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-20, -6, 0, 6, 20]);
  const z = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-350, -150, 0, -150, -350]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.65, 0.88, 1.08, 0.88, 0.65]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.85, 1, 0.85, 0]);

  // Multi-layer Z-depth parallax
  const layer1Z = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const layer2Z = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const layer1RotateY = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const layer2RotateX = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const layer3RotateZ = useTransform(scrollYProgress, [0, 1], [0, 540]);

  const services = [
    {
      id: 1,
      title: "Project Development",
      description: "Transform concepts into reality through systematic development",
      icon: Lightbulb,
      modules: ["Ideation", "Architecture", "Implementation", "Validation"],
      color: "border-white/30 hover:border-white/50",
    },
    {
      id: 2,
      title: "Digital Solutions",
      description: "Create responsive web applications and mobile experiences",
      icon: Smartphone,
      modules: ["Frontend", "Backend", "Database", "Deployment"],
      color: "border-white/20 hover:border-white/40",
    },
    {
      id: 3,
      title: "3D Prototyping",
      description: "Bring physical dimensions to your digital designs",
      icon: Box,
      modules: ["Modeling", "Simulation", "Printing", "Testing"],
      color: "border-white/25 hover:border-white/45",
    },
    {
      id: 4,
      title: "Expert Mentorship",
      description: "Accelerate your learning with personalized guidance",
      icon: Users,
      modules: ["Strategy", "Technical", "Business", "Scaling"],
      color: "border-white/20 hover:border-white/40",
    },
    {
      id: 5,
      title: "Innovation Lab",
      description: "Explore cutting-edge technologies and experimental projects",
      icon: Zap,
      modules: ["AI/ML", "IoT", "AR/VR", "Blockchain"],
      color: "border-white/30 hover:border-white/50",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations when section comes into view
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden" data-3d-section>
      {/* Exceptional 3D background with depth */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", perspective: "2000px" }}>
        {/* Primary geometric grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* 3D geometric shapes with Z-depth */}
        <motion.div
          style={{ 
            z: layer1Z,
            rotateY: layer1RotateY,
            rotateX: useTransform(scrollYProgress, [0, 1], [0, 60]),
            transformStyle: "preserve-3d"
          }}
          className="absolute top-20 left-20 w-64 h-64 border-2 border-white/15 shadow-2xl"
        />
        <motion.div
          style={{ 
            z: layer2Z,
            rotateX: layer2RotateX,
            rotateZ: useTransform(scrollYProgress, [0, 1], [0, 45]),
            transformStyle: "preserve-3d"
          }}
          className="absolute top-40 right-32 w-48 h-48 border-2 border-white/12 rotate-45 shadow-xl"
        />
        <motion.div
          style={{ 
            z: layer3Z,
            rotateZ: layer3RotateZ,
            rotateY: useTransform(scrollYProgress, [0, 1], [0, -30]),
            transformStyle: "preserve-3d"
          }}
          className="absolute bottom-32 left-16 w-56 h-56 border border-white/10 -rotate-12 shadow-lg"
        />
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
          {/* Minimalist modular title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-white/30" />
              <Grid3X3 className="w-8 h-8 text-white/60" />
              <div className="w-16 h-px bg-white/30" />
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-widest leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              CUSTOMIZE
            </h1>

            <div className="flex items-center justify-center space-x-6">
              <div className="w-8 h-8 border border-white/40 rotate-45" />
              <h1 className="text-5xl md:text-7xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                YOUR
              </h1>
              <div className="w-8 h-8 border border-white/40 rotate-45" />
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              PROJECT
            </h1>
          </motion.div>

          {/* Description with modular design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg font-normal text-white/70 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Modular development approach. Select components. Build systems.
              Scale infinitely.
            </p>

            <div className="flex items-center justify-center space-x-8 text-xs text-white/50 uppercase tracking-widest">
              <span>Design</span>
              <div className="w-2 h-2 border border-white/30 rotate-45" />
              <span>Develop</span>
              <div className="w-2 h-2 border border-white/30 rotate-45" />
              <span>Deploy</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid - Modular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isSelected = selectedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                onMouseEnter={() => setHoveredModule(service.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <motion.div
                  className={`relative h-64 border rounded-lg transition-all duration-500 ${
                    isSelected
                      ? 'border-white bg-white/5'
                      : service.color
                  }`}
                  whileHover={{ scale: 1.02 }}
                  animate={isSelected ? {
                    boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)"
                  } : {}}
                >
                  {/* Service header */}
                  <div className="p-6 border-b border-white/10">
                    <motion.div
                      className="w-10 h-10 border border-white/40 rounded flex items-center justify-center mb-4"
                      animate={isSelected ? { rotate: [0, 90, 180, 270, 360] } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <IconComponent className="w-5 h-5 text-white/60" />
                    </motion.div>

                    <h3 className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-white/70'
                    }`}>
                      {service.title}
                    </h3>

                    <p className="text-xs text-white/50 leading-tight">
                      {service.description}
                    </p>
                  </div>

                  {/* Modules grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.modules.map((module, moduleIndex) => (
                        <motion.div
                          key={moduleIndex}
                          className={`text-xs border rounded px-2 py-1 text-center transition-all duration-300 ${
                            isSelected
                              ? 'border-white/30 text-white/80'
                              : 'border-white/20 text-white/50'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {module}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Selection indicator */}
                  {isSelected && (
                    <motion.div
                      className="absolute top-2 right-2 w-3 h-3 border border-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-white rounded-full scale-50" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Configuration Panel */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              <motion.div
                className="border border-white/20 rounded-xl p-8 bg-white/2 backdrop-blur-sm"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Configuration Options */}
                  <div>
                    <h3 className="text-2xl font-thin mb-6">Configure Your Solution</h3>

                    <div className="space-y-6">
                      {services.find(s => s.id === selectedService)?.modules.map((module, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-4 border border-white/10 rounded-lg cursor-pointer hover:border-white/30 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-white/80">{module}</span>
                          <ArrowUpRight className="w-4 h-4 text-white/50" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Preview Panel */}
                  <div>
                    <h3 className="text-2xl font-thin mb-6">System Preview</h3>

                    <motion.div
                      className="aspect-square border border-white/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-center">
                        <Grid3X3 className="w-16 h-16 text-white/30 mx-auto mb-4" />
                        <p className="text-white/50 text-sm">
                          Modular system visualization
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Action modules */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.button
              className="group relative px-8 py-4 border border-white/20 rounded-full text-white font-light tracking-wide hover:border-white/40 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-4 h-4 mr-3" />
                Start Configuration
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
              View Documentation
            </motion.button>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-white/50 text-sm font-light">
              Every system is unique. Every solution is custom-built.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Configuration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black border border-white/20 rounded-xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <Grid3X3 className="w-12 h-12 text-white/60 mx-auto mb-6" />
                <h3 className="text-2xl font-thin mb-4">Begin Configuration</h3>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">
                  Let's build your custom solution together. Our experts will guide you through every step.
                </p>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 border border-white/30 rounded-lg text-white font-light hover:border-white/50 transition-colors duration-300"
                  >
                    Schedule Consultation
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 text-white/50 font-light hover:text-white/70 transition-colors duration-300"
                  >
                    Continue Exploring
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exceptional 3D floating orbs with Z-depth */}
      <motion.div
        style={{ 
          z: layer1Z,
          rotateY: layer1RotateY,
          rotateX: layer2RotateX,
          transformStyle: "preserve-3d"
        }}
        className="absolute top-1/3 right-20 w-4 h-4 bg-gradient-to-br from-white/35 to-white/10 rounded-full shadow-2xl"
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
        className="absolute bottom-1/4 left-24 w-3.5 h-3.5 bg-gradient-to-br from-white/40 to-white/15 rounded-full shadow-xl"
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

export default CustomizeSection;
