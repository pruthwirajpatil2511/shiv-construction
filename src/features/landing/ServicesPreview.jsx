import React from 'react';
import { Ruler, BrickWall, Truck, PaintBucket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Ruler size={32} />,
    title: 'Architecture Design',
    desc: 'Modern blueprints and 3D modeling tailored to your vision.'
  },
  {
    icon: <BrickWall size={32} />,
    title: 'General Construction',
    desc: 'Heavy-duty construction for commercial and residential sectors.'
  },
  {
    icon: <Truck size={32} />,
    title: 'Material Supply',
    desc: 'Sourcing the finest grade cement, steel, and raw materials.'
  },
  {
    icon: <PaintBucket size={32} />,
    title: 'Renovation',
    desc: 'Transforming existing spaces into modern masterpieces.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Core Services</h2>
          <p className="text-gray-600">We provide end-to-end construction solutions with a focus on quality and durability.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-accent"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;