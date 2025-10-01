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
            <span className="text-sm text-gray-400">3D Design & Prototyping Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Prototype Design. Print. Deliver—Built to Your Specs. 🖨️✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            We design, print, and deliver—built to your specs. Exactly the way you need them—then print, finish, and deliver them anywhere in India. 
            From one-off models for student projects to small-batch production for functional parts and prototypes, we turn ideas into tangible reality.
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
            What We Offer
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Zap className="w-6 h-6 text-gray-300" />
            How It Works (Simple 6-Step Process)
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon || ChevronRight; // Fallback icon for steps without one
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  onMouseEnter={() => setActiveStep(step.id - 1)}
                  className={`relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-300 ${
                    activeStep === step.id - 1 ? 'ring-2 ring-gray-500 scale-105' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: activeStep === step.id - 1 ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-gray-800 rounded-xl text-gray-300 flex-shrink-0"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      activeStep === step.id - 1 ? 'bg-gray-500 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                      Step {step.id}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Materials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Settings className="w-6 h-6 text-gray-300" />
            Materials & Technologies
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {materials.map((material, index) => {
              const Icon = material.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center"
                >
                  <div className="p-3 bg-gray-800 rounded-xl mb-4 mx-auto w-fit">
                    <Icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{material.title}</h3>
                  <p className="text-gray-400 text-sm">{material.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            File & Submission Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{guideline}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Delivery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Package className="w-6 h-6 text-gray-300" />
            Delivery Across India
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing & Quotes + FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pricing & Quotes</h2>
              <div className="space-y-4 text-gray-400">
                <p>To get an accurate quote, click Talk to Expert and send your file or idea—we'll respond with a detailed estimate and timeline.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Quality checks on every print to ensure dimensional accuracy and surface finish.</li>
                  <li>Reprint policy: Our engineers are available to advise on material selection and design improvements for strength, fit, or function.</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Quick FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                  >
                    <h4 className="font-semibold mb-2 text-white">{faq.question}</h4>
                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
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
              <h2 className="text-2xl font-bold">Ready to Start?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Talk to Our Expert—click the button below to start a WhatsApp chat with us. Send your STL or idea and get a quote fast.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
              >
                📱 Talk to Expert (WhatsApp)
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:border-gray-500 transition-colors"
              >
                📁 Upload File & Get Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignPrototypingPage;