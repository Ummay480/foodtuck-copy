"use client";
import Image from "next/image";

type Category = {
  name: string;
  type: string;
  image: string;
};

const FoodCategory: React.FC = () => {
  const categories: Category[] = [
    { name: "Grand Italiano", type: "Cuisine", image: "/images/image-85.png" },
    { name: "Pane Salmon", type: "Cuisine", image: "/images/image-87.png" },
    { name: "Mello Tagliatelle", type: "Cuisine", image: "/images/image-88.png" },
    { name: "Mello Tagliatelle", type: "Cuisine", image: "/images/image-89.png" },
  ];
  return (
    <div className="bg-white py-16 ">
      <div className="container mx-auto px-1">
        <h2 className="text-2xl font-greatVibes text-center mb-12">Food Category</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <Image src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
