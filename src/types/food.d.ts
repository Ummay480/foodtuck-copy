// src/types/food.ts

// Base Food Item Interface
export interface FoodItem {
  id: string;
  item: string;
  name: string;
  category: string;
  description: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  stock: number;
  price: number;
  quantity?: number;
  rating?: number; // Optional, from Food interface
  tags?: string[]; // Optional, from Food interface
  imageUrl?: string; // Optional, from Food interface
}

// Food Interface (extends FoodItem)
export interface Food extends FoodItem {
  rating: number;
  tags: string[];
  imageUrl: string;
}