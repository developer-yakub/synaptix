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
            <span className="text-sm text-gray-400">Innovation Support</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Turn Your Idea Into Reality 💡✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            At Synaptix Robotics, we give students end-to-end support to transform ideas into working prototypes and competitive projects. If you have a concept—whether a classroom 
            invention, a startup idea, or a competition entry—we'll mentor you, build with you, and guide you through testing, documentation, and competition preparation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We help students with: Technical domains (CAD, prototyping (3D printing, PCB, assembly), ML/AI); Project documentation, reports & demo videos; 
            Competition preparation & nomination (INSPIRE, science fairs, innovation challenges); Pitch coaching on presentation leads, slides, and next rehearsals.
          </motion.p>
        </motion.div>

        {/* Guidance Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Lightbulb className="w-6 h-6 text-gray-300" />
            Guidance Steps
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {guidanceSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center"
                >
                  <div className="p-3 bg-gray-800 rounded-xl mb-4 mx-auto w-fit">
                    <Icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* What to Include in Your Submission PDF */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            What to Include in Your Submission PDF
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
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
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            Prepare a single PDF (2-6 pages recommended). If your idea already has STLs, schematics, code, or videos, attach them separately or provide a download link.
          </motion.p>
        </motion.section>

        {/* Submission Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            Submit Your Innovation – Get Mentorship & Prototype Support
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Project Title</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Project Title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">One-line Pitch</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Max 120 characters"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Team Leader Full Name</label>
                  <input
                    type="text"
                    name="teamLeader"
                    value={formData.teamLeader}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Team Leader Full Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Team Member(s) – Names & Roles</label>
                  <textarea
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Multi-line"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Age/Class/Institution</label>
                  <input
                    type="text"
                    name="ageClass"
                    value={formData.ageClass}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Age/Class/Institution"
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
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone/WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Phone/WhatsApp Number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">City/State</label>
                  <input
                    type="text"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="City/State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Project Stage</label>
                <select
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Stage</option>
                  {projectStages.map((stage) => (
                    <option key={stage.value} value={stage.value}>{stage.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Domain/Category (select up to 2)</label>
                {domains.map((domain) => (
                  <label key={domain} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="domains"
                      value={domain}
                      checked={formData.domains.includes(domain)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{domain}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Brief Project Description (300-500 words)</label>
                <textarea
                  name="briefDescription"
                  value={formData.briefDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Multi-line Text – 300-500 words"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Why is this impactful/target users & use-case</label>
                <textarea
                  name="whyImpactful"
                  value={formData.whyImpactful}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Multi-line Text"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Estimated Budget Required (approx)</label>
                <select
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
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

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Support (select any)</label>
                {preferredSupports.map((support) => (
                  <label key={support} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="preferredSupport"
                      value={support}
                      checked={formData.preferredSupport.includes(support)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{support}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Competitions of Interest</label>
                {competitions.map((comp) => (
                  <label key={comp} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="competitions"
                      value={comp}
                      checked={formData.competitions.includes(comp)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{comp}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Timeline</label>
                <select
                  name="preferredTimeline"
                  value={formData.preferredTimeline}
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

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">School Collaboration (Yes/No)</label>
                <select
                  name="schoolCollaboration"
                  value={formData.schoolCollaboration}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes – can present in school/lab</option>
                  <option value="no">No – project will be independent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Project PDF (required)</label>
                <input
                  type="file"
                  name="projectPdf"
                  accept=".pdf"
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <p className="text-gray-400 text-sm mt-1">Max file size: 20 MB</p>
                <p className="text-gray-400 text-sm">Make sure the PDF contains the items from 'What to Include' above.</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Additional Files (STL, images, code repo, video links – suggest using Google Drive/WeTransfer if large)</label>
                <input
                  type="file"
                  name="additionalFiles"
                  multiple
                  accept=".stl,.zip,.jpg,.png,.mp4,.link"
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <p className="text-gray-400 text-sm mt-1">Accepted types: stl, zip, jpg/png, mp4, link – Max combined: 100 MB (or supply external link).</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Any additional notes / special requests</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Multi-line Text"
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
                <span className="text-gray-300 text-sm">I agree to be contacted by Synaptix Robotics regarding my submission.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                {submitted ? 'Submitted!' : 'Submit'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  1. We'll acknowledge your submission by email/WhatsApp. 2. Our review team will evaluate the concept (within 3-5 business days) and assign a mentor if selected. 
                  3. You'll receive a suggested roadmap, estimated cost (if fabrication needed), and next steps for prototype development or competition entry. 
                  4. We'll schedule an initial call/mentoring session to kick off the project.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Process Flow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Zap className="w-6 h-6 text-gray-300" />
            Our Process
          </h2>
          <div className="relative">
            <div className="flex flex-col space-y-4">
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
              <Lightbulb className="w-6 h-6 text-gray-300" />
              <h2 className="text-2xl font-bold">Ready to Innovate?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Submit your idea today and let's build the future together.</span>
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

export default InnovationSupportPage;