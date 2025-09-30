"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, Database, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPage = () => {
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
              <Shield className="w-8 h-8 text-white/60" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Privacy Policy
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
                    At Synaptix Robotics, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    2. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Eye className="w-5 h-5 text-white/40 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
                        <p className="text-white/70 leading-relaxed">
                          We collect information you provide directly, such as your name, email address, phone number, and educational institution details when you create an account or contact us.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 text-white/40 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Usage Information</h3>
                        <p className="text-white/70 leading-relaxed">
                          We automatically collect information about how you use our services, including your IP address, browser type, device information, and pages visited.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    3. How We Use Your Information
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="text-white/70 space-y-2 ml-6">
                    <li>• Provide and maintain our services</li>
                    <li>• Process your requests and transactions</li>
                    <li>• Send you important updates and notifications</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Provide customer support</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    4. Information Sharing
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="text-white/70 space-y-2 ml-6">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal requirements</li>
                    <li>• To protect our rights and safety</li>
                    <li>• With trusted service providers who assist us</li>
                    <li>• In connection with a business transfer</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-6 h-6 text-white/40 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        5. Data Security
                      </h2>
                      <p className="text-white/70 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    6. Data Retention
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    7. Your Rights
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="text-white/70 space-y-2 ml-6">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your information</li>
                    <li>• Object to processing of your information</li>
                    <li>• Request data portability</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                </section>

                {/* Cookies */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    8. Cookies and Tracking
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Some features may not function properly if cookies are disabled.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    9. Third-Party Services
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    10. Children's Privacy
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    11. Changes to This Policy
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-light mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    12. Contact Us
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white/80 font-medium">Synaptix Robotics - Privacy Team</p>
                    <p className="text-white/60">Email: privacy@synaptixrobotics.com</p>
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

export default PrivacyPage;
