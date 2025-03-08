"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  image: string;
};

type SidebarProps = {
  blogPosts: BlogPost[];
};

const Sidebar: React.FC<SidebarProps> = ({ blogPosts }) => {
  return (
    <div className="w-full md:w-1/4 pl-0 md:pl-8 mt-8 md:mt-0 space-y-8">
      {/* Search Bar */}
      <div className="mb-4">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-3 py-1 rounded-r-lg text-sm"
          >
            Search
          </button>
        </form>
      </div>

      {/* About Section */}
      <div className="border-slate shadow-md rounded-lg p-4 text-center">
        <Image
          src="/images/chef1.png"
          alt="Author"
          height={24}
          width={24}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="font-bold text-lg mt-4">Prince Miyako</h3>
        <p className="text-sm text-gray-500">Blogger & Photographer</p>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="flex justify-center mt-4 space-x-4 text-gray-500">
          <Link href="#" className="hover:text-orange-500">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="hover:text-orange-500">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="hover:text-orange-500">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="border-slate shadow-md rounded-lg p-4">
        <h3 className="font-normal text-lg mb-4">Recent Posts</h3>
        <ul>
          {blogPosts.slice(0, 4).map((post) => (
            <li key={post.id} className="flex items-center mb-4">
              <Image
                src={post.image}
                alt={post.title}
                height={48}
                width={48}
                className="rounded-md mr-4"
              />
              <div>
                <h4 className="text-sm font-bold">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter By Menu */}
      <div className="border-slate-50 shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">Filter By Menu</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>Chicken Fry (26)</li>
          <li>Burger Food (46)</li>
          <li>Pizza (16)</li>
          <li>Fresh Fruits (36)</li>
          <li>Vegetables (18)</li>
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="border-slate shadow-md rounded-lg p-4">
        <h3 className="font-normal text-lg mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Sandwich", "Tikka", "Blog", "Restaurant", "Food", "Pizza", "Burger"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-gray-600 rounded-full text-sm cursor-pointer hover:bg-orange-500 hover:text-white"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="border-slate shadow-md rounded-lg p-4">
        <h3 className="font-bold text-lg mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
        {["/images/image-75.png", "/images/image-74.png", "/images/image-94.png", "/images/image-85.png","/images/image-92.png", "/images/image-97.png"]
          
            .map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                height={96}
                width={96}
                className="w-full object-cover rounded-lg"
              />
            ))}
        </div>
      </div>

      {/* Follow Us */}
      <div className="border-slate shadow-md rounded-lg p-4 text-center">
        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          {["twitter", "youtube", "pinterest", "instagram", "facebook"].map(
            (social) => (
              <Link key={social} href="#" className="text-gray-500 hover:text-orange-500 text-2xl">
                <i className={`fab fa-${social}`}></i>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
