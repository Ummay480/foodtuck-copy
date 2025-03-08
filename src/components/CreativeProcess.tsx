"use client";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function CreativeProcess() {
  return (
    <section className="relative h-[50vh] bg-black text-white pt-10 -mt-20 mb-32">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center my-10 mx-20">
        <Image
          src="/images/image-99.png"
          alt="Delicious Food Background"
          layout="fill" // Fills the section area
          objectFit="cover" // Ensures image covers the space without distortion
          priority
          className="object-cover"
          style={{ objectPosition: "center" }} // Centers the image
        />
      </div>

      {/* Content (Text and Buttons) */}
      <div className="relative z-10 transform -translate-y-10 mx-auto px-4 max-w-screen-lg h-full flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-end text-center lg:text-left space-y-4 lg:space-y-0">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-sm font-greatVibes text-[#FF9F0D] sm:text-lg md:text-xl lg:text-2xl">
            Active Food Process
          </h2>
          <h1 className="text-sm font-semibold md:text-md lg:text-lg xl:text-xl px-2">
            Documenting Every Step of the Bean Process
          </h1>
          <p className="text-xs sm:text-xsm md:text-sm lg:text-md mx-auto sm:max-w-lg lg:max-w-2xl p-2">
            We document each step of the process to ensure quality.<br />
            From start to finish, nothing is missed.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
            <button className="px-6 py-2 text-xs text-white rounded-full border-[#FF9F0D] border-2 md:text-sm hover:bg-gray-200">
              Learn More
            </button>
            <button className="flex px-6 py-2 text-xs font-semibold text-white md:text-sm hover:text-[#FF9F0D]">
              <FaPlay className="bg-[#FF9F0D] rounded-full text-white p-3 text-3xl z-20" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
