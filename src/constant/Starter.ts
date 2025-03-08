export interface MenuItem {
  name: string;
  slug:string;
  description: string;
  calories: number;
  price: number;
}

export const starters: MenuItem[] = [
  {
    name: "Garlic Bread",
    slug: "garlic-bread",
    description: "Crispy garlic bread with herbs",
    calories: 250,
    price: 5,
  },
  {
    name: "Tomato Soup",
    slug: "tomato-soup",
    description: "Rich tomato soup with basil",
    calories: 150,
    price: 7,
  },
  {
    name: "Wontons",
    slug: "wontons",
    description: "Deep-fried dumplings filled with chicken, beef, or vegetables, served with a chili or soy dipping sauce.",
    calories: 300,
    price: 6.0,
  },
  {
    name: "Spring Rolls",
    slug: "spring-rolls",
    description: "Crispy rolls filled with vegetables or spiced chicken, served with tamarind or chili sauce.",
    calories: 250,
    price: 5.0,
  },
  {
    name: "Chicken Bytes",
    slug: "chicken-bytes",
    description: "Marinated, battered, and deep-fried chicken served with spicy mayo or ketchup.",
    calories: 350,
    price: 6.0,
  },
  {
    name: "Chicken Nuggets",
    slug: "chicken-nuggets",
    description: "Boneless chicken pieces coated in breadcrumbs and fried, served with BBQ or honey mustard sauce.",
    calories: 400,
    price: 5.0,
  },
];
