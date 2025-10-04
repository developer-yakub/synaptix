'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  Users,
  BookOpen,
  Wrench,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Star,
  Award,
  Zap,
  Target,
  GraduationCap,
  Cpu,
  Battery,
  Wifi
} from 'lucide-react';

const STEMKitsTrainersPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('kits');

  const categories = [
    {
      id: 1,
      icon: Cpu,
      title: "Electronics & IoT Kits",
      description: "Complete learning packages for electronics fundamentals and IoT applications.",
      features: [
        "Arduino/ Raspberry Pi based projects",
        "Sensors and actuators included",
        "Step-by-step learning modules",
        "IoT connectivity components"
      ],
      highlight: "Perfect for beginners and intermediate learners",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      icon: Battery,
      title: "Renewable Energy Kits",
      description: "Hands-on kits for understanding solar, wind, and other renewable energy sources.",
      features: [
        "Solar panel modules",
        "Wind turbine components",
        "Battery storage systems",
        "Energy monitoring tools"
      ],
      highlight: "Learn sustainable energy solutions",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      id: 3,
      icon: Wifi,
      title: "Robotics & Automation",
      description: "Comprehensive robotics kits for building and programming autonomous systems.",
      features: [
        "Motor controllers and sensors",
        "Programming interfaces",
        "Mechanical components",
        "AI integration modules"
      ],
      highlight: "Build smart robotic solutions",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      id: 4,
      icon: Target,
      title: "STEM Competition Kits",
      features: [
        "Competition-grade components",
        "Advanced sensor arrays",
        "Professional documentation",
        "Mentorship support"
      ],
      highlight: "Excel in STEM competitions",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400"
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      expertise: "Electronics & IoT",
      experience: "15+ years",
      certifications: ["IEEE Certified", "IoT Specialist"],
      image: "/api/placeholder/150/150",
      description: "Expert in embedded systems and IoT applications with extensive industry experience."
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      expertise: "Robotics & AI",
      experience: "20+ years",
      certifications: ["PhD Robotics", "AI Researcher"],
      image: "/api/placeholder/150/150",
      description: "Leading researcher in autonomous systems and machine learning applications."
    },
    {
      id: 3,
      name: "Eng. Priya Sharma",
      expertise: "Renewable Energy",
      experience: "12+ years",
      certifications: ["Energy Systems Expert", "Green Tech Certified"],
      image: "/api/placeholder/150/150",
      description: "Specialist in sustainable energy solutions and environmental engineering."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      expertise: "STEM Education",
      experience: "18+ years",
      certifications: ["Education Technology", "STEM Curriculum Developer"],
      image: "/api/placeholder/150/150",
      description: "Pioneer in developing innovative STEM teaching methodologies and curricula."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-800/60 to-green-700/60 border border-emerald-600/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-200">STEM Education Solutions</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-green-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empowering Tomorrow's Innovators Today
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-emerald-300 text-xl max-w-5xl mx-auto leading-relaxed mb-6"
          >
            Comprehensive STEM education solutions designed to inspire, educate, and prepare the next generation of scientists, engineers, and innovators.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-lg"
          >
            From interactive learning kits to expert-led training programs, we provide everything needed to build a strong foundation in Science, Technology, Engineering, and Mathematics.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-2 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('kits')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'kits'
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Learning Kits
              </button>
              <button
                onClick={() => setActiveTab('trainers')}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'trainers'
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Expert Trainers
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'kits' && (
              <motion.div
                key="kits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                  Comprehensive STEM Learning Kits
                </motion.h2>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={category.id}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredCard(category.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="relative group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-6">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="p-4 bg-gradient-to-br from-emerald-800/80 to-green-700/80 rounded-2xl border border-emerald-600/50 group-hover:border-emerald-500/70 transition-all duration-300"
                              >
                                <Icon className="w-8 h-8 text-white" />
                              </motion.div>
                              <motion.span
                                className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-emerald-200 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                              >
                                {category.id}
                              </motion.span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                              {category.title}
                            </h3>

                            <p className="text-emerald-300 text-base mb-6 group-hover:text-emerald-200 transition-colors duration-300 leading-relaxed">
                              {category.description}
                            </p>

                            <AnimatePresence>
                              {hoveredCard === category.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="space-y-3 mb-6"
                                >
                                  {category.features.map((feature, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-3"
                                    >
                                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                      <span className="text-emerald-300 text-sm leading-relaxed">{feature}</span>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <motion.div
                              className="flex items-start gap-3 mb-8 p-4 bg-gradient-to-r from-emerald-400/10 to-green-500/10 border border-emerald-400/20 rounded-xl"
                              whileHover={{ scale: 1.02 }}
                            >
                              <Star className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <p className="text-emerald-300 text-sm font-medium leading-relaxed">
                                {category.highlight}
                              </p>
                            </motion.div>

                            <motion.button
                              whileHover={{ scale: 1.05, backgroundColor: '#10b981' }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 group-hover:shadow-lg transition-all duration-300"
                            >
                              Explore Kit Details
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'trainers' && (
              <motion.div
                key="trainers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                  Meet Our Expert STEM Trainers
                </motion.h2>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {trainers.map((trainer) => (
                    <motion.div
                      key={trainer.id}
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03, y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 overflow-hidden backdrop-blur-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 text-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-24 h-24 bg-gradient-to-br from-emerald-800/80 to-green-700/80 rounded-full mx-auto mb-6 border border-emerald-600/50 flex items-center justify-center"
                          >
                            <GraduationCap className="w-12 h-12 text-white" />
                          </motion.div>

                          <h3 className="text-xl font-bold mb-2 text-white">{trainer.name}</h3>
                          <p className="text-emerald-400 font-medium mb-2">{trainer.expertise}</p>
                          <p className="text-gray-400 text-sm mb-4">{trainer.experience} experience</p>

                          <div className="flex flex-wrap gap-2 mb-4 justify-center">
                            {trainer.certifications.map((cert, idx) => (
                              <span key={idx} className="px-3 py-1 bg-emerald-800/60 border border-emerald-600/50 rounded-lg text-xs text-emerald-300">
                                {cert}
                              </span>
                            ))}
                          </div>

                          <p className="text-gray-300 text-sm leading-relaxed mb-6">{trainer.description}</p>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                          >
                            View Profile
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative bg-gradient-to-br from-emerald-900/90 via-green-800/80 to-emerald-900/90 border border-emerald-700/60 rounded-3xl p-12 md:p-16 overflow-hidden backdrop-blur-sm text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-emerald-400/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <Award className="w-8 h-8 text-emerald-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">Ready to Start Your STEM Journey?</h2>
            </motion.div>
            <p className="text-emerald-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Choose from our comprehensive kits or connect with our expert trainers to begin building tomorrow's innovations today.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#10b981' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold text-xl flex items-center gap-3 hover:shadow-xl transition-all duration-300"
              >
            <BookOpen className="w-6 h-6" />
            Browse All Kits
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-emerald-600/70 bg-emerald-800/60 text-emerald-200 rounded-xl font-bold text-xl flex items-center gap-3 hover:border-emerald-500 hover:bg-emerald-800/80 transition-all duration-300"
              >
            <Users className="w-6 h-6" />
            Meet Our Trainers
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default STEMKitsTrainersPage;
