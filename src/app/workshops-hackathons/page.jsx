'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Code,
  Brain,
  Zap,
  Award,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Upload,
  Sparkles,
  FileText,
  GraduationCap
} from 'lucide-react';
import { createInquiry } from '@/lib/adminService';

const WorkshopsHackathonsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    organization: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    cityState: '',
    programType: '',
    targetAudience: '',
    numParticipants: '',
    deliveryMode: '',
    preferredDates: '',
    duration: '',
    kitsMaterials: '',
    focusAreas: [],
    otherFocus: '',
    supportNeeded: [],
    fileUploads: null,
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const offerings = [
    {
      id: 1,
      icon: GraduationCap,
      title: "School & College Workshops",
      description: "Short (1-3 day) to medium (1-4 week) programs covering robotics, embedded systems, IoT, AI fundamentals, 3D prototyping, and EV.",
      details: [
        "Hands-on sessions for students",
        "Tailored to curriculum needs"
      ],
      highlight: "Spark curiosity and build skills.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: Zap,
      title: "Hackathons & Innovation Sprints",
      description: "24-72 hour guided events where teams design, prototype, and present solutions to real problems with mentor support and judging.",
      details: [
        "Team-based challenges",
        "Prizes and recognition"
      ],
      highlight: "Foster creativity and collaboration.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Users,
      title: "Custom Corporate/Institutional Training",
      description: "Tailored workshops for teacher upskilling, lab-set up training, and industry-oriented sessions.",
      details: [
        "Professional development",
        "Customized content"
      ],
      highlight: "Empower educators and professionals.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Brain,
      title: "End-to-End Delivery",
      description: "Live online cohorts, in-person lab guidance, or hybrid formats to suit your logistics.",
      details: [
        "Flexible formats",
        "Full support included"
      ],
      highlight: "Seamless execution anywhere.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    }
  ];

  const learningObjectives = [
    {
      title: "Foundations",
      description: "Electronics basics, sensors, actuators, and controller architectures."
    },
    {
      title: "Programming & Logic",
      description: "Block-based sensor or text-based programming (Arduino, Python) and control flow for embedded systems."
    },
    {
      title: "Design & Prototyping",
      description: "CAD basics, 3D printing workflows, assembly, and iterative prototyping."
    },
    {
      title: "Problem Solving & Teamwork",
      description: "Rapid ideation, sprint planning, division of tasks, and presenting a working demo."
    },
    {
      title: "Advanced Topics (optional)",
      description: "Computer vision basics, ML on the edge, SLAM, power management, and EV controls—tailored per cohort level."
    }
  ];

  const focusAreas = [
    'Robotics Basics',
    'IoT & Sensors',
    'Embedded Systems/Microcontrollers',
    '3D Printing & Prototyping',
    'EV/Motor Control'
  ];

  const supportOptions = [
    'Mentor allocation during event',
    'Project evaluation & judging',
    'Certificates (Participation/Excellence)',
    'Logistics assistance (venue, kit packing)'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'focusAreas' || name === 'supportNeeded') {
        setFormData(prev => ({
          ...prev,
          [name]: checked ? [...prev[name], value] : prev[name].filter(i => i !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.agree) {
      setSubmitted(true);
      try {
        await createInquiry({
          inquiryType: 'workshops-hackathons',
          name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          role: formData.role,
          cityState: formData.cityState,
          programType: formData.programType,
          targetAudience: formData.targetAudience,
          numParticipants: formData.numParticipants,
          deliveryMode: formData.deliveryMode,
          preferredDates: formData.preferredDates,
          duration: formData.duration,
          kitsMaterials: formData.kitsMaterials,
          focusAreas: formData.focusAreas,
          otherFocus: formData.otherFocus,
          supportNeeded: formData.supportNeeded,
          message: `Workshops/Hackathons inquiry from ${formData.organization}`,
          subject: `Workshop/Hackathon Request - ${formData.organization}`
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again.');
        setSubmitted(false);
      }
    }
  };

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-gray-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/10 to-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-600/5 to-gray-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-medium text-gray-200">Workshops & Hackathons</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Programs for Schools, Colleges & Innovators
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed"
          >
            Synaptix Robotics runs hands-on workshops and high-energy hackathons designed to spark curiosity, develop practical skills, and convert ideas into working prototypes. 
            Our programs are delivered by experienced mentors and engineers who blend classroom theory with real project work—so participants learn by building, testing, and iterating.
          </motion.p>
        </motion.div>

        {/* Enhanced What We Offer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-gray-300" />
            What We Offer – Overview
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={offering.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(offering.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-600/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
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
                          {offering.id}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {offering.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === offering.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 mb-6"
                          >
                            {offering.details.map((detail, idx) => (
                              <motion.p
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-gray-300 text-sm flex items-start gap-3 leading-relaxed"
                              >
                                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </motion.p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <motion.div 
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-400/10 to-gray-600/10 border border-gray-400/20 rounded-xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Lightbulb className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-200 text-sm font-medium leading-relaxed">
                          {offering.highlight}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced What Participants Learn */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Brain className="w-8 h-8 text-gray-300" />
            What Participants Learn
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {learningObjectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{objective.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{objective.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Enhanced Logistics & Inclusions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <MapPin className="w-8 h-8 text-gray-300" />
            Logistics & Inclusions
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Kits & Materials: Optional student kits available (components, sensors, microcontrollers). For institution bookings, kits can be provided per participant or per team.",
              "Venue Requirements (onsite): Classroom/lab with power outlets, tables for teams, projector/Wi-Fi (we can help set up).",
              "Batch Size: Typical workshop batches: 20-40 students. Hackathon teams: 3-5 members per team. We scale per request.",
              "Safety & Compliance: All hardware training adheres to safety standards, risk assessment and insurance options available for large events."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Register/Request Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Users className="w-8 h-8 text-gray-300" />
            Register / Request a Workshop or Hackathon
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-sm">
              {/* Enhanced Basic Info */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Organization/School/College Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Organization/School/College Name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Contact Person (Full Name)</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Role/Designation</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="e.g., Teacher, Principal, Coordinator"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Phone/WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">City/State</label>
                <input
                  type="text"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="City, State"
                  required
                />
              </div>

              {/* Enhanced Program Type */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Program Type</label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="faculty">Faculty/Teacher Training</option>
                  <option value="custom">Custom Audience Program</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Target Audience/Class/Year</label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="e.g., Class 6-8, Diploma students, College 2nd year"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Approximate Number of Participants</label>
                <select
                  name="numParticipants"
                  value={formData.numParticipants}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  <option value="20-40">20-40</option>
                  <option value="40-100">40-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Delivery Mode</label>
                <select
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online (Live)</option>
                  <option value="onsite">Onsite (Live)</option>
                  <option value="hybrid">Hybrid (Online + Onsite Labs)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Dates</label>
                <input
                  type="text"
                  name="preferredDates"
                  value={formData.preferredDates}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="e.g., 15-17 Nov 2025 or Flexible"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Workshop Format Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="1 day">1 day</option>
                  <option value="2-3 days">2-3 days</option>
                  <option value="1 week">1 week</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Kits & Materials</label>
                <select
                  name="kitsMaterials"
                  value={formData.kitsMaterials}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes - Provide kits (chargeable)</option>
                  <option value="no">No - We'll provide our own materials</option>
                  <option value="quote">Need quote for kits</option>
                </select>
              </div>

              {/* Enhanced Focus Areas */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Robotics Program Basics Focus (select up to 2)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {focusAreas.map((area) => (
                    <label key={area} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="focusAreas"
                        value={area}
                        checked={formData.focusAreas.includes(area)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Other - specify below</label>
                <textarea
                  name="otherFocus"
                  value={formData.otherFocus}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Specify other focus areas..."
                />
              </div>

              {/* Enhanced Support Needed */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Support Needed</label>
                <div className="grid grid-cols-2 gap-4">
                  {supportOptions.map((support) => (
                    <label key={support} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="supportNeeded"
                        value={support}
                        checked={formData.supportNeeded.includes(support)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{support}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="rounded text-gray-300"
                  required
                />
                <span className="text-gray-200 text-sm">I agree to be contacted by Synaptix Robotics regarding this enquiry.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
              >
                {submitted ? 'Submitted!' : 'Submit Request – Our Program Manager Will Contact You'}
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-lg leading-relaxed"
                >
                  Synaptix Robotics delivers structured learning experiences that empower students to innovate confidently. Our workshops and hackathons are designed to be educational, 
                  interactive, and fun—producing measurable skills and tangible projects. Ready to run your next event? Fill the form above or click Talk to Our Expert to discuss a tailored program.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border border-gray-700/60 rounded-3xl p-12 md:p-16 overflow-hidden backdrop-blur-sm text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 via-gray-500/5 to-gray-400/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              <Zap className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Spark Innovation?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Please fill the form below and our program manager will contact you within 48 hours. (If you prefer WhatsApp, use the Talk to Expert button on the page.)</span>
            </p>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium text-lg flex items-center gap-3 mx-auto hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
              href="https://wa.me/9390404787?text=Hi%21%20I%27m%20interested%20in%20your%20workshops%20and%20hackathons%20services.%20Can%20we%20discuss%20my%20project%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Phone className="w-5 h-5" />
            Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopsHackathonsPage;
