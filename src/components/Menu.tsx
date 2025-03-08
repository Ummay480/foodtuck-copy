"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Menu = () => {
  const menuDetails = [
    {
      name: 'Lettuce Leaf',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '12.5$',
      image: '/images/image-66.jpeg', // Replace with your image paths
    },
    {
      name: 'Fresh Breakfast',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '14.5$',
      image: '/images/image-2.jpeg',
    },
    {
      name: 'Mild Butter',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '10.5$',
      image: '/images/image-97.png',
    },
    {
      name: 'Fresh Bread',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '8.0$',
      image: '/images/image-89.png',
    },
    {
        name: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5$',
        image: '/images/image-74.png', // Replace with your image paths
      },
      {
        name: 'Fresh Breakfast',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '14.5$',
        image: '/images/image-95.png',
      },
      {
        name: 'Mild Butter',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '10.5$',
        image: '/images/image-42.jpeg',
      },
      {
        name: 'Fresh Bread',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '8.0$',
        image: '/images/image-94.png',
      },
  ];

  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto text-center mb-10 mt-8">
        {/* Header */}
        <h3 className="text-[#FF9F0D] font-greatVibes text-2xl mt-6 ">Choose & pick</h3>
        <h2 className="text-3xl font-bold  text-[#FF9F0D] py4">
            Fr <span className="text-white mb-10 -ml-2">om Our Menu</span> 
          </h2>

        {/* Menu Categories */}
        <div className="flex justify-center space-x-20 my-8 text-gray-400">
        <div>
              {/* Using Next.js Link component directly with a button */}
              <Link href="/lunch">
                <button className="hover:text-[#FF9F0D]">Lunch</button>
              </Link>
            </div>

          <button className="hover:text-[#FF9F0D]">Dinner</button>
          <button className="hover:text-[#FF9F0D]">Dessert</button>
          <button className="hover:text-[#FF9F0D]">Drink</button>
          <button className="hover:text-[#FF9F0D]">Snack</button>
          <button className="hover:text-[#FF9F0D]">Soups</button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 pt-10">
          {/* First Column: Hero Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/image-93.png" // Replace with your hero image path
              alt="Hero Dish"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Second and Third Columns: Menu Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {menuDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-start bg-black p-0 rounded-lg space-x-4 hover:bg-gray-700 transition"
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  {/* Details */}
                  <div>
                    <h3 className="text-md font-bold text-start">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                    <p className="text-[#FF9F0D] font-semibold text-start">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
