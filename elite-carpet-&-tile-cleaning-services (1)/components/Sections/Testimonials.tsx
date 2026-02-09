import React from 'react';
import Section from '../UI/Section';
import { TESTIMONIALS } from '../../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" background="white">
       <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-elite-accent uppercase tracking-widest mb-3">Testimonials</h2>
        <h3 className="text-4xl font-serif font-bold text-elite-dark">What People are Saying</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((review) => (
          <div key={review.id} className="bg-elite-gray p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
            <Quote className="absolute top-8 right-8 text-elite-accent/20 w-12 h-12" />
            
            <div className="flex text-yellow-400 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
              "{review.text}"
            </p>
            
            <div className="mt-auto border-t border-gray-200 pt-6">
              <p className="font-bold text-elite-dark font-serif text-lg">{review.name}</p>
              <p className="text-sm text-gray-500">Verified Customer</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
