import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#42314e] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Company Name</h2>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
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
          <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
          <ul>
            <li>
              <a href="#faq">Become a Seller</a>
            </li>
            <li>
              <a href="#faq">Shop Now</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 E-BAZAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
