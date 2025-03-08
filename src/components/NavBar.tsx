"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-black text-white relative z-50 ">
      <div className="flex justify-between items-center px-2 md:px-3 lg:px-4 py-2 mx-auto">
        {/* Logo */}
        <h2 className="text-3xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </h2>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className= {`md:flex md:gap-2 ${isMenuOpen ? "block" : "hidden"}`}
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
              className="block py-2 px-4 hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Block */}
        <div className="relative flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <IoSearchOutline className="text-xl" />
          </button>

          {/* Conditional Search Input */}
          {isSearchOpen && (
            <div className="absolute top-full mt-2 bg-white text-black z-50">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-lg border-2 focus:outline-1 w-60"
                onBlur={() => setIsSearchOpen(false)} // Close input when focus is lost
              />
            </div>
          )}

          <Link href="/signin">
            <button className="text-white text-lg">
              <LuUserRound className="text-xl" />
            </button>
          </Link>
          <Link href="/cart">
            <button className="text-white text-lg">
              <PiHandbag className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
