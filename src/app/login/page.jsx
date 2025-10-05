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
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase"; // Adjust the import path to your firebase.js location

const AuthPage = () => {
  const router = useRouter();
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
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        router.push("/"); // Redirect to dashboard if already authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Prevent hydration mismatch by ensuring client-only rendering
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
    setAuthStatus(null);

    try {
      let result;
      if (activeTab === "signup") {
        // Signup with email/password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: formData.name,
          email: formData.email,
          role: "customer",
          createdAt: new Date(),
        });

        setAuthStatus("success");
      } else {
        // Login with email/password
        result = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        setAuthStatus("success");
      }

      // Clear success message after 3 seconds and redirect
      setTimeout(() => {
        setAuthStatus(null);
        router.push("/"); // Adjust to your desired route after auth
      }, 3000);
    } catch (error) {
      console.error("Auth error:", error);
      setAuthStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    setIsLoading(true);
    setAuthStatus(null);

    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore, if not, create
      const userDocRef = doc(db, "users", user.uid);
      // Note: In a real app, you'd use getDoc to check existence first, but for simplicity, we set it (Firestore will overwrite if exists)
      await setDoc(userDocRef, {
        name: user.displayName || user.email.split("@")[0],
        email: user.email,
        role: "customer",
        createdAt: new Date(),
      }, { merge: true }); // Use merge to avoid overwriting if exists

      setAuthStatus("success");

      // Clear success message after 3 seconds and redirect
      setTimeout(() => {
        setAuthStatus(null);
        router.push("/"); // Adjust to your desired route after auth
      }, 3000);
    } catch (error) {
      console.error("Social auth error:", error);
      setAuthStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  // If user is already authenticated, redirect
  if (user) {
    return null; // Or a loading spinner, but since onAuthStateChanged handles redirect
  }

  // Prevent rendering until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  const tabVariants = {
    hidden: { opacity: 0, x: activeTab === "login" ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      x: activeTab === "login" ? 30 : -30,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Subtle grid background */}
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

      {/* Back Button */}
      <motion.button
        onClick={() => router.push('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.05, x: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 left-6 z-20 flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/60 hover:text-white transition-all duration-300 backdrop-blur-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </motion.button>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-black text-2xl font-bold">
              <Image
                src={"/logo.svg"}
                height={70}
                width={70}
                alt="Synaptix Logo"
              />
            </div>
          </motion.div>
          <h1 className="text-3xl font-light tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Welcome to Synaptix
          </h1>
          <p className="text-white/60 font-light">
            Sign in to continue to your account
          </p>
        </motion.div>

        {/* Auth Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Tab Switcher */}
          <div className="p-8 pb-0">
            <div className="flex bg-white/5 rounded-2xl p-1 relative">
              <motion.div
                className="absolute top-1 bottom-1 bg-white rounded-xl"
                initial={false}
                animate={{
                  x: activeTab === "login" ? 4 : "calc(100% - 4px)",
                  width: "calc(50% - 4px)",
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              <motion.button
                onClick={() => setActiveTab("login")}
                className={`relative z-10 flex-1 py-3 px-6 text-center font-medium transition-colors duration-300 rounded-xl ${
                  activeTab === "login"
                    ? "text-black"
                    : "text-white/60 hover:text-white/80"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("signup")}
                className={`relative z-10 flex-1 py-3 px-6 text-center font-medium transition-colors duration-300 rounded-xl ${
                  activeTab === "signup"
                    ? "text-black"
                    : "text-white/60 hover:text-white/80"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-8">
            {/* Success/Error Message */}
            <AnimatePresence>
              {authStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className={`mb-6 p-4 rounded-2xl border flex items-center ${
                    authStatus === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}
                >
                  {authStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span className="font-medium">
                    {authStatus === "success"
                      ? `${
                          activeTab === "login" ? "Sign in" : "Account creation"
                        } successful! Welcome to Synaptix.`
                      : "Something went wrong. Please try again."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Content */}
            <AnimatePresence mode="wait">
              <motion.form
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name field - only for signup */}
                {activeTab === "signup" && (
                  <motion.div variants={itemVariants} className="relative">
                    <div className="relative">
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        whileFocus={{ scale: 1.01 }}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/10 text-white placeholder-white/40 transition-all duration-300 backdrop-blur-sm peer"
                        placeholder=" "
                        required
                      />
                      <motion.label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === "name" || formData.name
                            ? "top-2 text-xs text-white/60"
                            : "top-4 text-base text-white/40"
                        }`}
                        animate={{
                          y: focusedField === "name" || formData.name ? -8 : 0,
                          scale: focusedField === "name" || formData.name ? 0.85 : 1,
                        }}
                      >
                        Full Name
                      </motion.label>
                      <User
                        className={`absolute right-4 top-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "name"
                            ? "text-white/60"
                            : "text-white/30"
                        }`}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Email field */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="relative">
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/10 text-white placeholder-white/40 transition-all duration-300 backdrop-blur-sm peer"
                      placeholder=" "
                      required
                    />
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "email" || formData.email
                          ? "top-2 text-xs text-white/60"
                          : "top-4 text-base text-white/40"
                      }`}
                      animate={{
                        y: focusedField === "email" || formData.email ? -8 : 0,
                        scale: focusedField === "email" || formData.email ? 0.85 : 1,
                      }}
                    >
                      Email Address
                    </motion.label>
                    <Mail
                      className={`absolute right-4 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-white/60"
                          : "text-white/30"
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Password field */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="relative">
                    <motion.input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      whileFocus={{ scale: 1.01 }}
                      className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/10 rounded-2xl focus:border-white/30 focus:bg-white/10 text-white placeholder-white/40 transition-all duration-300 backdrop-blur-sm peer"
                      placeholder=" "
                      required
                    />
                    <motion.label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "password" || formData.password
                          ? "top-2 text-xs text-white/60"
                          : "top-4 text-base text-white/40"
                      }`}
                      animate={{
                        y: focusedField === "password" || formData.password ? -8 : 0,
                        scale: focusedField === "password" || formData.password ? 0.85 : 1,
                      }}
                    >
                      Password
                    </motion.label>
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-4 top-4 text-white/30 hover:text-white/60 transition-colors duration-300"
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
                      whileHover={{ scale: 1.02 }}
                      className="text-sm text-white/60 hover:text-white font-medium transition-colors duration-300"
                    >
                      Forgot password?
                    </motion.a>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-white/90 text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
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
                        className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full mr-3"
                      />
                      {activeTab === "login"
                        ? "Signing In..."
                        : "Creating Account..."}
                    </>
                  ) : (
                    <>
                      {activeTab === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </motion.button>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="relative flex items-center my-8"
                >
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 px-4 text-white/40 text-sm font-medium">
                    or
                  </span>
                  <div className="flex-grow border-t border-white/10"></div>
                </motion.div>

                {/* Social Sign In */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <motion.button
                    type="button"
                    onClick={() => handleSocialAuth("google")}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </motion.button>
                </motion.div>

                {/* Terms and Privacy - only for signup */}
                {activeTab === "signup" && (
                  <motion.p
                    variants={itemVariants}
                    className="text-xs text-white/40 text-center leading-relaxed mt-6"
                  >
                    By creating an account, you agree to our{" "}
                    <motion.a
                      href="/terms"
                      whileHover={{ scale: 1.02 }}
                      className="text-white/60 hover:text-white transition-colors duration-300 underline underline-offset-2"
                    >
                      Terms of Service
                    </motion.a>{" "}
                    and{" "}
                    <motion.a
                      href="/privacy"
                      whileHover={{ scale: 1.02 }}
                      className="text-white/60 hover:text-white transition-colors duration-300 underline underline-offset-2"
                    >
                      Privacy Policy
                    </motion.a>
                  </motion.p>
                )}
              </motion.form>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-white/40 text-sm">
            {activeTab === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <motion.button
              onClick={() =>
                setActiveTab(activeTab === "login" ? "signup" : "login")
              }
              whileHover={{ scale: 1.02 }}
              className="text-white/60 hover:text-white font-medium transition-colors duration-300 underline underline-offset-2"
            >
              {activeTab === "login" ? "Sign up" : "Sign in"}
            </motion.button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;