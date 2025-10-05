'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Lightbulb, 
  Zap, 
  Globe, 
  Monitor, 
  Car, 
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Users,
  Building2,
  Code,
  Cpu,
  ArrowRight
} from 'lucide-react';

const IotPortalPage = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      icon: Zap,
      title: "Electrical & Electronics Projects",
      description: "Dive into the core of engineering with practical electrical and electronics projects.",
      details: [
        "From basic circuit design to advanced embedded systems",
        "Explore solutions that build a strong foundation for every innovator"
      ],
      highlight: "Ideal for students looking to strengthen their fundamentals.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      path: "/iot/electricalProjects"
    },
    {
      id: 2,
      icon: Globe,
      title: "IoT Projects",
      description: "Step into the world of Internet of Things projects.",
      details: [
        "From smart home automation to industrial IoT monitoring",
        "Explore projects that connect the digital and physical worlds with real-time intelligence"
      ],
      highlight: "Perfect for schools, startups, and industries seeking smart solutions.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      path: "/iot/iotProjects"
    },
    {
      id: 3,
      icon: Monitor,
      title: "Web Projects",
      description: "Build dynamic web applications, user-centric portals, and applications that support innovation.",
      details: [
        "Whether it's a dashboard for IoT data, a student project platform, or modern web tech",
        "Technologies power the backbone of modern projects"
      ],
      highlight: "Perfect for learners who want to combine coding with real-world impact.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      path: "/iot/webProjects"
    },
    {
      id: 4,
      icon: Cpu,
      title: "Simulation Projects",
      description: "Test, model, and refine your ideas with simulation-based projects.",
      details: [
        "From power systems and electronics circuits to AI/ML simulations",
        "Allow you to experiment virtually before building physically"
      ],
      highlight: "Great for research students and institutions validating ideas.",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      path: "/iot/simulationProjects"
    },
    {
      id: 5,
      icon: Car,
      title: "EV (Electric Vehicle) Projects",
      description: "Ride into the future of mobility with EV-based innovations.",
      details: [
        "From BLDC motor control to battery management systems",
        "Charging stations provide project ideas and prototypes"
      ],
      highlight: "Tailored for innovators passionate about green energy & electric mobility.",
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-400",
      path: "/iot/evProjects"
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="sticky z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          onClick={() => router.push('/')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-6 left-6 z-20 flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/60 hover:text-white transition-all duration-300 backdrop-blur-xl"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Home</span>
        </motion.button>

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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-200">IoT Portal Services</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to the Synaptix Robotics IoT Portal
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-6"
          >
            Your one-stop destination for exploring, learning, and building the technologies of tomorrow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed mb-6 text-lg"
          >
            At Synaptix Robotics, we believe innovation should be accessible to everyone — whether you're a student with a fresh idea, 
            an educator guiding young minds, or an innovator looking to bring concepts into reality. This portal is designed to provide 
            you with ready-to-build ideas, detailed prototypes, project resources, and expert mentorship across multiple domains of 
            engineering and technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-lg"
          >
            Here, you'll not only discover cutting-edge projects, but also gain the skills to design, test, and deploy your own solutions. 
            With a focus on hands-on learning and practical application, our IoT Portal ensures that every idea moves beyond theory and 
            transforms into a working reality.
          </motion.p>
        </motion.div>

        {/* Enhanced What Makes This Portal Special */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            What Makes This Portal Special?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "A diverse collection of projects covering Electrical & Electronics, IoT, Web, Simulation, and EV technologies.",
              "Access to step-by-step guides, components, and real-time support to help you through your innovation journey.",
              "Opportunities to collaborate with experts, showcase your ideas, and even participate in competitions and challenges.",
              "A space where imagination meets engineering — from classroom learning to industry-ready solutions."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-gray-300 text-center text-lg mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Whether you're working on circuit designs, IoT automation, custom websites, virtual simulations, or electric mobility innovations, 
          the Synaptix IoT Portal has you covered with practical knowledge, mentorship, and complete project support.
        </motion.p>

        {/* Enhanced Category Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose a category below and take the first step toward building your innovation today!
            </h2>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
                  className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 overflow-hidden backdrop-blur-sm"
                >
                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Number */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl border border-gray-600/50 group-hover:border-gray-500/70 transition-all duration-300"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.span 
                        className="text-5xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {category.id}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Enhanced Details */}
                    <AnimatePresence>
                      {hoveredCard === category.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 mb-6"
                        >
                          {category.details.map((detail, idx) => (
                            <motion.p
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-gray-300 text-sm flex items-start gap-3 leading-relaxed"
                            >
                              <ChevronRight className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </motion.p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Enhanced Highlight */}
                    <motion.div 
                      className="flex items-start gap-3 mb-8 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-300 text-sm font-medium leading-relaxed">
                        {category.highlight}
                      </p>
                    </motion.div>

                    {/* Enhanced Explore Button */}
                    <Link href={category.path}>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-lg flex items-center justify-center gap-3 group-hover:shadow-lg transition-all duration-300"
                      >
                        Explore Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border border-gray-700/60 rounded-3xl p-12 md:p-16 overflow-hidden backdrop-blur-sm"
        >
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 text-center">
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Call-to-Action Section</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">At Synaptix Robotics, each project isn't just theory — it's hands-on, practical, and future-ready.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-xl transition-all duration-300"
            >
            <Lightbulb className="w-6 h-6" />
            Explore a category now, upload your idea, or talk to our expert to start building.
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IotPortalPage;