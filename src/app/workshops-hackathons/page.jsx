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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      setSubmitted(true);
      // Here you would typically send the form data to a backend
      console.log('Form submitted:', formData);
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <Sparkles className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-400">Workshops & Hackathons</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Programs for Schools, Colleges & Innovators 🚀✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Synaptix Robotics runs hands-on workshops and high-energy hackathons designed to spark curiosity, develop practical skills, and convert ideas into working prototypes. 
            Our programs are delivered by experienced mentors and engineers who blend classroom theory with real project work—so participants learn by building, testing, and iterating.
          </motion.p>
        </motion.div>

        {/* What We Offer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Lightbulb className="w-6 h-6 text-gray-300" />
            What We Offer – Overview
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 bg-gray-800 rounded-xl ${offering.iconColor} group-hover:bg-gray-700 transition-colors`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                          {offering.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                        {offering.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {offering.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === offering.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 mb-4"
                          >
                            {offering.details.map((detail, idx) => (
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
                      <div className="flex items-start gap-2 mb-4">
                        <Lightbulb className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm font-medium">
                          {offering.highlight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* What Participants Learn */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Brain className="w-6 h-6 text-gray-300" />
            What Participants Learn
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {learningObjectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{objective.title}</h3>
                <p className="text-gray-400 text-sm">{objective.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Logistics & Inclusions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <MapPin className="w-6 h-6 text-gray-300" />
            Logistics & Inclusions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Register/Request Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Users className="w-6 h-6 text-gray-300" />
            Register / Request a Workshop or Hackathon
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              {/* Basic Info */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Organization/School/College Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Organization/School/College Name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Contact Person (Full Name)</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Role/Designation</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="e.g., Teacher, Principal, Coordinator"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone/WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">City/State</label>
                <input
                  type="text"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="City, State"
                  required
                />
              </div>

              {/* Program Type */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Program Type</label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="faculty">Faculty/Teacher Training</option>
                  <option value="custom">Custom Audience Program</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Target Audience/Class/Year</label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="e.g., Class 6-8, Diploma students, College 2nd year"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Approximate Number of Participants</label>
                <select
                  name="numParticipants"
                  value={formData.numParticipants}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="20-40">20-40</option>
                  <option value="40-100">40-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Delivery Mode</label>
                <select
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online (Live)</option>
                  <option value="onsite">Onsite (Live)</option>
                  <option value="hybrid">Hybrid (Online + Onsite Labs)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Dates</label>
                <input
                  type="text"
                  name="preferredDates"
                  value={formData.preferredDates}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="e.g., 15-17 Nov 2025 or Flexible"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Workshop Format Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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
                <label className="block text-sm font-medium mb-2 text-gray-300">Kits & Materials</label>
                <select
                  name="kitsMaterials"
                  value={formData.kitsMaterials}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes - Provide kits (chargeable)</option>
                  <option value="no">No - We'll provide our own materials</option>
                  <option value="quote">Need quote for kits</option>
                </select>
              </div>

              {/* Focus Areas */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Robotics Program Basics Focus (select up to 2)</label>
                {focusAreas.map((area) => (
                  <label key={area} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="focusAreas"
                      value={area}
                      checked={formData.focusAreas.includes(area)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{area}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Other - specify below</label>
                <textarea
                  name="otherFocus"
                  value={formData.otherFocus}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Specify other focus areas..."
                />
              </div>

              {/* Support Needed */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Support Needed</label>
                {supportOptions.map((support) => (
                  <label key={support} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="supportNeeded"
                      value={support}
                      checked={formData.supportNeeded.includes(support)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{support}</span>
                  </label>
                ))}
              </div>

              {/* File Uploads */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Post-event mentorship (proposal/winners doc/student list)</label>
                <input
                  type="file"
                  name="fileUploads"
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="rounded"
                  required
                />
                <span className="text-gray-300 text-sm">I agree to be contacted by Synaptix Robotics regarding this enquiry.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                {submitted ? 'Submitted!' : 'Submit Request – Our Program Manager Will Contact You (CTA)'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Synaptix Robotics delivers structured learning experiences that empower students to innovate confidently. Our workshops and hackathons are designed to be educational, 
                  interactive, and fun—producing measurable skills and tangible projects. Ready to run your next event? Fill the form above or click Talk to Our Expert to discuss a tailored program.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Zap className="w-6 h-6 text-gray-300" />
              <h2 className="text-2xl font-bold">Ready to Spark Innovation?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Please fill the form below and our program manager will contact you within 48 hours. (If you prefer WhatsApp, use the Talk to Expert button on the page.)</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
              >
                📱 Talk to Our Expert (WhatsApp)
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopsHackathonsPage;