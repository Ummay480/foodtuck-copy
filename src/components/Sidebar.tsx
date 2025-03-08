"use client";
import { useState } from "react"; // Added missing import
import Image from "next/image";
import CategoryFilter from "./CategoryFilter";
import { FaArrowRight } from "react-icons/fa"; // Corrected import

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]); // Added price range state

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    setPriceRange([newPrice, 1000]);
  };

  return (
    <div className="w-full md:w-1/4 bg-white p-3 space-y-4 text-sm ml-auto">
      {/* Search Bar */}
      <div className="mb-4">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-3 py-1 rounded-r-lg text-sm"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <CategoryFilter onCategoryChange={handleCategoryChange} />
        <p>Selected Categories: {selectedCategories.join(", ")}</p>
      </div>

      {/* Menu Image with overlay text, price, and button */}
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src="/images/image-113.png" // Replace with your image path
          alt="Menu"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-1/3 left-1/3 pl-16 w-full transform -translate-x-1/2 -translate-y-1/3 text-start">
          <h3 className="text-white text-3xl font-bold text-justify">Perfect Taste</h3>
          <h2 className="text-white text-xl text-justify">Classic Restaurant</h2>
        </div>
        {/* Price and Button */}
        <div className="absolute bottom-4 left-4 flex items-center justify-start w-[90%]">
          <span className="text-orange-500 text-lg font-bold -mt-40">45.00$</span>
          <button className=" text-white font-semibold -ml-10 py-2 rounded-full px-4 hover:bg-white full-rounded hover:text-black">
            Shop Now
            <FaArrowRight className="text-black flex justify-between items-end" />
          </button>
        </div>
      </div>

      {/* Filter by Price */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm">Filter by Price</h3>
        <div className="flex items-center justify-between">
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full text-sm"
            value={priceRange[0]} // Set value to state
            onChange={handlePriceChange} // Handle price change
          />
          <span className="ml-2 color:orange-500 text-xs">${priceRange[0]} - $1000</span>
        </div>
      </div>

      {/* Latest Products */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Latest Products</h3>
        <ul className="space-y-1">
          {["Pizza", "Cupcake", "Burger", "Cookies"].map((product, index) => (
            <li key={index} className="flex items-center justify-between px-8 py-2 text-sm">
              <Image
                src="/images/product-20.png" // Replace with your image path
                alt={`Image of ${product}`} // Make alt more descriptive
                width={60}
                height={64}
                className="rounded"
              />
              <div>
                <span>{product}</span>
                <div className="flex items-center text-yellow-500">
                  <span className="mr-1 mb-3">{Array(5).fill("★").join("")}</span>
                  <span className="text-gray-700 text-xs mt-5 -ml-36 px-20 item-center justify-start">Price: $35</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Tags */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-1 mb-40">
          {[
            "Services",
            "Our Menu",
            "Pizza",
            "Cupcake",
            "Burger",
            "Cookies",
            "Our Shop",
            "Tandoori Chicken",
          ].map((tag, index) => (
            <span
              key={index}
              className="bg-white text-gray-700 px-2 py-0.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
