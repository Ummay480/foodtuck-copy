"use client"

import MainCours from "@/components/MainCourse"

interface MenuItem {
    name: string
    slug:string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
  
  export const MainCoursItem: MenuItem[] = [
    {
      name: "Optic Big Breakfast Combo Menu",
      slug: "optic-big-breakfast-combo",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      slug: "cashew-chicken-stir-fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: "Vegetables & Green Salad",
      slug: "vegetables-green-salad",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Spicy Vegan Potato Curry",
      slug: "spicy-vegan-potato-curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ];
  
  export default MainCours;
  