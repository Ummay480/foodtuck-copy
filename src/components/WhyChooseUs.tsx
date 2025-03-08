"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto bg-black text-white py-12 px-8 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Images Section */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/image-52.jpeg"
              alt="Tacos"
              width={270}
              height={180}
              className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
            />
            <Image
              src="/images/image-51.jpeg"
              alt="Fried Chicken"
              width={180}
              height={180}
              className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          <div className="flex flex-col space-y-4 mt-8 md:mt-0 ">
            <Image
              src="/images/image-50.jpeg"
              alt="Burger"
              width={185}
              height={180}
              className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
            />
            <div className="flex space-x-4 mt-4">
              <Image
                src="/images/image-68.jpeg"
                alt="Cheese Burger"
                width={160}
                height={160}
                className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
              />
              <div className="flex flex-col space-y-4">
                <Image
                  src="/images/image-92.png"
                  alt="Cheese Burger"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
                />
                <Image
                  src="/images/image-54.jpeg"
                  alt="Salad"
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full transition-transform transform hover:scale-105 hover:shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-4">
          <h2 className="text-[#FF9F0D] font-greatVibes text-2xl">Why Choose Us</h2>
          <h1 className="text-4xl font-bold leading-snug">
            Ex <span className="text-[#FF9F0D] -ml-2">tra ordinary taste</span> <br />
            And Experienced
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna elit augue urna vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>
          {/* Icon Section */}
          <div className="flex space-x-6 justify-center md:justify-start">
            {/* Fast Food */}
            <div className="flex flex-col items-center">
              <Link href="/menu/fastfood">
                <div className="hover:scale-105 hover:shadow-xl transition-transform transform bg-[#FF9F0D] text-white p-4 rounded-sm mb-2 cursor-pointer">
                  <Image
                    src="/images/image-71.png"
                    alt="Fast Food"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <p className="text-gray-300">Fast Food</p>
            </div>

            {/* Lunch */}
            <div className="flex flex-col items-center">
              <Link href="/menu/lunch">
                <div className="hover:scale-105 hover:shadow-xl transition-transform transform bg-[#FF9F0D] text-white p-4 rounded-sm mb-2 cursor-pointer">
                  <Image
                    src="/images/image-64.png"
                    alt="Lunch"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <p className="text-gray-300">Lunch</p>
            </div>

            {/* Dinner */}
            <div className="flex flex-col items-center">
              <Link href="/menu/dinner">
                <div className="hover:scale-105 hover:shadow-xl transition-transform transform bg-[#FF9F0D] text-white p-4 rounded-sm mb-2 cursor-pointer">
                  <Image
                    src="/images/image-59.png"
                    alt="Dinner"
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                </div>
              </Link>
              <p className="text-gray-300">Dinner</p>
            </div>
                      
          </div>

          <div className="rounded-md w-60 flex items-center space-x-4 bg-white mx-auto">
            {/* Column 1: Orange Bar */}
            <div className="bg-[#FF9F0D] w-2 h-full"></div>

            {/* Column 2: Number with Background */}
            <div className="bg-white text-[#FF9F0D] flex items-center justify-center p-4 rounded-full">
              <h2 className="text-2xl font-bold">30+</h2>
            </div>

            {/* Column 3: Text */}
            <div>
              <p className="text-gray-600 text-md">Years of</p>
              <h3 className="text-lg font-semibold text-black">Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
