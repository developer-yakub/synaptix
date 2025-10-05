'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AdminForm = ({ children, className, ...props }) => {
  return (
    <form className={cn("space-y-6", className)} {...props}>
      {children}
    </form>
  );
};

const AdminFormGroup = ({ children, className, ...props }) => {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  );
};

const AdminFormLabel = ({ children, className, required = false, ...props }) => {
  return (
    <label className={cn("block text-sm font-medium text-gray-300", className)} {...props}>
      {children}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
  );
};

const AdminFormInput = ({ className, error = false, ...props }) => {
  return (
    <motion.input
      whileFocus={{ scale: 1.02 }}
      className={cn(
        "w-full px-4 py-3 bg-gray-800/60 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50",
        error 
          ? "border-red-500/50 focus:border-red-500" 
          : "border-gray-600/50 focus:border-gray-500/70",
        className
      )}
      {...props}
    />
  );
};

const AdminFormTextarea = ({ className, error = false, rows = 4, ...props }) => {
  return (
    <motion.textarea
      whileFocus={{ scale: 1.02 }}
      rows={rows}
      className={cn(
        "w-full px-4 py-3 bg-gray-800/60 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 resize-vertical",
        error 
          ? "border-red-500/50 focus:border-red-500" 
          : "border-gray-600/50 focus:border-gray-500/70",
        className
      )}
      {...props}
    />
  );
};

const AdminFormSelect = ({ children, className, error = false, ...props }) => {
  return (
    <motion.select
      whileFocus={{ scale: 1.02 }}
      className={cn(
        "w-full px-4 py-3 bg-gray-800/60 border rounded-xl text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50",
        error 
          ? "border-red-500/50 focus:border-red-500" 
          : "border-gray-600/50 focus:border-gray-500/70",
        className
      )}
      {...props}
    >
      {children}
    </motion.select>
  );
};

const AdminFormError = ({ children, className, ...props }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("text-sm text-red-400", className)}
      {...props}
    >
      {children}
    </motion.p>
  );
};

const AdminFormHelp = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-sm text-gray-400", className)} {...props}>
      {children}
    </p>
  );
};

const AdminFormCheckbox = ({ children, className, ...props }) => {
  return (
    <label className={cn("flex items-center gap-3 cursor-pointer", className)}>
      <input
        type="checkbox"
        className="w-4 h-4 bg-gray-800/60 border border-gray-600/50 rounded text-yellow-400 focus:ring-yellow-400/50 focus:ring-2"
        {...props}
      />
      <span className="text-gray-300">{children}</span>
    </label>
  );
};

const AdminFormRadio = ({ children, className, ...props }) => {
  return (
    <label className={cn("flex items-center gap-3 cursor-pointer", className)}>
      <input
        type="radio"
        className="w-4 h-4 bg-gray-800/60 border border-gray-600/50 text-yellow-400 focus:ring-yellow-400/50 focus:ring-2"
        {...props}
      />
      <span className="text-gray-300">{children}</span>
    </label>
  );
};

export { 
  AdminForm, 
  AdminFormGroup, 
  AdminFormLabel, 
  AdminFormInput, 
  AdminFormTextarea, 
  AdminFormSelect, 
  AdminFormError, 
  AdminFormHelp, 
  AdminFormCheckbox, 
  AdminFormRadio 
};