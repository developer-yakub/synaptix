"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  ArrowUpRight,
  Minus,
} from "lucide-react";
import { isClient, isDesktop, conditional3DTransform } from "@/lib/utils";
import { createInquiry } from "@/lib/adminService";

const ContactPage = () => {
  const [selectedInquiry, setSelectedInquiry] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Exceptional 3D with Z-depth
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [38, 11, 0, -11, -38]);
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-16, -4, 0, 4, 16]);
  const z = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [-320, -130, 0, -130, -320]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.68, 0.89, 1.06, 0.89, 0.68]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.88, 1, 0.88, 0]);

  // Z-axis depth layers
  const layer1Z = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const layer2Z = useTransform(scrollYProgress, [0, 1], [0, -480]);
  const layer3Z = useTransform(scrollYProgress, [0, 1], [0, -740]);
  const layer1RotateX = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const layer2RotateY = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const layer3RotateZ = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@synaptixrobotics.com",
      subvalue: "support@synaptixrobotics.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      subvalue: "+91 87654 32109",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Warangal, Telangana",
      subvalue: "India - 506002",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon - Sat: 9AM - 7PM",
      subvalue: "Sunday: By Appointment",
    },
  ];

  const inquiryTypes = [
    { id: "general", label: "General Inquiry", icon: MessageSquare },
    { id: "workshop", label: "Workshop Booking", icon: User },
    { id: "lab", label: "Lab Setup", icon: Building },
    { id: "custom", label: "Custom Project", icon: Globe },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-cycle through contact methods or other animations
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await createInquiry({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        inquiryType: selectedInquiry
      });

      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSelectedInquiry("general");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden" data-3d-section>
      {/* Simple grid for mobile, 3D for desktop */}
      <div className="absolute inset-0">
        {/* Primary grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
      </div>

        {/* Rotating geometric shapes - Desktop only */}
        <motion.div
          style={{ rotateX: conditional3DTransform(rotateX, 0) }}
          className="hidden lg:block absolute top-40 left-20 w-96 h-96 border border-white/3"
        />
        <motion.div
          style={{ rotateX: useTransform(scrollYProgress, [0, 1], [8, -8]) }}
          className="hidden lg:block absolute top-60 right-40 w-80 h-80 border border-white/2 rotate-45"
        />
        <motion.div
          style={{ rotateX: useTransform(scrollYProgress, [0, 1], [-6, 12]) }}
          className="hidden lg:block absolute bottom-40 left-32 w-64 h-64 border border-white/4 -rotate-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div 
          style={{ 
            opacity, 
            rotateX: conditional3DTransform(rotateX, 0), 
            rotateY: conditional3DTransform(rotateY, 0),
            z: conditional3DTransform(z, 0),
            scale: conditional3DTransform(scale, 1),
            transformStyle: "preserve-3d"
          }} 
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          {/* Minimalist title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center space-x-6 mb-8">
              <Minus className="w-16 h-px bg-slate-600" />
              <h1 className="text-6xl md:text-8xl font-light tracking-widest leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                CONTACT
              </h1>
              <Minus className="w-16 h-px bg-slate-600" />
            </div>

          <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg font-light text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              Direct communication channels. Immediate response. Start your project today.
          </motion.p>
          </motion.div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="border border-white/20 rounded-lg p-8 hover:border-white/40 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    {/* Icon */}
                  <motion.div
                      className="w-12 h-12 border border-white/30 rounded flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                      <IconComponent className="w-6 h-6 text-white/60" />
                  </motion.div>

                    {/* Content */}
                    <h3 className="text-sm font-medium text-white/70 mb-4 uppercase tracking-wider">
                      {method.label}
                  </h3>

                    <div className="space-y-2">
                      <p className="text-white/90 font-light">{method.value}</p>
                      <p className="text-white/50 text-sm font-light">{method.subvalue}</p>
                    </div>
                </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Communication Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="border border-white/20 rounded-xl p-8">
              <h2 className="text-2xl font-thin mb-8">Send Message</h2>

              {/* Inquiry Type Selector */}
              <div className="mb-8">
                <p className="text-white/60 text-sm mb-4">What brings you here?</p>
                <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => {
                        const IconComponent = type.icon;
                    const isSelected = selectedInquiry === type.id;

                        return (
                      <motion.button
                        key={type.id}
                        onClick={() => setSelectedInquiry(type.id)}
                        className={`p-4 border rounded-lg text-left transition-all duration-300 ${
                          isSelected
                            ? 'border-white bg-white/5'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className={`w-4 h-4 mb-2 ${
                          isSelected ? 'text-white' : 'text-white/60'
                        }`} />
                        <p className={`text-sm font-light ${
                          isSelected ? 'text-white' : 'text-white/70'
                        }`}>
                              {type.label}
                        </p>
                      </motion.button>
                        );
                      })}
                    </div>
                  </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Your message"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

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
                    type="submit"
                    disabled={isSubmitting}
                  className="w-full px-8 py-4 border border-white/20 rounded-lg text-white font-light tracking-wide hover:border-white/40 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border border-white/30 border-t-transparent rounded-full mr-3"
                    />
                    ) : (
                      <>
                      <Send className="w-4 h-4 mr-3" />
                        Send Message
                      <ArrowUpRight className="w-4 h-4 ml-3" />
                      </>
                    )}
                  </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Response Time */}
            <div className="border border-white/20 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-4">Response Time</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">General Inquiry</span>
                  <span className="text-white/90">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Technical Support</span>
                  <span className="text-white/90">12 hours</span>
              </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Project Consultation</span>
                  <span className="text-white/90">6 hours</span>
            </div>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-white/20 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-4">Availability</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-white/90">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white/90">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white/90">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border border-white/20 rounded-xl p-8">
              <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <motion.button
                  className="w-full p-3 border border-white/20 rounded-lg text-left hover:border-white/40 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-white/80 text-sm">Schedule Workshop</span>
                </motion.button>
                <motion.button
                  className="w-full p-3 border border-white/20 rounded-lg text-left hover:border-white/40 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-white/80 text-sm">Request Lab Setup Quote</span>
                </motion.button>
                <motion.button
                  className="w-full p-3 border border-white/20 rounded-lg text-left hover:border-white/40 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-white/80 text-sm">Start Custom Project</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-white/50 text-sm font-light">
              Every connection begins with a single message. Every innovation starts with a conversation.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Exceptional 3D floating particles with Z-depth */}
      <motion.div
        style={{
          z: layer1Z,
          rotateX: layer1RotateX,
          rotateY: layer2RotateY,
          transformStyle: "preserve-3d"
        }}
        className="hidden lg:block absolute top-1/3 right-16 w-3 h-3 bg-slate-500 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          z: layer2Z,
          rotateY: layer2RotateY,
          rotateZ: layer3RotateZ,
          transformStyle: "preserve-3d"
        }}
        className="hidden lg:block absolute bottom-1/4 left-20 w-2 h-2 bg-slate-400 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        style={{
          z: layer3Z,
          rotateZ: layer3RotateZ,
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 180]),
          transformStyle: "preserve-3d"
        }}
        className="hidden lg:block absolute top-1/2 left-1/3 w-2 h-2 bg-slate-300 rounded-full"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default ContactPage;
