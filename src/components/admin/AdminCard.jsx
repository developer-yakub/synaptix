'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AdminCard = ({ 
  children, 
  className, 
  gradient = "from-gray-900/80 via-gray-800/60 to-gray-900/80",
  hover = true,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={cn(
        "relative bg-gradient-to-br border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden",
        gradient,
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const AdminCardHeader = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("p-6 border-b border-gray-700/50", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const AdminCardContent = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const AdminCardTitle = ({ children, className, ...props }) => {
  return (
    <h3 
      className={cn("text-xl font-bold text-white mb-1", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

const AdminCardDescription = ({ children, className, ...props }) => {
  return (
    <p 
      className={cn("text-gray-400", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export { AdminCard, AdminCardHeader, AdminCardContent, AdminCardTitle, AdminCardDescription };