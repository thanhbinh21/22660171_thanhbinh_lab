// components/Navbar.jsx
import React from 'react';
import Logo from '../assets/logo.PNG';
import Avata from '../assets/avata.PNG';

const Navbar = () => {
  // Array of navigation items
  const navItems = [
    { href: '/what-to-cook', label: 'What to cook' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/ingredients', label: 'Ingredients' },
    { href: '/occasions', label: 'Occasions' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Cheffy Logo"
            className="h-8 w-auto"
          />
          <span className="text-pink-500 font-bold text-xl">Cheffy</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-pink-500 p-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Profile/Recipe Box */}
        <div className="flex items-center space-x-3">
          <a
            href="/recipe-box"
            className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm font-medium hover:bg-pink-200"
          >
            Your Recipe Box
          </a>
          <img
            src={Avata}
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;