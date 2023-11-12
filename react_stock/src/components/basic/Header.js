// Header.js

import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">My Website</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          Toggle Sidebar
        </button>
      </div>
    </header>
  );
};

export default Header;
