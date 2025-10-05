'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  Plus,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Zap,
  Globe,
  Monitor,
  Car,
  Cpu,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);

  // Sample data for demonstration
  const dashboardStats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Active Projects",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Activity,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "-2.1%",
      trend: "down",
      icon: BarChart3,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Completion Rate",
      value: "94.2%",
      change: "+5.7%",
      trend: "up",
      icon: CheckCircle,
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      name: "IoT Smart Home System",
      category: "IoT",
      status: "In Progress",
      progress: 75,
      assignee: "John Doe",
      dueDate: "2024-02-15",
      priority: "High"
    },
    {
      id: 2,
      name: "EV Battery Management",
      category: "Electric Vehicle",
      status: "Completed",
      progress: 100,
      assignee: "Jane Smith",
      dueDate: "2024-01-30",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Web Dashboard Portal",
      category: "Web Development",
      status: "Review",
      progress: 90,
      assignee: "Mike Johnson",
      dueDate: "2024-02-20",
      priority: "High"
    },
    {
      id: 4,
      name: "Circuit Simulation Tool",
      category: "Simulation",
      status: "Planning",
      progress: 25,
      assignee: "Sarah Wilson",
      dueDate: "2024-03-01",
      priority: "Low"
    }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-500/20';
      case 'In Progress': return 'text-blue-400 bg-blue-500/20';
      case 'Review': return 'text-yellow-400 bg-yellow-500/20';
      case 'Planning': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-400 bg-red-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

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

      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-80 bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-gray-900/95 border-r border-gray-700/50 backdrop-blur-sm"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-700/50">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Synaptix Admin
                    </h1>
                    <p className="text-sm text-gray-400">Control Panel</p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <nav className="p-6 space-y-2">
                {sidebarItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-white/10 to-gray-200/10 border border-gray-600/50 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="ml-auto w-2 h-2 bg-yellow-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* User Profile */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Admin User</p>
                      <p className="text-xs text-gray-400">admin@synaptix.com</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 backdrop-blur-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
                
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
                  </h2>
                  <p className="text-gray-400">Welcome back, manage your platform</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/70 transition-colors w-64"
                  />
                </div>

                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </motion.button>

                {/* Profile */}
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Content Area */}
          <main className="flex-1 overflow-auto p-6">
            {activeTab === 'dashboard' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardStats.map((stat, index) => {
                    const Icon = stat.icon;
                    const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
                    
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                              <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                              stat.trend === 'up' ? 'text-green-400 bg-green-500/20' : 'text-red-400 bg-red-500/20'
                            }`}>
                              <TrendIcon className="w-3 h-3" />
                              {stat.change}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                          <p className="text-gray-400 text-sm">{stat.title}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Recent Projects Table */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Recent Projects</h3>
                        <p className="text-gray-400">Manage and track project progress</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-xl text-gray-300 hover:text-white transition-colors"
                        >
                          <Filter className="w-4 h-4" />
                          Filter
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-medium hover:shadow-lg transition-all"
                        >
                          <Plus className="w-4 h-4" />
                          New Project
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/40">
                        <tr>
                          <th className="text-left p-4 text-gray-300 font-medium">Project</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Category</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Progress</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Assignee</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Due Date</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Priority</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentProjects.map((project, index) => (
                          <motion.tr
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="p-4">
                              <div className="font-medium text-white">{project.name}</div>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300">{project.category}</span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="flex-1 bg-gray-700/50 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-300 w-12">{project.progress}%</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300">{project.assignee}</span>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300">{project.dueDate}</span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                {project.priority}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                  <Eye className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {[
                    { icon: Upload, title: "Import Data", desc: "Upload project files", color: "from-blue-500/20 to-cyan-500/20" },
                    { icon: Download, title: "Export Reports", desc: "Download analytics", color: "from-green-500/20 to-emerald-500/20" },
                    { icon: Settings, title: "System Settings", desc: "Configure platform", color: "from-purple-500/20 to-pink-500/20" }
                  ].map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 cursor-pointer backdrop-blur-sm overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50 w-fit mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                          <p className="text-gray-400 mb-4">{action.desc}</p>
                          <div className="flex items-center text-yellow-400 font-medium">
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* Other tab content would go here */}
            {activeTab !== 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center h-96"
              >
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl border border-yellow-400/30 w-fit mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {sidebarItems.find(item => item.id === activeTab)?.label} Section
                  </h3>
                  <p className="text-gray-400">This section is under development</p>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;