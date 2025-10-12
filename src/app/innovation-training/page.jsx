'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb,
  Users,
  Award,
  Code,
  FileText,
  Mail,
  Phone,
  MapPin,
  Check,
  ArrowRight,
  ChevronRight,
  Upload,
  Sparkles,
  Zap,
  Brain
} from 'lucide-react';

const InnovationSupportPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    projectTitle: '',
    teamLeader: '',
    teamMembers: '',
    ageClass: '',
    email: '',
    phone: '',
    cityState: '',
    projectStage: '',
    domains: [],
    briefDescription: '',
    whyImpactful: '',
    estimatedBudget: '',
    preferredSupport: [],
    competitions: [],
    preferredTimeline: '',
    schoolCollaboration: '',
    projectPdf: null,
    additionalFiles: null,
    additionalNotes: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const guidanceSteps = [
    {
      id: 1,
      title: "Idea Validation & Roadmap",
      description: "We review your idea, refine the scope, and create a technical roadmap with milestones.",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "Mentor Pairing",
      description: "You get a mentor (engineer/educator) matched to your project domain.",
      icon: Users
    },
    {
      id: 3,
      title: "Design & Build",
      description: "Hands-on help with schematics, code, CAD models, and prototype fabrication.",
      icon: Code
    },
    {
      id: 4,
      title: "Testing & Iteration",
      description: "Lab-on help with debugging, refining, and improving with mentor feedback.",
      icon: Zap
    },
    {
      id: 5,
      title: "Testing & Showcase Lab",
      description: "We help prepare abstracts, project reports, mentor feedback slides, demonstration videos, and rehearse your pitch.",
      icon: Award
    },
    {
      id: 6,
      title: "Follow-up Pathways",
      description: "Advice on patent filing basics, funding, incubation, or scaling the prototype.",
      icon: Brain
    }
  ];

  const domains = [
    'IoT/Embedded Systems',
    'AI/Computer Vision/ML',
    'Electrical & Electronics',
    'EV/Mobility/Mechatronics',
    'Healthcare/MedTech',
    'Environment/ AgriTech',
    'Other – specify below'
  ];

  const preferredSupports = [
    'Prototype fabrication (3D design, PCB, assembly)',
    'Competition preparation & nomination (INSPIRE/science fairs)',
    'Pitch coaching/incubation & demo guidance',
    'I need a full end-to-end build (turnkey)'
  ];

  const competitions = [
    'National Science Fair/State Science Fair',
    'TechFest/College Competitions',
    'Not sure – advise me'
  ];

  const projectStages = [
    { value: 'idea', label: 'Idea/Concept' },
    { value: 'design', label: 'Design (CAD/Plans)' },
    { value: 'prototype', label: 'Prototype (Partial)' },
    { value: 'working', label: 'Working Demo' }
  ];

  const timelines = [
    'ASAP',
    '2-4 weeks',
    '1-3 months',
    '3+ months',
    'Flexible'
  ];

  const budgets = [
    'Under ₹25k',
    '₹25k-₹75k',
    '₹75k-₹1L',
    'Unsure'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'domains' || name === 'preferredSupport' || name === 'competitions') {
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
            <span className="text-sm font-medium text-gray-200">Innovation Support</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Turn Your Idea Into Reality
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
            At Synaptix Robotics, we give students end-to-end support to transform ideas into working prototypes and competitive projects. If you have a concept—whether a classroom 
            invention, a startup idea, or a competition entry—we'll mentor you, build with you, and guide you through testing, documentation, and competition preparation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-lg"
          >
            We help students with: Technical domains (CAD, prototyping (3D printing, PCB, assembly), ML/AI); Project documentation, reports & demo videos; 
            Competition preparation & nomination (INSPIRE, science fairs, innovation challenges); Pitch coaching on presentation leads, slides, and next rehearsals.
          </motion.p>
        </motion.div>

        {/* Enhanced Guidance Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-gray-300" />
            Guidance Steps
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {guidanceSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl mb-6 mx-auto w-fit border border-gray-600/50">
                    <Icon className="w-8 h-8 text-gray-200" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced What to Include in Your Submission PDF */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <FileText className="w-8 h-8 text-gray-300" />
            What to Include in Your Submission PDF
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Project Title & One-line Pitch",
              "Team Details (class/age/school)",
              "Problem Statement – Why this matters",
              "Proposed Solution – brief technical description and block diagram",
              "Expected Key Components, applications & impact (rough list)",
              "Current Stage (idea/prototype/working demo)",
              "Any images/sketches/diagrams (embedded)",
              "Rough timeline & budget estimate (optional)"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Prepare a single PDF (2-6 pages recommended). If your idea already has STLs, schematics, code, or videos, attach them separately or provide a download link.
          </motion.p>
        </motion.section>

        {/* Enhanced Submission Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <FileText className="w-8 h-8 text-gray-300" />
            Submit Your Innovation – Get Mentorship & Prototype Support
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Project Title</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Project Title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">One-line Pitch</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Max 120 characters"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Team Leader Full Name</label>
                  <input
                    type="text"
                    name="teamLeader"
                    value={formData.teamLeader}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Team Leader Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Team Member(s) – Names & Roles</label>
                  <textarea
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Multi-line"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Age/Class/Institution</label>
                  <input
                    type="text"
                    name="ageClass"
                    value={formData.ageClass}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Age/Class/Institution"
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
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Phone/WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Phone/WhatsApp Number"
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
                    placeholder="City/State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Project Stage</label>
                <select
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Stage</option>
                  {projectStages.map((stage) => (
                    <option key={stage.value} value={stage.value}>{stage.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Domain/Category (select up to 2)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {domains.map((domain) => (
                    <label key={domain} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="domains"
                        value={domain}
                        checked={formData.domains.includes(domain)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{domain}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Brief Project Description (300-500 words)</label>
                <textarea
                  name="briefDescription"
                  value={formData.briefDescription}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Multi-line Text – 300-500 words"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Why is this impactful/target users & use-case</label>
                <textarea
                  name="whyImpactful"
                  value={formData.whyImpactful}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Multi-line Text"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Estimated Budget Required (approx)</label>
                <select
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
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

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Preferred Support (select any)</label>
                <div className="grid grid-cols-2 gap-4">
                  {preferredSupports.map((support) => (
                    <label key={support} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferredSupport"
                        value={support}
                        checked={formData.preferredSupport.includes(support)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{support}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Competitions of Interest</label>
                <div className="grid grid-cols-2 gap-4">
                  {competitions.map((comp) => (
                    <label key={comp} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="competitions"
                        value={comp}
                        checked={formData.competitions.includes(comp)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{comp}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Timeline</label>
                <select
                  name="preferredTimeline"
                  value={formData.preferredTimeline}
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

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">School Collaboration (Yes/No)</label>
                <select
                  name="schoolCollaboration"
                  value={formData.schoolCollaboration}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes – can present in school/lab</option>
                  <option value="no">No – project will be independent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Any additional notes / special requests</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Multi-line Text"
                />
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
                <span className="text-gray-200 text-sm">I agree to be contacted by Synaptix Robotics regarding my submission.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
              >
                {submitted ? 'Submitted!' : 'Submit'}
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-lg leading-relaxed"
                >
                  1. We'll acknowledge your submission by email/WhatsApp. 2. Our review team will evaluate the concept (within 3-5 business days) and assign a mentor if selected. 
                  3. You'll receive a suggested roadmap, estimated cost (if fabrication needed), and next steps for prototype development or competition entry. 
                  4. We'll schedule an initial call/mentoring session to kick off the project.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Enhanced Process Flow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Zap className="w-8 h-8 text-gray-300" />
            Our Process
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Idea Submission', desc: '(Student/Team uploads proposal & PDF)' },
                { title: 'Review & Validation', desc: '(Our mentors evaluate feasibility)' },
                { title: 'Roadmap Creation', desc: '(Milestones & resources defined)' },
                { title: 'Mentor Allocation', desc: '(Expert assigned for guidance)' },
                { title: 'Design & Development', desc: '(CAD, electronics, coding, prototyping)' },
                { title: 'Testing & Iteration', desc: '(Debugging, refining, improving)' },
                { title: 'Competition & Showcase Prep', desc: '(Reports, slides, demo videos)' },
                { title: 'Final Prototype & Launch', desc: '(Project ready for competition/startup)' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl hover:border-gray-600/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-lg font-bold text-white border border-gray-600/50">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
              transition={{ delay: 1.0, type: "spring" }}
            >
              <Lightbulb className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Innovate?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Submit your idea today and let's build the future together.</span>
            </p>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium text-lg flex items-center gap-3 mx-auto hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
              href="https://wa.me/9390404787?text=Hi%21%20I%27m%20interested%20in%20your%20innovation%20support%20services.%20Can%20we%20discuss%20my%20project%3F"
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

export default InnovationSupportPage;
