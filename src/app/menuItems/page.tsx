import React from "react";
import Navbar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import MenuItems from "@/components/MenuItems"; // Fixed import

const MenuItemPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <div>
        <Navbar />
        <HeroBanner title="Menu Items" />
        <div className="mt-10">
        <MenuItems/> {/* Fixed component tag */}
      </div>
    </div>
    </div>
  );
};

export default MenuItemPage;
