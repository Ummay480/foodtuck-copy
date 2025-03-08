"use client";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger (FaBars) and close (FaTimes) icons

const NavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state of the menu
  };

  return (
    <header className="relative flex justify-between items-center px-8 py-6 bg-black text-white max-w-screen-xl mx-auto">
      {/* Logo */}
      <h2 className="text-4xl font-bold leading-snug">
        Food<span className="text-orange-500 -ml-2">tuck</span>
      </h2>

      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="text-white text-3xl" /> // Show close icon when menu is open
        ) : (
          <FaBars className="text-white text-3xl" /> // Show hamburger icon when menu is closed
        )}
      </div>

      {/* Navigation Links */}
      <nav
        className={`flex gap-6 text-white text-md lg:flex lg:gap-6 ${
          menuOpen ? "flex-col absolute bg-black top-16 left-0 right-0 px-4 py-8 lg:flex-row" : "hidden"
        }`} // Make menu stack vertically and visible on small screens
      >
        {[ 
          { name: "Home", link: "/" },
          { name: "Menu", link: "/menu" },
          { name: "Blog", link: "/blog" },
          { name: "Pages", link: "/pages" },
          { name: "About", link: "/aboutUs" },
          { name: "Shop", link: "/shop" },
          { name: "Contact", link: "/contact" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="text-sm font-medium hover:text-[#FF9F0D]"
            onClick={() => setMenuOpen(false)} // Close the menu when a link is clicked
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Search and Bag Icons */}
      <div className="flex gap-4 items-center">
        {/* Input with Search Icon */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-2 border-[#FF9F0D] rounded-full px-4 py-2 w-full placeholder:text-white placeholder:italic"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
        </div>

        {/* Bag Icon */}
        <button className="text-white text-lg flex items-center gap-2">
          <PiHandbag className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default NavBar2;
