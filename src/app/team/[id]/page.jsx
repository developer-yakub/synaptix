'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-xl text-white/70 hover:text-white transition"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10 text-center">

        <motion.img 
          src={member.imageUrl}
          className="w-56 h-56 object-cover rounded-3xl mx-auto border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        />

        <motion.h1 
          className="text-5xl font-bold mt-10 mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {member.name}
        </motion.h1>

        <p className="text-yellow-400 text-xl font-semibold mb-8">
          {member.role}
        </p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {member.skills.split(',').map((skill, idx) => (
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
  );
}
