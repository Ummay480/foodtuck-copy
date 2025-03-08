"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lunch"); // Default category

  const menuDetails = [
    // Breakfast Category
    {
      name: "Naan/Kulcha with Beef Paya",
      description: "Soft naan or kulcha served with tender beef paya in rich gravy.",
      price: "$6",
      image: "/images/naan-kulcha-beef-paya.jpg",
      category: "Breakfast",
    },
    {
      name: "2-Kabab Paratha",
      description: "Two juicy kebabs wrapped in soft paratha.",
      price: "$5",
      image: "/images/kabab-paratha.jpg",
      category: "Breakfast",
    },
    {
      name: "Omelette Paratha",
      description: "Fluffy omelette wrapped in warm, crispy paratha.",
      price: "$4",
      image: "/images/omelette-paratha.jpg",
      category: "Breakfast",
    },
    {
      name: "Lacha Paratha",
      description: "Crispy, flaky paratha served with chutney.",
      price: "$3",
      image: "/images/lacha-paratha.jpg",
      category: "Breakfast",
    },
    {
      name: "Naan/Paratha with Chana",
      description: "Soft naan or paratha served with spiced chickpeas.",
      price: "$4",
      image: "/images/chana-pratha.jpg",
      category: "Breakfast",
    },
    {
      name: "Halwa Poori",
      description: "Classic breakfast of puri, sweet halwa, and chana masala.",
      price: "$5",
      image: "/images/Halwa-puri.jpg",
      category: "Breakfast",
    },
    {
      name: "Qeema Kachori",
      description: "Fried kachori stuffed with flavorful minced meat.",
      price: "$4",
      image: "/images/qeema-kachori.jpg",
      category: "Breakfast",
    },
    {
      name: "Sandwich",
      description: "Simple and delicious sandwich with fillings of your choice.",
      price: "$3",
      image: "/images/sandwich.jpg",
      category: "Breakfast",
    },
  
    // Snacks Category
    {
      name: "Shami Kabab",
      description: "Flavorful minced meat kebabs served with naan or chutney.",
      price: "$4",
      image: "/images/shami-kabab.jpg",
      category: "Snack",
    },
    {
      name: "Chicken Patties",
      description: "Crispy pastry filled with seasoned chicken filling.",
      price: "$3",
      image: "/images/chicken patties.jpg",
      category: "Snack",
    },
    {
      name: "Vegetable Roll",
      description: "Healthy and delicious vegetable roll with a tangy sauce.",
      price: "$3",
      image: "/images/vegitable-rolls.jpg",
      category: "Snack",
    },
    {
      name: "Aloo Samosa",
      description: "Crispy samosas filled with spiced mashed potatoes.",
      price: "$2",
      image: "/images/aloo-samosa.jpg",
      category: "Snack",
    },
    {
      name: "Chicken Shawarma",
      description: "Grilled chicken wrapped in pita bread with garlic sauce.",
      price: "$4",
      image: "/images/chicken-shawarma.jpg",
      category: "Snack",
    },
    {
      name: "Zinger with Fries",
      description: "Crispy zinger burger served with fries.",
      price: "$7",
      image: "/images/zinger.jpg",
      category: "Snack",
    },
    {
      name: "Club Sandwich",
      description: "Triple-layered sandwich filled with chicken, eggs, and veggies.",
      price: "$5",
      image: "/images/club-sandwich1.jpg",
      category: "Snack",
    },
    {
      name: "Chicken Bites",
      description: "Grilled chicken bites served with a side of vegetables.",
      price: "$10",
      image: "/images/image-66.jpeg",
      category: "Snack",
    },
  
    // Lunch Category
    {
      name: "Kali Daal Chawal",
      description: "Rich, spicy black lentil dal served with steamed rice.",
      price: "$5",
      image: "/images/kaali-daal-chawal.jpg",
      category: "Lunch",
    },
    {
      name: "Chicken Tikka Macaroni",
      description: "Macaroni infused with tikka spices and grilled chicken chunks.",
      price: "$6",
      image: "/images/tikka macroni.jpg",
      category: "Lunch",
    },
    {
      name: "Chicken Achari Macaroni",
      description: "Macari cooked with tangy achar masala and chicken.",
      price: "$6",
      image: "/images/achari-macroni.jpg",
      category: "Lunch",
    },
    {
      name: "Muter Pulao",
      description: "Flavored rice cooked with green peas and aromatic spices.",
      price: "$5",
      image: "/images/muter-pulao.jpg",
      category: "Lunch",
    },
  
    // Dinner Category
    {
      name: "Chicken Nihari",
      description: "Slow-cooked chicken in a rich, flavorful curry.",
      price: "$8",
      image: "/images/chicken-nihari.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Karahi",
      description: "Traditional chicken curry cooked in a wok with aromatic spices.",
      price: "$8",
      image: "/images/chicken-karahi.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Tikka",
      description: "Grilled chicken marinated with spices, served with naan.",
      price: "$6",
      image: "/images/chicken-tikka-breast.png",
      category: "Dinner",
    },
    {
      name: "Behari Kabab",
      description: "Tender, spiced beef kebabs grilled to perfection.",
      price: "$7",
      image: "/images/behari-kabab.jpg",
      category: "Dinner",
    },
    {
      name: "Reshmi Kabab",
      description: "Succulent chicken kebabs marinated in cream and spices.",
      price: "$7",
      image: "/images/reshmi-kabab.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Malai Boti",
      description: "Chicken pieces marinated in cream and spices, grilled to perfection.",
      price: "$7",
      image: "/images/malai-boti.jpg",
      category: "Dinner",
    },
    {
      name: "Chicken Tikka Pizza",
      description: "Tikka-flavored chicken on a cheesy pizza crust.",
      price: "$10",
      image: "/images/image-98.png",
      category: "Dinner",
    },
    {
      name: "Fajita Pizza",
      description: "Pizza topped with spicy chicken fajitas and bell peppers.",
      price: "$10",
      image: "/images/fajita-pizza.jpg",
      category: "Dinner",
    },
  
    // Drink Category
  
      {
        name: "Coconut Water",
        description: "Fresh and refreshing coconut water, perfect for hydration.",
        price: "$3",
        image: "/images/coconut-water.jpg",
        category: "Drink",
      },
    {
      name: "Orange Juice",
      description: "Freshly squeezed orange juice.",
      price: "$2",
      image: "/images/orange-juice1.jpg",
      category: "Drink",
    },
    {
      name: "Grapefruit Juice",
      description: "Tangy and refreshing grapefruit juice.",
      price: "$2",
      image: "/images/grapefruit-juice.jpg",
      category: "Drink",
    },
    {
      name: "Apple Juice",
      description: "Fresh and sweet apple juice.",
      price: "$2",
      image: "/images/apple-juice.jpg",
      category: "Drink",
    },
    {
      name: "Dates Shake",
      description: "Healthy and creamy shake made with dates.",
      price: "$3",
      image: "/images/dates-shake.jpg",
      category: "Drink",
    },
    {
      name: "Melon Shake",
      description: "Refreshing melon shake with a hint of sweetness.",
      price: "$3",
      image: "/images/melon-shake.jpg",
      category: "Drink",
    },
    {
      name: "Strawberry Shake",
      description: "Creamy strawberry shake made with fresh strawberries.",
      price: "$3",
      image: "/images/straberry-juice.jpg",
      category: "Drink",
    },
    {
      name: "Banana Shake",
      description: "Delicious banana shake with a creamy texture.",
      price: "$3",
      image: "/images/banana-shake.jpg",
      category: "Drink",
    },
  
    // Dessert Category
    {
      name: "Brownies",
      description: "Rich, fudgy brownies with a chocolatey delight.",
      price: "$4",
      image: "/images/brownies.jpg",
      category: "Dessert",
    },
    {
      name: "Cupcake",
      description: "Deliciously soft cupcakes topped with creamy frosting.",
      price: "$3",
      image: "/images/cupcake.jpg",
      category: "Dessert",
    },
    {
      name: "Tea Cake",
      description: "Light and fluffy tea cake with a hint of vanilla.",
      price: "$3",
      image: "/images/tea-cake.jpg",
      category: "Dessert",
    },
    {
      name: "Chip Cookies",
      description: "Crispy cookies filled with chocolate chips.",
      price: "$2",
      image: "/images/choco-chip-cookies.jpg",
      category: "Dessert",
    },
    {
      name: "Sweet Paratha",
      description: "Soft paratha drizzled with syrup and sugar.",
      price: "$3",
      image: "/images/sweet-paratha.jpg",
      category: "Dessert",
    },
    {
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake with chocolate ganache.",
      price: "$5",
      image: "/images/chocolate-cake.jpg",
      category: "Dessert",
    },
    {
      name: "Pineapple Cake",
      description: "Fluffy cake with fresh pineapple and whipped cream.",
      price: "$5",
      image: "/images/pineapple-cake.jpg",
      category: "Dessert",
    },
    {
      name: "Coffee Cake",
      description: "Moist coffee-flavored cake with a cinnamon streusel topping.",
      price: "$4",
      image: "/images/coffee-cake.jpg",
      category: "Dessert",
    },
  ];
  
  // Filter menu items based on the selected category
  const filteredMenu = menuDetails.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto text-center mb-10 mt-8">
        {/* Header */}
        <h3 className="text-[#FF9F0D] font-greatVibes text-2xl mt-6">
          Choose & pick
        </h3>
        <h2 className="text-3xl font-bold text-[#FF9F0D] py-4">
          Fr <span className="text-white mb-10 -ml-2">om Our Menu</span>
        </h2>

        {/* Menu Categories */}
        <div className="flex justify-center space-x-20 my-8 text-gray-400">
          {["Lunch", "Dinner", "Dessert", "Drink", "Snack", "Breakfast"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`hover:text-[#FF9F0D] ${
                  selectedCategory === category ? "text-[#FF9F0D]" : ""
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/image-93.png"
              alt="Hero Dish"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMenu.map((item) => (
                <div
                  key={item.name} // Use item name for a unique key
                  className="flex justify-start items-start bg-black p-4 rounded-lg space-x-4 hover:bg-gray-700 transition"
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  {/* Item Details */}
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <p className="text-xl text-[#FF9F0D]">{item.price}</p>
                  </div>
                  <Link href={`/shop?name=${encodeURIComponent(item.name)}`}>
              {item.name}
            </Link>
                </div>
              ))}    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
