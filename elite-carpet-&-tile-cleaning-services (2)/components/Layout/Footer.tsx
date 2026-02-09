import React from 'react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../../constants';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elite-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-serif font-bold mb-4">ELITE</h3>
          <p className="text-gray-300 mb-6">
            Providing the best cleaning at the best prices in the Washington County area. We treat your home like our own.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-elite-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-elite-accent transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-elite-light">Quick Links</h4>
          <ul className="space-y-3">
            {NAVIGATION_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-white hover:translate-x-2 transition-transform inline-block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-elite-light">Services</h4>
          <ul className="space-y-3 text-gray-300">
            <li>Carpet Cleaning</li>
            <li>Tile & Grout Cleaning</li>
            <li>Upholstery Cleaning</li>
            <li>Area Rugs</li>
            <li>Commercial Services</li>
            <li>Pet Odor Removal</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-elite-light">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="w-5 h-5 mr-3 mt-1 text-elite-accent" />
              <span>
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="block hover:text-elite-light">{COMPANY_INFO.phonePrimary}</a>
                <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="block hover:text-elite-light text-sm text-gray-400">{COMPANY_INFO.phoneSecondary}</a>
              </span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-elite-accent" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-elite-light">{COMPANY_INFO.email}</a>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 mt-1 text-elite-accent" />
              <span>{COMPANY_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
