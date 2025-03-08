"use client";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function CreativeProcess() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-black text-white pt-10 -mt-20 mb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image-99.png"
          alt="Delicious Food Background"
          layout="fill"
          objectFit="cover"
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end pr-4 sm:pr-8 md:pr-12 lg:pr-16 py-10">
        <div className="max-w-lg text-right space-y-4 bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-greatVibes text-[#FF9F0D] leading-tight">
            Active Food Process
          </h2>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight">
            Documenting Every Step of the Bean Process
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug">
            We document each step of the process to ensure quality.<br />
            From start to finish, nothing is missed.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-end">
            <button className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 md:text-base text-white rounded-full border-[#FF9F0D] border hover:bg-[#FF9F0D] hover:text-black transition">
              Learn More
            </button>
            <button className="flex items-center px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 md:text-base font-semibold text-white hover:text-[#FF9F0D] transition">
              <FaPlay className="bg-[#FF9F0D] rounded-full text-white p-1 sm:p-2 text-xl sm:text-2xl mr-2" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
