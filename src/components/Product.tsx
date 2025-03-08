"use client";

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import type { FoodItem } from "@/types/food";

interface ProductProps {
  product: FoodItem;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    console.error("Product is undefined!");
    return null;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        image: product.image ?? {}, // ✅ Ensure image structure
        stock: product.stock,
        price: product.price,
        quantity: 1,
        item: "product", // ✅ Added missing 'item' property
      })
    );
  };
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>

      {/* Use Next.js Image */}
      {product.image?.asset?.url ? (
        <Image
          src={product.image.asset.url}
          alt={product.name}
          width={200}
          height={150}
          className="rounded-md object-cover"
        />
      ) : (
        <p>No image available</p>
      )}

      <button
        onClick={handleAddToCart} // ✅ Corrected: Pass function correctly
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
