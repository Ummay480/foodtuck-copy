"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import FoodCard from "@/components/FoodCard"; // Assuming the FoodCard component is available

// Initialize Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

// Define the menu item type for TypeScript
type MenuItem = {
  _id: string;
  name: string;
  slug:string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  imageUrl: string;
};

const MenuItems: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const query = `*[_type == "menuItem"]{
        _id,
        name,
        slug,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading menu items...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Menu Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <FoodCard
            key={item._id}
            imageUrl={item.imageUrl}
            name={item.name}
            title={item.name}
            price={`$${item.price}`}
            discountPrice={`$${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}`}
            discount={`${item.discountPercentage}% off`}
            rating={item.rating}
            reviewCount={item.ratingCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
