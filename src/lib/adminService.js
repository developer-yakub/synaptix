import { db, storage, auth } from './firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

// Project Categories (exactly 5 as required)
export const PROJECT_CATEGORIES = {
  electricalProjects: {
    id: 'electricalProjects',
    name: 'Electrical & Electronics Projects',
    description: 'Hands-on electrical and electronics projects'
  },
  iotProjects: {
    id: 'iotProjects',
    name: 'IoT Projects',
    description: 'Internet of Things and smart solutions'
  },
  webProjects: {
    id: 'webProjects',
    name: 'Web Projects',
    description: 'Modern web development applications'
  },
  simulationProjects: {
    id: 'simulationProjects',
    name: 'Simulation Projects',
    description: 'Virtual simulations and modeling'
  },
  evProjects: {
    id: 'evProjects',
    name: 'EV (Electric Vehicle) Projects',
    description: 'Sustainable mobility innovations'
  }
};

// Role-based access control
export const checkAdminRole = async () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        resolve(userData?.role === 'admin');
      } catch (error) {
        console.error('Error checking admin role:', error);
        resolve(false);
      }

      unsubscribe();
    });
  });
};

// Get current user role
export const getCurrentUserRole = async () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(null);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        resolve(userData?.role || null);
      } catch (error) {
        console.error('Error getting user role:', error);
        resolve(null);
      }

      unsubscribe();
    });
  });
};

