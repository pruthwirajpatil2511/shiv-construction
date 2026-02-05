import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../features/landing/HeroSection';
import ServicesSection from '../features/landing/ServicesPreview';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        {/* Add Projects and Footer here later */}
      </main>
      
      {/* Simple Footer for now */}
      <footer className="bg-primary text-white py-8 text-center">
        <p>&copy; 2026 Shiv Construction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;