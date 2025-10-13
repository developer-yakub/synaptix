'use client';

import React, { useState, useEffect } from 'react';
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
  Wifi,
  MessageCircle
} from 'lucide-react';
import {
  collection,
  query,
  orderBy,
  getDocs,
  onSnapshot
} from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Assuming db is exported from your firebase config

const STEMKitsTrainersPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('kits');
  const [kits, setKits] = useState([]);

  // Mock data (temporarily added; will be replaced by Firebase data when available)




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

  // WhatsApp phone number (replace with your actual number)
  const WHATSAPP_PHONE = '9390404787'; // e.g., '919876543210' for India

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
                  {kits.map((kit) => (
                    <motion.div
                      key={kit.id}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredCard(kit.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="relative group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                          {/* Kit Image */}
                          <div className="mb-6">
                            {kit.imageUrl ? (
                              <img
                                src={kit.imageUrl}
                                alt={kit.title}
                                className="w-full h-48 object-cover rounded-2xl border border-gray-600/50"
                              />
                            ) : (
                              <div className="w-full h-48 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-2xl flex items-center justify-center">
                                <Package className="w-16 h-16 text-gray-400" />
                              </div>
                            )}
                          </div>

                          {/* Kit Title */}
                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                            {kit.title}
                          </h3>

                          {/* Kit Description */}
                          <p className="text-emerald-300 text-base mb-6 group-hover:text-emerald-200 transition-colors duration-300 leading-relaxed">
                            {kit.description}
                          </p>

                          {/* WhatsApp Button */}
                          <a
                            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`I'm interested in the ${kit.title} STEM kit: ${kit.description.substring(0, 100)}...`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300"
                          >
                            <MessageCircle className="w-5 h-5" />
                            Contact via WhatsApp
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
                {kits.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 text-gray-400"
                  >
                    <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>No kits available at the moment. Check back soon!</p>
                  </motion.div>
                )}
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