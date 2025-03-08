"use client";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto bg-white py-12 lg:px-4 md:px-2 sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Images Section */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src="/images/image-5.png"
              alt="Fried Chicken"
              width={150}
              height={150}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            <Image
              src="/images/image-4.png"
              alt="Burger"
              width={140}
              height={140}
              className="rounded-lg object-cover w-full"
            />
            <div className="flex space-x-4 mt-4">
              <Image
                src="/images/image-3.png"
                alt="Cheese Burger"
                width={120}
                height={120}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-2 -mt-20 sm:-space-x-2">
          <h2 className="text-[#FF9F0D] font-greatVibes text-2xl">
          About Us
          </h2>
               
          <p className="text-black -mt-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna
            elit augue urna vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus.
          </p>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
            <button className="px-6 py-2 text-xs md:text-sm bg-orange-400 text-white  border-[#FF9F0D] border-2 hover:bg-[#FF9F0D] hover:text-black">
              Learn More
            </button>
            <button className="flex items-center px-6 py-2 text-xs md:text-sm font-semibold text-[#FF9F0D] border-[#FF9F0D] border-2 rounded-full hover:bg-[#FF9F0D] hover:text-white">
              <FaPlay className="bg-[#FF9F0D] text-white rounded-full p-2 text-3xl mr-2" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
