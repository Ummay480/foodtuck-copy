import React from "react";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import ChefGrid from "@/components/chef";

const ChefBanner = () => {
    return (
        <div>
            <NavBar />
            <div className="text-orange-400">
            <HeroBanner title="Our Team" />
            </div>
           <div>
            </div>
            <ChefGrid />
       </div> 
       
    );
};

export default ChefBanner;
