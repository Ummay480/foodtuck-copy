"use client";
import React from "react";
import Image from "next/image";

const SimilarProducts = () => {
  // Define products with names and corresponding images
  const products = [
    { name: "Fresh Lime", image: "image-3.png" },
    { name: "Chocolate Muffin", image: "image104.png" },
    { name: "Burger", image: "image-17.png" },
    { name: "Orange Juice", image: "image-3.png" },
  ];

  return (
    <section className="my-12">
      <h3 className="text-lg font-bold mb-4">Similar Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className=" p-0 ">
            {/* Product Image */}
            <Image
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-80 h-60 object-cover rounded-lg border border-gray-200"
              width={80}
              height={80}
            />
            {/* Product Details */}
            <h4 className="text-md font-medium mt-2">{product.name}</h4>
            <p className="text-yellow-500">Price: $12.00</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
