"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const CustomizeSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Custom Project Development",
      description:
        "Got an idea outside the box? We'll help you design, build, and refine it.",
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600",
      details: [
        "Concept ideation",
        "Technical feasibility",
        "Prototype development",
        "Testing & refinement",
      ],
    },
    {
      id: 2,
      title: "Website & App Creation",
      description:
        "From sleek portfolios to smart applications, we create tailored digital solutions.",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      details: [
        "Responsive web design",
        "Mobile app development",
        "UI/UX optimization",
        "Backend integration",
      ],
    },
    {
      id: 3,
      title: "3D Design & Prototyping",
      description:
        "Upload your model or share your vision—we'll turn it into a working prototype.",
      icon: Box,
      color: "from-green-500 to-green-600",
      details: [
        "3D modeling",
        "CAD design",
        "3D printing",
        "Physical prototypes",
      ],
    },
    {
      id: 4,
      title: "Expert Guidance & Mentorship",
      description:
        "Not sure how to start? Our experts will guide you at every stage.",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      details: [
        "One-on-one mentoring",
        "Technical consultation",
        "Project roadmapping",
        "Skill development",
      ],
    },
    {
      id: 5,
      title: "Innovation Without Limits",
      description:
        "We're not confined to robotics—if you imagine it, we'll engineer it.",
      icon: Zap,
      color: "from-red-500 to-red-600",
      details: [
        "IoT solutions",
        "AI integration",
        "Hardware design",
        "Custom electronics",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-gray-500 to-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
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
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Customize Your Project
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              with Us
            </span>
          </motion.h1>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            At Synaptix Robotics, we go beyond offering just our projects — we
            help you bring any idea to life.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
            Whether you're a student, educator, entrepreneur, or innovator, we
            provide the right expertise, tools, and guidance to make your
            concepts real.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            From robotics and IoT systems to websites, apps, and prototypes, our
            team specializes in designing and developing customized solutions
            that perfectly fit your needs.
          </p>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                💡 What We Offer:
              </span>
            </motion.h2>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Details list - shown on hover */}
                      <AnimatePresence>
                        {hoveredService === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-600 pt-4"
                          >
                            <ul className="space-y-2">
                              {service.details.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center text-sm text-gray-300"
                                >
                                  <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              💡 Why Choose Us?
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Because innovation shouldn't stop at boundaries. With Synaptix
            Robotics, you get a partner who listens, understands, and transforms
            your vision into reality.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsConsultationOpen(true)}
            className="relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-white via-gray-100 to-white text-black font-bold text-xl rounded-full border-2 border-transparent hover:border-gray-300 transition-all duration-300 overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Talk to Our Expert
            </span>
          </motion.button>
        </motion.div>

        {/* Final Message */}
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
            Get one-on-one personalized guidance today and watch your
            imagination take shape!
            <motion.span
              className="ml-2 inline-block"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Consultation Modal */}
        <AnimatePresence>
          {isConsultationOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setIsConsultationOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-gray-400 mb-6">
                    Our experts are ready to discuss your project and provide
                    personalized guidance.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg mb-4"
                  >
                    Schedule Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsConsultationOpen(false)}
                    className="w-full bg-gray-700 text-gray-300 font-semibold py-3 rounded-lg"
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomizeSection;
