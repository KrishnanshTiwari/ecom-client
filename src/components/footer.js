import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#42314e] text-white pt-5">
      <div className="container mx-auto flex flex-wrap justify-center text-base">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-lg font-bold mb-2">E-BAZAR</h2>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          {/* Replaced Newsletter with Helpful Links */}
          <h2 className="text-lg font-bold mb-2">Helpful Links</h2>
          <ul>
            <li>
              <Link to="/become-seller">Become a Seller</Link>
            </li>
            <li>
              <Link to="/product">Shop Now</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-base text-center">
        <p>&copy; 2024 E-BAZAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
