'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Clock,
  Users,
  Tag,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Monitor,
  Car,
  Cpu,
  Lightbulb,
  BookOpen,
  Wrench,
  Star,
  StarOff,
  MessageCircle
} from 'lucide-react';
import { getProject, PROJECT_CATEGORIES, getProjects } from '@/lib/adminService';

const ProjectDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState('overview');

  const projectId = params.projectId;

  // Get category icon
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'electricalProjects': return Zap;
      case 'iotProjects': return Sparkles;
      case 'webProjects': return Lightbulb;
      case 'simulationProjects': return Cpu;
      case 'evProjects': return Car;
      default: return Globe;
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-orange-400 bg-orange-500/20';
      case 'Expert': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  useEffect(() => {
    const loadProject = async () => {
      if (!projectId) return;

      try {
        setLoading(true);
        const projectData = await getProject(projectId);

        if (!projectData) {
          router.push('/iot');
          return;
        }

        setProject(projectData);

        // Load related projects from same category (limit 3, exclude current project)
        if (projectData.category) {
          const relatedData = await getProjects(projectData.category, 4);
          const filteredRelated = relatedData.filter(p => p.id !== projectId).slice(0, 3);
          setRelatedProjects(filteredRelated);
        }

      } catch (error) {
        console.error('Error loading project:', error);
        router.push('/iot');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [projectId, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
          <p className="text-gray-400 mb-4">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/iot')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-medium"
          >
            Back to Portal
          </button>
        </div>
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => router.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </motion.button>

              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">
                  {PROJECT_CATEGORIES[project.category]?.name || project.category}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
                    <CategoryIcon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg text-sm font-medium text-blue-300">
                    {PROJECT_CATEGORIES[project.category]?.name || project.category}
                  </span>
                </div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                >
                  {project.description}
                </motion.p>

                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {project.difficulty && (
                    <div className={`px-4 py-2 rounded-lg text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </div>
                  )}

                  {project.estimatedTime && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 rounded-lg">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{project.estimatedTime}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">Active Project</span>
                  </div>
                </motion.div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300 border border-gray-600/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href={`https://wa.me/919390404787?text=${encodeURIComponent(
                      `Hi! I'm interested in starting the "${project.title}" project. Can you help me get started?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Building
                  </a>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                {project.coverImageUrl ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.coverImageUrl}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ) : project.imageUrl ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                    <CategoryIcon className="w-24 h-24 text-gray-500" />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Content Tabs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-12 border-b border-gray-700/50"
            >
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'requirements', label: 'Requirements', icon: Wrench },
                { id: 'learning', label: 'Learning Outcomes', icon: Star },
                ...(project.galleryImages && project.galleryImages.length > 0 ? [{ id: 'gallery', label: 'Gallery', icon: Monitor }] : []),
                ...(project.customSections || []).map(section => ({ id: `custom-${section.id}`, label: section.title, icon: BookOpen }))
              ].map((tab) => {
                const Icon = tab.icon || BookOpen;
                const isActive = selectedSection === tab.id;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setSelectedSection(tab.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border border-yellow-400/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {selectedSection === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {project.detailedDescription && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Project Overview</h3>
                      <div className="prose prose-lg prose-invert max-w-none">
                        {project.detailedDescription.split('\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-300 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Only show admin-provided content in overview section */}
                  {(!project.detailedDescription) && (
                    <div className="text-center text-gray-400 mt-8">
                      No overview content provided yet.
                    </div>
                  )}
                </motion.div>
              )}

              {selectedSection === 'requirements' && (
                <motion.div
                  key="requirements"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {project.technicalSpecs && project.technicalSpecs.length > 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Technical Requirements</h3>
                      <div className="space-y-3">
                        {project.technicalSpecs.map((spec, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/60 rounded-lg border border-gray-700/50">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 mt-8">
                      No technical requirements provided yet.
                    </div>
                  )}
                </motion.div>
              )}

              {selectedSection === 'learning' && (
                <motion.div
                  key="learning"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  {project.learningOutcomes && project.learningOutcomes.length > 0 ? (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Learning Outcomes</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.learningOutcomes.map((outcome, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-xl p-6"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <Star className="w-5 h-5 text-yellow-400" />
                              <span className="text-sm font-medium text-yellow-400">Learning Goal</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{outcome}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 mt-8">
                      No learning outcomes provided yet.
                    </div>
                  )}
                </motion.div>
              )}

              {selectedSection === 'gallery' && project.galleryImages && project.galleryImages.length > 0 && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Project Gallery</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.galleryImages.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-xl overflow-hidden"
                        >
                          <img
                            src={image.url}
                            alt={image.alt || `${project.title} image ${index + 1}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <p className="text-sm font-medium">{image.caption}</p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {(project.customSections || []).map((section) => {
                if (selectedSection === `custom-${section.id}`) {
                  return (
                    <motion.div
                      key={`custom-${section.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-white">{section.title}</h3>
                        <div className="prose prose-lg prose-invert max-w-none">
                          {section.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="text-gray-300 leading-relaxed mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 bg-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-bold mb-4 text-white">Related Projects</h3>
                <p className="text-gray-400">Explore more projects in this category</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => router.push(`/iot/project/${relatedProject.id}`)}
                    className="group cursor-pointer bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/70 transition-all duration-300"
                  >
                    {relatedProject.imageUrl && (
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {relatedProject.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {relatedProject.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                        {PROJECT_CATEGORIES[relatedProject.category]?.name || relatedProject.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
