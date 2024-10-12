import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-blue-800  text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="" alt="Logo" className="w-32 mb-3" />
          <p className="text-gray-400">Your tagline or mission statement goes here.</p>
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Useful Links</h3>
          <Link to="/about" className="text-gray-300 hover:text-white mb-1">About Us</Link>
          <Link to="/courses" className="text-gray-300 hover:text-white mb-1">Courses</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white mb-1">Contact</Link>
          <Link to="/faq" className="text-gray-300 hover:text-white mb-1">FAQ</Link>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
          </div>
        </div>

        {/* Additional Section (e.g., Copyright) */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p className="text-gray-300">Email: info@yourdomain.com</p>
          <p className="text-gray-300">Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
