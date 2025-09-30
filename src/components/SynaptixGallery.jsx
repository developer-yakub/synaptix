"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  Zap,
  Eye,
  ExternalLink,
  Maximize2,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SynaptixGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "workshops",
      title: "Advanced Robotics Workshop",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      description: "Students mastering robotics fundamentals through hands-on learning",
      stats: { participants: "50+", duration: "4 weeks" },
      tags: ["Beginner", "Hardware", "Programming"],
    },
    {
      id: 2,
      type: "image",
      category: "robots",
      title: "AI-Powered Humanoid",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      description: "Next-generation AI robot with advanced cognitive capabilities",
      stats: { technology: "Neural AI", status: "Active" },
      tags: ["AI", "Machine Learning", "Innovation"],
    },
    {
      id: 3,
      type: "image",
      category: "labs",
      title: "State-of-Art Laboratory",
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      description: "Fully equipped robotics lab with cutting-edge technology",
      stats: { equipment: "100+", capacity: "30 students" },
      tags: ["Research", "Development", "Innovation"],
    },
    {
      id: 4,
      type: "image",
      category: "workshops",
      title: "IoT Integration Session",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      description: "Learning to integrate IoT sensors with robotic systems",
      stats: { level: "Intermediate", projects: "15" },
      tags: ["IoT", "Sensors", "Integration"],
    },
    {
      id: 5,
      type: "image",
      category: "robots",
      title: "Autonomous Drone System",
      src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
      description: "Self-navigating drone with computer vision capabilities",
      stats: { range: "5km", flight: "45 min" },
      tags: ["Autonomous", "Computer Vision", "Flight"],
    },
    {
      id: 6,
      type: "image",
      category: "labs",
      title: "Innovation Hub",
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      description: "Collaborative space for breakthrough robotics research",
      stats: { projects: "50+", teams: "12" },
      tags: ["Collaboration", "Research", "Innovation"],
    },
    {
      id: 7,
      type: "image",
      category: "workshops",
      title: "3D Printing & Prototyping",
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      description: "Rapid prototyping workshop for custom robot parts",
      stats: { prints: "200+", materials: "12 types" },
      tags: ["3D Printing", "Prototyping", "Design"],
    },
    {
      id: 8,
      type: "image",
      category: "robots",
      title: "Industrial Robot Arm",
      src: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
      description: "High-precision robotic arm for manufacturing applications",
      stats: { precision: "0.1mm", payload: "20kg" },
      tags: ["Industrial", "Automation", "Precision"],
    },
    {
      id: 9,
      type: "image",
      category: "labs",
      title: "AI Research Center",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      description: "Advanced AI and machine learning research facility",
      stats: { researchers: "25", papers: "40+" },
      tags: ["AI", "Research", "Machine Learning"],
    },
  ];

  const categories = [
    { id: "all", label: "All", icon: Sparkles },
    { id: "workshops", label: "Workshops", icon: Zap },
    { id: "robots", label: "Robots", icon: Play },
    { id: "labs", label: "Labs", icon: Eye },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === filter);

  const handlePrevious = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage?.id
    );
    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    setSelectedImage(galleryItems[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage?.id
    );
    const nextIndex =
      currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden py-24">
      {/* Background Elements */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 space-y-6"
        >
          {/* Title */}
          <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-3 px-5 py-2 border border-slate-600 rounded-full"
                whileHover={{ scale: 1.05, borderColor: "rgb(100 116 139)" }}
              >
                <Sparkles className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-light tracking-wider text-slate-400 uppercase">
                  Visual Journey
                </span>
              </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-[0.15em] sm:tracking-[0.2em] leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              GALLERY
            </h1>

            <p className="text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed px-4">
              Explore our robotics workshops, labs, and innovative technology
            </p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center flex-wrap gap-4 pt-8"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                    className={cn(
                      "group relative px-8 py-4 border rounded-full font-light tracking-wide transition-all duration-500 overflow-hidden",
                      filter === category.id
                        ? "border-slate-500 bg-slate-900/30 text-slate-50"
                        : "border-slate-600 bg-transparent text-slate-400 hover:border-slate-500 hover:text-slate-300"
                    )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </span>

                  {/* Active indicator */}
                  {filter === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-white/5 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Main Card with Glare Effect */}
                <motion.div
                  className="relative h-[450px] rounded-3xl overflow-hidden border border-slate-700 bg-gradient-to-br from-slate-900/20 to-transparent cursor-pointer"
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Glare Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={hoveredCard === item.id ? {
                      backgroundPosition: ['0% 0%', '200% 200%'],
                    } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="px-4 py-2 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full">
                      <span className="text-xs font-light uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Hover Actions */}
                  <AnimatePresence>
                    {hoveredCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute top-4 right-4 z-20 flex items-center space-x-2"
                      >
                        <motion.button
                          className="p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full hover:bg-slate-800/50 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Maximize2 className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full hover:bg-slate-800/50 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Title */}
                      <h3 className="text-2xl font-light tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm font-light text-white/70 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center space-x-6">
                        {Object.entries(item.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-white/40 rounded-full" />
                            <span className="text-xs text-white/50 uppercase tracking-wider">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <motion.div
                        className="flex items-center flex-wrap gap-2 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Bottom Border Glow */}
                  <AnimatePresence>
                    {hoveredCard === item.id && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                        style={{ originX: 0.5 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Corner Accents */}
                  <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Floating Info Button */}
                <AnimatePresence>
                  {hoveredCard === item.id && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0, rotate: 180 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 p-4 bg-slate-200 text-slate-900 rounded-full shadow-2xl hover:scale-110 transition-transform"
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <Info className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden border border-slate-600">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="space-y-6 p-8">
                  <div className="inline-block px-4 py-2 bg-slate-900/50 backdrop-blur-xl border border-slate-600 rounded-full">
                    <span className="text-xs font-light uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                  </div>

                  <h2 className="text-4xl font-light tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedImage.title}
                  </h2>

                  <p className="text-lg font-light text-white/70 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {Object.entries(selectedImage.stats).map(([key, value]) => (
                      <div key={key} className="p-4 border border-white/10 rounded-xl">
                        <div className="text-sm text-white/50 uppercase tracking-wider mb-1">
                          {key}
                        </div>
                        <div className="text-2xl font-light">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {selectedImage.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SynaptixGallery;