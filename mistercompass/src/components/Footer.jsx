import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About NebulaQuest</h2>
          <p className="text-gray-400">
            NebulaQuest is your ultimate travel companion, offering insights, tips, and guides for explorers and adventurers worldwide. Join us on a quest to discover new places, cultures, and experiences.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <ul>
            <li className="text-gray-400 mb-2">Email: <a href="mailto:contact@nebulaquest.com" className="hover:text-white transition-colors duration-300">contact@nebulaquest.com</a></li>
            <li className="text-gray-400 mb-2">Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">+1 234 567 890</a></li>
            <li className="text-gray-400 mb-2">Address: 123 Explorer Lane, Adventure City, World</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faPinterest} /> Pinterest
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="/destinations" className="text-gray-400 hover:text-white transition-colors duration-300">Destinations</a>
            </li>
            <li>
              <a href="/travel-tips" className="text-gray-400 hover:text-white transition-colors duration-300">Travel Tips</a>
            </li>
            <li>
              <a href="/foods" className="text-gray-400 hover:text-white transition-colors duration-300">Foods</a>
            </li>
            <li>
              <a href="/gears-review" className="text-gray-400 hover:text-white transition-colors duration-300">Gears Review</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">© 2024 NebulaQuest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
