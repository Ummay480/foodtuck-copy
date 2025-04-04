"use client"
import React from "react";
import Image from "next/image";

const FoodMenu: React.FC = () => {
  const menuItems = [
    { image: "/images/image-85.png" },
    { image: "/images/image-89.png" },
    { image: "/images/image-88.png" },
    { image: "/images/image-87.png" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-16 bg-black text-center">
      <h2 className="text-[#FF9F0D] font-greatVibes text-2xl leading-10 text-center">
        Food Category
      </h2>
      <h3 className="text-2xl font-semibold text-[#FF9F0D] -ml-40 -mt-2">ch</h3>
      <h3 className="flex text-2xl font-semibold text-white justify-center items-center text-center ml-10 -mt-8">
        oose Food Items
      </h3>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-black rounded shadow-md">
            <Image
              src={item.image}
              alt={item.image}
              width={160}
              height={160}
              className="w-40 h-40 mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
