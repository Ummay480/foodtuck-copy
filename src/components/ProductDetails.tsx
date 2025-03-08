"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsCartPlus, BsFillShareFill } from "react-icons/bs";

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-10 text-black bg-white">
      {/* Left: Image Gallery */}
      <div className="flex lg:w-1/2 flex-col lg:flex-row gap-4">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4 items-start">
          {["108.png", "106.png", "105.png", "107.png"].map((image, index) => (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 h-20 object-cover rounded-lg border border-gray-200"
              width={64}
              height={64}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center">
          <Image
            src="/images/image-33.png"
            alt="Food item"
            className="w-80 h-auto rounded-lg"
            width={300}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="bg-[#FF9F0D] text-black px-4 py-1 text-sm">In stock</span>
          <div className="flex gap-2">
            <button className="text-gray-400">Prev</button>
            <button className="text-gray-400">Next</button>
          </div>
        </div>

        <h1 className="text-4xl font-bold">Yummy Chicken Chup</h1>

        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
          urna, vitae feugiat pretium donec id elementum.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">$54.00</span>
          <div className="flex items-center text-[#FF9F0D]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <span className="text-sm text-gray-400">(22 Reviews)</span>
        </div>

        <div className="text-gray-500">Dictum / Cursus / Risus</div>

        {/* Quantity & Cart Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-600 rounded-lg">
            <button onClick={decreaseQuantity} className="px-3 py-1 text-lg font-bold">
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3 py-1 text-lg font-bold">
              +
            </button>
          </div>

          <Link href="/cart">
            <button className="flex items-center gap-2 bg-[#FF9F0D] text-white px-4 py-2 hover:bg-orange-600">
              <BsCartPlus />
              Add to cart
            </button>
          </Link>
        </div>

        {/* Wishlist & Compare */}
        <div className="flex flex-col gap-2 text-gray-400">
          <button className="flex items-center gap-2">
            <FaHeart />
            Add to Wishlist
          </button>
          <button className="flex items-center gap-2">
            <BsFillShareFill />
            Compare
          </button>
          <div>
            <span>Category:</span> Pizza
          </div>
          <div>
            <span>Tag:</span> Our Shop
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
