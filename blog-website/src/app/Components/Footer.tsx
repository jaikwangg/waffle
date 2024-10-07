// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
          {/* Right Side */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
