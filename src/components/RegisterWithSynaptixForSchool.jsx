"use client";
import React from "react";
import { motion } from "framer-motion";

const SynaptixLanding = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 40px rgba(255, 255, 255, 0.1)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Robot placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Placeholder content */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg"></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Robot Visualization Area
                </p>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-8 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="block text-white mb-2">REGISTER WITH</span>
                <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  SYNAPTIX
                </span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                <p>
                  <span className="font-semibold text-white">
                    BRING INNOVATION TO YOUR SCHOOL!
                  </span>
                </p>
                <p>
                  PARTNER WITH US TO INSPIRE STUDENTS THROUGH HANDS-ON ROBOTICS
                  WORKSHOPS
                </p>
                <p>
                  OR SET UP A FULLY EQUIPPED ROBOTICS LAB TAILORED TO YOUR
                  INSTITUTION'S NEEDS.
                </p>
              </motion.div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg"
              >
                BOOK A WORKSHOP
              </motion.button>

              <motion.button
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-300 text-lg shadow-lg border border-gray-500"
              >
                GET QUOTATION FOR ROBOTIC LAB
              </motion.button>
            </motion.div>

            {/* Additional interactive elements */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-6 pt-8"
            >
              {["Innovation", "Education", "Technology"].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-2 text-sm text-gray-400"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-white rounded-full" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default SynaptixLanding;
