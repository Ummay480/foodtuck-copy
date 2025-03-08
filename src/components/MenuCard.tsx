import React from "react";
import Image from "next/image"; // Ensure Next.js Image component is imported

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string | {
    string?: string;
    asset?: { url?: string };
  };
}
interface MenuCardProps {
  item: FoodItem;
  onAddToCart: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const imageUrl = typeof item.image === "string" ? item.image : item.image?.asset?.url || "/placeholder.jpg";

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image 
        src={imageUrl} 
        alt={item.name} 
        width={300} 
        height={160} 
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
      <div className="flex justify-between mt-3">
        <button className="bg-orange-400 text-white px-3 py-2 rounded-md" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

