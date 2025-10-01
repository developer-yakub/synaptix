// import { TimelineDemo } from "@/components/TimelineDemo";
// import { WorldMapDemo } from "@/components/WorldMapDemo";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <TimelineDemo />
//     </div>
//   );
// };

// export default page;

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen,
  Users,
  Award,
  Zap,
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

const RoboticsCurriculumPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    cityState: '',
    requestType: [],
    grades: [],
    mode: '',
    numTeachers: '',
    numStudents: '',
    kits: '',
    startDate: '',
    duration: '',
    customDuration: '',
    budget: '',
    labSetup: '',
    learningGoals: '',
    constraints: '',
    fileUploads: null,
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const provisions = [
    {
      id: 1,
      icon: BookOpen,
      title: "Full Curriculum Design",
      description: "Year-wise curriculum for primary to senior secondary (Class 3-12), mapped to learning outcomes and progressive skill levels (Beginner – Intermediate – Advanced).",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Detailed Lesson Plans",
      description: "Daily/weekly lesson guides, objectives, activities, estimated timings, and assessment rubrics for each lesson.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Users,
      title: "Teaching Resources",
      description: "Slide decks, demo videos, teacher notes, student worksheets, lab manuals, and quizzes.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Zap,
      title: "Textbooks & Student Workbooks",
      description: "Printable and digital materials that match the curriculum (Synaptix + STEM kits exercises + project briefs).",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    },
    {
      id: 5,
      icon: Award,
      title: "Hands-On Kits & Materials Training",
      description: "Certified 'Train-the-Trainer' programs to upskill your teachers, Synaptix STEM kits (per student or project), lab management, and safety protocols.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 6,
      icon: Check,
      title: "Assessment & Certification",
      description: "Formative & summative assessment templates, grading rubrics, and certificates for students who complete courses.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 7,
      icon: MapPin,
      title: "Lab Set-Up Support",
      description: "Technical support, lab layout advice, equipment list, safety guidelines, and optional on-site lab installation support.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 8,
      icon: Calendar,
      title: "Ongoing Support",
      description: "Technical support, curriculum updates, and optional remote mentor visits or online doubt-clearing sessions.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    }
  ];

  const levels = [
    {
      title: "Primary Levels (Class 3-5) – Foundations",
      description: "Simple circuits, basic sensors, block programming, and guided mini-projects (learners build simple robots)."
    },
    {
      title: "Middle (Class 6-8) – Applied",
      description: "Microcontroller basics (Arduino/ESP), sensor integration, simple automation mini-projects, and first design builds."
    },
    {
      title: "Secondary (Class 9-10) – Intermediate",
      description: "Embedded programming, IoT basics, CAD & 3D prototyping, team projects."
    },
    {
      title: "Senior Secondary/Pre-University (Class 11-12) – Advanced",
      description: "AI basics for robotics, SLAM/advanced sensors, PCB basics, project-based portfolios, and competition prep."
    }
  ];

  const whyChoose = [
    "Ready-to-run curriculum saves teacher prep time.",
    "Hands-on, project-based learning improves engagement and outcomes.",
    "Scalable & flexible—works for single classes, after-school clubs, or full academic programs.",
    "Affordable packages with options for kit supply or BYO.",
    "Competition & career pathways—we prepare students for science fairs, INSPIRE, and tech challenges."
  ];

  const roadmap = [
    {
      title: "1. Consultation",
      description: "Review school goals, timeline, lab space, and student levels."
    },
    {
      title: "2. Curriculum Proposal",
      description: "Customized curriculum & package, timeline (1-2 weeks)."
    },
    {
      title: "3. Trainer Onboarding",
      description: "Teacher training (1-3 days) and resource handover."
    },
    {
      title: "4. Pilot Rollout",
      description: "Run pilot classes (4-8 weeks) with remote/on-site mentor support."
    },
    {
      title: "5. Assessment & Certification",
      description: "End-of-term evaluations and certificates."
    }
  ];

  const addOns = [
    "On-site mentor for the first month.",
    "Custom textbook branding with school logo.",
    "Parent & community demo day.",
    "Annual curriculum review & update."
  ];

  const requestTypes = [
    'Full Robotics Curriculum (Year-wise)',
    'Lesson Plans & Teacher Training (Train-the-Trainer)',
    'Supply STEM Kits & Lab Setup',
    'Pilot Program (Short-term)',
    'Other—specify below & Mentorship'
  ];

  const grades = [
    'Class 3-5 (Primary)',
    'Class 6-8 (Middle)',
    'Class 9-10 (Secondary)',
    'Class 11-12 (Senior Secondary)',
    'All of the above'
  ];

  const modes = [
    'On-site (we come to your campus)',
    'Online (live training)',
    'Hybrid'
  ];

  const kitsOptions = [
    'Yes – kits for each student',
    'No – we will source ourselves (send material list)',
    'Need quote for kits & procurement help'
  ];

  const durations = [
    'Single workshop (1-3 days)',
    'Short course (4-8 weeks)',
    'Full semester (4-8 months)/annual program',
    'Pilot (4-8 weeks)',
    'Custom—specify below'
  ];

  const budgets = [
    'Under ₹50k',
    '₹50k-₹2L',
    '₹2L-₹10L',
    'Above ₹10L',
    'Discuss on call'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'requestType' || name === 'grades') {
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
            <span className="text-sm text-gray-400">Robotics Curriculum</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Future-Ready Curriculum – End-to-End for Schools & Institutions 🤖✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Build a future-ready curriculum—end-to-end, classroom-ready, and teacher-friendly. Synaptix Robotics partners with schools and institutions to deliver a full robotics 
            curriculum that is age-appropriate, standards-aligned, and easy for teachers to implement. We provide everything from lesson plans and textbooks to hands-on kits 
            and certified trainer programs—so your school can run high-quality robotics classes and clubs with confidence.
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
            What We Provide (End-to-End)
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {provisions.map((provision) => {
              const Icon = provision.icon;
              return (
                <motion.div
                  key={provision.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(provision.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${provision.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 bg-gray-800 rounded-xl ${provision.iconColor} group-hover:bg-gray-700 transition-colors`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                          {provision.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                        {provision.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {provision.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Curriculum Levels */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <BookOpen className="w-6 h-6 text-gray-300" />
            Curriculum Levels & Example Outcomes
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {levels.map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{level.title}</h3>
                <p className="text-gray-400 text-sm">{level.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Schools Choose Synaptix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Award className="w-6 h-6 text-gray-300" />
            Why Schools Choose Synaptix
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChoose.map((item, index) => (
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

        {/* Implementation Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Calendar className="w-6 h-6 text-gray-300" />
            Implementation Roadmap (Typical)
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {roadmap.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            (We adapt timelines to your academic calendar)
          </motion.p>
        </motion.section>

        {/* Optional Add-Ons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Sparkles className="w-6 h-6 text-gray-300" />
            Optional Add-Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{addOn}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Request Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            How to Request a Curriculum / Teacher Training
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">School/Institution Name</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="School/Institution Name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Contact Person (Full Name & Role)</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Full Name & Role"
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
                    placeholder="Phone/WhatsApp"
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
                <label className="block text-sm font-medium mb-2 text-gray-300">Type of Request (select one or more)</label>
                {requestTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="requestType"
                      value={type}
                      checked={formData.requestType.includes(type)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{type}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">If Other, specify</label>
                <input
                  type="text"
                  name="otherRequest"
                  value={formData.otherRequest || ''}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Specify other request..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Grades/Classes to Cover (select)</label>
                {grades.map((grade) => (
                  <label key={grade} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="grades"
                      value={grade}
                      checked={formData.grades.includes(grade)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{grade}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">All of the above</label>
                <input
                  type="checkbox"
                  name="allGrades"
                  checked={formData.allGrades || false}
                  onChange={handleInputChange}
                  className="rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Mode</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Mode</option>
                  {modes.map((mode) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Number of Teachers to be Trained</label>
                  <input
                    type="number"
                    name="numTeachers"
                    value={formData.numTeachers}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Number Field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Number of Students (approx)</label>
                  <input
                    type="number"
                    name="numStudents"
                    value={formData.numStudents}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Number Field (approx)"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Do you need kits supplied by Synaptix?</label>
                <select
                  name="kits"
                  value={formData.kits}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select</option>
                  {kitsOptions.map((kit) => (
                    <option key={kit} value={kit}>{kit}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Start Date (Academic Term)</label>
                <input
                  type="text"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Text Field—e.g., July 2025/ASAP/Flexible"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500 mb-2"
                  required
                >
                  <option value="">Select Duration</option>
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
                {formData.duration === 'Custom—specify below' && (
                  <input
                    type="text"
                    name="customDuration"
                    value={formData.customDuration}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="If Custom duration, specify"
                  />
                )}
              </div>

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

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Do you require lab setup support (tables, power, storage)?</label>
                <select
                  name="labSetup"
                  value={formData.labSetup}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes – full setup support</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Learning Goals / Learning Outcomes you want & training</label>
                <textarea
                  name="learningGoals"
                  value={formData.learningGoals}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Multi-line Text—e.g., build student projects, competition entries, teacher capacity building"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Any existing curriculum or constraints (timings, exam schedules)?</label>
                <textarea
                  name="constraints"
                  value={formData.constraints}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Multi-line Text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Upload any relevant documents (optional)—school brochure, lab photos, student lists (pdf/jpg)</label>
                <input
                  type="file"
                  name="fileUploads"
                  multiple
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
                {submitted ? 'Submitted!' : 'Submit Request – School Partnership Manager will contact you'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Next Steps (after submission): We will contact you within 48 hours to schedule a consultation call. A tailored curriculum proposal and quote will be delivered within 7-10 business days after the call. Pilot rollouts and teacher training dates are scheduled to match your school calendar.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
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
              <h2 className="text-2xl font-bold">Ready to Empower Your Students?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Fill the request form below—Robotics Curriculum & Teacher Training. Our School Partnership Manager will contact you within 48 hours with a tailored proposal and quote.</span>
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

export default RoboticsCurriculumPage;