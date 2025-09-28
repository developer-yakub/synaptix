"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ZoomIn,
  Filter,
} from "lucide-react";

const SynaptixGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  // Mock gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "workshops",
      title: "Student Workshop",
      src: "/placeholder-1.jpg",
      description: "Students learning robotics fundamentals",
    },
    {
      id: 2,
      type: "image",
      category: "robots",
      title: "AI Robot Demo",
      src: "/placeholder-2.jpg",
      description: "Advanced AI robot demonstration",
    },
    {
      id: 3,
      type: "video",
      category: "labs",
      title: "Robotics Lab Setup",
      src: "/placeholder-video.mp4",
      description: "Complete robotics laboratory",
    },
    {
      id: 4,
      type: "image",
      category: "workshops",
      title: "Hands-on Learning",
      src: "/placeholder-3.jpg",
      description: "Interactive learning session",
    },
    {
      id: 5,
      type: "image",
      category: "robots",
      title: "Humanoid Robot",
      src: "/placeholder-4.jpg",
      description: "Next-gen humanoid technology",
    },
    {
      id: 6,
      type: "image",
      category: "labs",
      title: "Modern Lab Equipment",
      src: "/placeholder-5.jpg",
      description: "State-of-the-art equipment",
    },
    {
      id: 7,
      type: "image",
      category: "workshops",
      title: "Team Collaboration",
      src: "/placeholder-6.jpg",
      description: "Students working together",
    },
    {
      id: 8,
      type: "image",
      category: "robots",
      title: "Robot Assembly",
      src: "/placeholder-7.jpg",
      description: "Robot construction process",
    },
    {
      id: 9,
      type: "image",
      category: "labs",
      title: "Innovation Center",
      src: "/placeholder-8.jpg",
      description: "Creative learning environment",
    },
  ];

  const categories = ["all", "workshops", "robots", "labs"];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex =
        currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredItems[newIndex]);
  };

  const toggleSlideshow = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        navigateImage("next");
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-20 pb-10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                GALLERY
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our robotics workshops, labs, and innovative technology
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-white text-black shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                }`}
              >
                <Filter className="inline w-4 h-4 mr-2" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 aspect-[4/3]">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-center"
                    >
                      <ZoomIn className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-400">{item.title}</p>
                      {item.type === "video" && (
                        <Play className="w-8 h-8 mx-auto mt-2 text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 transition-opacity duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-white bg-opacity-20 rounded text-xs uppercase tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Floating category badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-black bg-opacity-70 rounded text-xs uppercase tracking-wide">
                    {item.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div>
                  <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                  <p className="text-gray-400">{selectedImage.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleSlideshow}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg text-gray-400">Image Preview</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedImage.title}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-800">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Category: {selectedImage.category}</span>
                  <span>
                    {filteredItems.findIndex(
                      (item) => item.id === selectedImage.id
                    ) + 1}{" "}
                    / {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SynaptixGallery;
