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
            <span className="text-sm text-gray-400">Software & Web Development</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Your Digital Storefront Awaits 💻✨
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Your website or app is your digital storefront. Whether you're a small business, startup, or industry leader, a professional web presence and reliable software 
            can make the difference between a good idea and a successful product. At Synaptix, our developers, designers, and product strategists turn your concepts 
            into polished, high-performing websites, web apps, and custom apps—on time and within budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We don't just build what you ask for—we help you discover what your users truly need. From lightweight brochure sites and e-commerce stores to complex SaaS 
            platforms and mobile apps, we deliver secure, scalable, and easy-to-manage solutions. Our process includes discovery, UX/UI design, development, testing, 
            deployment, and ongoing maintenance—so you get a full product, not just code.
          </motion.p>
        </motion.div>

        {/* Why Choose Synaptix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <Lightbulb className="w-6 h-6 text-gray-300" />
            Why Choose Synaptix for Your Software/Web Project?
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 cursor-pointer overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 bg-gray-800 rounded-xl ${item.iconColor} group-hover:bg-gray-700 transition-colors`}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                          {item.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
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
            className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
          >
            Want to start? Fill the project form below—tell us what you need and we'll reach out with a clear plan and quote.
          </motion.p>
        </motion.section>

        {/* Project Intake Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 justify-center">
            <FileText className="w-6 h-6 text-gray-300" />
            Project Intake Form - Software & Web Development
          </h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Company/Business Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Company/Business Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Full Name (Contact Person)</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
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
                  <label className="block text-sm font-medium mb-2 text-gray-300">Phone/WhatsApp</label>
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
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">What service do you need? (Select one or more)</label>
                {['Website', 'Web Application/SaaS', 'Mobile App (iOS/Android)', 'E-commerce Store', 'Custom Business Software/ERP/CRM', 'Website Maintenance/Site Upgrade', 'Other, specify below'].map((service) => (
                  <label key={service} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{service}</span>
                  </label>
                ))}
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Describe your project/idea (short summary)</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Brief description of your project..."
                  required
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Key Features (tick-select commonly used features)</label>
                {['User registration & login', 'Admin dashboard/CMS', 'Product catalog/Online payments', 'Booking/Scheduling system', 'Real-time data/WebSockets', 'Reporting & analytics/APIs', 'Multi-language support', 'Push notifications/Email automation', 'Third-party integrations (Stripe, Paytm, Google, etc.)', 'Other:'].map((feature) => (
                  <label key={feature} className="flex items-center gap-2 p-2">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature}
                      checked={formData.features.includes(feature)}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <span className="text-gray-300">{feature}</span>
                  </label>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Tech Stack (if known)</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Frontend (React/Vue/Angular), Backend (Node/PHP/Laravel/.NET), Mobile (Flutter/React Native/Native), Prefer us to decide"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Target Users/Audience</label>
                  <input
                    type="text"
                    name="targetUsers"
                    value={formData.targetUsers}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                    placeholder="e.g., retail customers, school students, internal staff"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Expected # of Users</label>
                  <select
                    name="expectedUsers"
                    value={formData.expectedUsers}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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

              {/* Design Preferences */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Design Preferences</label>
                <textarea
                  name="designPreferences"
                  value={formData.designPreferences}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-500"
                  placeholder="Links to examples, color/theme, must-have UI notes"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="logoBrand"
                    checked={formData.logoBrand}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-gray-300">Yes - logo & brand assets ready</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="logoBrand"
                    checked={!formData.logoBrand}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-gray-300">No - need branding & design help</span>
                </label>
              </div>

              {/* Hosting */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Do you need hosting & domain?</label>
                <select
                  name="hosting"
                  value={formData.hosting}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="yes-existing">Yes, please handle hosting & domain</option>
                  <option value="recommend">Need recommendation</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Launch Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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
                  <label className="block text-sm font-medium mb-2 text-gray-300">Budget Range (approx)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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

              {/* Maintenance */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Do you need ongoing maintenance & support?</label>
                <select
                  name="maintenance"
                  value={formData.maintenance}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
                >
                  <option value="">Select</option>
                  <option value="yes-monthly">Yes - monthly ongoing</option>
                  <option value="ad-hoc">Yes - ad-hoc support</option>
                  <option value="one-time">No - one-time delivery</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">File Uploads (optional)</label>
                <input
                  type="file"
                  name="files"
                  onChange={handleInputChange}
                  multiple
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
                <p className="text-gray-400 text-sm mt-1">Mockups, requirements doc, Figma link, examples</p>
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">How did you hear about us?</label>
                <select
                  name="referral"
                  value={formData.referral}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gray-500"
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
                {submitted ? 'Submitted!' : 'Submit & Talk to Our Expert'}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center"
                >
                  Thank you! We'll reach out with a clear plan and quote soon.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
              <h2 className="text-2xl font-bold">Ready to Build Your Digital Presence?</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              <span className="font-semibold text-white">For a quick chat, click below to start a WhatsApp conversation with our expert.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
              >
                📱 WhatsApp/Talk to Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareWebDevelopmentPage;