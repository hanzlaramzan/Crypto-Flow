import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#29374e] overflow-x-hidden fixed w-full z-50 transition-all duration-300 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer">
              Crypto<span className="text-purple-400">Flow</span>
            </h1>
          </Link>
        </div>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className="hidden lg:flex items-center space-x-8">
          <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('features')}>Features</button></li>
          <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('works')}>How it works</button></li>
          <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
          <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('pricing')}>Pricing</button></li>
          <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('faq')}>FAQ</button></li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="hover:bg-[#2a3c50] px-4 py-2 rounded-xl text-gray-300 hover:text-white">
            Login
          </button>
          <Link to="#">
            <button className="bg-[#9b87f5] px-4 py-2 rounded-xl text-white hover:bg-[#6e59a5] transition-colors duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-4 px-4">
            <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('features')}>Features</button></li>
            <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('works')}>How it works</button></li>
            <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
            <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('pricing')}>Pricing</button></li>
            <li><button className="text-gray-300 hover:text-white" onClick={() => scrollToSection('faq')}>FAQ</button></li>
          </ul>
          <div className="flex flex-col space-y-4 mt-4 px-4">
            <button className="hover:bg-[#2a3c50] px-4 py-2 rounded-xl text-gray-300 hover:text-white text-left">
              Login
            </button>
            <Link to="#">
              <button className="bg-[#9b87f5] px-4 py-2 rounded-xl text-white hover:bg-[#6e59a5] transition-colors duration-300 w-full">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;