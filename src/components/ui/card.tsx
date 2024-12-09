import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm",
        "hover:border-white/20 transition-all duration-300",
        "before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-violet-500/10 before:to-fuchsia-500/10 before:opacity-0 before:blur-xl before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};