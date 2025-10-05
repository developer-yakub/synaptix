'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const AdminModal = ({ 
  isOpen, 
  onClose, 
  children, 
  className,
  size = "default",
  ...props 
}) => {
  const sizes = {
    sm: "max-w-md",
    default: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "relative w-full bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border border-gray-700/50 rounded-2xl backdrop-blur-sm overflow-hidden",
              sizes[size],
              className
            )}
            {...props}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AdminModalHeader = ({ children, className, onClose, ...props }) => {
  return (
    <div className={cn("flex items-center justify-between p-6 border-b border-gray-700/50", className)} {...props}>
      <div className="flex-1">
        {children}
      </div>
      {onClose && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
};

const AdminModalContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
};

const AdminModalFooter = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex items-center justify-end gap-3 p-6 border-t border-gray-700/50", className)} {...props}>
      {children}
    </div>
  );
};

const AdminModalTitle = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("text-xl font-bold text-white", className)} {...props}>
      {children}
    </h2>
  );
};

const AdminModalDescription = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-gray-400 mt-1", className)} {...props}>
      {children}
    </p>
  );
};

export { 
  AdminModal, 
  AdminModalHeader, 
  AdminModalContent, 
  AdminModalFooter, 
  AdminModalTitle, 
  AdminModalDescription 
};