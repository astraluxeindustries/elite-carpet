import React from 'react';
import Section from '../UI/Section';
import { SERVICES } from '../../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" background="light">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-elite-accent uppercase tracking-widest mb-3">Our Services</h2>
        <h3 className="text-4xl font-serif font-bold text-elite-dark mb-4">Higher Level of Quality Cleaning</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Book with us if you really want it clean. We use specialized equipment and non-toxic solutions to ensure your home is safe and spotless.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.filter(s => s.id !== 'commercial').map((service) => (
          <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-8">
              <div className="w-12 h-12 bg-elite-light rounded-xl flex items-center justify-center mb-6 text-elite-dark">
                {service.icon && <service.icon size={24} />}
              </div>
              
              <h4 className="text-2xl font-serif font-bold text-elite-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-500">
                  <Check size={16} className="text-elite-accent mr-2" />
                  Professional Equipment
                </li>
                <li className="flex items-center text-sm text-gray-500">
                  <Check size={16} className="text-elite-accent mr-2" />
                  Safe & Non-Toxic
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
