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
  Sparkles
} from 'lucide-react';

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
            <span className="text-sm text-gray-400">Robotics & AI Education</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Inspire • Learn • Build 🤖✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            We make learning robotics and AI exciting, hands-on, and affordable. Our programs are designed for students from Class 3 through higher secondary and beyond. 
            Whether your learner is just starting or ready for advanced projects, we offer structured courses, practical labs, and mentorship – available online or offline.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            What we teach blends theory with practical applications so students learn by doing.
          </motion.p>
        </motion.div>

        {/* What We Teach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Lightbulb className="w-6 h-6 text-gray-300" />
            What We Teach
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 bg-gray-800 rounded-xl ${course.iconColor} group-hover:bg-gray-700 transition-colors`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                          {course.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {course.description}
                      </p>
                      <AnimatePresence>
                        {hoveredCard === course.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 mb-4"
                          >
                            {course.details.map((detail, idx) => (
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
                          {course.highlight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Images Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">Image 1: Students building robots</div>
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">Image 2: Coding session</div>
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">Image 3: Group workshop</div>
            <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">Image 4: AI project demo</div>
          </div>
        </motion.section>

        {/* Course Formats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <BookOpen className="w-6 h-6 text-gray-300" />
            Course Formats
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center"
                >
                  <div className="p-3 bg-gray-800 rounded-xl mb-4 mx-auto w-fit">
                    <Icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{format.title}</h3>
                  <p className="text-gray-400 text-sm">{format.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Why Students Love */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Sparkles className="w-6 h-6 text-gray-300" />
            Why Students Love Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyLove.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enrollment Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Users className="w-6 h-6 text-gray-300" />
            How to Enroll
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Age/Class (e.g., Class 8)</label>
                <input
                  type="text"
                  name="ageClass"
                  value={formData.ageClass}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Age or Class"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Parent/Guardian Name (if student is a minor)</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Parent/Guardian Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">School/Institution (optional)</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="School/Institution"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone/WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">City/State</label>
                <input
                  type="text"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="City, State"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Mode of Learning</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="online">Online (Live Classes)</option>
                  <option value="offline">Offline (In-Person Training)</option>
                  <option value="hybrid">Hybrid (Mix of Online + Offline)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Course Interest (select one or more)</label>
                {['Foundations of Robotics', 'Embedded Systems & Microcontrollers', 'IoT Programming for Dashboards (Python/C)', 'AI & Machine Learning Basics', 'Competitions & Advanced Projects'].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{interest}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Schedule</label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500 mb-2"
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
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Specify preferred days/timings"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Enrollment Type</label>
                <select
                  name="enrollmentType"
                  value={formData.enrollmentType}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="individual">Individual (1-2 students)</option>
                  <option value="group-small">Group (3-5)</option>
                  <option value="group-large">Group (6+ / School Batch)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">How did you hear about us?</label>
                <select
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className="rounded"
                  required
                />
                <span className="text-gray-300 text-sm">I agree to be contacted by Synaptix Robotics regarding course enrollment.</span>
              </label>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                {submitted ? 'Submitted!' : 'Submit & Get in Touch'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Our team will review your details and get in touch to help choose the best course and batch. Start learning – online or offline – and begin building real projects!
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Contact & Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Contact & Support</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            For any queries, demo requests, or school partnerships – click Talk to Our Expert (WhatsApp) or fill the form above and we will reach out to you.
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
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
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
              <h2 className="text-2xl font-bold">Ready to Inspire the Next Innovator?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">Join Synaptix Robotics today and transform learning into building.</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
            >
              🚀 Enroll Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoboticsAIEducationPage;