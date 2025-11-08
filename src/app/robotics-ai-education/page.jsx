'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Code,
  Brain,
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
  Rocket
} from 'lucide-react';
import { createInquiry } from '@/lib/adminService';

const RoboticsAIEducationPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    ageClass: '',
    parentName: '',
    school: '',
    email: '',
    phone: '',
    cityState: '',
    mode: '',
    interests: [],
    schedule: '',
    customSchedule: '',
    enrollmentType: '',
    referral: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    {
      id: 1,
      icon: BookOpen,
      title: "Foundations of Robotics",
      description: "Basic electronics, sensors, actuators, and simple robots (for Class 3-6).",
      details: [
        "Hands-on building of basic robots",
        "Introduction to electronics and sensors"
      ],
      highlight: "Perfect for young beginners sparking curiosity.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 2,
      icon: Code,
      title: "Embedded Systems & Microcontrollers",
      description: "Arduino/ESP boards, interfacing, and small automation (middle school).",
      details: [
        "Programming microcontrollers",
        "Building automated projects"
      ],
      highlight: "Ideal for middle school students exploring hardware.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 3,
      icon: Brain,
      title: "Programming for Robotics",
      description: "Python/C++ fundamentals, control logic, lists, functions, and libraries.",
      details: [
        "Core coding skills for robotics",
        "Logic and problem-solving exercises"
      ],
      highlight: "Builds strong programming foundations.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    },
    {
      id: 4,
      icon: Zap,
      title: "Sensors & IoT Integration",
      description: "Connecting sensors, data logging, cloud dashboards, and remote control.",
      details: [
        "IoT projects with real-time data",
        "Cloud integration basics"
      ],
      highlight: "Connects physical world to digital.",
      color: "from-gray-400/20 to-gray-300/20",
      iconColor: "text-white"
    },
    {
      id: 5,
      icon: Brain,
      title: "AI & Machine Learning Basics",
      description: "Image recognition, simple ML models, and AI concepts applied to robotics.",
      details: [
        "Intro to AI in robotics",
        "Practical ML applications"
      ],
      highlight: "Future-ready AI skills for all levels.",
      color: "from-gray-700/20 to-gray-600/20",
      iconColor: "text-gray-300"
    },
    {
      id: 6,
      icon: Award,
      title: "Advanced Design & Competitions",
      description: "CAD basics, 3D printing, PCB, SLAM, basics for working challenges.",
      details: [
        "Competition prep projects",
        "Advanced prototyping"
      ],
      highlight: "Gear up for national-level contests.",
      color: "from-gray-600/20 to-gray-500/20",
      iconColor: "text-gray-200"
    },
    {
      id: 7,
      icon: BookOpen,
      title: "Project Design & Prototyping",
      description: "CAD basics, 3D printing, PCBs, assembly for working prototypes.",
      details: [
        "End-to-end project building",
        "Portfolio-worthy prototypes"
      ],
      highlight: "From idea to tangible project.",
      color: "from-gray-500/20 to-gray-400/20",
      iconColor: "text-gray-100"
    }
  ];

  const formats = [
    {
      title: "Online Live Classes",
      description: "Interactive sessions, live demos, screen-sharing, and recorded lessons for revision.",
      icon: Users
    },
    {
      title: "Offline / Classroom Workshops",
      description: "Hands-on sessions at schools, training centers, or our lab with kits provided.",
      icon: BookOpen
    },
    {
      title: "Hybrid",
      description: "Combine online theory with scheduled in-person labs or mentor check-ins.",
      icon: Zap
    },
    {
      title: "Short Courses",
      description: "Weekend bootcamps, 6-12 week courses, and multi-term tracks.",
      icon: Calendar
    }
  ];

  const whyLove = [
    "Real hardware kits and project-based learning.",
    "Mentorship from experienced engineers and educators.",
    "Pathway to showcase projects at competitions and expos.",
    "Practical portfolio-building – students leave with tangible projects."
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked ? [...prev.interests, value] : prev.interests.filter(i => i !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.agree) {
      setSubmitted(true);
      try {
        await createInquiry({
          inquiryType: 'robotics-ai-education',
          name: formData.fullName,
          ageClass: formData.ageClass,
          parentName: formData.parentName,
          school: formData.school,
          email: formData.email,
          phone: formData.phone,
          cityState: formData.cityState,
          mode: formData.mode,
          interests: formData.interests,
          schedule: formData.schedule,
          enrollmentType: formData.enrollmentType,
          referral: formData.referral,
          message: `Robotics & AI Education enrollment request from ${formData.fullName}`,
          subject: `Course Enrollment Request - ${formData.fullName}`
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again.');
        setSubmitted(false);
      }
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
            <span className="text-sm font-medium text-gray-200">Robotics & AI Education</span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Inspire • Learn • Build
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
            We make learning robotics and AI exciting, hands-on, and affordable. Our programs are designed for students from Class 3 through higher secondary and beyond. 
            Whether your learner is just starting or ready for advanced projects, we offer structured courses, practical labs, and mentorship – available online or offline.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-5xl mx-auto leading-relaxed text-lg"
          >
            What we teach blends theory with practical applications so students learn by doing.
          </motion.p>
        </motion.div>

        {/* Enhanced What We Teach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Lightbulb className="w-8 h-8 text-gray-300" />
            What We Teach
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(course.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 cursor-pointer overflow-hidden backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
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
                          {course.id}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {course.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === course.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 mb-6"
                          >
                            {course.details.map((detail, idx) => (
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
                          {course.highlight}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced Images Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Students building robots", icon: Users },
              { title: "Coding session", icon: Code },
              { title: "Group workshop", icon: BookOpen },
              { title: "AI project demo", icon: Brain }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl mb-6 mx-auto w-fit border border-gray-600/50">
                    <Icon className="w-8 h-8 text-gray-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">Interactive learning experience</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Enhanced Course Formats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <BookOpen className="w-8 h-8 text-gray-300" />
            Course Formats
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl mb-6 mx-auto w-fit border border-gray-600/50">
                    <Icon className="w-8 h-8 text-gray-200" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{format.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{format.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Enhanced Why Students Love */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Sparkles className="w-8 h-8 text-gray-300" />
            Why Students Love Our Programs
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyLove.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Enrollment Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-20"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3 justify-center">
            <Users className="w-8 h-8 text-gray-300" />
            How to Enroll
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Age/Class (e.g., Class 8)</label>
                <input
                  type="text"
                  name="ageClass"
                  value={formData.ageClass}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Age or Class"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Parent/Guardian Name (if student is a minor)</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="Parent/Guardian Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">School/Institution (optional)</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  placeholder="School/Institution"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                  <label className="block text-sm font-semibold mb-3 text-gray-200">Phone/WhatsApp Number</label>
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

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Mode of Learning</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online (Live Classes)</option>
                  <option value="offline">Offline (In-Person Training)</option>
                  <option value="hybrid">Hybrid (Mix of Online + Offline)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gray-200">Course Interest (select one or more)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Foundations of Robotics', 'Embedded Systems & Microcontrollers', 'IoT Programming for Dashboards (Python/C)', 'AI & Machine Learning Basics', 'Competitions & Advanced Projects'].map((interest) => (
                    <label key={interest} className="flex items-center gap-3 p-4 bg-gray-800/60 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="rounded text-gray-300"
                      />
                      <span className="text-gray-200 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Preferred Schedule</label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300 mb-4"
                  required
                >
                  <option value="">Select Schedule</option>
                  <option value="weekday">Weekday After-School</option>
                  <option value="weekend">Weekend (Sat-Sun)</option>
                  <option value="morning">Morning</option>
                  <option value="custom">Custom</option>
                </select>
                {formData.schedule === 'custom' && (
                  <input
                    type="text"
                    name="customSchedule"
                    value={formData.customSchedule}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                    placeholder="Specify preferred days/timings"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">Enrollment Type</label>
                <select
                  name="enrollmentType"
                  value={formData.enrollmentType}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="individual">Individual (1-2 students)</option>
                  <option value="group-small">Group (3-5)</option>
                  <option value="group-large">Group (6+ / School Batch)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-200">How did you hear about us?</label>
                <select
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-gray-500 focus:bg-gray-800/90 transition-all duration-300"
                  required
                >
                  <option value="">Select Source</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="school">School</option>
                  <option value="google">Google</option>
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
                <span className="text-gray-200 text-sm">I agree to be contacted by Synaptix Robotics regarding course enrollment.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300"
              >
                {submitted ? 'Submitted!' : 'Submit & Get in Touch'}
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-lg leading-relaxed"
                >
                  Our team will review your details and get in touch to help choose the best course and batch. Start learning – online or offline – and begin building real projects!
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Enhanced Contact & Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-20 text-center"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact & Support</motion.h2>
          <motion.p 
            className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            For any queries, demo requests, or school partnerships – click Talk to Our Expert (WhatsApp) or fill the form above and we will reach out to you.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-lg font-medium text-lg flex items-center gap-3 mx-auto hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
            href="https://wa.me/919390404787?text=Hi%21%20I%27m%20interested%20in%20your%20robotics%20and%20AI%20education%20services.%20Can%20we%20discuss%20my%20project%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </motion.section>

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
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
              transition={{ delay: 1.2, type: "spring" }}
            >
              <Zap className="w-8 h-8 text-gray-300" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Inspire the Next Innovator?</h2>
            </motion.div>
            <p className="text-gray-200 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Join Synaptix Robotics today and transform learning into building.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-xl transition-all duration-300"
            >
            <Rocket className="w-6 h-6" />
            Enroll Now
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoboticsAIEducationPage;
