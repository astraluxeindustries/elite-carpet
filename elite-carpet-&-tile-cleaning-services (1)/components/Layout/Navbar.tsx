import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../../constants';
import Button from '../UI/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex flex-col group">
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
            scrolled ? 'text-elite-dark' : 'text-elite-dark md:text-white'
          }`}>
            ELITE
          </span>
          <span className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
             scrolled ? 'text-elite-accent' : 'text-elite-accent'
          }`}>
            Carpet & Tile
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium hover:text-elite-accent transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant={scrolled ? 'primary' : 'white'} 
            className="px-6 py-2 text-sm shadow-none"
            onClick={() => window.location.href = `tel:${COMPANY_INFO.phonePrimary}`}
          >
            <Phone className="w-4 h-4 mr-2" />
            {COMPANY_INFO.phonePrimary}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors ${
              scrolled ? 'text-elite-dark' : 'text-elite-dark'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t shadow-xl">
          <div className="flex flex-col py-6 px-6 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-800 hover:text-elite-accent border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="block w-full">
              <Button fullWidth variant="primary">
                Call Now: {COMPANY_INFO.phonePrimary}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
