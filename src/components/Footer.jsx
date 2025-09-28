"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
  Heart,
  Code,
  Zap,
  Users,
  BookOpen,
  Award,
  ChevronRight,
  Send,
  Sparkles,
  Building,
  GraduationCap,
  Lightbulb,
  Cpu,
} from "lucide-react";

const InnovativeFooter = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(true);
  const [currentYear] = useState(new Date().getFullYear());
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    students: 0,
    schools: 0,
    years: 0,
  });

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-500/20",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-300",
      bg: "hover:bg-blue-400/20",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
      bg: "hover:bg-pink-500/20",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-600/20",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-400",
      bg: "hover:bg-red-500/20",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#", icon: Users },
    { name: "Our Services", href: "#", icon: Zap },
    { name: "Gallery", href: "#", icon: BookOpen },
    { name: "Contact", href: "#", icon: Mail },
    { name: "Career", href: "#", icon: Award },
  ];

  const services = [
    { name: "Robotics Workshops", href: "#", icon: Cpu },
    { name: "Lab Setup", href: "#", icon: Building },
    { name: "Custom Projects", href: "#", icon: Lightbulb },
    { name: "Student Training", href: "#", icon: GraduationCap },
    { name: "Innovation Support", href: "#", icon: Sparkles },
  ];

  const finalStats = {
    projects: 1250,
    students: 5000,
    schools: 500,
    years: 5,
  };

  // Animate stats on component mount
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    Object.keys(finalStats).forEach((key) => {
      let currentValue = 0;
      const increment = finalStats[key] / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalStats[key]) {
          currentValue = finalStats[key];
          clearInterval(timer);
        }

        setAnimatedStats((prev) => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }));
      }, stepDuration);
    });
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter signup
    setEmail("");
    // Add success animation here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      y: -2,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
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

      {/* Top section with wave */}
      <div className="relative">
        <svg
          className="w-full h-20 text-gray-800"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              key: "projects",
              label: "Projects Completed",
              suffix: "+",
              icon: Lightbulb,
              color: "from-blue-500 to-blue-600",
            },
            {
              key: "students",
              label: "Students Trained",
              suffix: "+",
              icon: GraduationCap,
              color: "from-green-500 to-green-600",
            },
            {
              key: "schools",
              label: "Institutions",
              suffix: "+",
              icon: Building,
              color: "from-purple-500 to-purple-600",
            },
            {
              key: "years",
              label: "Years Experience",
              suffix: "",
              icon: Award,
              color: "from-orange-500 to-orange-600",
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.key}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: index * 0.5,
                  }}
                >
                  {animatedStats[stat.key]}
                  {stat.suffix}
                </motion.div>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            className="lg:col-span-2"
            onMouseEnter={() => setHoveredSection("company")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <motion.div
              variants={sectionHoverVariants}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 hover:opacity-5 transition-opacity duration-300" />

              <div className="relative">
                <motion.h3
                  className="text-3xl font-bold mb-4 flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    SYNAPTIX
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="ml-2"
                  >
                    <Cpu className="w-8 h-8 text-blue-400" />
                  </motion.span>
                </motion.h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering the next generation of innovators through
                  cutting-edge robotics education, hands-on workshops, and
                  custom technology solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    hello@synaptixrobotics.com
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    +91 98765 43210
                  </motion.div>
                  <motion.div
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    Warangal, Telangana, India
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredSection("links")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm h-full">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-400" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4 mr-3 group-hover:text-blue-400 transition-colors duration-300" />
                      {link.name}
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredSection("services")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm h-full">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.a
                      key={service.name}
                      href={service.href}
                      className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4 mr-3 group-hover:text-yellow-400 transition-colors duration-300" />
                      <span className="text-sm">{service.name}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm mb-12 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <motion.h3
                className="text-2xl font-bold mb-2 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
                Stay Updated with Innovation!
              </motion.h3>
              <p className="text-gray-300">
                Get the latest updates on robotics trends, workshops, and
                exclusive content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                whileFocus={{ scale: 1.02 }}
                className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm min-w-72"
              />
              <motion.button
                onClick={handleNewsletterSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <p className="text-gray-400 flex items-center">
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-2"
              >
                <Heart className="w-5 h-5 text-red-400" />
              </motion.span>
              by Synaptix Team © {currentYear}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-10 h-10 bg-gray-700/50 rounded-lg border border-gray-600/50 flex items-center justify-center text-gray-400 transition-all duration-300 backdrop-blur-sm ${social.color} ${social.bg}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Scroll to Top */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ArrowUp className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </footer>
  );
};

export default InnovativeFooter;
