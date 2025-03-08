"use client";
import React from "react";
import Image from "next/image";

const ProductGallery: React.FC = () => {
  return (
    
      <div className="flex flex-col lg:flex-row gap-0 mt-4 mb-40">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-2 items-start lg:w-1/5">
          {["image-28.png", "image-29.png", "image-30.png", "image-31.png"].map((image, index) => (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
              width={64}
              height={64}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-start -ml-20 -mt-20">
          <Image
            src="/images/image-33.png"
            alt="food"
            className="w-full h-auto rounded-lg py-10"
            width={800} // Increased width for the main image
            height={1200} // Adjusted height for the main image
            priority
          />
        </div>
      </div>
   
  );
};

export default ProductGallery;
