import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" /> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:text-left sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Building Dreams Since 2025
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Building the Future <br />
            With <span className="text-accent">Precision</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-8">
            From residential skyscrapers to industrial complexes, Shiv Construction delivers 
            excellence, safety, and innovation in every brick we lay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-600 transition flex items-center justify-center gap-2">
              View Our Projects <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;