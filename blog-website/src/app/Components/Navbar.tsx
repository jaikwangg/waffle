"use client";
import React from 'react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800">
            MyApp
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                {/* Close Icon */}
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                {/* Menu Icon */}
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
          Contact
        </a>
      </div>
    )}
  </nav>
  )
}

export default Navbar