"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice"; // Adjust path as needed
import { CartItemProps } from "@/types/cart";

interface ProductCardProps {
  product: CartItemProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <div className="product-card border p-4 rounded shadow relative group">
      <Image
        src={product.image?.asset?.url || "/default-image.jpg"}
        alt={product.name}
        width={300}
        height={160}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>

      {/* Checkout Button */}
      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-4 py-2 rounded mt-2 hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
