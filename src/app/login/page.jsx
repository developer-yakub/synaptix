"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Chrome,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Cpu,
  Shield,
  Zap,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              SYNAPTIX
            </h1>
          </motion.div>
          <p className="text-gray-400">
            Welcome to the future of robotics education
          </p>
        </motion.div>

        {/* Auth Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
        >
          {/* Tab Switcher */}
          <div className="relative p-6 pb-0">
            <div className="flex bg-gray-700/50 rounded-xl p-1 relative">
              <motion.div
                className="absolute top-1 bottom-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
                initial={false}
                animate={{
                  x: activeTab === "login" ? 0 : "100%",
                  width: "50%",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />

              <motion.button
                onClick={() => setActiveTab("login")}
                className={`relative z-10 flex-1 py-3 px-6 text-center font-semibold transition-colors duration-300 flex items-center justify-center ${
                  activeTab === "login"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Login
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("signup")}
                className={`relative z-10 flex-1 py-3 px-6 text-center font-semibold transition-colors duration-300 flex items-center justify-center ${
                  activeTab === "signup"
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-6">
            {/* Success/Error Message */}
            <AnimatePresence>
              {authStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mb-6 p-4 rounded-lg border flex items-center ${
                    authStatus === "success"
                      ? "bg-green-900/20 border-green-500 text-green-400"
                      : "bg-red-900/20 border-red-500 text-red-400"
                  }`}
                >
                  {authStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  )}
                  {authStatus === "success"
                    ? `${
                        activeTab === "login" ? "Login" : "Sign up"
                      } successful! Welcome to Synaptix.`
                    : "Something went wrong. Please try again."}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="space-y-4">
                  {/* Name field - only for signup */}
                  {activeTab === "signup" && (
                    <motion.div variants={itemVariants} className="relative">
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        />
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          whileFocus={{ scale: 1.02 }}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Email field */}
                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "email"
                            ? "text-blue-400"
                            : "text-gray-400"
                        }`}
                      />
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </motion.div>

                  {/* Password field */}
                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <Lock
                        className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "password"
                            ? "text-blue-400"
                            : "text-gray-400"
                        }`}
                      />
                      <motion.input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your password"
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Forgot Password - only for login */}
                  {activeTab === "login" && (
                    <motion.div variants={itemVariants} className="text-right">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        Forgot your password?
                      </motion.a>
                    </motion.div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      {activeTab === "login"
                        ? "Signing In..."
                        : "Creating Account..."}
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      {activeTab === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </motion.button>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="relative flex items-center"
                >
                  <div className="flex-grow border-t border-gray-600"></div>
                  <span className="flex-shrink-0 px-4 text-gray-400 text-sm">
                    or
                  </span>
                  <div className="flex-grow border-t border-gray-600"></div>
                </motion.div>

                {/* Google Sign In */}
                <motion.button
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <Chrome className="w-5 h-5 mr-3 text-blue-500" />
                  {activeTab === "login" ? "Sign in" : "Sign up"} with Google
                </motion.button>

                {/* Terms and Privacy - only for signup */}
                {activeTab === "signup" && (
                  <motion.p
                    variants={itemVariants}
                    className="text-xs text-gray-400 text-center leading-relaxed"
                  >
                    By creating an account, you agree to our{" "}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Terms of Service
                    </motion.a>{" "}
                    and{" "}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Privacy Policy
                    </motion.a>
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 text-sm">
            {activeTab === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <motion.button
              onClick={() =>
                setActiveTab(activeTab === "login" ? "signup" : "login")
              }
              whileHover={{ scale: 1.05 }}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              {activeTab === "login" ? "Sign up here" : "Sign in here"}
            </motion.button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
