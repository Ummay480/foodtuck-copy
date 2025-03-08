"use client";
import React from "react";
import Image from "next/image";


const StatsSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 mx-auto">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/images/image-100.png')",
             // Replace with your image path
        }}
      ></div>
      <div className="relative container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div>
          <div className="text-orange-500 text-6xl mb-2 ml-20">
            <Image
              src="/images/cap.png" // Ensure this path and filename match exactly
              alt="Professional Chef Icon"
              width={100}
              height={100}
              className="w-20 h-20" // Optional Tailwind classes for additional styling
            />
          </div>
            <h3 className="text-lg font-semibold">Professional Chefs</h3>
            <p className="text-3xl font-bold">420</p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-orange-500 text-6xl ml-20 mb-2">
              <Image
                src="/images/burger.png" // Replace with your actual image name and extension
                alt="Items Of Food Icon"
                width={100}
                height={100}
                className="w-20 h-20" // Adjust size as needed
              />
            </div>
            <h3 className="text-lg font-semibold">Items Of Food</h3>
            <p className="text-3xl font-bold">320</p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-orange-500 text-6xl ml-20 mb-2">
              <Image
                src="/images/spoon.png" // Replace with your actual image name and extension
                alt="Years Of Experience Icon"
                width={100}
                height={100}
                className="w-20 h-20" // Adjust size as needed
              />
            </div>
            <h3 className="text-lg font-semibold">Years Of Experience</h3>
            <p className="text-3xl font-bold">30+</p>
          </div>

          {/* Stat 4 */}
          <div>
            <div className="text-orange-500 text-6xl ml-20 mb-2">
              <Image
                src="/images/pizza.png" // Replace with your actual image name and extension
                alt="Happy Customers Icon"
                width={100}
                height={100}
                className="w-20 h-20" // Adjust size as needed
              />
            </div>
            <h3 className="text-lg font-semibold">Happy Customers</h3>
            <p className="text-3xl font-bold">220</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
