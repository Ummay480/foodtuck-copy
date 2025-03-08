"use client";

import React from "react";
import Image from "next/image";
import { Coffee } from "lucide-react";
import Heading from "@/components/Heading";

interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
}

interface MenuProps {
  menuItems: MenuItem[];
  imageSrc: string;
  title: string;
}

const MainCourse: React.FC<MenuProps> = ({ menuItems, title }) => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section: Menu Items */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="-mt-24 lm-20"> 
              <Coffee className="text-[#FF9F0D]" size={20} />
            </div>
            <div className="-ml-7 pt-4">
              <Heading text={title} />
            </div>
          </div>

          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-base sm:text-lg font-bold text-[#FF9F0D]">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2">
        <Image
        src="/images/image-82.png" // Correct static path to the image
        alt={`${title} image`} // Dynamic alt text based on the title
        width={448} // Width of the image
        height={448} // Height of the image
        className="w-full h-auto rounded-lg shadow-md" // Tailwind classes for styling
      />
  
        </div>
      </div>
    </section>
  );
};
export default MainCourse;