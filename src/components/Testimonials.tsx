"use client";

import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-12 pb-20 ">
      <div className="container mx-auto px-4 text-center lt-20">
        {/* Section Title */}
        <h2 className="text-[#FF9F0D] text-xl justify-start text-start font-greatVibes left-40">Testimonials</h2>
        <h3 className="text-3xl font-bold mt-2 justify-start text-start left-40">What our clients are saying</h3>

        {/* Testimonial Card */}
        <div className="relative bg-white text-black mt-10 p-8 rounded-lg shadow-lg mx-auto max-w-3xl">
          {/* Right-Side Background Image */}
          <div
            className="absolute inset-0 rounded-lg bg-no-repeat bg-right pointer-events-none"
            style={{
              backgroundImage: "url('/images/image-101.png')", // Replace with the actual path to image-101
              backgroundSize: "contain",
              right: "-100px", // Adjust this value to push it more to the right
            }}
          ></div>

          {/* User Info */}
          <div className="relative z-10">
            {/* User Avatar */}
            <Image
              src="/images/image-72.jpeg" // Replace with actual image path
              alt="User"
              width={100}
              height={100}
              className="w-16 h-16 rounded-full mx-auto"
            />

            {/* Quote Icon */}
            <div className="text-[#FF9F0D] text-4xl mt-4">“</div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna elit augue urna, vitae feugiat pretium donec id elementum.
            </p>

            {/* Star Ratings */}
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="text-[#FF9F0D] text-xl">★</span> // Golden stars
              ))}
              <span className="text-gray-400 text-xl">★</span> {/* Gray star for missing rating */}
            </div>

            {/* User Details */}
            <div className="mt-4">
              <h4 className="text-xl font-bold">Alamin Hasan</h4>
              <p className="text-sm text-gray-500">Food Specialist</p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-[#FF9F0D]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
