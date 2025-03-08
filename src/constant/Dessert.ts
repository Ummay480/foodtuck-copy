interface MenuItem {
  name: string;
  slug:string;
  description: string;
  calories: number;
  price: string;
  highlight?: boolean;
}

export const DessertItem: MenuItem[] = [
    {
      name: "Brownies",
      description: "Rich, fudgy brownies with a chocolatey delight.",
      calories: 450,
      price: "$4",
      slug:"brownies"
    },
    {
      name: "Cupcake",
      description: "Deliciously soft cupcakes topped with creamy frosting.",
      calories: 350,
      price: "$3",
       slug:"Tea Cake",
    },
    {
      name: "Tea Cake",
      description: "Light and fluffy tea cake with a hint of vanilla.",
      calories: 300,
      price: "$3",
      slug: "tea-ake"
    },
    {
      name: "Chip Cookies",
      description: "Crispy cookies filled with chocolate chips.",
      calories: 250,
      price: "$2",
      slug: "chip-cookies"
    },
    {
      name: "Chocolate Cake",
      description: "Rich and moist chocolate cake with chocolate ganache.",
      calories: 600,
      price: "$5",
      slug:"chocolate-cake",
    },
  ]