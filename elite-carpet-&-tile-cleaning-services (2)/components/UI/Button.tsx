import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'glass';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform shadow-md text-base tracking-wide";
  
  const variants = {
    primary: "bg-elite-accent hover:bg-lime-500 text-white border border-transparent",
    secondary: "bg-elite-dark hover:bg-emerald-800 text-white border border-transparent",
    outline: "bg-transparent border-2 border-elite-dark text-elite-dark hover:bg-elite-dark hover:text-white",
    white: "bg-white text-elite-dark hover:bg-gray-100 border border-transparent",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
