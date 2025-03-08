import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import DinnerSection from "@/components/Dinner"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const DinnerItems = [
  {
    name: "Optic Big Breakfast Combo Menu",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
  },
  {
    name: "Cashew Chicken With Stir-Fry",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
  },
  {
    name: "Vegetables & Green Salad",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
  },
];

const Page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Navbar Component */}
      <NavBar />
      
      {/* HeroBanner with Lunch Title */}
      <div>
        <HeroBanner title="Dinner" />
      </div>

      {/* Lunch Section */}
      <div>
        <DinnerSection />
      </div>   

      {/* Stats Section */}
      <StatsSection />

      {/* Partners Section */}
      <div>
        <Partners />
      </div>
    </main>
  );
};

export default Page;