"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import FoodCard from "@/components/FoodCard"; 

const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

type Food = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  imageUrl?: string;
};

const FoodList: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        price,
        rating,
        tags,
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setFoods(data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading foods...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Foods</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {foods.map((food) => (
        <FoodCard
          key={food._id}
          id={food._id}
          imageUrl={food.imageUrl}
          name={food.name}
          price={typeof food.price === "number" ? food.price : 0} // Default to 0
        />
      ))}

      </div>
    </div>
  );
};

export default FoodList;
