import React, { useState } from 'react';
import Section from '../UI/Section';
import Button from '../UI/Button';
import { COMPANY_INFO } from '../../constants';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <Section id="contact" background="light" className="relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white" /> {/* Visual split */}
      
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
        
        {/* Contact Info Sidebar */}
        <div className="lg:w-5/12 bg-elite-dark text-white p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-serif font-bold mb-2">Call Today</h3>
            <p className="text-elite-light mb-8 font-medium tracking-wide">Get a free quote instantly</p>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="text-2xl font-bold hover:text-elite-accent transition-colors">
                  {COMPANY_INFO.phonePrimary}
                </a>
                <br />
                 <a href={`tel:${COMPANY_INFO.phoneSecondary}`} className="text-lg text-gray-400 hover:text-white transition-colors">
                  {COMPANY_INFO.phoneSecondary}
                </a>
              </div>
              
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl hover:text-elite-accent transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg leading-relaxed max-w-xs">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="w-16 h-16 bg-elite-accent rounded-full flex items-center justify-center mb-4">
               <span className="font-bold text-elite-dark text-xl">20+</span>
            </div>
            <p className="text-sm text-gray-300">Years of trusted service in the community.</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
          <div className="mb-10">
            <h3 className="text-3xl font-serif font-bold text-elite-dark mb-4">Book Now</h3>
            <p className="text-gray-600">
              Fill out the form below and we will get back to you shortly to confirm your appointment.
            </p>
          </div>

          {formState === 'success' ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
              <p className="text-green-700">Thank you for contacting us. We will be in touch shortly.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm font-semibold text-green-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name (required)</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-elite-accent focus:ring-2 focus:ring-elite-accent/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email (required)</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-elite-accent focus:ring-2 focus:ring-elite-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-elite-accent focus:ring-2 focus:ring-elite-accent/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full md:w-auto min-w-[160px]">
                   {formState === 'submitting' ? 'Sending...' : 'Submit Request'}
                   {formState === 'idle' && <Send className="ml-2 w-4 h-4" />}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
