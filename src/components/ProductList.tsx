"use client";

import React from "react";
import { Product } from "@/types/food"; // Adjust path as needed
import ProductCard from "./ShopCard"; // Ensure ProductCard is default exported

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 100,
    oldPrice: 120,
    image: "/path-to-image.jpg",
    category: "Category Name",
    quantity: 10, // ✅ Fixed: Assigned a default number value
  },
  // Add more products here
];

const handleAddToCart = (product: Product) => {
  console.log("Adding to cart:", product);
};

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id} // ✅ Correct key usage
          product={product} 
          addToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
