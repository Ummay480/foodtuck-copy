"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the Cart Item Type
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the Cart Context Type
interface CartContextType {
  cartItems: CartItem[];
  total: number;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
}

// Define Props for CartProvider
interface CartProviderProps {
  children: ReactNode; // Ensures children can be React elements
}

// Create the Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the Provider Component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotal((prevTotal) => prevTotal + item.price * item.quantity);
  };

  const removeItemFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotal((prevTotal) => prevTotal - (cartItems.find((item) => item.id === id)?.price || 0));
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use the Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
