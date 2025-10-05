'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ChevronLeft,
  Zap,
  Lightbulb,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Car,
  Cpu
} from 'lucide-react';

const ProjectsListingPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine category based on pathname
  const getCategoryConfig = () => {
    switch (pathname) {
      case '/iot/electricalProjects':
        return {
          title: "Electrical & Electronics Projects",
          description: "Explore a comprehensive collection of hands-on electrical and electronics projects designed to build foundational skills and innovative solutions.",
          icon: Zap,
          projects: generateDummyProjects("Electrical & Electronics", 50) // Up to 100, demo with 50
        };
      case '/iot/iotProjects':
        return {
          title: "IoT Projects",
          description: "Discover interconnected solutions that bridge the physical and digital worlds with smart, real-time IoT innovations.",
          icon: Sparkles,
          projects: generateDummyProjects("IoT", 50)
        };
      case '/iot/webProjects':
        return {
          title: "Web Projects",
          description: "Dive into modern web development with dynamic applications, dashboards, and user-centric platforms.",
          icon: Lightbulb,
          projects: generateDummyProjects("Web", 50)
        };
      case '/iot/simulationProjects':
        return {
          title: "Simulation Projects",
          description: "Simulate and validate ideas in virtual environments, from circuits to AI models, before real-world deployment.",
          icon: Cpu,
          projects: generateDummyProjects("Simulation", 50)
        };
      case '/iot/evProjects':
        return {
          title: "EV (Electric Vehicle) Projects",
          description: "Innovate in sustainable mobility with projects on motors, batteries, and charging systems for the future of EVs.",
          icon: Car,
          projects: generateDummyProjects("EV", 50)
        };
      default:
        return {
          title: "Projects",
          description: "Explore innovative projects across various domains.",
          icon: Zap,
          projects: []
        };
    }
  };

  const categoryConfig = useMemo(() => getCategoryConfig(), [pathname]);
  const { title, description, icon: CategoryIcon, projects } = categoryConfig;

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, projects]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  const totalProjects = filteredProjects.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        stiffness: 120,
        damping: 14
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.button
            onClick={() => router.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 mx-auto transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Portal</span>
          </motion.button>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <CategoryIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">Project Listings</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {description}
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/10 text-white placeholder-white/40 transition-all duration-300 backdrop-blur-sm"
              />
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            </div>
          </motion.div>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12"
        >
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02, 
                  backgroundColor: 'rgba(255,255,255,0.05)' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl p-6 cursor-pointer overflow-hidden backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Number Badge */}
                <motion.div 
                  className="absolute -left-4 top-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-2xl font-bold text-blue-300">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 pl-16">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.subtitle}
                  </p>
                  
                  {/* Explore Arrow */}
                  <motion.div 
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Sparkles className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No projects found matching your search. Try a different keyword.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {i + 1}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* Stats or Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            Showing {startIndex + 1} to {Math.min(endIndex, totalProjects)} of {totalProjects} projects
          </p>
          <div className="flex justify-center items-center gap-4 text-gray-500">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Categories
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Dummy data generator
const generateDummyProjects = (category, count) => {
  const baseTitles = [
    "Basic Circuit Design Fundamentals",
    "Embedded Systems Integration Guide",
    "Smart Sensor Network Implementation",
    "Power Supply Optimization Techniques",
    "Microcontroller Programming Essentials",
    "Analog to Digital Conversion Projects",
    "Wireless Communication Modules",
    "LED Display Controller Build",
    "Voltage Regulator Design Challenge",
    "Capacitor Discharge Experiments"
  ];
  const extensions = [
    "with Arduino Integration",
    "Using Raspberry Pi",
    "Advanced Simulation Model",
    "Real-World Application Case",
    "Step-by-Step Tutorial",
    "Hands-On Prototype Guide",
    "Efficiency Optimization",
    "Troubleshooting Common Issues",
    "Scalable Architecture Design",
    "Future-Proof Enhancements"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${baseTitles[i % baseTitles.length]} ${extensions[Math.floor(i / baseTitles.length) % extensions.length]}`,
    subtitle: `A comprehensive project exploring ${category.toLowerCase()} concepts with practical implementation steps and code examples.`
  }));
};

export default ProjectsListingPage;