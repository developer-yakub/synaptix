"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Upload,
  Target,
  Star,
  Lightbulb,
  Users,
  Wrench,
  Zap,
  Trophy,
  HeadsetIcon,
} from "lucide-react";

const IdeasSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const features = [
    {
      id: 1,
      text: "Guide you step-by-step in refining your project",
      icon: Lightbulb,
      delay: 0.1,
    },
    {
      id: 2,
      text: "Provide technical support & mentorship",
      icon: Users,
      delay: 0.2,
    },
    {
      id: 3,
      text: "Help with design, prototyping & testing",
      icon: Wrench,
      delay: 0.3,
    },
    {
      id: 4,
      text: "Connect you to the right tools and resources",
      icon: Zap,
      delay: 0.4,
    },
    {
      id: 5,
      text: "Nominate and support you in various innovation competitions to showcase your talent at bigger platforms",
      icon: Trophy,
      delay: 0.5,
    },
  ];

  const handleUploadClick = () => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    idle: { scale: 1, boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 40px rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              TURN YOUR IDEAS INTO
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              REALITY
            </span>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            At Synaptix Robotics, we believe every student has the power to
            innovate. Whether it's a small concept or a big dream, we help you
            transform your ideas into real prototypes.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Simply upload your idea, and our expert team will:
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto mb-16"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="flex items-start space-x-4 mb-8 group cursor-pointer"
                onMouseEnter={() => setHoveredItem(feature.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex-shrink-0 relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === feature.id
                        ? "bg-green-500 shadow-lg shadow-green-500/30"
                        : "bg-green-600"
                    }`}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </div>

                  {/* Floating icon animation */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      hoveredItem === feature.id
                        ? { opacity: 1, scale: 1, rotate: [0, 10, -10, 0] }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="w-3 h-3 text-white" />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.p
                  className={`text-lg md:text-xl leading-relaxed transition-all duration-300 ${
                    hoveredItem === feature.id
                      ? "text-white font-medium"
                      : "text-gray-300"
                  }`}
                  animate={hoveredItem === feature.id ? { x: 5 } : { x: 0 }}
                >
                  {feature.text}
                  {feature.id === 5 && (
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ rotate: [0, 20, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎯
                    </motion.span>
                  )}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Upload Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            onClick={handleUploadClick}
            disabled={isUploading}
            className="relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-white via-gray-100 to-white text-black font-bold text-xl rounded-full border-2 border-transparent hover:border-gray-300 transition-all duration-300 overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
              animate={isUploading ? { x: ["-100%", "100%"] } : { x: "-100%" }}
              transition={{ duration: 1.5, repeat: isUploading ? Infinity : 0 }}
            />

            <span className="relative z-10 flex items-center">
              {isUploading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 mr-3"
                  >
                    <Headset className="w-6 h-6" />
                  </motion.div>
                  Uploading...
                </>
              ) : (
                <>
                  <HeadsetIcon className="w-6 h-6 mr-3" /> Speak With an expert
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-400 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            No idea is too small—your creativity can shape the future!
            <motion.span
              className="ml-2 inline-block"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ⭐
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Floating background elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-gray-500 to-white rounded-full opacity-30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IdeasSection;
