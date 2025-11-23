"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { ChevronLeft, Mail, Phone, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TeamMemberPage() {
  const router = useRouter();
  const { id } = useParams();

  const [member, setMember] = useState(null);

  useEffect(() => {
    const loadMember = async () => {
      const ref = doc(db, "team", id);
      const snap = await getDoc(ref);
      if (snap.exists()) setMember({ id: snap.id, ...snap.data() });
    };

    loadMember();
  }, [id]);

  if (!member) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Top Left Buttons */}
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
        {/* View All Team Members */}
        <button
  onClick={() => router.push("/team")}
  className="fixed top-6 left-6 z-50 px-4 md:px-8 font-bold py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition"
>
  View Team
</button>


      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">

  {/* Two-column layout ON DESKTOP, single column ON MOBILE */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-30">
  
    {/* right COLUMN — Image + Basic Info */}
    <div className="text-center lg:text-left">

      {/* Profile Photo */}
      <motion.img
        src={member.imageUrl}
        className="w-[360px] h-[640px] object-cover rounded-3xl mx-auto lg:mx-0 border border-gray-700/50 shadow-xl"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl font-bold mt-10 mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {member.name}
      </motion.h1>

      {/* Role */}
      <p className="text-yellow-400 text-xl font-semibold mb-4">
        {member.role}
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center lg:items-start gap-3 text-gray-300">
        {member.email && (
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span>{member.email}</span>
          </div>
        )}

        {member.mobile && (
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span>{member.mobile}</span>
          </div>
        )}
      </div>

    </div>

    {/* left COLUMN — About + Message + Skills */}
    <div className="space-y-8">

      {/* ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/60 p-8 rounded-3xl border border-gray-700/40 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <UserRound className="w-6 h-6 text-purple-300" />
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">{member.about}</p>
      </motion.div>

      {/* MESSAGE */}
      {member.message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/60 p-8 rounded-3xl border border-gray-700/40 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-3">My Message</h2>
          <p className="text-gray-300 leading-relaxed">{member.message}</p>
        </motion.div>
      )}

      {/* SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/70 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {member.skills.split(",").map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gray-700/50 border border-gray-600/40 rounded-full text-sm text-gray-200"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </motion.div>

    </div>
    
  </div>

</div>

    </div>
  );
}
