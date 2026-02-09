import React from 'react';
import Section from '../UI/Section';
import { COMPANY_INFO } from '../../constants';

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" background="white">
       <div className="text-center mb-12">
        <h2 className="text-sm font-bold text-elite-accent uppercase tracking-widest mb-3">Our Work</h2>
        <h3 className="text-4xl font-serif font-bold text-elite-dark">See the Difference</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* Large Item */}
        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
           <img 
            src="/images/clean1.png" 
            alt="Living room carpet" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        </div>

        {/* Small Items */}
        <div className="rounded-2xl overflow-hidden relative group">
           <img 
            src="/images/clean2.png" 
            alt="Upholstery cleaning" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="rounded-2xl overflow-hidden relative group">
           <img 
            src="/images/clean4.png" 
            alt="Pet friendly cleaning" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="col-span-2 rounded-2xl overflow-hidden relative group">
           <img 
            src="/images/clean7.png" 
            alt="Tile cleaning" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-emerald-50 border border-emerald-100 p-8 rounded-2xl">
          <p className="font-serif text-2xl text-elite-dark font-bold mb-2">
            "We will take care all of carpets, tile, and upholstery needs"
          </p>
          <p className="text-gray-500 mb-6">Call Now For a Free Quote Appointment</p>
          <p className="text-4xl font-bold text-elite-accent">{COMPANY_INFO.phonePrimary}</p>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
