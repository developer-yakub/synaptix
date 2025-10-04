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
            <span className="text-sm font-medium text-gray-200">Drone Development</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From Ideas to Flight – We Build Drones for Every Need
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
            Whether it's for education, research, industrial inspection, agriculture, defense training, or innovation competitions, we design drones tailored to your goals. 
            Our team handles everything—from aerodynamic design and propulsion system selection to flight controllers, sensors, and payload integration. 
            We ensure that your drone isn't just built, but also tested, optimized, and ready to fly.
          </motion.p>
        </motion.div>

        {/* Enhanced What We Provide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-gray-300" />
            What We Provide
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
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
                          {service.id}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {service.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 mb-6"
                          >
                            {service.details.map((detail, idx) => (
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
                          {service.highlight}
                        </p>
                      </motion.div>
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
            className="text-center text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            With budget-friendly packages and nationwide delivery, Synaptix Robotics makes drone innovation accessible to everyone.
          </motion.p>
        </motion.section>

        {/* Enhanced Customize Your Drone - Request Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <FileText className="w-8 h-8 text-gray-300" />
            Customize Your Drone – Request Form
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-3xl p-10 backdrop-blur-sm">
              {/* Enhanced Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Full Name"
                    required
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Phone/WhatsApp</label>
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
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Organization/Institution (optional)</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Organization/Institution"
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

              {/* Enhanced Purpose */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Purpose of Drone (choose one)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {purposes.map((purpose) => (
                    <label key={purpose.value} className="flex items-center gap-3 p-3 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="radio"
                        name="purpose"
                        value={purpose.value}
                        checked={formData.purpose === purpose.value}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{purpose.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Enhanced Drone Types/Features */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Drone Type/Features Required (select one or more)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {droneTypes.map((type) => (
                    <label key={type} className="flex items-center gap-3 p-3 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="droneTypes"
                        value={type}
                        checked={formData.droneTypes.includes(type)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Enhanced Payload */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Payload Requirements</label>
                <textarea
                  name="payload"
                  value={formData.payload}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="e.g., Camera, Sprayer, Sensors, Custom Equipment"
                />
              </div>

              {/* Enhanced Flight Time */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Flight Time Expectation</label>
                <select
                  name="flightTime"
                  value={formData.flightTime}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  {flightTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Enhanced Budget */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Budget Range (approx)</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Enhanced Timeline */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Delivery Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              {/* Enhanced Notes */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Additional Notes / Custom Requirements</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Any additional details..."
                />
              </div>

              <label className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="rounded text-gray-300"
                  required
                />
                <span className="text-gray-200 text-sm">I agree to be contacted by Synaptix Robotics regarding my enquiry.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
              >
                {submitted ? 'Submitted!' : 'Submit & Talk to Our Expert'}
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-lg"
                >
                  Our team will design a drone that matches your vision. Fill out your requirements below, and we'll reach out soon!
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
              transition={{ delay: 0.7, type: "spring" }}
            >
              <Plane className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Take Flight?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">For a quick chat, click below to start a WhatsApp conversation with our expert.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-xl transition-all duration-300"
            >
            <Phone className="w-6 h-6" />
            WhatsApp/Talk to Us
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DroneDevelopmentPage;