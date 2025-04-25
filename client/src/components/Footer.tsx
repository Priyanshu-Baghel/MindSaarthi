
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-3 px-4 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/5cfa53ee-6a71-479d-bb9c-acfc2e2b1d81.png" 
              alt="MindSaarthi Logo" 
              className="h-8" 
            />
            <img 
              src="/lovable-uploads/e387d0c2-5cd5-4694-83ea-46a76bfc8e2d.png" 
              alt="MindSaarthi Text" 
              className="h-6" 
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <h3 className="font-semibold mb-1">Quick Links</h3>
              <ul className="space-y-0.5">
                <li><Link to="/" className="text-gray-600 hover:text-mindblue transition-colors">Home</Link></li>
                <li><Link to="/chat" className="text-gray-600 hover:text-mindblue transition-colors">Chat</Link></li>
                <li><Link to="/resources" className="text-gray-600 hover:text-mindblue transition-colors">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Resources</h3>
              <ul className="space-y-0.5">
                <li><Link to="/resources" className="text-gray-600 hover:text-mindblue transition-colors">Mental Health</Link></li>
                <li><Link to="/find-therapist" className="text-gray-600 hover:text-mindblue transition-colors">Find a Therapist</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Contact</h3>
              <ul className="space-y-0.5">
                <li className="text-gray-600">info@mindsaarthi.com</li>
                <li className="text-gray-600">Indore, MP, India</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-2 pt-1 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-gray-600 mb-0.5 md:mb-0">
            &copy; {new Date().getFullYear()} MindSaarthi
          </p>
          <div className="flex space-x-3">
            <Link to="/privacy" className="text-gray-600 hover:text-mindblue transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-mindblue transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
