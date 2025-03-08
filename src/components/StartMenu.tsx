"use client";  // z
import React from 'react';  // Correct import statement

interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
  highlight?: boolean;
}

interface StarterMenuProps {
  menuItems: MenuItem[];
}

const StarterMenu: React.FC<StarterMenuProps> = ({ menuItems = [] }) => {
  return (
    <section className="w-full mx-auto mt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <img 
            src="/menu.png" 
            alt="Starter dish" 
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <h2 className="ml-2 text-[#FF9F0D]" style={{ fontSize: '24px' }}>Starter Menu</h2>
          </div>

          <div className="space-y-8">
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                      {item.name}
                    </h3>
                    <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
                </div>
              ))
            ) : (
              <p>No menu items available.</p>  // Display this if menuItems is empty
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StarterMenu;
