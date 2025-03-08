"use client"
export interface MenuItem {
  name: string;
  description: string;
  calories: number;
  price: number;
  highlight?: boolean;
  slug: string; // Added slug field
}

export const menuItems: MenuItem[] = [
  {
    name: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    calories: 560,
    price: 32,
    slug: "alder-grilled-chinook-salmon"
  },
  {
    name: "Berries and creme tart",
    description: "Gorgonzola, ricotta, mozzarella, taleggio",
    calories: 700,
    price: 43,
    highlight: true,
    slug: "berries-and-creme-tart"
  },
  {
    name: "Tormentoso Bush Pizza Pintoage",
    description: "Ground cumin, avocados, peeled and cubed",
    calories: 1000,
    price: 14,
    slug: "tormentoso-bush-pizza-pintoage"
  },
  {
    name: "Spicy Vegan Potato Curry",
    description: "Spreadable cream cheese, crumbled blue cheese",
    calories: 560,
    price: 35,
    slug: "spicy-vegan-potato-curry"
  }
];
