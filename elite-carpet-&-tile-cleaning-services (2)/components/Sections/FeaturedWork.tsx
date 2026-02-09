import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { FEATURED_WORK } from '../../constants';

const FeaturedWork: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-advance every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => prevIndex === FEATURED_WORK.length - 1 ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => prevIndex === 0 ? FEATURED_WORK.length - 1 : prevIndex - 1);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-end justify-between">
           <div>
             <h2 className="text-sm font-bold text-elite-accent uppercase tracking-widest mb-2">Our Gallery</h2>
             <h3 className="text-3xl md:text-4xl font-serif font-bold text-elite-dark">See Our Results</h3>
           </div>
           <div className="hidden md:flex items-center space-x-2 text-elite-dark/60 text-sm font-medium mt-4 md:mt-0">
             <Camera className="w-4 h-4" />
             <span>Real Local Projects</span>
           </div>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px] group bg-gray-900">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <img
                src={FEATURED_WORK[currentIndex].image}
                alt={FEATURED_WORK[currentIndex].title}
                className="w-full h-full object-cover opacity-90"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              
              {/* Content Caption */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row items-end justify-between">
                <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="max-w-2xl mb-8 md:mb-0"
                >
                  <div className="flex items-center space-x-2 mb-3">
                     <span className="px-3 py-1 bg-elite-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                       Before & After
                     </span>
                  </div>
                  <h4 className="text-white text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                    {FEATURED_WORK[currentIndex].title}
                  </h4>
                  <p className="text-gray-200 text-lg md:text-xl">
                    {FEATURED_WORK[currentIndex].description}
                  </p>
                </motion.div>

                {/* Controls inside caption area for cleaner look */}
                <div className="flex space-x-4">
                    <button 
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-elite-dark transition-all duration-300"
                    >
                    <ChevronLeft size={28} />
                    </button>
                    <button 
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full bg-elite-accent text-white flex items-center justify-center hover:bg-lime-500 transition-all duration-300 shadow-lg shadow-lime-500/30"
                    >
                    <ChevronRight size={28} />
                    </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Pagination */}
          <div className="absolute top-8 right-8 md:right-16 flex space-x-2 z-10">
            {FEATURED_WORK.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-elite-accent' 
                    : 'w-4 bg-white/40 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
      </div>
    </section>
  );
};

export default FeaturedWork;