// Project CRUD Operations
export const createProject = async (projectData, images = []) => {
  try {
    let coverImageUrl = null;
    const galleryImages = [];

    // Upload images if provided
    if (images.length > 0) {
      // First image is always the cover image
      const coverFile = images[0];
      if (coverFile.file) {
        const storageRef = ref(storage, `projects/${Date.now()}_${coverFile.file.name}`);
        const snapshot = await uploadBytes(storageRef, coverFile.file);
        coverImageUrl = await getDownloadURL(snapshot.ref);
      }

      // Remaining images are gallery images
      for (let i = 1; i < images.length; i++) {
        const imageData = images[i];
        if (imageData.file) {
          const storageRef = ref(storage, `projects/${Date.now()}_${imageData.file.name}`);
          const snapshot = await uploadBytes(storageRef, imageData.file);
          const url = await getDownloadURL(snapshot.ref);
          galleryImages.push({
            url,
            caption: imageData.caption || '',
            alt: imageData.alt || imageData.file.name
          });
        }
      }
    }

    const project = {
      ...projectData,
      coverImageUrl,
      galleryImages,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    };

    const docRef = await addDoc(collection(db, 'projects'), project);
    return { id: docRef.id, ...project };
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const updateProject = async (projectId, projectData, images = []) => {
  try {
    let coverImageUrl = projectData.coverImageUrl || null;
    const galleryImages = projectData.galleryImages || [];

    // Handle new images
    if (images.length > 0) {
      // First image is always the cover image
      const coverFile = images[0];
      if (coverFile && coverFile.file) {
        // Delete old cover image if it exists
        if (coverImageUrl) {
          try {
            const oldImageRef = ref(storage, coverImageUrl);
            await deleteObject(oldImageRef);
          } catch (error) {
            console.warn('Failed to delete old cover image:', error);
          }
        }

        const storageRef = ref(storage, `projects/${Date.now()}_${coverFile.file.name}`);
        const snapshot = await uploadBytes(storageRef, coverFile.file);
        coverImageUrl = await getDownloadURL(snapshot.ref);
      }

      // Handle gallery images (from index 1 onwards)
      for (let i = 1; i < images.length; i++) {
        const imageData = images[i];
        if (imageData && imageData.file) {
          const storageRef = ref(storage, `projects/${Date.now()}_${imageData.file.name}`);
          const snapshot = await uploadBytes(storageRef, imageData.file);
          const url = await getDownloadURL(snapshot.ref);
          galleryImages.push({
            url,
            caption: imageData.caption || '',
            alt: imageData.alt || imageData.file.name
          });
        } else if (imageData && imageData.url) {
          // Existing gallery image (already uploaded)
          galleryImages.push(imageData);
        }
      }
    }

    const updateData = {
      ...projectData,
      coverImageUrl,
      galleryImages,
      updatedAt: new Date()
    };

    await updateDoc(doc(db, 'projects', projectId), updateData);
    return { id: projectId, ...updateData };
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (projectId) => {
  try {
    // Get project data first to delete associated image
    const projectDoc = await getDoc(doc(db, 'projects', projectId));
    if (projectDoc.exists()) {
      const projectData = projectDoc.data();

      // Delete associated image
      if (projectData.imageUrl) {
        try {
          const imageRef = ref(storage, projectData.imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.warn('Failed to delete project image:', error);
        }
      }
    }

    await deleteDoc(doc(db, 'projects', projectId));
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

export const getProjects = async (categoryId = null, limitCount = null) => {
  try {
    let q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));

    if (categoryId) {
      q = query(q, where('category', '==', categoryId));
    }

    if (limitCount) {
      q = query(q, limit(limitCount));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting projects:', error);
    throw error;
  }
};

export const getProject = async (projectId) => {
  try {
    const docSnap = await getDoc(doc(db, 'projects', projectId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting project:', error);
    throw error;
  }
};

// Real-time listeners
export const subscribeToProjects = (callback, categoryId = null) => {
  let q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));

  if (categoryId) {
    q = query(q, where('category', '==', categoryId));
  }

  return onSnapshot(q, (querySnapshot) => {
    const projects = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(projects);
  });
};

export const subscribeToProjectsStats = (callback) => {
  return onSnapshot(collection(db, 'projects'), (querySnapshot) => {
    const projects = querySnapshot.docs.map(doc => doc.data());
    const stats = {
      totalProjects: projects.length,
      activeProjects: projects.filter(p => p.status === 'active').length,
      categoriesBreakdown: projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      }, {})
    };
    callback(stats);
  });
};

// User Management
export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
};

export const updateUserRole = async (userId, role) => {
  try {
    await updateDoc(doc(db, 'users', userId), {
      role,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating user role:', error);
    throw error;
  }
};

// Analytics/Dashboard Data
export const getDashboardStats = async () => {
  try {
    const projects = await getProjects();
    const users = await getUsers();

    return {
      totalProjects: projects.length,
      activeProjects: projects.filter(p => p.status === 'active').length,
      totalUsers: users.length,
      adminUsers: users.filter(u => u.role === 'admin').length,
      categoriesStats: Object.keys(PROJECT_CATEGORIES).map(categoryId => ({
        category: PROJECT_CATEGORIES[categoryId].name,
        count: projects.filter(p => p.category === categoryId).length
      }))
    };
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    throw error;
  }
};

// Advanced Analytics Functions
export const getAnalyticsData = async () => {
  try {
    const projects = await getProjects();
    const users = await getUsers();

    // Calculate project metrics
    const totalTags = projects.reduce((acc, p) => acc + (p.tags?.length || 0), 0);
    const totalGalleryImages = projects.reduce((acc, p) => acc + (p.galleryImages?.length || 0), 0);
    const projectsWithImages = projects.filter(p => p.coverImageUrl).length;
    const projectsWithDescriptions = projects.filter(p => p.detailedDescription).length;

    // User activity metrics
    const recentUsers = users.filter(u =>
      u.createdAt && new Date(u.createdAt.seconds * 1000) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    ).length;

    // Project popularity (based on category distribution)
    const categoryDistribution = Object.keys(PROJECT_CATEGORIES).map(categoryId => ({
      category: PROJECT_CATEGORIES[categoryId].name,
      count: projects.filter(p => p.category === categoryId).length,
      percentage: ((projects.filter(p => p.category === categoryId).length / projects.length) * 100).toFixed(1)
    }));

    // Technical specifications usage
    const totalTechnicalSpecs = projects.reduce((acc, p) => acc + (p.technicalSpecs?.length || 0), 0);

    return {
      projects: {
        total: projects.length,
        active: projects.filter(p => p.status === 'active').length,
        withImages: projectsWithImages,
        withDescriptions: projectsWithDescriptions,
        totalTags,
        totalGalleryImages,
        avgTagsPerProject: projects.length > 0 ? (totalTags / projects.length).toFixed(1) : 0
      },
      users: {
        total: users.length,
        admins: users.filter(u => u.role === 'admin').length,
        recent: recentUsers,
        regular: users.filter(u => u.role === 'user' || !u.role).length
      },
      categories: categoryDistribution,
      content: {
        totalTechnicalSpecs,
        avgSpecsPerProject: projects.length > 0 ? (totalTechnicalSpecs / projects.length).toFixed(1) : 0
      },
      engagement: {
        contentQualityScore: projects.length > 0 ?
          (((projectsWithImages / projects.length) * 50) + ((projectsWithDescriptions / projects.length) * 50)).toFixed(1) : 0
      }
    };
  } catch (error) {
    console.error('Error getting analytics data:', error);
    throw error;
  }
};

// Inquiry Management Functions
export const createInquiry = async (inquiryData) => {
  try {
    console.log('🔥 Attempting to create inquiry:', inquiryData);

    const inquiry = {
      ...inquiryData,
      status: 'unread',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'inquiries'), inquiry);
    console.log('✅ Inquiry successfully created with ID:', docRef.id);
    return { id: docRef.id, ...inquiry };
  } catch (error) {
    console.error('❌ Error creating inquiry:', error);
    console.error('Error details:', error.message);
    throw error;
  }
};

export const getInquiries = async (status = null) => {
  try {
    let q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));

    if (status) {
      q = query(q, where('status', '==', status));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting inquiries:', error);
    throw error;
  }
};

export const updateInquiryStatus = async (inquiryId, status) => {
  try {
    await updateDoc(doc(db, 'inquiries', inquiryId), {
      status,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    throw error;
  }
};

export const getInquiry = async (inquiryId) => {
  try {
    const docSnap = await getDoc(doc(db, 'inquiries', inquiryId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting inquiry:', error);
    throw error;
  }
};

export const deleteInquiry = async (inquiryId) => {
  try {
    await deleteDoc(doc(db, 'inquiries', inquiryId));
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    throw error;
  }
};

// Get inquiry statistics
export const getInquiryStats = async () => {
  try {
    const inquiries = await getInquiries();

    return {
      total: inquiries.length,
      unread: inquiries.filter(i => i.status === 'unread').length,
      read: inquiries.filter(i => i.status === 'read').length,
      responded: inquiries.filter(i => i.status === 'responded').length,
      archived: inquiries.filter(i => i.status === 'archived').length
    };
  } catch (error) {
    console.error('Error getting inquiry stats:', error);
    throw error;
  }
};

// Real-time listeners for inquiries
export const subscribeToInquiries = (callback) => {
  const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));

  return onSnapshot(q, (querySnapshot) => {
    const inquiries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(inquiries);
  });
};
