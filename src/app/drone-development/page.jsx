'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane,
  Target,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Upload,
  Sparkles,
  FileText
} from 'lucide-react';

const DroneDevelopmentPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    cityState: '',
    purpose: '',
    droneTypes: [],
    payload: '',
    flightTime: '',
    budget: '',
    timeline: '',
    notes: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      id: 1,
      icon: Users,
      title: "Educational Drones",
      description: "For schools & colleges to teach students aerial robotics.",
      details: [
        "Hands-on learning kits",
        "Safe, easy-to-fly models"
      ],
      highlight: "Ideal for classrooms and student projects.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: Target,
      title: "Industrial Drones",
      description: "For surveillance, mapping, and inspection.",
      details: [
        "High-resolution cameras",
        "Rugged, durable builds"
      ],
      highlight: "Precision tools for professionals.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Award,
      title: "Agricultural R&D Drones",
      description: "For crop monitoring and spraying.",
      details: [
        "Multi-spectral sensors",
        "Automated flight paths"
      ],
      highlight: "Boost farm efficiency with tech.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Plane,
      title: "Competition & Racing Drones",
      description: "With advanced features like obstacle avoidance and autopilot.",
      details: [
        "High-speed frames",
        "FPV systems included"
      ],
      highlight: "Built for speed and competition wins.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    }
  ];

  const droneTypes = [
    'Quadcopter',
    'Hexacopter/Octacopter',
    'Fixed Wing',
    'FPV Racing Drone',
    'Camera Integration (Photography/Video)',
    'Payload Carrying',
    'Autonomous/GPS Navigation',
    'Obstacle Avoidance Sensors',
    'Long Flight Time (30+ min)',
    'Heavy-Lift Capacity'
  ];

  const purposes = [
    { value: 'educational', label: 'Educational & Training' },
    { value: 'industrial', label: 'Industrial Inspection/Surveillance' },
    { value: 'research', label: 'Research & R&D' },
    { value: 'competition', label: 'Competition/Racing Drone' },
    { value: 'other', label: 'Other / Personal Use' }
  ];

  const flightTimes = [
    '10 min',
    '10-20 min',
    '20-40 min',
    '40+ min'
  ];

  const budgets = [
    'Under ₹25k',
    '₹25k-₹75k',
    '₹75k-₹1.5L',
    '₹1.5L-₹5L',
    'Above ₹5L'
  ];

  const timelines = [
    'ASAP',
    '2-4 weeks',
    '1-3 months',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'droneTypes') {
        setFormData(prev => ({
          ...prev,
          droneTypes: checked ? [...prev.droneTypes, value] : prev.droneTypes.filter(i => i !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
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
            <span className="text-sm text-gray-400">Drone Development</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            From Ideas to Flight – We Build Drones for Every Need 🚁✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Whether it's for education, research, industrial inspection, agriculture, defense training, or innovation competitions, we design drones tailored to your goals. 
            Our team handles everything—from aerodynamic design and propulsion system selection to flight controllers, sensors, and payload integration. 
            We ensure that your drone isn't just built, but also tested, optimized, and ready to fly.
          </motion.p>
        </motion.div>

        {/* What We Provide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Lightbulb className="w-6 h-6 text-gray-300" />
            What We Provide
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 bg-gray-800 rounded-xl ${service.iconColor} group-hover:bg-gray-700 transition-colors`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                          {service.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 mb-4"
                          >
                            {service.details.map((detail, idx) => (
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
                          {service.highlight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            With budget-friendly packages and nationwide delivery, Synaptix Robotics makes drone innovation accessible to everyone.
          </motion.p>
        </motion.section>

        {/* Customize Your Drone - Request Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            Customize Your Drone – Request Form
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone/WhatsApp</label>
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
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Organization/Institution (optional)</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Organization/Institution"
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

              {/* Purpose */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Purpose of Drone (choose one)</label>
                {purposes.map((purpose) => (
                  <label key={purpose.value} className="flex items-center gap-2 p-2">
                    <input
                      type="radio"
                      name="purpose"
                      value={purpose.value}
                      checked={formData.purpose === purpose.value}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{purpose.label}</span>
                  </label>
                ))}
              </div>

              {/* Drone Types/Features */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Drone Type/Features Required (select one or more)</label>
                {droneTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="droneTypes"
                      value={type}
                      checked={formData.droneTypes.includes(type)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{type}</span>
                  </label>
                ))}
              </div>

              {/* Payload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Payload Requirements</label>
                <textarea
                  name="payload"
                  value={formData.payload}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="e.g., Camera, Sprayer, Sensors, Custom Equipment"
                />
              </div>

              {/* Flight Time */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Flight Time Expectation</label>
                <select
                  name="flightTime"
                  value={formData.flightTime}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  {flightTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Budget Range (approx)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Delivery Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Additional Notes / Custom Requirements</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Any additional details..."
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
                <span className="text-gray-300 text-sm">I agree to be contacted by Synaptix Robotics regarding my enquiry.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                {submitted ? 'Submitted!' : 'Submit & Talk to Our Expert'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Our team will design a drone that matches your vision. Fill out your requirements below, and we'll reach out soon!
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
              <Plane className="w-6 h-6 text-gray-300" />
              <h2 className="text-2xl font-bold">Ready to Take Flight?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">For a quick chat, click below to start a WhatsApp conversation with our expert.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
              >
                📱 WhatsApp/Talk to Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DroneDevelopmentPage;