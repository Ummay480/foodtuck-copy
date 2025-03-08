import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex justify-between items-center py-6 px-4 border-b border-gray-700 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold">
          <span className="text-orange-400">Still</span> You Need Our Support ?
        </h2>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded text-black focus:outline-none"
          />
          <button className="bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600 transition">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 px-4 max-w-screen-xl mx-auto">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us.</h3>
          <p className="text-gray-400 text-sm mb-4">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and
            professional chauffeured car service in major cities across the world.
          </p>
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-full">
              <span className="text-white text-lg">&#8635;</span>
            </div>
            <div className="ml-2">
              <p>Opening Hours</p>
              <p className="text-gray-400 text-sm">Mon - Sat (8.00 - 6.00)</p>
              <p className="text-gray-400 text-sm">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Help?</h3>
          <ul className="text-gray-400 space-y-2">
            <li>FAQ</li>
            <li>Term & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Post */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Recent Post</h3>
          <ul className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <li key={index} className="flex space-x-2 items-center">
                <div className="w-12 h-12 bg-gray-700 rounded"></div>
                <div>
                  <p className="text-sm text-gray-400">20 Feb 2022</p>
                  <p className="text-sm">Keep Your Business</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-between items-center py-4 px-10 bg-[#4F4F4F] border-t border-gray-700 max-w-screen-xl mx-auto">
        <p className="text-xs px-20 text-white">&copy; 2024 by Ummay Kulsoom. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <FaFacebook className="text-white hover:text-orange-500 cursor-pointer" />
          <FaTwitter className="text-white hover:text-orange-500 cursor-pointer" />
          <FaInstagram className="text-white hover:text-orange-500 cursor-pointer" />
          <FaYoutube className="text-white hover:text-orange-500 cursor-pointer" />
          <FaPinterest className="text-white hover:text-orange-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
