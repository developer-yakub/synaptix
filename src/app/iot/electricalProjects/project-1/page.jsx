'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ChevronLeft,
  Zap,
  Lightbulb,
  ArrowLeft,
  Phone
} from 'lucide-react';

const ProjectDetailPage = () => {
  const router = useRouter();

  // Static data for Electrical & Electronics Project 1
  const title = "Basic Circuit Design Fundamentals with Arduino Integration";
  const subtitle = "A beginner-friendly guide to building essential circuits using Arduino for hands-on learning.";
  const categoryTitle = "Electrical & Electronics";
  const categoryIcon = Zap;

  const description = `
    <p>This project introduces fundamental circuit design principles using the Arduino platform, perfect for students and hobbyists starting their journey in electronics. By combining basic components like resistors, LEDs, and sensors with Arduino's versatile microcontroller, you'll learn to create interactive circuits that respond to real-world inputs.</p>
    
    <h3>Project Background</h3>
    <p>Understanding circuit design is the cornerstone of electrical engineering. This project demystifies Ohm's Law, Kirchhoff's rules, and breadboarding techniques through practical examples. Whether you're lighting an LED based on a button press or reading analog values from a potentiometer, these fundamentals build confidence for more advanced projects like robotics or IoT devices.</p>
    
    <h3>Core Components and Architecture</h3>
    <p>The setup uses a simple star topology with Arduino as the central node. Key elements include:</p>
    <ul>
      <li><strong>Hardware:</strong> Arduino Uno, breadboard, jumper wires, 220Ω resistor, LED, push button, 10kΩ potentiometer.</li>
      <li><strong>Software:</strong> Arduino IDE, basic C++ sketches for digital/analog I/O.</li>
      <li><strong>Principles:</strong> Voltage dividers, pull-up resistors, PWM for dimming effects.</li>
    </ul>
    
    <h3>Implementation Steps</h3>
    <p>Start by wiring a basic LED circuit on the breadboard, connecting the anode to Arduino pin 13 via a resistor and cathode to GND. Upload a blink sketch to observe the output. Next, add a button for manual control, using INPUT_PULLUP to avoid external resistors. For analog input, connect the potentiometer to A0 and map the reading to LED brightness via analogWrite(). Debug using the Serial Monitor for real-time feedback.</p>
    
    <h3>Challenges and Solutions</h3>
    <p>Common issues like flickering LEDs often stem from improper grounding. Solution: Ensure a common ground plane on the breadboard. For noisy analog readings, add a 0.1µF capacitor across the input pin to ground as a low-pass filter.</p>
    
    <h3>Future Enhancements</h3>
    <p>Scale up by integrating multiple sensors (e.g., LDR for light-dependent circuits) or transitioning to shields for modular expansion. This foundation paves the way for projects involving motors, displays, or wireless communication.</p>
    
    <p>With this project, you'll not only grasp circuit basics but also gain proficiency in prototyping, troubleshooting, and iterating—skills essential for any electronics enthusiast.</p>
  `;

  const images = [
    { src: "/images/project1-1.jpg", alt: "Circuit schematic diagram" },
    { src: "/images/project1-2.jpg", alt: "Breadboard setup overview" },
    { src: "/images/project1-3.jpg", alt: "LED and button integration" },
    { src: "/images/project1-4.jpg", alt: "Potentiometer analog input" }
  ]; // Static 4 images

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.1 }
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
        {/* Back Button */}
        <motion.button
          onClick={() => router.back()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Projects</span>
        </motion.button>

        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <categoryIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">{categoryTitle} Project</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Image Gallery - Static 4 Images */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Project Visuals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Full Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Description */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 prose prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Project Overview
          </h2>
          <div className="prose prose-lg prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-li:pl-4 prose-li:marker:text-blue-400 space-y-6">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </motion.section>

        {/* WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/1234567890?text=Hi! I'm interested in the Basic Circuit Design Fundamentals with Arduino Integration project. Can you provide more details?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-xl flex items-center gap-3 mx-auto transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Talk to Us via WhatsApp
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;