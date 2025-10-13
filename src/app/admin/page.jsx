'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  checkAdminRole,
  getDashboardStats,
  createProject,
  updateProject,
  deleteProject,
  getProjects,
  PROJECT_CATEGORIES,
  subscribeToProjects,
  subscribeToProjectsStats,
  getUsers,
  updateUserRole,
  getAnalyticsData,
  getInquiries,
  getInquiryStats,
  updateInquiryStatus,
  deleteInquiry,
  subscribeToInquiries
} from '@/lib/adminService';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  LayoutDashboard,
  Users,
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
  Mail,
  Zap,
  Globe,
  Monitor,
  Car,
  Cpu,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CpuIcon
} from 'lucide-react';

// added new imports for stem kits :
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
  where,
  limit,
  onSnapshot
} from 'firebase/firestore';

// Add these imports at the top of src/app/admin/page.jsx (if not already present)
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { storage } from '@/lib/firebase'; // Ensure storage is exported from your firebase config


const AdminPanel = () => {
  // new variables for stem kits :

const [kits, setKits] = useState([]); // Mock data or load as needed
const [showKitModal, setShowKitModal] = useState(false);
const [editingKit, setEditingKit] = useState(null);
const [kitFormData, setKitFormData] = useState({
  title: '',
  description: '',
  image: null
});
const [isCreatingKit, setIsCreatingKit] = useState(false);
const [isUpdatingKit, setIsUpdatingKit] = useState(false);



// Updated handler functions (only handleUpdateKit needs the fix)


// added new variables for backend 

// Add this inside the AdminPanel component, after existing states
const KIT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DRAFT: 'draft'
};

// Native Firebase functions for kits (define inside component)
const getKits = async (filters = null, limitVal = null) => {
  try {
    let q = query(collection(db, 'kits'), orderBy('createdAt', 'desc'));

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        q = query(q, where(key, '==', value));
      });
    }

    if (limitVal) {
      q = query(q, limit(limitVal));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error('Error fetching kits:', error);
    throw error;
  }
};

