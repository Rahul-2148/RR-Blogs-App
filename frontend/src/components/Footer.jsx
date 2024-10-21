import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-500 text-white py-10 pb-1">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-5">
        
        {/* First column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul>
            <li><a href="#" className="hover:underline">Flutter</a></li>
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">Android</a></li>
            <li><a href="#" className="hover:underline">iOS</a></li>
          </ul>
        </div>
        
        {/* Second column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Design to Code</h4>
          <ul>
            <li><a href="#" className="hover:underline">Figma Plugin</a></li>
            <li><a href="#" className="hover:underline">Templates</a></li>
          </ul>
        </div>

        {/* Third column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Comparison</h4>
          <ul>
            <li><a href="#" className="hover:underline">React vs Angular</a></li>
            <li><a href="#" className="hover:underline">Node.js vs Django</a></li>
            <li><a href="#" className="hover:underline">Flutter vs React Native</a></li>
            <li><a href="#" className="hover:underline">Android vs iOS</a></li>
          </ul>
        </div>

        {/* Fourth column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul>
            <li><Link to = "/about" className="hover:underline">About Us</Link></li>
            <li><Link to = "/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to = "/TermsOfService" className="hover:underline">Terms of Service</Link></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Logo, Copyright, and Social Icons */}
      <div className="border-t border-gray-700 mt-8 py-2 px-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          {/* <img src="your-logo-url" alt="Website Logo" className="w-10 h-10 mr-2" /> */}
          <span className="text-lg font-semibold">Rahul Raj Blogs</span>
        </div>

        <p className="text-sm">&copy; {currentYear} Rahul Raj Blogs. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/rahulrajmodi.48" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/rahulrajmodi.48/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rahul-raj-11a946224/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Rahul-2148" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaGithub /> {/* GitHub Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
