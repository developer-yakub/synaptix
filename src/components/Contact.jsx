"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  CheckCircle,
  AlertCircle,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@synaptixrobotics.com",
      secondary: "support@synaptixrobotics.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Warangal, Telangana",
      secondary: "India - 506002",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      primary: "Mon - Sat: 9:00 AM - 7:00 PM",
      secondary: "Sunday: By Appointment",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "workshop", label: "Workshop Booking", icon: User },
    { value: "lab", label: "Robotics Lab Setup", icon: Building },
    { value: "custom", label: "Custom Project", icon: Zap },
    { value: "partnership", label: "Partnership", icon: Globe },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Contact
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to turn your ideas into reality? Let's start the conversation!
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              💬
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-bold text-lg mb-2 text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">{info.primary}</p>
                  <p className="text-gray-400 text-xs">{info.secondary}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 hover:opacity-5 transition-opacity duration-300" />

              <div className="relative">
                <motion.h2
                  className="text-3xl font-bold mb-8 flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Sparkles className="w-8 h-8 mr-3 text-blue-400" />
                  Get In Touch
                </motion.h2>

                {/* Success/Error Message */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mb-6 p-4 rounded-lg border flex items-center ${
                        submitStatus === "success"
                          ? "bg-green-900/20 border-green-500 text-green-400"
                          : "bg-red-900/20 border-red-500 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      ) : (
                        <AlertCircle className="w-5 h-5 mr-2" />
                      )}
                      {submitStatus === "success"
                        ? "Message sent successfully! We'll get back to you soon."
                        : "Something went wrong. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <motion.label
                            key={type.value}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                              formData.inquiryType === type.value
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-gray-700 border-gray-600 hover:border-gray-500 text-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type.value}
                              checked={formData.inquiryType === type.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="text-xs font-medium">
                              {type.label}
                            </span>
                          </motion.label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </motion.div>

                    {/* Organization */}
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Organization
                      </label>
                      <div className="relative">
                        <Building
                          className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "organization"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("organization")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          placeholder="School, College, or Company"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, ideas, or questions..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Quick Contact
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@synaptixrobotics.com"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  hello@synaptixrobotics.com
                </motion.a>
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +91 98765 43210
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex items-center justify-center p-3 bg-gray-700 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-gray-400 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-orange-400" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-gray-300">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-gray-300">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-gray-300">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-lg md:text-xl text-gray-400 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Have a project in mind? Let's make it happen together!
            <motion.span
              className="ml-2 inline-block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              🚀
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
