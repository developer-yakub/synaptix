'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AdminTable = ({ children, className, ...props }) => {
  return (
    <div className={cn("bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/60 rounded-2xl backdrop-blur-sm overflow-hidden", className)} {...props}>
      <div className="overflow-x-auto">
        <table className="w-full">
          {children}
        </table>
      </div>
    </div>
  );
};

const AdminTableHeader = ({ children, className, ...props }) => {
  return (
    <thead className={cn("bg-gray-800/40", className)} {...props}>
      {children}
    </thead>
  );
};

const AdminTableBody = ({ children, className, ...props }) => {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
};

const AdminTableRow = ({ children, className, index = 0, ...props }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className={cn("border-t border-gray-700/30 hover:bg-gray-800/30 transition-colors", className)}
      {...props}
    >
      {children}
    </motion.tr>
  );
};

const AdminTableHead = ({ children, className, ...props }) => {
  return (
    <th className={cn("text-left p-4 text-gray-300 font-medium", className)} {...props}>
      {children}
    </th>
  );
};

const AdminTableCell = ({ children, className, ...props }) => {
  return (
    <td className={cn("p-4", className)} {...props}>
      {children}
    </td>
  );
};

export { AdminTable, AdminTableHeader, AdminTableBody, AdminTableRow, AdminTableHead, AdminTableCell };