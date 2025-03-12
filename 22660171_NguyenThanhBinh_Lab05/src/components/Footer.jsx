// components/Footer.jsx
import React from 'react';
import Logo from '../assets/logo.PNG';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 shadow-lg rounded-t-lg ">
      <div className="flex items-center justify-between m-3">

        <div className='space-y-10'>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Welcome to our website, a wonderful place to explore and learn how to
              cook like a pro.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md bg-white text-gray-800 focus:outline-none w-full max-w-xs"
              />
              <button className="bg-pink-500 text-white p-2 rounded-r-md hover:bg-pink-600">
                Send
              </button>
            </div>
          </div>
          <div className="mt-8 text-center flex space-x-3 items-baseline text-xs border-t border-gray-700 pt-4">
            <img src={Logo} alt="Cheffy Logo" className="h-8 mb-2 inline-block" />
            <h1 className='text-center text-2xl font-bold'>Cheffy</h1>
            <p>© 2023 Cheffy Company. Terms of Service & Privacy Policy</p>
          </div>
        </div>

        <div className='space-y-10'>
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/our-cooks" className="hover:text-pink-500">Our Cooks</a></li>
              <li><a href="/features" className="hover:text-pink-500">See Our Features</a></li>
              <li><a href="/faq" className="hover:text-pink-500">FAQ</a></li>
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/gift-subscription" className="hover:text-pink-500">Gift Subscription</a></li>
              <li><a href="/feedback" className="hover:text-pink-500">Send Us Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Recipes Section */}

        <div>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/what-to-cook" className="hover:text-pink-500">What to Cook This Week</a></li>
            <li><a href="/pasta" className="hover:text-pink-500">Pasta</a></li>
            <li><a href="/dinner" className="hover:text-pink-500">Dinner</a></li>
            <li><a href="/healthy" className="hover:text-pink-500">Healthy</a></li>
            <li><a href="/vegetarian" className="hover:text-pink-500">Vegetarian</a></li>
            <li><a href="/vegan" className="hover:text-pink-500">Vegan</a></li>
            <li><a href="/christmas" className="hover:text-pink-500">Christmas</a></li>
          </ul>
        </div>
      </div>



    </footer>
  );
};

export default Footer;