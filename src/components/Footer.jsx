"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";

const InnovativeFooter = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { number: "1250+", label: "Projects Completed" },
    { number: "1000+", label: "Students Trained" },
    { number: "10+", label: "Institutions" },
    { number: "1", label: "Years Experience" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Robotics Workshops", href: "#workshops" },
    { name: "Lab Setup", href: "#lab-setup" },
    { name: "Custom Projects", href: "#custom" },
    { name: "Student Training", href: "#training" },
    { name: "Innovation Support", href: "#support" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-4xl font-light tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>SYNAPTIX ROBOTICS</h2>
              <p className="text-white/70 font-normal leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
                Empowering the next generation of innovators through cutting-edge robotics education,
                hands-on workshops, and custom technology solutions.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <motion.a
                href="mailto:hello@synaptixrobotics.com"
                className="flex items-center space-x-3 text-white/60 hover:text-white/90 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span className="font-light">hello@synaptixrobotics.com</span>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                className="flex items-center space-x-3 text-white/60 hover:text-white/90 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-light">+91 93904 04787</span>
              </motion.a>

              <motion.div
                className="flex items-center space-x-3 text-white/60"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-light">Warangal, Telangana, India</span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white/90">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-white/60 hover:text-white/90 transition-colors duration-300 font-light"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

   
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-thin mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-sm text-white/60 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-medium mb-4 text-white/90">
              Stay Updated with Innovation!
            </h3>
            <p className="text-white/60 font-light mb-6">
              Get the latest updates on robotics trends, workshops, and exclusive content.
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors duration-300"
              />
              <motion.button
                className="px-6 py-3 border border-white/20 rounded-lg text-white font-light hover:border-white/40 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-white/50 font-light mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>by Synaptix Team © {currentYear}</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-white/60 hover:text-white/90 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm font-light">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Ambient floating elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-2 h-2 border border-white/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
};

export default InnovativeFooter;
