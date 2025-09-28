"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Rocket,
  GraduationCap,
  Building,
  Lightbulb,
  Globe,
  ChevronRight,
  Sparkles,
  Heart,
  Zap,
  Award,
} from "lucide-react";

const AboutSection = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [activeClient, setActiveClient] = useState(0);

  const clients = [
    {
      icon: GraduationCap,
      title: "Schools & Colleges",
      description: "Robotics workshops, labs, and training sessions.",
      color: "from-blue-500 to-blue-600",
      count: "500+",
    },
    {
      icon: Users,
      title: "Students & Innovators",
      description: "Mentorship, project building, and competition support.",
      color: "from-purple-500 to-purple-600",
      count: "2000+",
    },
    {
      icon: Building,
      title: "Industries",
      description: "IoT, automation, and prototyping solutions.",
      color: "from-green-500 to-green-600",
      count: "150+",
    },
    {
      icon: Rocket,
      title: "Startups & Entrepreneurs",
      description: "Custom product development & tech guidance.",
      color: "from-orange-500 to-orange-600",
      count: "75+",
    },
  ];

  const specializations = [
    "Robotics",
    "IoT Systems",
    "3D Design & Prototyping",
    "Embedded Systems",
    "Custom Tech Solutions",
    "Educational Programs",
  ];

  // Auto-rotate active client
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sectionHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              US
            </span>
          </motion.h1>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20"
        >
          {/* Who We Are */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            className="lg:col-span-1"
            onMouseEnter={() => setHoveredSection("who")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.div
              variants={sectionHoverVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full relative overflow-hidden"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 hover:opacity-5 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Who We Are</h2>
                </motion.div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Synaptix Robotics is a next-generation technology company
                  dedicated to inspiring innovation, empowering students, and
                  creating future-ready solutions.
                </p>

                <p className="text-gray-400 leading-relaxed mb-6">
                  We specialize in Robotics, IoT, 3D Designing & Prototyping,
                  Embedded Systems, and Custom Tech Solutions, serving both
                  educational institutions and industries.
                </p>

                <motion.div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">
                    Our Specializations:
                  </h4>
                  {specializations.map((spec, index) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {spec}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-gray-300 leading-relaxed mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  What started as a vision to make technology accessible and
                  practical for everyone has now grown into a movement that
                  bridges the gap between imagination and innovation.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* Mission */}
            <motion.div
              whileHover="hover"
              initial="rest"
              onMouseEnter={() => setHoveredSection("mission")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <motion.div
                variants={sectionHoverVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-0 hover:opacity-5 transition-opacity duration-300" />

                <div className="relative">
                  <motion.div
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold flex items-center">
                      Our Mission
                      <motion.span
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        className="ml-2"
                      >
                        🎯
                      </motion.span>
                    </h2>
                  </motion.div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    To nurture innovation at every level — from schools to
                    industries — by providing hands-on learning, advanced
                    prototyping, and customized solutions that prepare the next
                    generation for a tech-driven world.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover="hover"
              initial="rest"
              onMouseEnter={() => setHoveredSection("vision")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <motion.div
                variants={sectionHoverVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 hover:opacity-5 transition-opacity duration-300" />

                <div className="relative">
                  <motion.div
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold flex items-center">
                      Our Vision
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4,
                        }}
                        className="ml-2"
                      >
                        🌍
                      </motion.span>
                    </h2>
                  </motion.div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    A world where every student, innovator, and institution has
                    access to the right tools, mentorship, and resources to
                    transform ideas into impactful realities.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Who We Work With */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <motion.div
            className="text-center mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Who We Work With
              </span>
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                className="ml-2"
              >
                👥
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => {
              const IconComponent = client.icon;
              const isActive = index === activeClient;

              return (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-yellow-500 shadow-lg shadow-yellow-500/20"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveClient(index)}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  />

                  <div className="relative text-center">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${
                        client.color
                      } rounded-xl flex items-center justify-center mx-auto mb-4 ${
                        isActive ? "shadow-lg" : ""
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className="mb-2"
                      animate={
                        isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }
                      }
                      transition={{
                        duration: 1,
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 2,
                      }}
                    >
                      <div
                        className={`text-2xl font-bold mb-1 ${
                          isActive ? "text-yellow-400" : "text-white"
                        }`}
                      >
                        {client.count}
                      </div>
                      <h3 className="font-bold mb-2 text-white">
                        {client.title}
                      </h3>
                    </motion.div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 hover:border-purple-500 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 hover:opacity-10 transition-opacity duration-300" />

            <div className="relative">
              <motion.div
                className="flex items-center justify-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold flex items-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Join Us on Our Journey
                  </span>
                  <motion.span
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2"
                  >
                    🚀
                  </motion.span>
                </h2>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                At Synaptix Robotics, we don't just build projects — we build
                innovators, problem-solvers, and future leaders.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-5xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                Together, let's create a future where technology is not just
                consumed, but crafted by young minds and changemakers.
                <motion.span
                  className="inline-block ml-2"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  <Heart className="w-6 h-6 text-red-400 inline" />
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
