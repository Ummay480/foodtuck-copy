"use client";

import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import MenuCard from "@/components/MenuCard";
import React from "react";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import MainCourse from "@/components/MainCourse";
import StatsSection from "@/components/StatsSection";
import Dessert from "@/components/Dessert";
import Drinks from "@/components/Drinks";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";
import Pagination from "@/components/Pagination";

// CartItem and FoodItem interfaces
interface FoodItem {
  id: string; // Ensure id is a string (you can change it to number if that's what you prefer)
  name: string;
  title: string;
  description: string;
  calories: number;
  price: number;
}


interface CartItem {
  id: string; // Consistent id type (string or number)
  name: string;
  price: number;
  quantity: number;
}

// MenuCategory interface
interface MenuCategory {
  category: string;
  title: string;
  imageSrc: string;
  items: FoodItem[];
}

// MenuCardProps interface for MenuCard component
interface MenuCardProps {
  item: FoodItem;
  onAddToCart: () => void;
}

const fetchMenuData = async (slug: string): Promise<MenuCategory | null> => {
  try {
    const response = await fetch("/api/foods");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allFoods: MenuCategory[] = await response.json();
    return findMenuBySlug(allFoods, slug);
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
};

const findMenuBySlug = (allFoods: MenuCategory[], slug: string) => {
  for (const category of allFoods) {
    if (category.category === slug) {
      return {
        category: category.category,
        title: category.category.charAt(0).toUpperCase() + category.category.slice(1).replace("-", " "),
        imageSrc: `/images/${category.category}.jpg`,
        items: category.items,
      };
    }
  }
  return null;
};

const Page: FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const [currentMenu, setCurrentMenu] = useState<MenuCategory | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMenu = async () => {
      const menuData = await fetchMenuData(slug);
      if (!menuData) {
        notFound();
      } else {
        setCurrentMenu(menuData);
      }
    };
    loadMenu();
  }, [slug]);

  if (!currentMenu) return <p>Loading...</p>;

  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <div>
        <HeroBanner title={currentMenu.title} />
      </div>

      <MainCourse menuItems={currentMenu.items} imageSrc={currentMenu.imageSrc} title={currentMenu.title} />
      <StatsSection />
      <Dessert />
      <Drinks />
      <Pagination/>
      <div>
        <Partners />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-center">Menu Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {currentMenu.items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={() =>
                dispatch(addToCart({ ...item, quantity: 1 })) // Ensure you're passing the correct properties
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
