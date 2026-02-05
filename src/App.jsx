import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';

// Placeholder components for pages not yet built
// You will replace these with real file imports later (e.g., import Contact from './pages/Contact')
const Services = () => <div className="pt-32 text-center text-2xl font-bold text-slate-700">Services Page (Coming Soon)</div>;
const Projects = () => <div className="pt-32 text-center text-2xl font-bold text-slate-700">Projects Page (Coming Soon)</div>;
const Contact = () => <div className="pt-32 text-center text-2xl font-bold text-slate-700">Contact Page (Coming Soon)</div>;

function App() {
  return (
    <Router>
      {/* The Routes container acts like a switch. 
        It looks at the URL and decides which component to render.
      */}
      <Routes>
        {/* The Landing Page (Root URL) */}
        <Route path="/" element={<Home />} />

        {/* Inner Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback for unknown routes (404) */}
        <Route path="*" element={<div className="pt-32 text-center text-red-500 font-bold">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;