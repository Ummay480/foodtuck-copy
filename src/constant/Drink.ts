interface MenuItem {
  name: string;
  slug:string;
  description: string;
  calories: number;
  price: string;
  highlight?: boolean;
}

export const DrinksItem: MenuItem[] = [
  {
    name: "Coconut Water",
    slug: "coconut-water",
    description: "Fresh and refreshing coconut water, perfect for hydration.",
    price: "$3",
    calories: 50,
  },
  {
    name: "Orange Juice",
    slug: "orange-juice",
    description: "Freshly squeezed orange juice.",
    price: "$2",
    calories: 100,
  },
  {
    name: "Grapefruit Juice",
    slug: "grapefruit-juice",
    description: "Tangy and refreshing grapefruit juice.",
    price: "$2",
    calories: 90,
  },
  {
    name: "Apple Juice",
    slug: "apple-juice",
    description: "Fresh and sweet apple juice.",
    price: "$2",
    calories: 95,
  },
  {
    name: "Melon Shake",
    slug: "melon-shake",
    description: "Refreshing melon shake with a hint of sweetness.",
    price: "$3",
    calories: 220,
  },
];
