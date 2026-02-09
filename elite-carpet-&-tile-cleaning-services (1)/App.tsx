import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Commercial from './components/Sections/Commercial';
import Gallery from './components/Sections/Gallery';
import Testimonials from './components/Sections/Testimonials';
import ServiceArea from './components/Sections/ServiceArea';
import Contact from './components/Sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-elite-accent selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Commercial />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Call Button for Mobile */}
      <a 
        href="tel:435-319-9387" 
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-elite-accent text-white rounded-full shadow-xl flex items-center justify-center z-50 animate-bounce"
        aria-label="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  );
};

export default App;
