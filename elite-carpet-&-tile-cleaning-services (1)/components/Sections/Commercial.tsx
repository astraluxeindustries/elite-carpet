import React from 'react';
import { COMPANY_INFO } from '../../constants';
import Button from '../UI/Button';
import { Phone, FileText } from 'lucide-react';

const Commercial: React.FC = () => {
  return (
    <section id="commercial" className="relative py-24 bg-elite-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/50 transform -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-elite-accent/20">
               <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Commercial Office Cleaning"
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-elite-light p-6 rounded-xl shadow-lg hidden md:block">
              <p className="font-serif font-bold text-xl text-elite-dark">Trusted by Local Businesses</p>
              <p className="text-sm text-elite-dark/80">Washington County Area</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-elite-light font-bold tracking-widest uppercase mb-4 text-sm">Commercial Division</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Commercial Carpet & <br/>Tile Cleaning
            </h3>
            <div className="h-1 w-20 bg-elite-accent mb-8" />
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Elite Carpet & Tile Cleaning Services' commercial division is an expert in commercial carpet, tile, grout and upholstery cleaning. 
              Whether you have a shop, office or other commercial premises requiring professional cleaning, we can meet your requirements. 
              We also offer flexible service hours to minimize disruption to your business.
            </p>
            
            <p className="text-gray-300 text-lg mb-10 italic border-l-4 border-elite-accent pl-4">
              "With years of experience and a commitment to building trusting relationships with our clients."
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${COMPANY_INFO.phonePrimary}`}>
                <Button variant="primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {COMPANY_INFO.phonePrimary}
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-elite-dark">
                  <FileText className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
