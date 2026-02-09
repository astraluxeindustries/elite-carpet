import React from 'react';
import { SERVICE_AREAS } from '../../constants';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-emerald-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 rounded-3xl overflow-hidden bg-white shadow-xl">
          
          {/* Text Info */}
          <div className="lg:w-1/3 p-10 lg:p-14 bg-elite-dark text-white flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold mb-6">Service Areas</h3>
            <p className="text-gray-300 mb-8">
              We are proud to service the following communities in the Washington County area. Reliable, punctual, and local.
            </p>
            
            <ul className="space-y-4">
              {SERVICE_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-elite-accent/20 flex items-center justify-center mr-3">
                    <MapPin size={16} className="text-elite-accent" />
                  </div>
                  <span className="font-medium text-lg">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Visual (Simulated) */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto relative bg-gray-200">
             {/* Replace with actual embedded map in production if API key available, using image for now */}
             <img 
               src="https://static.googleusercontent.com/media/www.google.com/en//maps/about/images/mymaps/mymaps-desktop-1x.png" 
               alt="Map of Washington County"
               className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-elite-accent/30 text-center">
                  <p className="font-serif text-elite-dark font-bold">Serving Washington County</p>
                  <p className="text-xs text-gray-500">St George • Hurricane • Santa Clara</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
