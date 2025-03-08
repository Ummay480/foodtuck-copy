"use client";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative flex justify-between items-center px-4 md:px-2 sm:px-0 py-6 bg-black text-white max-w-screen-xl mx-auto">
      {/* Logo */}
      <h2 className="font-bold leading-snug text-2xl sm:text-4xl px-2">
        Food<span className="text-[#FF9F0D]">tuck</span>
      </h2>

      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="text-white text-3xl" />
        ) : (
          <FaBars className="text-white text-3xl" />
        )}
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col absolute bg-black top-16 left-0 right-0 px-4 py-8 lg:flex-row"
            : "hidden lg:flex"
        } gap-6 text-white text-md`}
      >
        {[
          { name: "Home", link: "/" },
          { name: "Menu", link: "/menu" },
          { name: "Blog", link: "/blog" },
          { name: "Pages", link: "/pages" },
          { name: "About", link: "/aboutUs" },
          { name: "Shop", link: "/shop" },
          { name: "Contact", link: "/contacts" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="text-sm font-medium hover:text-[#FF9F0D]"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Search and Bag Icons */}
      <div className="flex gap-4 items-center">
        {/* Search Bar */}
        <div className="relative hidden sm:block max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-2 border-[#FF9F0D] rounded-full px-4 py-2 w-full placeholder:text-white placeholder:italic"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
        </div>

        {/* Search Icon for Mobile */}
        <IoSearchOutline className="block sm:hidden text-white text-2xl cursor-pointer" />

        {/* Bag Icon */}
        <Link href="/cart">
          <button className="text-white text-lg">
            <PiHandbag className="text-xl" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavBar2;
