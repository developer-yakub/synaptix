'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Zap, 
  Globe, 
  Monitor, 
  Car, 
  ChevronRight,
  Sparkles,
  Users,
  Building2,
  Code,
  Cpu,
  ArrowRight
} from 'lucide-react';

const IotPortalPage = () => {
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
      iconColor: "text-blue-400"
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
      iconColor: "text-purple-400"
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
      iconColor: "text-green-400"
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
      iconColor: "text-orange-400"
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
      iconColor: "text-yellow-400"
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">IoT Portal Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Welcome to the Synaptix Robotics IoT Portal 🤖⚡
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Your one-stop destination for exploring, learning, and building the technologies of tomorrow.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6"
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
            className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Here, you'll not only discover cutting-edge projects, but also gain the skills to design, test, and deploy your own solutions. 
            With a focus on hands-on learning and practical application, our IoT Portal ensures that every idea moves beyond theory and 
            transforms into a working reality.
          </motion.p>
        </motion.div>

        {/* What Makes This Portal Special */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            What Makes This Portal Special?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-gray-400 mb-4"
        >
          Whether you're working on circuit designs, IoT automation, custom websites, virtual simulations, or electric mobility innovations, 
          the Synaptix IoT Portal has you covered with practical knowledge, mentorship, and complete project support.
        </motion.p>

        {/* Category Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-3xl font-bold">
              Choose a category below and take the first step toward building your innovation today! 🚀
            </h2>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
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
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Number */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 bg-gray-800 rounded-xl ${category.iconColor} group-hover:bg-gray-700 transition-colors`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                        {category.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                      {category.description}
                    </p>

                    {/* Details */}
                    <AnimatePresence>
                      {hoveredCard === category.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 mb-4"
                        >
                          {category.details.map((detail, idx) => (
                            <motion.p
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-gray-400 text-sm flex items-start gap-2"
                            >
                              <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </motion.p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Highlight */}
                    <div className="flex items-start gap-2 mb-4">
                      <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-400 text-sm font-medium">
                        {category.highlight}
                      </p>
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-white text-black rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:bg-gray-100 transition-colors"
                    >
                      Explore Projects
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold">Call-to-Action Section</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              <span className="font-semibold text-white">At Synaptix Robotics, each project isn't just theory — it's hands-on, practical, and future-ready.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              💡 Explore a category now, upload your idea, or talk to our expert to start building.
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IotPortalPage;