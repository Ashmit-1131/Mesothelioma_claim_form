import React from 'react';
import { Link } from 'react-router-dom';

// A navigation bar with links to Home and Claim
function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Branding / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              Mesothelioma Claims
            </Link>
          </div>
          {/* Links */}
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/claim" className="text-gray-700 hover:text-indigo-600">
              Claim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
