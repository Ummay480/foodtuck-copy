
import React from "react";
import Navbar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Chef from "@/components/chef"; // Fixed import

const ChefPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Header */}
      <div>
        <Navbar />
        <HeroBanner title="Chef" />
        <div className="mt-10">
        <Chef /> {/* Fixed component tag */}
      </div>
    </div>
    </div>
  );
};

export default ChefPage;