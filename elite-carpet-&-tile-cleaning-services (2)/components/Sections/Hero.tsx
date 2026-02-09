import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../constants';
import Button from '../UI/Button';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-cleaning.jpg"
          alt="Clean modern living room with carpet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-elite-dark/90 via-elite-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-white font-medium tracking-wide">#1 Rated in {COMPANY_INFO.area}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Best Cleaning. <br />
            <span className="text-elite-light">Best Prices.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            Professional carpet, tile, and upholstery cleaning services in {COMPANY_INFO.area}. 
            Experience the Elite difference today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button variant="primary" className="shadow-lg shadow-lime-500/20">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glass">
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Promo Badge */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
             className="absolute top-32 right-6 md:right-24 lg:right-32 hidden md:flex flex-col items-center justify-center w-32 h-32 bg-elite-accent rounded-full shadow-2xl rotate-12"
          >
             <span className="text-3xl font-bold text-elite-dark">$25</span>
             <span className="text-sm font-bold text-elite-dark uppercase tracking-wider">Per Room</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
