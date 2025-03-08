import React from "react";
import NavBar from "@/components/NavBar";
import StatsSection from "@/components/StatsSection";
import BreakfastSection from "@/components/Breakfast"; // Renamed the import to avoid conflict
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";

const BreakFastItems = [
  {
    name: "Naan/Kulcha with Beef Paya",
    description: "Soft naan or kulcha served with tender beef paya in rich gravy.",
    calories: 600,
    price: "$6",
  },
  {
    name: "2-Kabab Paratha",
    description: "Two juicy kebabs wrapped in soft paratha.",
    calories: 500,
    price: "$5",
  },
  {
    name: "Omelette Paratha",
    description: "Fluffy omelette wrapped in warm, crispy paratha.",
    calories: 400,
    price: "$4",
  },
  {
    name: "Lacha Paratha",
    description: "Crispy, flaky paratha served with chutney.",
    calories: 350,
    price: "$3",
  },
];

const Page = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Navbar Component */}
      <NavBar />
      
      {/* HeroBanner with Lunch Title */}
      <div>
        <HeroBanner title="Break Fast" />
      </div>

      {/* Lunch Section */}
      <div>
        <BreakfastSection />
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