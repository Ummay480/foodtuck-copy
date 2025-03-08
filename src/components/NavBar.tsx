"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4">
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
          className={`md:flex md:gap-6 ${isMenuOpen ? "block" : "hidden"}`}
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
              className="block py-2 px-4 hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Icons: Search, Bag, Person */}
        <div className="flex gap-6 items-center">
          <button className="text-white text-lg">
            <IoSearchOutline className="text-xl" />
          </button>
          <button className="text-white text-lg">
            <LuUserRound className="text-xl" />
          </button>
          <button className="text-white text-lg">
            <PiHandbag className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

