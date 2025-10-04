'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  Printer,
  Package,
  FileText,
  Ruler,
  Zap,
  Sparkles,
  Users,
  Building2,
  Code,
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Upload,
  Phone
} from 'lucide-react';

const DesignPrototypingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: 1,
      icon: Settings,
      title: "Custom Design Services",
      description: "Don't have an STL? Share your idea or sketches and our designers will create manufacturing-ready 3D models tailored to your requirements.",
      details: [
        "From concept sketches to detailed CAD models",
        "Optimized for printability and functionality"
      ],
      highlight: "Ideal for students, educators, and innovators starting from scratch.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: Printer,
      title: "Precision 3D Printing",
      description: "FDM, SLA, and resin printing for prototypes, functional parts, and display models.",
      details: [
        "High-resolution prints for intricate details",
        "Support for multi-material and full-color options"
      ],
      highlight: "Perfect for rapid prototyping and small-batch production.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Ruler,
      title: "Small-Batch Production",
      description: "Low-volume runs for testing, validation, smooth pilot runs, and assembly so your part is presentation-ready.",
      details: [
        "Scalable from one-off to small series",
        "Quality checks at every stage"
      ],
      highlight: "Great for academic projects and early-stage startups.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Package,
      title: "Nationwide Delivery",
      description: "We pack carefully and ship across India with tracking and insured courier options.",
      details: [
        "Secure packaging for delicate prototypes",
        "Express options available for urgent needs"
      ],
      highlight: "Reliable delivery anywhere in India, from door to door.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Talk to Our Expert",
      description: "Click the WhatsApp button and tell us about your project. Share sketches, photos, or reference links.",
      icon: Phone
    },
    {
      id: 2,
      icon: Upload,
      title: "Click the WhatsApp & Upload",
      description: "Send your file or idea—we'll get a quote fast."
    },
    {
      id: 3,
      title: "We Prepare a Design Concept",
      description: "Or review your STL, estimate cost and lead time, and share a quote."
    },
    {
      id: 4,
      title: "Prototype Print",
      description: "We select the material and process (FDM/SLA/etc.)."
    },
    {
      id: 5,
      title: "Post-Processing & QC",
      description: "Parts are cleaned, finished, assembled (if needed), and undergo quality checks against your specs."
    },
    {
      id: 6,
      title: "Pack & Deliver",
      description: "We pack parts securely and ship them anywhere in India. Tracking details are shared when dispatched."
    }
  ];

  const materials = [
    {
      title: "FDM (Fused Deposition Modeling)",
      description: "PLA, PETG, ABS, TPU (flexible)—great for functional parts and quick prototypes.",
      icon: Printer
    },
    {
      title: "SLA/Resin",
      description: "High-detail, smooth surfaces—jewelry or medical-model quality prototypes.",
      icon: Ruler
    },
    {
      title: "Specialty Materials",
      description: "Carbon-fiber/nylon blends, engineering plastics (on request).",
      icon: Settings
    },
    {
      title: "Post-Processing",
      description: "Priming, painting, sanding, solvent smoothing, assembly, threaded inserts.",
      icon: Zap
    }
  ];

  const guidelines = [
    "Accepted file types: STL, OBJ, STEP (for complex designs include sketches or pdf).",
    "Preferred STL requirements: Watertight mesh, oriented normals, no non-manifold edges.",
    "Max file size: (Set per your system)—suggest 100 MB for uploads; larger files via WeTransfer/Drive link in WhatsApp.",
    "Design help: We offer model repair and optimization for printability (cost quoted after review)."
  ];

  const faqs = [
    {
      question: "Can you scale my design or make design changes?",
      answer: "Yes—we can scale, optimize, or make functional or aesthetic needs improvements."
    },
    {
      question: "Do you offer assembly, or integrate basic electronics?",
      answer: "Yes— we can assemble, optimize, and integrate basic electronics on request."
    },
    {
      question: "How long can a typical multi-part model take?",
      answer: "Lead times vary by complexity—we'll give an exact timeline in the quote (Typical turnaround: 2-7 business days for simple FDM parts)."
    }
  ];

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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1
      }
    })
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
            <span className="text-sm font-medium text-gray-200">3D Design & Prototyping Services</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Prototype Design. Print. Deliver—Built to Your Specs.
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
            We design, print, and deliver—built to your specs. Exactly the way you need them—then print, finish, and deliver them anywhere in India. 
            From one-off models for student projects to small-batch production for functional parts and prototypes, we turn ideas into tangible reality.
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
            What We Offer
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
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
        </motion.section>

        {/* Enhanced How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Zap className="w-8 h-8 text-gray-300" />
            How It Works (Simple 6-Step Process)
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => {
              const Icon = step.icon || ChevronRight;
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  onMouseEnter={() => setActiveStep(step.id - 1)}
                  className={`relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-gray-600/70 hover:scale-105`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      animate={{ rotate: activeStep === step.id - 1 ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl border border-gray-600/50 text-gray-300 flex-shrink-0"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                      activeStep === step.id - 1 
                        ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg' 
                        : 'bg-gray-800/60 text-gray-400 border border-gray-700/50'
                    }`}>
                      Step {step.id}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced Materials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Settings className="w-8 h-8 text-gray-300" />
            Materials & Technologies
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {materials.map((material, index) => {
              const Icon = material.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl mb-6 mx-auto w-fit border border-gray-600/50">
                    <Icon className="w-8 h-8 text-gray-200" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{material.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{material.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <FileText className="w-8 h-8 text-gray-300" />
            File & Submission Guidelines
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{guideline}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Delivery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Package className="w-8 h-8 text-gray-300" />
            Delivery Across India
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "We ship nationwide using trusted courier partners.",
              "Secure packaging for delicate parts.",
              "Tracking number shared on dispatch.",
              "Optional insured shipping and express delivery (priced separately).",
              "Local pick-up available at our office (if applicable)."
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Pricing & Quotes + FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Pricing & Quotes</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>To get an accurate quote, click Talk to Expert and send your file or idea—we'll respond with a detailed estimate and timeline.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    Quality checks on every print to ensure dimensional accuracy and surface finish.
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    Our engineers are available to advise on material selection and design improvements for strength, fit, or function.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick FAQs</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/70 transition-all duration-300"
                  >
                    <h4 className="font-bold mb-3 text-white text-lg">{faq.question}</h4>
                    <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
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
              transition={{ delay: 1.4, type: "spring" }}
            >
              <Zap className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Start?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Talk to Our Expert—click the button below to start a WhatsApp chat with us. Send your STL or idea and get a quote fast.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center gap-3 hover:shadow-xl transition-all duration-300"
              >
            <Phone className="w-6 h-6" />
            Talk to Expert (WhatsApp)
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-gray-600/70 bg-gray-800/60 text-gray-200 rounded-xl font-bold text-xl flex items-center gap-3 hover:border-gray-500 hover:bg-gray-800/80 transition-all duration-300"
              >
            <Upload className="w-6 h-6" />
            Upload File & Get Quote
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignPrototypingPage;