'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function TeamPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const q = query(collection(db, "team"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const members = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTeam(members);
      } catch (err) {
        console.error(err);
      }
    };

    loadTeam();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* header */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 text-center">

        <motion.div 
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-full mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-gray-200">Meet the Team</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Synaptix Robotics Team
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          The brilliant minds behind innovation — bringing cutting-edge technology to life.
        </p>

      </div>

      {/* TEAM GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.04, y: -10 }}
            className="relative group cursor-pointer"
          >
            {/* hologram glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <Link href={`/team/${member.id}`}>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/60 rounded-3xl p-8 backdrop-blur-sm">
                
                <div className="flex justify-center">
                  <motion.img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-40 h-40 rounded-2xl object-cover border border-gray-700/50 shadow-xl group-hover:shadow-purple-500/20 transition"
                    whileHover={{ rotate: 2 }}
                  />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {member.name}
                </h3>

                <p className="text-center text-yellow-400 font-medium">
                  {member.role}
                </p>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
