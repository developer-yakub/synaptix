'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Globe,
  Zap,
  Users,
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
  Layout,
  Smartphone,
  ShoppingCart,
  Database
} from 'lucide-react';
import { createInquiry } from '@/lib/adminService';

const SoftwareWebDevelopmentPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    services: [],
    projectDescription: '',
    features: [],
    techStack: '',
    targetUsers: '',
    expectedUsers: '',
    designPreferences: '',
    logoBrand: false,
    hosting: '',
    timeline: '',
    budget: '',
    maintenance: '',
    files: null,
    referral: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const whyChoose = [
    {
      id: 1,
      icon: Award,
      title: "Tailored Solutions for Businesses & Enterprises",
      description: "Professional product packages and clear pricing (SMBs + Enterprises).",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Clean, Modern Design + Robust Engineering Best Practices",
      description: "Budget-friendly packages and clear pricing.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Zap,
      title: "End-to-End Delivery",
      description: "Design, development, hosting, and maintenance.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Users,
      title: "Post-Launch Support & Training",
      description: "CRM your team, IoT, and third-party app confidently.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'services' || name === 'features') {
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
    if (!formData.agree) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await createInquiry({
        name: formData.fullName,
        email: formData.email,
        subject: `Web Development Project - ${formData.fullName}`,
        message: `
Company/Business Name: ${formData.fullName}
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
City/State: ${formData.cityState}
Services: ${formData.services.join(', ')}
Project Description: ${formData.projectDescription}
Features: ${formData.features.join(', ')}
Tech Stack: ${formData.techStack || 'Not specified'}
Target Users: ${formData.targetUsers}
Expected Users: ${formData.expectedUsers}
Design Preferences: ${formData.designPreferences || 'None specified'}
Logo/Brand Assets: ${formData.logoBrand ? 'Yes - ready' : 'No - need help'}
Hosting: ${formData.hosting || 'Not specified'}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Maintenance: ${formData.maintenance || 'Not specified'}
Referral: ${formData.referral}
        `,
        inquiryType: 'web-development',
        cityState: formData.cityState
      });

      setSubmitMessage("Thank you for your project inquiry! We've received your web development request and will contact you within 48 hours with a detailed proposal.");
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        cityState: '',
        services: [],
        projectDescription: '',
        features: [],
        techStack: '',
        targetUsers: '',
        expectedUsers: '',
        designPreferences: '',
        logoBrand: false,
        hosting: '',
        timeline: '',
        budget: '',
        maintenance: '',
        files: null,
        referral: '',
        agree: false
      });
    } catch (error) {
      console.error("Error submitting web development inquiry:", error);
      setSubmitMessage("Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            <span className="text-sm font-medium text-gray-200">Software & Web Development</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your Digital Storefront Awaits
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
            className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-6"
          >
            Your website or app is your digital storefront. Whether you're a small business, startup, or industry leader, a professional web presence and reliable software 
            can make the difference between a good idea and a successful product. At Synaptix, our developers, designers, and product strategists turn your concepts 
            into polished, high-performing websites, web apps, and custom apps—on time and within budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-lg"
          >
            We don't just build what you ask for—we help you discover what your users truly need. From lightweight brochure sites and e-commerce stores to complex SaaS 
            platforms and mobile apps, we deliver secure, scalable, and easy-to-manage solutions. Our process includes discovery, UX/UI design, development, testing, 
            deployment, and ongoing maintenance—so you get a full product, not just code.
          </motion.p>
        </motion.div>

        {/* Enhanced Why Choose Synaptix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-gray-300" />
            Why Choose Synaptix for Your Software/Web Project?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
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
                          {item.id}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {item.description}
                      </p>
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
            Want to start? Fill the project form below—tell us what you need and we'll reach out with a clear plan and quote.
          </motion.p>
        </motion.section>

        {/* Enhanced Project Intake Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <FileText className="w-8 h-8 text-gray-300" />
            Project Intake Form - Software & Web Development
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-sm">
              {/* Enhanced Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Company/Business Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Company/Business Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Full Name (Contact Person)</label>
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
              </div>

              <div className="grid md:grid-cols-3 gap-6">
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
              </div>

              {/* Enhanced Services */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">What service do you need? (Select one or more)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Website', 'Web Application/SaaS', 'Mobile App (iOS/Android)', 'E-commerce Store', 'Custom Business Software/ERP/CRM', 'Website Maintenance/Site Upgrade', 'Other, specify below'].map((service) => (
                    <label key={service} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Enhanced Project Description */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Describe your project/idea (short summary)</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Brief description of your project..."
                  required
                />
              </div>

              {/* Enhanced Features */}
              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Key Features (tick-select commonly used features)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['User registration & login', 'Admin dashboard/CMS', 'Product catalog/Online payments', 'Booking/Scheduling system', 'Real-time data/WebSockets', 'Reporting & analytics/APIs', 'Multi-language support', 'Push notifications/Email automation', 'Third-party integrations (Stripe, Paytm, Google, etc.)', 'Other:'].map((feature) => (
                    <label key={feature} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="features"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Enhanced Tech Stack */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Tech Stack (if known)</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Frontend (React/Vue/Angular), Backend (Node/PHP/Laravel/.NET), Mobile (Flutter/React Native/Native), Prefer us to decide"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Target Users/Audience</label>
                  <input
                    type="text"
                    name="targetUsers"
                    value={formData.targetUsers}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="e.g., retail customers, school students, internal staff"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Expected # of Users</label>
                  <select
                    name="expectedUsers"
                    value={formData.expectedUsers}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    required
                  >
                    <option value="">Select</option>
                    <option value="<100">&lt;100</option>
                    <option value="100-1k">100-1k</option>
                    <option value="1k-10k">1k-10k</option>
                    <option value="10k+">10k+</option>
                    <option value="Unsure">Unsure</option>
                  </select>
                </div>
              </div>

              {/* Enhanced Design Preferences */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Design Preferences</label>
                <textarea
                  name="designPreferences"
                  value={formData.designPreferences}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Links to examples, color/theme, must-have UI notes"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <label className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="logoBrand"
                    checked={formData.logoBrand}
                    onChange={handleInputChange}
                    className="rounded text-gray-300"
                  />
                  <span className="text-gray-200 text-sm font-medium">Yes - logo & brand assets ready</span>
                </label>
                <label className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="logoBrand"
                    checked={!formData.logoBrand}
                    onChange={handleInputChange}
                    className="rounded text-gray-300"
                  />
                  <span className="text-gray-200 text-sm font-medium">No - need branding & design help</span>
                </label>
              </div>

              {/* Enhanced Hosting */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Do you need hosting & domain?</label>
                <select
                  name="hosting"
                  value={formData.hosting}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                >
                  <option value="">Select</option>
                  <option value="yes-existing">Yes, please handle hosting & domain</option>
                  <option value="recommend">Need recommendation</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Launch Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    required
                  >
                    <option value="">Select</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
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
                    <option value="Under ₹25k">Under ₹25k</option>
                    <option value="₹25k-₹75k">₹25k-₹75k</option>
                    <option value="₹75k-₹2L">₹75k-₹2L</option>
                    <option value="₹2L-₹5L">₹2L-₹5L</option>
                    <option value="Above ₹5L">Above ₹5L</option>
                    <option value="Discuss on call">Discuss on call</option>
                  </select>
                </div>
              </div>

              {/* Enhanced Maintenance */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Do you need ongoing maintenance & support?</label>
                <select
                  name="maintenance"
                  value={formData.maintenance}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                >
                  <option value="">Select</option>
                  <option value="yes-monthly">Yes - monthly ongoing</option>
                  <option value="ad-hoc">Yes - ad-hoc support</option>
                  <option value="one-time">No - one-time delivery</option>
                </select>
              </div>

              {/* Enhanced File Upload */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">File Uploads (optional)</label>
                <input
                  type="file"
                  name="files"
                  onChange={handleInputChange}
                  multiple
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600 transition-all duration-300"
                />
                <p className="text-gray-400 text-sm mt-2">Mockups, requirements doc, Figma link, examples</p>
              </div>

              {/* Enhanced Referral */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">How did you hear about us?</label>
                <select
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="school">School</option>
                  <option value="other">Other</option>
                </select>
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

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-4 py-3 rounded-lg text-sm ${
                    submitMessage.includes("Thank you")
                      ? "bg-green-500/10 border border-green-500/30 text-green-300"
                      : "bg-red-500/10 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', disabled: isSubmitting }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:bg-gray-600 disabled:text-gray-400"
              >
                {isSubmitting ? 'Submitting...' : submitted ? 'Submitted!' : 'Submit & Talk to Our Expert'}
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-6 h-6" />
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-lg"
                >
                  Thank you! We'll reach out with a clear plan and quote soon.
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
              <Zap className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Build Your Digital Presence?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">For a quick chat, click below to start a WhatsApp conversation with our expert.</span>
            </p>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium text-lg flex items-center gap-3 mx-auto hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
              href="https://wa.me/917893768080?text=Hi%21%20I%27m%20interested%20in%20your%20software%20and%20web%20development%20services.%20Can%20we%20discuss%20my%20project%3F"
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

export default SoftwareWebDevelopmentPage;
