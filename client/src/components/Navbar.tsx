
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/5cfa53ee-6a71-479d-bb9c-acfc2e2b1d81.png" 
            alt="MindSaarthi Logo" 
            className="h-12 md:h-16" 
          />
          <img 
            src="/lovable-uploads/e387d0c2-5cd5-4694-83ea-46a76bfc8e2d.png" 
            alt="MindSaarthi Text" 
            className="h-8 md:h-10" 
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-mindblue transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-mindblue transition-colors">About</Link>
          <Link to="/resource" className="text-gray-700 hover:text-mindblue transition-colors">Resources</Link>
          <Link to="/find-therapist" className="text-gray-700 hover:text-mindblue transition-colors">Find a Therapist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
