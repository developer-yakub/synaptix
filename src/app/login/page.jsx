"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Shield,
  Zap,
  Minus,
  Globe,
} from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Fix hydration error by ensuring client-side only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setAuthStatus("success");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setAuthStatus(null);
      }, 3000);
    }, 2000);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);

    // Simulate Google authentication
    setTimeout(() => {
      setIsLoading(false);
      setAuthStatus("success");

      setTimeout(() => {
        setAuthStatus(null);
      }, 3000);
    }, 1500);
  };

  const tabVariants = {
    hidden: { opacity: 0, x: activeTab === "login" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: activeTab === "login" ? 50 : -50,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Subtle floating elements - Desktop only */}
      <div className="hidden lg:block absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-slate-500 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-slate-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-slate-300 rounded-full"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Minus className="w-12 h-px bg-slate-600" />
            <h1 className="text-4xl sm:text-5xl font-light tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              SYNAPTIX
            </h1>
            <Minus className="w-12 h-px bg-slate-600" />
          </div>
          <p className="text-slate-400 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            Welcome to the future of innovation
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex mb-8">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-300 ${
              activeTab === "login"
                ? "text-slate-50 border-b-2 border-slate-50"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-300 ${
              activeTab === "signup"
                ? "text-slate-50 border-b-2 border-slate-50"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Create Account
          </button>
        </motion.div>

        {/* Auth Status Messages */}
        <AnimatePresence>
          {authStatus && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                authStatus === "success"
                  ? "bg-green-900/20 border border-green-500/30"
                  : "bg-red-900/20 border border-red-500/30"
              }`}
            >
              {authStatus === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400" />
              )}
              <span className="text-sm font-light">
                {authStatus === "success"
                  ? "Authentication successful!"
                  : "Authentication failed. Please try again."}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Container */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8"
        >
          <AnimatePresence mode="wait">
            {activeTab === "login" ? (
              <motion.div
                key="login"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-light mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-slate-500 bg-slate-800/70"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-12 py-4 bg-slate-800/50 border rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "password"
                            ? "border-slate-500 bg-slate-800/70"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm text-slate-400">
                      <input
                        type="checkbox"
                        className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-slate-500"
                      />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-slate-50 text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 h-px bg-slate-700" />
                  <span className="px-4 text-sm text-slate-400">or</span>
                  <div className="flex-1 h-px bg-slate-700" />
                </div>

                {/* Google Auth */}
                <motion.button
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-5 h-5" />
                  <span>Continue with Google</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-light mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "name"
                            ? "border-slate-500 bg-slate-800/70"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-slate-500 bg-slate-800/70"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-12 py-4 bg-slate-800/50 border rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                          focusedField === "password"
                            ? "border-slate-500 bg-slate-800/70"
                            : "border-slate-700 hover:border-slate-600"
                        }`}
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <label className="flex items-start space-x-3 text-sm text-slate-400">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-slate-800 border-slate-600 rounded focus:ring-slate-500 mt-0.5"
                      required
                    />
                    <span>
                      I agree to the{" "}
                      <button type="button" className="text-slate-300 hover:text-slate-200 underline">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button type="button" className="text-slate-300 hover:text-slate-200 underline">
                        Privacy Policy
                      </button>
                    </span>
                  </label>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-slate-50 text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 h-px bg-slate-700" />
                  <span className="px-4 text-sm text-slate-400">or</span>
                  <div className="flex-1 h-px bg-slate-700" />
                </div>

                {/* Google Auth */}
                <motion.button
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-5 h-5" />
                  <span>Continue with Google</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-sm text-slate-400">
            {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
              className="text-slate-300 hover:text-slate-200 underline transition-colors duration-200"
            >
              {activeTab === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;