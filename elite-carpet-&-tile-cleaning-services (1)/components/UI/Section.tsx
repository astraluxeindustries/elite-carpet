import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', background = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-elite-gray',
    dark: 'bg-elite-dark text-white'
  };

  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${bgColors[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
