// src/app/api/items/route.ts
import { NextResponse } from 'next/server';

const items = [
  {
    "name": "Naan/Kulcha with Beef Paya",
    "category": "Breakfast",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738868757/food/chicken-shawarma.jpg"
      }
    },
    "description": "Soft naan or kulcha served with tender beef paya in rich gravy.",
    "available": true
  },
  {
    "name": "2-Kabab Paratha",
    "category": "Breakfast",
    "price": 350,
    "originalPrice": 350,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738868756/food/chicken-karahi.jpg"
      }
    },
    "description": "Two juicy kebabs wrapped in soft paratha.",
    "available": true
  },
  {
    "name": "Omelette Paratha",
    "category": "Breakfast",
    "price": 300,
    "originalPrice": 300,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738868756/food/Nihari.jpg"
      }
    },
    "description": "Fluffy omelette wrapped in warm, crispy paratha.",
    "available": true
  },
  {
    "name": "Lacha Paratha",
    "category": "Breakfast",
    "price": 250,
    "originalPrice": 250,
    "tags": [],
    "image": null,
    "description": "Crispy, flaky paratha served with chutney.",
    "available": true
  },
  {
    "name": "Bran Paratha",
    "category": "Breakfast",
    "price": 250,
    "originalPrice": 250,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738868666/food/bran-paratha.jpg"
      }
    },
    "description": "Crispy, flaky paratha served with chutney.",
    "available": true
  },
  {
    "name": "Naan/Paratha with Chana",
    "category": "Breakfast",
    "price": 300,
    "originalPrice": 300,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870687/food/burger.png"
      }
    },
    "description": "Soft naan or paratha served with spiced chickpeas.",
    "available": true
  },
  {
    "name": "Halwa Poori",
    "category": "Breakfast",
    "price": 350,
    "originalPrice": 350,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870686/food/coffee-cake-half.jpg"
      }
    },
    "description": "Classic breakfast of puri, sweet halwa, and chana masala.",
    "available": true
  },
  {
    "name": "Qeema Kachori",
    "category": "Breakfast",
    "price": 300,
    "originalPrice": 300,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870686/food/chocolate-cup-cake.png"
      }
    },
    "description": "Fried kachori stuffed with flavorful minced meat.",
    "available": true
  },
  {
    "name": "Sandwich",
    "category": "Breakfast",
    "price": 250,
    "originalPrice": 250,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870686/food/sandwich.jpg"
      }
    },
    "description": "Simple and delicious sandwich with fillings of your choice.",
    "available": true
  },
  {
    "name": "Shami Kabab",
    "category": "Snacks",
    "price": 300,
    "originalPrice": 300,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870686/food/fajita-pizza.jpg"
      }
    },
    "description": "Flavorful minced meat kebabs served with naan or chutney.",
    "available": true
  },
  {
    "name": "Chicken Patties",
    "category": "Snacks",
    "price": 250,
    "originalPrice": 250,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870686/food/donuts.png"
      }
    },
    "description": "Crispy pastry filled with seasoned chicken filling.",
    "available": true
  },
  {
    "name": "Vegetable Roll",
    "category": "Snacks",
    "price": 250,
    "originalPrice": 250,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870685/food/chocolate-cup-cake-1.png"
      }
    },
    "description": "Healthy and delicious vegetable roll with a tangy sauce.",
    "available": true
  },
  {
    "name": "Aloo Samosa",
    "category": "Snacks",
    "price": 200,
    "originalPrice": 200,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870685/food/shrimps.png"
      }
    },
    "description": "Crispy samosas filled with spiced mashed potatoes.",
    "available": true
  },
  {
    "name": "Chicken Shawarma",
    "category": "Snacks",
    "price": 300,
    "originalPrice": 300,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870684/food/coconut-water.jpg"
      }
    },
    "description": "Grilled chicken wrapped in pita bread with garlic sauce.",
    "available": true
  },
  {
    "name": "Zinger with Fries",
    "category": "Snacks",
    "price": 500,
    "originalPrice": 500,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870683/food/club-sandwich.jpg"
      }
    },
    "description": "Crispy zinger burger served with fries.",
    "available": true
  },
  {
    "name": "Club Sandwich",
    "category": "Snacks",
    "price": 350,
    "originalPrice": 350,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870683/food/dates-shake.jpg"
      }
    },
    "description": "Triple-layered sandwich filled with chicken, eggs, and veggies.",
    "available": true
  },
  {
    "name": "Chicken Bites",
    "category": "Snacks",
    "price": 600,
    "originalPrice": 600,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870683/food/chicken-chrgha.png"
      }
    },
    "description": "Grilled chicken bites served with a side of vegetables.",
    "available": true
  },
  {
    "name": "Kali Daal Chawal",
    "category": "Lunch",
    "price": 350,
    "originalPrice": 350,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870682/food/daal-chawal.jpg"
      }
    },
    "description": "Rich, spicy black lentil dal served with steamed rice.",
    "available": true
  },
  {
    "name": "Chicken Tikka Macaroni",
    "category": "Lunch",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870682/food/muffins.png"
      }
    },
    "description": "Macaroni infused with tikka spices and grilled chicken chunks.",
    "available": true
  },
  {
    "name": "Tikka Macaroni",
    "category": "Lunch",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870682/food/cup-cake.jpg"
      }
    },
    "description": "Macaroni infused with tikka spices and grilled chicken chunks.",
    "available": true
  },
  {
    "name": "Chicken Achari Macaroni",
    "category": "Lunch",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870682/food/muffins.png"
      }
    },
    "description": "Macaroni cooked with tangy achar masala and chicken.",
    "available": true
  },
  {
    "name": "Achari Macaroni",
    "category": "Lunch",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870682/food/cup-cake.jpg"
      }
    },
    "description": "Macaroni cooked with tangy achar masala and chicken.",
    "available": true
  },
  {
    "name": "Muter Pulao",
    "category": "Lunch",
    "price": 350,
    "originalPrice": 350,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870681/food/pulao.jpg"
      }
    },
    "description": "Flavored rice cooked with green peas and aromatic spices.",
    "available": true
  },
  {
    "name": "Chicken Nihari",
    "category": "Dinner",
    "price": 500,
    "originalPrice": 500,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870681/food/nihari.jpg"
      }
    },
    "description": "Slow-cooked chicken in a rich, flavorful curry.",
    "available": true
  },
  {
    "name": "Chicken Karahi",
    "category": "Dinner",
    "price": 500,
    "originalPrice": 500,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870681/food/karahi.jpg"
      }
    },
    "description": "Traditional chicken curry cooked in a wok with aromatic spices.",
    "available": true
  },
  {
    "name": "Chicken Tikka",
    "category": "Dinner",
    "price": 400,
    "originalPrice": 400,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870681/food/tikka.jpg"
      }
    },
    "description": "Grilled chicken marinated with spices, served with naan.",
    "available": true
  },
  {
    "name": "Behari Kabab",
    "category": "Dinner",
    "price": 450,
    "originalPrice": 450,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870680/food/bihari-kabab.jpg"
      }
    },
    "description": "Tender, spiced beef kebabs grilled to perfection.",
    "available": true
  },
  {
    "name": "Reshmi Kabab",
    "category": "Dinner",
    "price": 450,
    "originalPrice": 450,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870680/food/reshmi-kabab.jpg"
      }
    },
    "description": "Succulent chicken kebabs marinated in cream and spices.",
    "available": true
  },
  {
    "name": "Chicken Malai Boti",
    "category": "Dinner",
    "price": 450,
    "originalPrice": 450,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870680/food/malai-boti.jpg"
      }
    },
    "description": "Chicken pieces marinated in cream and spices, grilled to perfection.",
    "available": true
  },
  {
    "name": "Chicken Tikka Pizza",
    "category": "Dinner",
    "price": 600,
    "originalPrice": 600,
    "tags": [],
    "image": {
      "asset": {
        "url": "https://res.cloudinary.com/dhr0kjbem/image/upload/v1738870680/food/pizza.png"
      }
    },
    "description": "Tikka-flavored chicken on a cheesy pizza crust.",
    "available": true
  }
]


export async function GET() {
  return NextResponse.json({ items });
}
