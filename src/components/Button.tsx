import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  href,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'px-8 py-4 rounded-lg font-medium transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-accent text-white dark:text-white light:text-white hover:bg-opacity-90',
    secondary: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white dark:hover:text-white light:hover:text-white',
    outline: 'bg-transparent text-text dark:text-text light:text-text border border-text/20 dark:border-text/20 light:border-gray-300 hover:border-accent hover:text-accent',
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <motion.span
        className="relative z-10"
        whileHover={{ x: 2 }}
      >
        {children}
      </motion.span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-white opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

