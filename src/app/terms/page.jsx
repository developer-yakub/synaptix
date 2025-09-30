"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Calendar, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

const TermsPage = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

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
    <div className="min-h-screen bg-black text-white">
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
        onClick={() => router.back()}
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10">
              <FileText className="w-8 h-8 text-white/60" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Terms of Service
              </h1>
              <p className="text-white/60 font-light">
                Last updated: January 1, 2024
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    1. Introduction
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Welcome to Synaptix Robotics ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </section>

                {/* Acceptance */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    2. Acceptance of Terms
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
                  </p>
                </section>

                {/* Services */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    3. Our Services
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Synaptix Robotics provides:
                  </p>
                  <ul className="text-white/70 space-y-2 ml-6">
                    <li>• Robotics education and training programs</li>
                    <li>• Laboratory setup and consultation services</li>
                    <li>• Custom robotics project development</li>
                    <li>• Educational workshops and seminars</li>
                    <li>• Technical support and guidance</li>
                  </ul>
                </section>

                {/* User Responsibilities */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    4. User Responsibilities
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    You agree to:
                  </p>
                  <ul className="text-white/70 space-y-2 ml-6">
                    <li>• Provide accurate and complete information</li>
                    <li>• Use our services for lawful purposes only</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Not interfere with or disrupt our services</li>
                    <li>• Maintain the security of your account</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    5. Intellectual Property
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    All content, materials, and intellectual property on our platform are owned by Synaptix Robotics or our licensors. You may not copy, modify, distribute, or create derivative works without our express written permission.
                  </p>
                </section>

                {/* Privacy */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    6. Privacy
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    7. Limitation of Liability
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    To the maximum extent permitted by law, Synaptix Robotics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    8. Termination
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    We may terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    9. Changes to Terms
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    10. Contact Information
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white/80 font-medium">Synaptix Robotics</p>
                    <p className="text-white/60">Email: legal@synaptixrobotics.com</p>
                    <p className="text-white/60">Address: Warangal, Telangana, India</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-4 text-white/40 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: January 1, 2024</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