const createKit = async (kitData, imageFile = null) => {
  try {
    const newKit = {
      ...kitData,
      status: KIT_STATUS.ACTIVE,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    let imageUrl = null;
    if (imageFile) {
      const storageRef = ref(storage, `kits/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
      newKit.imageUrl = imageUrl;
    }

    const docRef = await addDoc(collection(db, 'kits'), newKit);
    return { id: docRef.id, ...newKit };
  } catch (error) {
    console.error('Error creating kit:', error);
    throw error;
  }
};

const updateKit = async (kitId, kitData, newImageFile = null) => {
  try {
    const kitRef = doc(db, 'kits', kitId);
    const existingSnapshot = await getDocs(query(doc(db, 'kits', kitId)));
    const existingKit = existingSnapshot.docs[0]?.data();

    let imageUrl = existingKit?.imageUrl;
    if (newImageFile) {
      if (existingKit?.imageUrl) {
        try {
          const oldImageRef = ref(storage, existingKit.imageUrl);
          await deleteObject(oldImageRef);
        } catch (err) {
          console.error('Error deleting old image:', err);
        }
      }

      const storageRef = ref(storage, `kits/${Date.now()}_${newImageFile.name}`);
      await uploadBytes(storageRef, newImageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    const updateData = {
      ...kitData,
      imageUrl,
      updatedAt: serverTimestamp()
    };

    await updateDoc(kitRef, updateData);
    return { id: kitId, ...updateData };
  } catch (error) {
    console.error('Error updating kit:', error);
    throw error;
  }
};

const deleteKit = async (kitId) => {
  try {
    const kitSnapshot = await getDocs(query(doc(db, 'kits', kitId)));
    const kitData = kitSnapshot.docs[0]?.data();

    if (kitData?.imageUrl) {
      try {
        const imageRef = ref(storage, kitData.imageUrl);
        await deleteObject(imageRef);
      } catch (err) {
        console.error('Error deleting image:', err);
      }
    }

    await deleteDoc(doc(db, 'kits', kitId));
  } catch (error) {
    console.error('Error deleting kit:', error);
    throw error;
  }
};

const subscribeToKits = (callback) => {
  const q = query(collection(db, 'kits'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const kitsData = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(kitsData);
  });
};

// Add this useEffect for loading kits (place after existing useEffects)
// useEffect(() => {
//   if (!isAdmin || activeTab !== 'Kits') return;

//   const loadKits = async () => {
//     try {
//       const kitsData = await getKits();
//       setKits(kitsData);
//     } catch (error) {
//       console.error('Error loading kits:', error);
//     }
//   };

//   loadKits();

//   const unsubscribe = subscribeToKits((updatedKits) => {
//     setKits(updatedKits);
//   });

//   return () => unsubscribe();
// }, [isAdmin, activeTab]);

// Some new handlers 
// Updated kit handlers (replace existing mock handlers)
const handleCreateKit = async (e) => {
  e.preventDefault();
  if (isCreatingKit) return;
  setIsCreatingKit(true);
  try {
    await createKit(
      {
        title: kitFormData.title,
        description: kitFormData.description,
      },
      kitFormData.image
    );
    setShowKitModal(false);
    resetKitForm();
  } catch (error) {
    console.error('Error creating kit:', error);
    alert('Failed to create kit. Please try again.');
  } finally {
    setIsCreatingKit(false);
  }
};

const handleUpdateKit = async (e) => {
  e.preventDefault();
  if (isUpdatingKit || !editingKit) return;
  setIsUpdatingKit(true);
  try {
    await updateKit(
      editingKit.id,
      {
        title: kitFormData.title,
        description: kitFormData.description,
      },
      kitFormData.image
    );
    setEditingKit(null);
    resetKitForm();
    setShowKitModal(false);
  } catch (error) {
    console.error('Error updating kit:', error);
    alert('Failed to update kit. Please try again.');
  } finally {
    setIsUpdatingKit(false);
  }
};

const handleDeleteKit = async (kitId) => {
  if (!confirm('Are you sure you want to delete this kit?')) return;
  try {
    await deleteKit(kitId);
  } catch (error) {
    console.error('Error deleting kit:', error);
    alert('Failed to delete kit. Please try again.');
  }
};

const openEditKitModal = (kit) => {
  setEditingKit(kit);
  setKitFormData({
    title: kit.title || '',
    description: kit.description || '',
    image: null
  });
  setShowKitModal(true);
};

const resetKitForm = () => {
  setKitFormData({ title: '', description: '', image: null });
};








// new variables of stem kits ends here
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Start open for desktop
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState([]);

  // State for real data
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dashboardStats, setDashboardStats] = useState([]);
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [projectStats, setProjectStats] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [inquiryStats, setInquiryStats] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    detailedDescription: '',
    category: '',
    difficulty: '',
    technicalSpecs: '',
    tags: '',
    learningOutcomes: '',
    estimatedTime: '',
    coverImage: null,
    galleryImages: [],
    customSections: []
  });

  // Get current authenticated user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Generate and load real notifications
  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const projects = await getProjects(null, 50); // Get recent projects
        const usersData = await getUsers();

        const notificationsList = [];

        // New projects notification
        const recentProjects = projects.filter(project =>
          project.createdAt &&
          (new Date() - project.createdAt.toDate()) < (24 * 60 * 60 * 1000) // Last 24 hours
        );

        if (recentProjects.length > 0) {
          notificationsList.push({
            id: 'new-projects',
            title: 'New Projects Added',
            message: `${recentProjects.length} new project${recentProjects.length > 1 ? 's' : ''} ${recentProjects.length > 1 ? 'have' : 'has'} been created recently`,
            type: 'success',
            timestamp: new Date(),
            icon: FileText
          });
        }

        // New users notification
        const recentUsers = usersData.filter(user =>
          user.createdAt &&
          (new Date() - user.createdAt.toDate()) < (7 * 24 * 60 * 60 * 1000) // Last 7 days
        );

        if (recentUsers.length > 0) {
          notificationsList.push({
            id: 'new-users',
            title: 'New Users Registered',
            message: `${recentUsers.length} new user${recentUsers.length > 1 ? 's' : ''} joined the platform`,
            type: 'info',
            timestamp: new Date(),
            icon: Users
          });
        }

        // Projects without images
        const projectsWithoutImages = projects.filter(project => !project.imageUrl);
        if (projectsWithoutImages.length > 0) {
          notificationsList.push({
            id: 'missing-images',
            title: 'Content Enhancement',
            message: `${projectsWithoutImages.length} project${projectsWithoutImages.length > 1 ? 's' : ''} missing cover images`,
            type: 'warning',
            timestamp: new Date(),
            icon: AlertCircle
          });
        }

        // Admin system ready
        notificationsList.push({
          id: 'system-status',
          title: 'System Status',
          message: 'Admin panel is operational and ready for use',
          type: 'success',
          timestamp: new Date(Date.now() - 1000), // Show as recent
          icon: CheckCircle
        });

        setNotifications(notificationsList);
      } catch (error) {
        console.error('Error loading notifications:', error);
      }
    };

    loadNotifications();
  }, []);

  // Check admin access
  useEffect(() => {
    const checkAccess = async () => {
      const hasAdminAccess = await checkAdminRole();
      if (!hasAdminAccess) {
        router.push('/login');
        return;
      }
      setIsAdmin(true);
      setLoading(false);
    };

    checkAccess();
  }, [router]);

  // Load dashboard data
  useEffect(() => {
    if (!isAdmin) return;

    const loadDashboardData = async () => {
      try {
        const stats = await getDashboardStats();
        const projectsData = await getProjects(null, 10);

        // Format dashboard stats - removed fake trend data
        const formattedStats = [
          {
            title: "Total Projects",
            value: stats.totalProjects.toString(),
            icon: FileText,
            color: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400"
          },
          {
            title: "Active Projects",
            value: stats.activeProjects.toString(),
            icon: Activity,
            color: "from-green-500/20 to-emerald-500/20",
            iconColor: "text-green-400"
          },
          {
            title: "Total Users",
            value: stats.totalUsers?.toString() || "0",
            icon: Users,
            color: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400"
          },
          {
            title: "Admin Users",
            value: stats.adminUsers?.toString() || "0",
            icon: CheckCircle,
            color: "from-orange-500/20 to-red-500/20",
            iconColor: "text-orange-400"
          }
        ];

        setDashboardStats(formattedStats);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    loadDashboardData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToProjects((updatedProjects) => {
      setProjects(updatedProjects.slice(0, 10));
    });

    return () => unsubscribe();
  }, [isAdmin]);

  // Handle project creation
  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (isCreating) return;

    setIsCreating(true);
    try {
      // Prepare images array
      const images = [];
      if (formData.coverImage) {
        images.push({ file: formData.coverImage, type: 'cover' });
      }
      if (formData.galleryImages && formData.galleryImages.length > 0) {
        images.push(...formData.galleryImages.map(img => ({ file: img.file, caption: img.caption || '', alt: img.alt || '' })));
      }

      await createProject({
        title: formData.title,
        description: formData.description,
        detailedDescription: formData.detailedDescription,
        category: formData.category,
        difficulty: formData.difficulty,
        technicalSpecs: formData.technicalSpecs ? formData.technicalSpecs.split('\n').map(spec => spec.trim()).filter(spec => spec) : [],
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        learningOutcomes: formData.learningOutcomes ? formData.learningOutcomes.split('\n').map(outcome => outcome.trim()).filter(outcome => outcome) : [],
        estimatedTime: formData.estimatedTime,
        customSections: formData.customSections.filter(section => section.title && section.content) || []
      }, images);

      setShowCreateModal(false);
      resetForm();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  // Handle project update
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    if (isUpdating || !editingProject) return;

    setIsUpdating(true);
    try {
      // Prepare images array for update
      const images = [];
      if (formData.coverImage) {
        images.push({ file: formData.coverImage, type: 'cover' });
      }
      if (formData.galleryImages && formData.galleryImages.length > 0) {
        images.push(...formData.galleryImages.map(img => {
          if (img.file) {
            return { file: img.file, caption: img.caption || '', alt: img.alt || '' };
          } else if (img.url) {
            return img; // Existing image
          }
          return null;
        }).filter(Boolean));
      }

      await updateProject(editingProject.id, {
        title: formData.title,
        description: formData.description,
        detailedDescription: formData.detailedDescription,
        category: formData.category,
        difficulty: formData.difficulty,
        technicalSpecs: formData.technicalSpecs ? formData.technicalSpecs.split('\n').map(spec => spec.trim()).filter(spec => spec) : [],
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        learningOutcomes: formData.learningOutcomes ? formData.learningOutcomes.split('\n').map(outcome => outcome.trim()).filter(outcome => outcome) : [],
        estimatedTime: formData.estimatedTime,
        customSections: formData.customSections.filter(section => section.title && section.content) || [],
        coverImageUrl: editingProject.coverImageUrl,
        galleryImages: editingProject.galleryImages || []
      }, images);

      setEditingProject(null);
      resetForm();
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle project deletion
  const handleDeleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteProject(projectId);
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again.');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      detailedDescription: '',
      category: '',
      difficulty: '',
      technicalSpecs: '',
      tags: '',
      learningOutcomes: '',
      estimatedTime: '',
      coverImage: null,
      galleryImages: [],
      customSections: []
    });
  };

  // Handle user role update
  const handleUpdateUserRole = async (userId, newRole) => {
    if (!confirm(`Are you sure you want to change this user's role to "${newRole}"?`)) return;

    try {
      await updateUserRole(userId, newRole);
      // Refresh users list
      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Failed to update user role. Please try again.');
    }
  };

  // Load projects for projects tab
  useEffect(() => {
    if (!isAdmin || activeTab !== 'projects') return;

    const loadAllProjects = async () => {
      try {
        const projectsData = await getProjects();
        setAllProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    loadAllProjects();
  }, [isAdmin, activeTab]);

  // Load users for users tab
  useEffect(() => {
    if (!isAdmin || activeTab !== 'users') return;

    const loadUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error loading users:', error);
      }
    };

    loadUsers();
  }, [isAdmin, activeTab]);

  // Load analytics data for analytics tab
  useEffect(() => {
    if (!isAdmin || activeTab !== 'analytics') return;

    const loadAnalytics = async () => {
      try {
        const analyticsData = await getAnalyticsData();
        setAnalyticsData(analyticsData);
      } catch (error) {
        console.error('Error loading analytics:', error);
      }
    };

    loadAnalytics();
  }, [isAdmin, activeTab]);

  // Load inquiries for inquiries tab
  useEffect(() => {
    if (!isAdmin || activeTab !== 'inquiries') return;

    const loadInquiries = async () => {
      try {
        const inquiriesData = await getInquiries();
        const stats = await getInquiryStats();
        setInquiries(inquiriesData);
        setInquiryStats(stats);
      } catch (error) {
        console.error('Error loading inquiries:', error);
      }
    };

    loadInquiries();

    // Subscribe to real-time inquiries updates
    const unsubscribe = subscribeToInquiries((updatedInquiries) => {
      setInquiries(updatedInquiries);
      // Also update stats if needed
      getInquiryStats().then(setInquiryStats).catch(console.error);
    });

    return unsubscribe;
  }, [isAdmin, activeTab]);



  // Open edit modal
  const openEditModal = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      detailedDescription: project.detailedDescription || '',
      category: project.category || '',
      difficulty: project.difficulty || '',
      technicalSpecs: project.technicalSpecs?.join('\n') || '',
      tags: project.tags?.join(', ') || '',
      learningOutcomes: project.learningOutcomes?.join('\n') || '',
      estimatedTime: project.estimatedTime || '',
      coverImage: null,
      galleryImages: project.galleryImages || [],
      customSections: project.customSections || []
    });
  };

  // Add custom section
  const addCustomSection = () => {
    setFormData({
      ...formData,
      customSections: [...formData.customSections, { id: Date.now(), title: '', content: '' }]
    });
  };

  // Update custom section
  const updateCustomSection = (id, field, value) => {
    setFormData({
      ...formData,
      customSections: formData.customSections.map(section =>
        section.id === id ? { ...section, [field]: value } : section
      )
    });
  };

  // Remove custom section
  const removeCustomSection = (id) => {
    setFormData({
      ...formData,
      customSections: formData.customSections.filter(section => section.id !== id)
    });
  };

  // Add gallery image
  const addGalleryImage = () => {
    setFormData({
      ...formData,
      galleryImages: [...formData.galleryImages, {
        id: Date.now(),
        file: null,
        caption: '',
        alt: ''
      }]
    });
  };

  // Update gallery image
  const updateGalleryImage = (id, field, value) => {
    setFormData({
      ...formData,
      galleryImages: formData.galleryImages.map(img =>
        img.id === id ? { ...img, [field]: value } : img
      )
    });
  };

  // Remove gallery image
  const removeGalleryImage = (id) => {
    setFormData({
      ...formData,
      galleryImages: formData.galleryImages.filter(img => img.id !== id)
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-400">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'inquiries', label: 'Inquiries', icon: Mail },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'Kits', label: 'Stem Kits', icon: CpuIcon }
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse sm:w-80 sm:h-80"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000 sm:w-80 sm:h-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000 lg:w-[500px] lg:h-[500px]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 flex min-h-screen lg:h-screen">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {sidebarOpen && (
            <motion.div
              initial={{ x: -320, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -320, opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 32,
                mass: 0.8,
                duration: 0.25
              }}
              className="w-80 bg-gradient-to-b from-gray-900/98 via-gray-800/95 to-gray-900/98 border-r border-gray-700/50 backdrop-blur-md shadow-2xl shadow-black/50"
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
              <nav className="p-6 space-y-3">
                {sidebarItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ x: -30, opacity: 0, scale: 0.9 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.15 * index,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      onClick={() => setActiveTab(item.id)}
                      className={`group w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-r from-yellow-400/15 via-orange-400/10 to-yellow-400/15 border border-yellow-400/30 text-white shadow-lg shadow-yellow-400/10'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:shadow-md'
                      }`}
                      whileHover={{
                        scale: 1.02,
                        x: isActive ? 0 : 8,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background glow effect for active state */}
                      {isActive && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl blur-xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Icon with enhanced styling */}
                      <div className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'p-2 bg-yellow-400/20 rounded-lg'
                          : 'group-hover:p-2 group-hover:bg-gray-700/50 rounded-lg'
                      }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? 'text-yellow-300 drop-shadow-sm'
                            : 'text-gray-400 group-hover:text-white drop-shadow-sm'
                        }`} />
                      </div>

                      {/* Text */}
                      <span className={`font-medium relative z-10 transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>

                      {/* Active indicator with enhanced animation */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="ml-auto relative z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <div className="flex gap-1">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="w-2 h-2 bg-yellow-400 rounded-full"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.3
                              }}
                              className="w-2 h-2 bg-orange-400 rounded-full"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Hover effect trail */}
                      {!isActive && (
                        <motion.div
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </motion.div>
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
                      <span className="text-black font-bold text-sm">
                        {currentUser?.displayName?.charAt(0)?.toUpperCase() ||
                         currentUser?.email?.charAt(0)?.toUpperCase() ||
                         currentUser?.email?.split('@')[0]?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Admin User'}
                      </p>
                      <p className="text-xs text-gray-400">{currentUser?.email || 'admin@synaptix.com'}</p>
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
            className="bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 border-b border-gray-700/50 backdrop-blur-sm p-4 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors lg:hidden"
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>

                <div className="min-w-0 flex-1 lg:flex-none">
                  <h2 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent truncate">
                    {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
                  </h2>
                  <p className="text-gray-400 text-sm hidden sm:block">Welcome back, manage your platform</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                {/* Search - Hidden on very small screens */}
                <div className="hidden sm:block relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/70 transition-colors w-48 lg:w-64"
                  />
                </div>

                {/* Notifications */}
                <motion.button
                  onClick={() => setShowNotifications(!showNotifications)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </motion.button>

                {/* Profile */}
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">A</span>
                </div>
              </div>
            </div>

            {/* Mobile search bar - shown only on mobile */}
            <div className="mt-4 sm:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500/70 transition-colors"
                />
              </div>
            </div>
          </motion.header>

          {/* Notifications Panel */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="relative z-40 bg-gradient-to-r from-gray-900/98 via-gray-800/95 to-gray-900/98 border-b border-gray-700/60 backdrop-blur-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Notifications</h3>
                  <motion.button
                    onClick={() => setShowNotifications(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </motion.button>
                </div>

                <div className="max-h-96 overflow-y-auto space-y-3">
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => {
                      const Icon = notification.icon;
                      const typeColors = {
                        success: 'border-green-500/50 bg-green-500/10 text-green-400',
                        warning: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400',
                        error: 'border-red-500/50 bg-red-500/10 text-red-400',
                        info: 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                      };

                      const iconColors = {
                        success: 'text-green-400',
                        warning: 'text-yellow-400',
                        error: 'text-red-400',
                        info: 'text-blue-400'
                      };

                      return (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className={`p-4 border-l-4 rounded-lg backdrop-blur-sm ${typeColors[notification.type] || typeColors.info}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg bg-gray-800/60 ${iconColors[notification.type] || iconColors.info}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-white mb-1">{notification.title}</h4>
                              <p className="text-sm text-gray-300 mb-2">{notification.message}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Clock className="w-3 h-3" />
                                <span>
                                  {notification.timestamp &&
                                    (new Date() - notification.timestamp < 60000 // Less than 1 minute
                                      ? 'Just now'
                                      : new Date(notification.timestamp).toLocaleString()
                                    )
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No notifications at this time.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
                          <div className="flex items-center justify-start mb-4">
                            <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                              <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                          <p className="text-gray-400 text-sm">{stat.title}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Projects Management */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Project Management</h3>
                        <p className="text-gray-400">Create, edit, and manage IoT projects</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.button
                          onClick={() => setShowCreateModal(true)}
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

                  {/* Desktop Table View */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/40">
                        <tr>
                          <th className="text-left p-4 text-gray-300 font-medium">Project</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Category</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Created</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.length > 0 ? projects.map((project, index) => (
                          <motion.tr
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                {project.imageUrl && (
                                  <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-12 h-12 rounded-lg object-cover"
                                  />
                                )}
                                <div>
                                  <div className="font-medium text-white">{project.title}</div>
                                  <div className="text-sm text-gray-400 line-clamp-1">{project.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">
                                {PROJECT_CATEGORIES[project.category]?.name || project.category}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                                project.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                              }`}>
                                {project.status === 'active' ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300">
                                {project.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <motion.button
                                  onClick={() => openEditModal(project)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                                  title="Edit Project"
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDeleteProject(project.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                  title="Delete Project"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        )) : (
                          <tr>
                            <td colSpan="5" className="text-center py-8 text-gray-400">
                              No projects found. Create your first project to get started.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="lg:hidden space-y-4">
                    {projects.length > 0 ? projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-gray-800/40 border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          {project.imageUrl && (
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium truncate pr-2">{project.title}</h4>
                              <div className="flex gap-1">
                                <motion.button
                                  onClick={() => openEditModal(project)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1.5 text-gray-400 hover:text-yellow-400 hover:bg-gray-700/50 rounded transition-colors"
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDeleteProject(project.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700/50 rounded transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-300">
                                {PROJECT_CATEGORIES[project.category]?.name || project.category}
                              </span>
                              <span className={`px-2 py-1 rounded font-medium ${
                                project.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                              }`}>
                                {project.status === 'active' ? 'Active' : 'Inactive'}
                              </span>
                              <span className="text-gray-400 ml-auto">
                                {project.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )) : (
                      <div className="text-center py-8 text-gray-400">
                        <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No projects found. Create your first project to get started.</p>
                      </div>
                    )}
                  </div>
                </motion.div>


              </motion.div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Projects Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <FileText className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{allProjects.length}</h3>
                      <p className="text-gray-400 text-sm">Total Projects</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <Activity className="w-6 h-6 text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {allProjects.filter(p => p.status === 'active').length}
                      </h3>
                      <p className="text-gray-400 text-sm">Active Projects</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <CheckCircle className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {allProjects.filter(p => p.category).length}
                      </h3>
                      <p className="text-gray-400 text-sm">Categorized</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <Users className="w-6 h-6 text-purple-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {allProjects.reduce((acc, project) => {
                          const tags = project.tags || [];
                          return acc + tags.length;
                        }, 0)}
                      </h3>
                      <p className="text-gray-400 text-sm">Tags Used</p>
                    </div>
                  </motion.div>
                </div>

                {/* Projects Table */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">All Projects</h3>
                        <p className="text-gray-400">Manage all IoT projects in your portal</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.button
                          onClick={() => setShowCreateModal(true)}
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
                          <th className="text-left p-4 text-gray-300 font-medium">Difficulty</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Created</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allProjects.length > 0 ? allProjects.map((project, index) => (
                          <motion.tr
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                {project.imageUrl ? (
                                  <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-12 h-12 rounded-lg object-cover"
                                  />
                                ) : (
                                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-yellow-400" />
                                  </div>
                                )}
                                <div>
                                  <div className="font-medium text-white">{project.title}</div>
                                  <div className="text-sm text-gray-400 line-clamp-1">{project.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">
                                {PROJECT_CATEGORIES[project.category]?.name || 'Uncategorized'}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium uppercase ${
                                project.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                              }`}>
                                {project.status || 'Draft'}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                                project.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                                project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                project.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                                project.difficulty === 'Expert' ? 'bg-red-500/20 text-red-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {project.difficulty || 'Not Set'}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300 text-sm">
                                {project.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <motion.button
                                  onClick={() => router.push(`/iot/project/${project.id}`)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                                  title="View Project"
                                >
                                  <Eye className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => openEditModal(project)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                                  title="Edit Project"
                                >
                                  <Edit className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDeleteProject(project.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                  title="Delete Project"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        )) : (
                          <tr>
                            <td colSpan="6" className="text-center py-8 text-gray-400">
                              No projects found. Click "New Project" to create your first project.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Users Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <Users className="w-6 h-6 text-purple-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{users.length}</h3>
                      <p className="text-gray-400 text-sm">Total Users</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <CheckCircle className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {users.filter(u => u.role === 'admin').length}
                      </h3>
                      <p className="text-gray-400 text-sm">Admin Users</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <Users className="w-6 h-6 text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {users.filter(u => u.role === 'user' || !u.role).length}
                      </h3>
                      <p className="text-gray-400 text-sm">Regular Users</p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                          <Activity className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {users.filter(u => u.createdAt).length}
                      </h3>
                      <p className="text-gray-400 text-sm">Active Users</p>
                    </div>
                  </motion.div>
                </div>

                {/* Users Table */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">User Management</h3>
                        <p className="text-gray-400">Manage user roles and permissions</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/40">
                        <tr>
                          <th className="text-left p-4 text-gray-300 font-medium">User</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Email</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Role</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Joined</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.length > 0 ? users.map((user, index) => (
                          <motion.tr
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {user.name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-white">{user.name || 'Anonymous User'}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300">{user.email || 'No email'}</span>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-xs font-medium uppercase ${
                                user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                                user.role === 'user' ? 'bg-green-500/20 text-green-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {user.role || 'user'}
                              </span>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300 text-sm">
                                {user.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <select
                                  value={user.role || 'user'}
                                  onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}
                                  className="px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded text-white text-sm focus:outline-none focus:border-yellow-400/70"
                                >
                                  <option value="user">User</option>
                                  <option value="admin">Admin</option>
                                </select>
                              </div>
                            </td>
                          </motion.tr>
                        )) : (
                          <tr>
                            <td colSpan="5" className="text-center py-8 text-gray-400">
                              No users found. This might be unexpected - check your Firebase authentication.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && analyticsData && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Analytics Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl border border-blue-400/50">
                          <FileText className="w-6 h-6 text-blue-400" />
                        </div>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg">Projects</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{analyticsData.projects.total}</h3>
                      <p className="text-gray-400 text-sm">Total Projects</p>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="text-green-400 font-medium">{analyticsData.projects.active} Active</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-blue-400 font-medium">{analyticsData.projects.withImages} With Images</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl border border-purple-400/50">
                          <Users className="w-6 h-6 text-purple-400" />
                        </div>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-lg">Users</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{analyticsData.users.total}</h3>
                      <p className="text-gray-400 text-sm">Total Users</p>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="text-red-400 font-medium">{analyticsData.users.admins} Admins</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-green-400 font-medium">{analyticsData.users.regular} Regular</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl border border-green-400/50">
                          <BarChart3 className="w-6 h-6 text-green-400" />
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg">Metrics</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{analyticsData.engagement.contentQualityScore}%</h3>
                      <p className="text-gray-400 text-sm">Content Quality Score</p>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="text-blue-400 font-medium">{analyticsData.projects.totalTags} Tags Used</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-yellow-400 font-medium">{analyticsData.projects.avgTagsPerProject} Avg</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl border border-orange-400/50">
                          <TrendingUp className="w-6 h-6 text-orange-400" />
                        </div>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-lg">Growth</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{analyticsData.content.totalTechnicalSpecs}</h3>
                      <p className="text-gray-400 text-sm">Technical Specs</p>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="text-cyan-400 font-medium">{analyticsData.content.avgSpecsPerProject} Avg</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-green-400 font-medium">{analyticsData.users.recent} New (30d)</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Category Distribution */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Project Categories Distribution</h3>
                      <p className="text-gray-400">Breakdown of projects across different categories</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {analyticsData.categories.map((category, index) => (
                        <motion.div
                          key={category.category}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center justify-between p-4 bg-gray-800/40 border border-gray-700/30 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              index === 0 ? 'bg-blue-500/20' :
                              index === 1 ? 'bg-green-500/20' :
                              index === 2 ? 'bg-purple-500/20' :
                              index === 3 ? 'bg-orange-500/20' :
                              'bg-teal-500/20'
                            }`}>
                              <span className="text-xs font-bold text-white">{category.percentage}%</span>
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{category.category}</h4>
                              <p className="text-gray-400 text-sm">{category.count} projects</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  index === 0 ? 'bg-blue-500' :
                                  index === 1 ? 'bg-green-500' :
                                  index === 2 ? 'bg-purple-500' :
                                  index === 3 ? 'bg-orange-500' :
                                  'bg-teal-500'
                                }`}
                                style={{ width: `${category.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400 text-sm w-12">{category.percentage}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Detailed Analytics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Metrics */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-700/50">
                      <h3 className="text-xl font-bold text-white mb-1">Project Analytics</h3>
                      <p className="text-gray-400">Detailed project metrics and statistics</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { label: 'Total Projects', value: analyticsData.projects.total, color: 'text-blue-400' },
                        { label: 'Active Projects', value: analyticsData.projects.active, color: 'text-green-400' },
                        { label: 'Projects with Images', value: analyticsData.projects.withImages, color: 'text-cyan-400' },
                        { label: 'Projects with Details', value: analyticsData.projects.withDescriptions, color: 'text-yellow-400' },
                        { label: 'Total Tags', value: analyticsData.projects.totalTags, color: 'text-purple-400' },
                        { label: 'Gallery Images', value: analyticsData.projects.totalGalleryImages, color: 'text-pink-400' },
                      ].map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex justify-between items-center p-3 bg-gray-800/40 border border-gray-700/30 rounded-lg"
                        >
                          <span className="text-gray-300">{metric.label}</span>
                          <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* User Metrics */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-700/50">
                      <h3 className="text-xl font-bold text-white mb-1">User Analytics</h3>
                      <p className="text-gray-400">User registration and activity metrics</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { label: 'Total Users', value: analyticsData.users.total, color: 'text-blue-400' },
                        { label: 'Admin Users', value: analyticsData.users.admins, color: 'text-red-400' },
                        { label: 'Regular Users', value: analyticsData.users.regular, color: 'text-green-400' },
                        { label: 'Recent Users (30d)', value: analyticsData.users.recent, color: 'text-yellow-400' },
                      ].map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex justify-between items-center p-3 bg-gray-800/40 border border-gray-700/30 rounded-lg"
                        >
                          <span className="text-gray-300">{metric.label}</span>
                          <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Inquiries Tab */}
            {activeTab === 'inquiries' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Inquiries Stats */}
                {inquiryStats && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-start mb-4">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                            <Mail className="w-6 h-6 text-blue-400" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{inquiryStats.total}</h3>
                        <p className="text-gray-400 text-sm">Total Inquiries</p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-start mb-4">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                            <AlertCircle className="w-6 h-6 text-red-400" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{inquiryStats.unread}</h3>
                        <p className="text-gray-400 text-sm">Unread</p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-start mb-4">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                            <CheckCircle className="w-6 h-6 text-yellow-400" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{inquiryStats.read}</h3>
                        <p className="text-gray-400 text-sm">Read</p>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-start mb-4">
                          <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{inquiryStats.responded}</h3>
                        <p className="text-gray-400 text-sm">Responded</p>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Inquiries Table */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Contact Form Submissions</h3>
                        <p className="text-gray-400">Manage all incoming inquiries and requests</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800/40">
                        <tr>
                          <th className="text-left p-4 text-gray-300 font-medium">Contact</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Type</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Subject</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Status</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Date</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inquiries.length > 0 ? inquiries.map((inquiry, index) => (
                          <motion.tr
                            key={inquiry.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {(inquiry.name || inquiry.email || 'U').charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-white">{inquiry.name || 'Anonymous'}</div>
                                  <div className="text-sm text-gray-400">{inquiry.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                                inquiry.inquiryType === 'technical'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : inquiry.inquiryType === 'business'
                                  ? 'bg-green-500/20 text-green-400'
                                  : inquiry.inquiryType === 'general'
                                  ? 'bg-purple-500/20 text-purple-400'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}>
                                {inquiry.inquiryType || 'general'}
                              </span>
                            </td>
                            <td className="p-4">
                              <div>
                                <div className="font-medium text-white text-sm line-clamp-1">
                                  {inquiry.subject || inquiry.message?.substring(0, 50) + '...'}
                                </div>
                                {inquiry.schoolName && (
                                  <div className="text-xs text-gray-400">{inquiry.schoolName}</div>
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              <select
                                value={inquiry.status}
                                onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                                className={`px-3 py-1 text-xs font-medium rounded ${
                                  inquiry.status === 'read'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : inquiry.status === 'responded'
                                    ? 'bg-green-500/20 text-green-400'
                                    : inquiry.status === 'unread'
                                    ? 'bg-red-500/20 text-red-400'
                                    : 'bg-gray-500/20 text-gray-400'
                                }`}
                              >
                                <option value="unread">Unread</option>
                                <option value="read">Read</option>
                                <option value="responded">Responded</option>
                                <option value="archived">Archived</option>
                              </select>
                            </td>
                            <td className="p-4">
                              <span className="text-gray-300 text-sm">
                                {inquiry.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <motion.button
                                  onClick={() => {
                                    setSelectedInquiry(inquiry);
                                    setShowInquiryModal(true);
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                                  title="View Details"
                                >
                                  <Eye className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                  onClick={() => {
                                    if (confirm('Are you sure you want to delete this inquiry?')) {
                                      deleteInquiry(inquiry.id);
                                    }
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                  title="Delete Inquiry"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        )) : (
                          <tr>
                            <td colSpan="6" className="text-center py-8 text-gray-400">
                              No inquiries found. Contact forms will appear here when visitors submit them.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            )}

              {/* Stem kits tab */}
          {activeTab === 'Kits' && (
                      <motion.div
   variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-8"
  >
    {/* Kits Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-start mb-4">
            <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
              <CpuIcon className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{kits.length}</h3>
          <p className="text-gray-400 text-sm">Total Kits</p>
        </div>
      </motion.div>

      {/* Additional stats cards can be added here if needed */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl p-6 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-start mb-4">
            <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {kits.filter(kit => kit.status === 'active').length}
          </h3>
          <p className="text-gray-400 text-sm">Active Kits</p>
        </div>
      </motion.div>
    </div>

    {/* Kits Management Table */}
    <motion.div
      variants={itemVariants}
      className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden"
    >
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">STEM Kits Management</h3>
            <p className="text-gray-400">Manage and add new STEM kits/products</p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setShowKitModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-medium hover:shadow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </motion.button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800/40">
            <tr>
              <th className="text-left p-4 text-gray-300 font-medium">Sl. No</th>
              <th className="text-left p-4 text-gray-300 font-medium">Title</th>
              <th className="text-left p-4 text-gray-300 font-medium">Description</th>
              <th className="text-left p-4 text-gray-300 font-medium">Image</th>
              <th className="text-left p-4 text-gray-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {kits.length > 0 ? kits.map((kit, index) => (
              <motion.tr
                key={kit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors"
              >
                <td className="p-4">
                  <span className="text-gray-300 font-medium">{index + 1}</span>
                </td>
                <td className="p-4">
                  <div className="font-medium text-white">{kit.title}</div>
                </td>
                <td className="p-4">
                  <div className="text-sm text-gray-400 line-clamp-2 max-w-xs">{kit.description}</div>
                </td>
                <td className="p-4">
                  {kit.imageUrl ? (
                    <img
                      src={kit.imageUrl}
                      alt={kit.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-700/50 to-gray-600/50 flex items-center justify-center">
                      <CpuIcon className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => openEditKitModal(kit)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-yellow-400 transition-colors"
                      title="Edit Kit"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDeleteKit(kit.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Kit"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            )) : (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-400">
                  No kits found. Click "Add Product" to create your first kit.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
                      </motion.div>
              )}


          </main>
        </div>
      </div>

      {/* Create/Edit Project Modal */}
      <AnimatePresence>
        {(showCreateModal || editingProject) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowCreateModal(false);
                setEditingProject(null);
                resetForm();
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border border-gray-700/60 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {editingProject ? 'Edit Project' : 'Create New Project'}
                </h3>
                <motion.button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingProject(null);
                    resetForm();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <form onSubmit={editingProject ? handleUpdateProject : handleCreateProject} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors"
                    placeholder="Enter a compelling project title"
                    required
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors resize-none"
                    placeholder="Write a brief, engaging description (1-2 sentences)"
                    rows={3}
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">This will be shown in project listings</p>
                </div>

                {/* Detailed Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    value={formData.detailedDescription || ''}
                    onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors resize-none"
                    placeholder="Provide comprehensive project details, implementation steps, learning outcomes..."
                    rows={6}
                  />
                  <p className="text-xs text-gray-400 mt-1">Detailed information shown on the project page</p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-yellow-400/70 transition-colors"
                    required
                  >
                    <option value="">Select a category</option>
                    {Object.values(PROJECT_CATEGORIES).map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={formData.difficulty || ''}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-yellow-400/70 transition-colors"
                  >
                    <option value="">Select difficulty</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                {/* Technical Specs */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Technical Specifications
                  </label>
                  <textarea
                    value={formData.technicalSpecs}
                    onChange={(e) => setFormData({ ...formData, technicalSpecs: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors resize-none"
                    placeholder="• Arduino UNO R3&#10;• Raspberry Pi 4&#10;• HC-SR04 Ultrasonic Sensor&#10;• DHT11 Temperature Sensor"
                    rows={4}
                  />
                  <p className="text-xs text-gray-400 mt-1">List components, tools, and requirements</p>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags *
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors"
                    placeholder="IoT, Smart Home, Automation, Sensors (comma-separated)"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">Keywords to help users find this project</p>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Learning Outcomes
                  </label>
                  <textarea
                    value={formData.learningOutcomes || ''}
                    onChange={(e) => setFormData({ ...formData, learningOutcomes: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors resize-none"
                    placeholder="• Understanding of IoT protocols&#10;• Sensor integration techniques&#10;• Data visualization with charts&#10;• Real-time monitoring systems"
                    rows={4}
                  />
                  <p className="text-xs text-gray-400 mt-1">What students will learn from this project</p>
                </div>

                {/* Estimated Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Estimated Completion Time
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedTime || ''}
                    onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors"
                    placeholder="e.g., 2-3 hours, 1 week, 2 weeks"
                  />
                </div>

                {/* Cover Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Image *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.files?.[0] || null })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white file:bg-yellow-400/20 file:text-yellow-400 file:border-0 file:rounded-lg file:px-3 file:py-1 file:mr-3 hover:file:bg-yellow-400/30 transition-colors"
                    required={!editingProject}
                  />
                  <p className="text-xs text-gray-400 mt-1">Main hero image for the project (JPG, PNG, GIF - Max: 5MB)</p>
                  {editingProject?.coverImageUrl && !formData.coverImage && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">Current cover image will be kept if no new image is selected.</p>
                      <img src={editingProject.coverImageUrl} alt="Current cover" className="w-20 h-20 rounded-lg object-cover mt-2" />
                    </div>
                  )}
                </div>

                {/* Gallery Images */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Gallery Images
                    </label>
                    <motion.button
                      type="button"
                      onClick={addGalleryImage}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-600/50 transition-colors"
                    >
                      + Add Image
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">Additional project images for detailed view</p>

                  <div className="space-y-3">
                    {formData.galleryImages.map((img, index) => (
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 p-3 bg-gray-800/40 border border-gray-600/30 rounded-lg"
                      >
                        <div className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => updateGalleryImage(img.id, 'file', e.target.files?.[0] || null)}
                            className="w-full mb-2 px-3 py-2 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white text-sm file:bg-yellow-400/20 file:text-yellow-400 file:border-0 file:rounded file:px-2 file:py-1 file:mr-2 file:text-xs hover:file:bg-yellow-400/30 transition-colors"
                          />
                          <input
                            type="text"
                            placeholder="Image caption (optional)"
                            value={img.caption || ''}
                            onChange={(e) => updateGalleryImage(img.id, 'caption', e.target.value)}
                            className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400/70"
                          />
                        </div>
                        <motion.button
                          type="button"
                          onClick={() => removeGalleryImage(img.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>

                  {formData.galleryImages.length > 0 && editingProject && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-400">Existing gallery images:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {editingProject.galleryImages?.map((img, index) => (
                          <img
                            key={index}
                            src={img.url}
                            alt={img.alt || 'Gallery image'}
                            className="w-16 h-16 rounded-lg object-cover border border-gray-600/50"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Custom Sections */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Custom Sections
                    </label>
                    <motion.button
                      type="button"
                      onClick={addCustomSection}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-600/50 transition-colors"
                    >
                      + Add Section
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">Create your own custom sections with any title and content</p>

                  <div className="space-y-4">
                    {formData.customSections.map((section) => (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-gray-800/40 border border-gray-600/30 rounded-lg"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <input
                            type="text"
                            placeholder="Section Title"
                            value={section.title}
                            onChange={(e) => updateCustomSection(section.id, 'title', e.target.value)}
                            className="flex-1 px-3 py-2 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white text-sm font-medium placeholder-gray-400 focus:outline-none focus:border-yellow-400/70"
                          />
                          <motion.button
                            type="button"
                            onClick={() => removeCustomSection(section.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="ml-3 p-2 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                        <textarea
                          placeholder="Section content..."
                          value={section.content}
                          onChange={(e) => updateCustomSection(section.id, 'content', e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 resize-none"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingProject(null);
                      resetForm();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isCreating || isUpdating}
                    className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all ${
                      (isCreating || isUpdating)
                        ? 'bg-gray-700/50 border border-gray-600/30 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-800/60 border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/60'
                    }`}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={(isCreating || isUpdating) ? {} : { scale: 1.02 }}
                    whileTap={(isCreating || isUpdating) ? {} : { scale: 0.98 }}
                    disabled={isCreating || isUpdating}
                    className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                      (isCreating || isUpdating)
                        ? 'bg-yellow-400/50 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg'
                    }`}
                  >
                    {(isCreating || isUpdating) && (
                      <div className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {editingProject
                      ? (isUpdating ? 'Updating...' : 'Update Project')
                      : (isCreating ? 'Creating...' : 'Create Project')
                    }
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Details Modal */}
      <AnimatePresence>
        {showInquiryModal && selectedInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowInquiryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border border-gray-700/60 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Inquiry Details</h3>
                <motion.button
                  onClick={() => setShowInquiryModal(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-6">
                {/* Inquiry Type Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    selectedInquiry.inquiryType === 'workshops-hackathons'
                      ? 'bg-blue-500/20 text-blue-400'
                      : selectedInquiry.inquiryType === 'robotics-ai-education'
                      ? 'bg-green-500/20 text-green-400'
                      : selectedInquiry.inquiryType === 'software-web-development'
                      ? 'bg-purple-500/20 text-purple-400'
                      : selectedInquiry.inquiryType === 'drone-development'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {selectedInquiry.inquiryType || 'General Inquiry'}
                  </span>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => updateInquiryStatus(selectedInquiry.id, e.target.value)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${
                      selectedInquiry.status === 'read'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : selectedInquiry.status === 'responded'
                        ? 'bg-green-500/20 text-green-400'
                        : selectedInquiry.status === 'unread'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}
                  >
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="responded">Responded</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Name</label>
                    <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                      {selectedInquiry.name || 'Anonymous'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Email</label>
                    <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                      {selectedInquiry.email || 'No email provided'}
                    </div>
                  </div>
                </div>

                {/* Additional Fields based on inquiry type */}
                {selectedInquiry.inquiryType === 'robotics-ai-education' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Student Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedInquiry.ageClass && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-400 mb-2">Age/Class</label>
                          <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                            {selectedInquiry.ageClass}
                          </div>
                        </div>
                      )}
                      {selectedInquiry.parentName && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-400 mb-2">Parent/Guardian</label>
                          <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                            {selectedInquiry.parentName}
                          </div>
                        </div>
                      )}
                    </div>
                    {selectedInquiry.school && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">School/Institution</label>
                        <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                          {selectedInquiry.school}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Phone and Location */}
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedInquiry.phone && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">Phone</label>
                      <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                        {selectedInquiry.phone}
                      </div>
                    </div>
                  )}
                  {selectedInquiry.cityState && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">City/State</label>
                      <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                        {selectedInquiry.cityState}
                      </div>
                    </div>
                  )}
                </div>

                {/* Inquiry-specific information */}
                {selectedInquiry.inquiryType === 'workshops-hackathons' && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Workshop Request Details</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedInquiry.programType && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-400 mb-2">Program Type</label>
                          <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                            {selectedInquiry.programType}
                          </div>
                        </div>
                      )}
                      {selectedInquiry.numParticipants && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-400 mb-2">Participants</label>
                          <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                            {selectedInquiry.numParticipants}
                          </div>
                        </div>
                      )}
                    </div>
                    {selectedInquiry.targetAudience && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-2">Target Audience</label>
                        <div className="p-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white">
                          {selectedInquiry.targetAudience}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Message */}
                {selectedInquiry.message && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Message</label>
                    <div className="p-4 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white leading-relaxed">
                      {selectedInquiry.message}
                    </div>
                  </div>
                )}

                {/* Additional arrays (if present) */}
                {selectedInquiry.focusAreas && selectedInquiry.focusAreas.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Focus Areas</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedInquiry.focusAreas.map((area, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedInquiry.interests && selectedInquiry.interests.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Course Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedInquiry.interests.map((interest, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedInquiry.supportNeeded && selectedInquiry.supportNeeded.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Support Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedInquiry.supportNeeded.map((support, index) => (
                        <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">
                          {support}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timestamps */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div>
                    <span className="text-sm text-gray-400">Submitted on: </span>
                    <span className="text-sm text-white">
                      {selectedInquiry.createdAt?.toDate?.()?.toLocaleString() || 'Unknown'}
                    </span>
                  </div>
                  {selectedInquiry.updatedAt && (
                    <div>
                      <span className="text-sm text-gray-400">Last updated: </span>
                      <span className="text-sm text-white">
                        {selectedInquiry.updatedAt?.toDate?.()?.toLocaleString() || 'Unknown'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Added animations for stem kits */}

        {/* Add/Edit Kit Modal (place it outside the tab conditional, similar to the project modal) */}

<AnimatePresence>
  {showKitModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => { 
        if (e.target === e.currentTarget) { 
          setShowKitModal(false); 
          setEditingKit(null); 
          resetKitForm(); 
        } 
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border border-gray-700/60 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            {editingKit ? 'Edit Kit' : 'Add New Product'}
          </h3>
          <motion.button
            onClick={() => { 
              setShowKitModal(false); 
              setEditingKit(null); 
              resetKitForm(); 
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:bg-gray-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <form onSubmit={editingKit ? handleUpdateKit : handleCreateKit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
            <input
              type="text"
              value={kitFormData.title}
              onChange={(e) => setKitFormData({ ...kitFormData, title: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors"
              placeholder="Enter kit title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
            <textarea
              value={kitFormData.description}
              onChange={(e) => setKitFormData({ ...kitFormData, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/70 transition-colors resize-none"
              placeholder="Enter kit description"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setKitFormData({ ...kitFormData, image: e.target.files?.[0] || null })}
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white file:bg-yellow-400/20 file:text-yellow-400 file:border-0 file:rounded-lg file:px-3 file:py-1 file:mr-3 hover:file:bg-yellow-400/30 transition-colors"
            />
            {editingKit?.imageUrl && !kitFormData.image && (
              <img src={editingKit.imageUrl} alt="Current image" className="w-20 h-20 rounded-lg object-cover mt-2" />
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              type="button"
              onClick={() => { 
                setShowKitModal(false); 
                setEditingKit(null); 
                resetKitForm(); 
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isCreatingKit || isUpdatingKit}
              className="flex-1 px-6 py-3 rounded-xl font-medium transition-all bg-gray-800/60 border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/60"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={(isCreatingKit || isUpdatingKit) ? {} : { scale: 1.02 }}
              whileTap={(isCreatingKit || isUpdatingKit) ? {} : { scale: 0.98 }}
              disabled={isCreatingKit || isUpdatingKit}
              className="flex-1 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg"
            >
              {(isCreatingKit || isUpdatingKit) && <div className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />}
              {editingKit ? (isUpdatingKit ? 'Updating...' : 'Update Kit') : (isCreatingKit ? 'Creating...' : 'Add Product')}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default AdminPanel;


