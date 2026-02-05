import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, CheckCircle2, Building2, 
  Hammer, Ruler, HardHat, Phone, Mail, MapPin, 
  Facebook, Instagram, Linkedin 
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- COMPONENTS ---

// 1. Navigation Bar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-tighter flex items-center gap-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          <Building2 className="text-orange-500" size={32} />
          <span>SHIV<span className="text-orange-500">CONSTRUCTION</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-6 py-2 rounded-sm font-semibold hover:bg-orange-700 transition-colors"
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-500">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-orange-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-block bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Premier Construction Services</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building the Foundation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Of Your Future</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Shiv Construction delivers engineering excellence and modern architectural solutions for residential, commercial, and industrial projects.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors"
            >
              Start Project <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg hover:border-white transition-colors"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// 3. About Section
const About = () => {
  const features = [
    "ISO 9001 Certified",
    "20+ Years Experience",
    "Smart Building Tech",
    "On-Time Delivery"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 rounded-br-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-cdac82aadbcc?q=80&w=2000&auto=format&fit=crop" 
              alt="Engineers discussing" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-orange-600 font-bold uppercase tracking-wider mb-2">About Company</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">We Are The Leader In <br /> Industrial Construction</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Shiv Construction, we don't just build structures; we build trust. With over two decades of experience in the Indian market, we have successfully delivered complex projects ranging from high-rise apartments to heavy industrial plants in Pune and beyond.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-500" size={20} />
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call for consultation</p>
                <p className="text-xl font-bold text-gray-900">+91 98765 43210</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 4. Services Section
const Services = () => {
  const services = [
    { title: "General Contracting", icon: <Hammer size={32} />, desc: "Complete project management from start to finish with dedicated supervision." },
    { title: "Architecture Design", icon: <Ruler size={32} />, desc: "Modern 3D planning and blueprinting using the latest CAD software." },
    { title: "Renovation", icon: <Building2 size={32} />, desc: "Transforming existing spaces into modern, functional environments." },
    { title: "Consulting", icon: <HardHat size={32} />, desc: "Expert advice on structural integrity, material selection, and cost estimation." },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Quality Services</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-600 group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 mt-4 text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Read More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Projects Section (Scroll Animation)
const Projects = () => {
  const projects = [
    { title: "Green Valley Apartments", loc: "Pune, MH", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" },
    { title: "Tech Park Phase 2", loc: "Mumbai, MH", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { title: "Shiv Industrial Hub", loc: "Nashik, MH", img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-4xl font-bold mt-2">Latest Projects</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 border border-gray-600 px-6 py-2 rounded-full hover:bg-orange-600 hover:border-orange-600 transition-all">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl h-[400px]"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-orange-500 text-sm font-semibold uppercase">{project.loc}</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{project.title}</h3>
                <div className="h-1 w-0 bg-orange-600 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-orange-600 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Request A Free Quote</h2>
            <p className="text-orange-100 mb-8">Ready to build your dream project? Contact us today for a free consultation and estimate.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Our Location</h4>
                  <p className="text-orange-100">123, Shiv Complex, Hinjewadi Phase 1, Pune - 411057</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-orange-100">contact@shivconstruction.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white p-12">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500" />
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 text-gray-500">
                <option>Select Service</option>
                <option>Construction</option>
                <option>Renovation</option>
                <option>Design</option>
              </select>
              <textarea rows="4" placeholder="Project Details" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-orange-500"></textarea>
              <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-md hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

// 7. Footer
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
              <Building2 className="text-orange-600" /> SHIV<span className="text-orange-600">CON</span>
            </div>
            <p className="text-gray-500 mb-6">
              Building quality infrastructure with integrity and innovation. Trusted by over 500+ clients across India.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {['Construction', 'Renovation', 'Architecture', 'Interior Design', 'Fixing & Support'].map((item) => (
                <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-500 mb-4 text-sm">Subscribe to get latest construction updates.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-gray-900 border-none px-4 py-2 w-full focus:ring-1 focus:ring-orange-600" />
              <button className="bg-orange-600 px-4 py-2 text-white font-bold hover:bg-orange-700"><ArrowRight size={18} /></button>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Shiv Construction. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- SCROLL PROGRESS BAR ---
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-orange-600 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

// --- MAIN APP ---
function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-orange-200 selection:text-orange-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;