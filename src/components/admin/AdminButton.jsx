'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AdminButton = ({ 
  children, 
  className, 
  variant = "default",
  size = "default",
  disabled = false,
  ...props 
}) => {
  const variants = {
    default: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-lg",
    secondary: "bg-gray-800/60 border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/60",
    outline: "border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-800/50",
    ghost: "text-gray-400 hover:text-white hover:bg-gray-800/50",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export { AdminButton };