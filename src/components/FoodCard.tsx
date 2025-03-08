"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { FoodItem } from "@/types/food";

interface FoodCardProps extends Omit<FoodItem, "quantity" | "category" | "description" | "stock"> {
  id: string;
  item: string;
  name: string;
  price: number;
  image?: {
    asset?: {
      url?: string;
    };
  };
}

const FoodCard: React.FC<FoodCardProps> = ({ id, item, name, price, image }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem: FoodItem = {
      id,
      item,
      name,
      price,
      category: "Uncategorized", // Default category
      description: "No description available.", // Default description
      stock: 10, // Default stock
      quantity: 1, // Ensure quantity is always a number
      image,
    };
    
    dispatch(addToCart(cartItem));
    router.push("/cart");
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <Image
        src={image?.asset?.url || "/images/placeholder.jpg"}
        alt={name || "Food Item Image"}
        width={400}
        height={128}
        className="mx-auto w-32 h-32 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-lg font-bold text-gray-700">${price ? price.toFixed(2) : "0.00"}</p>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
