import React, { useState } from 'react';
import logo from '../../img/Taxavy logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#E0CA00] text-white p-3 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Taxavy Logo" 
            className="h-10 drop-shadow-md"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 mr-2">
          <a 
            href="#about" 
            className="text-blue-700 hover:text-blue-800 transition-colors font-bold duration-200 px-3 py-1 rounded-lg hover:bg-yellow-100 hover:shadow-sm"
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-blue-700 hover:text-blue-800 transition-colors font-bold duration-200 px-3 py-1 rounded-lg hover:bg-yellow-100 hover:shadow-sm"
          >
            Services
          </a>
          <a 
            href="#why-us" 
            className="text-blue-700 hover:text-blue-800 transition-colors font-bold duration-200 px-3 py-1 rounded-lg hover:bg-yellow-100 hover:shadow-sm"
          >
            Why Us
          </a>
          <a 
            href="#contact" 
            className="text-blue-700 hover:text-blue-800 transition-colors font-bold duration-200 px-3 py-1 rounded-lg hover:bg-yellow-100 hover:shadow-sm"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-700 focus:outline-none text-2xl p-1 rounded-lg hover:bg-yellow-100 hover:shadow-sm"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E0CA00] pb-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-2">
            <a 
              href="#about" 
              className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-bold py-2 px-3 rounded-lg hover:bg-yellow-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-bold py-2 px-3 rounded-lg hover:bg-yellow-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-bold py-2 px-3 rounded-lg hover:bg-yellow-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-bold py-2 px-3 rounded-lg hover:bg-yellow-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;