import { useState } from "react";
import { supabase } from "../products"; // Ensure the path to supabase is correct

// Define the type for products (adjust based on your data structure)
interface Product {
  id: number;
  title: string;
  [key: string]: any; // Add additional fields as needed
}

export const useSupabase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterData, setFilterData] = useState<Product[]>([]);

  // Fetch all products from Supabase
  const getDataFromSupabase = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (data) {
        setProducts(data);
        console.log("Fetched Products:", data);
      }
      if (error) {
        console.error("Error fetching products:", error);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // Fetch filtered products based on a query
  const getFilteredData = async (query: string) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .ilike("title", `%${query}%`); // Use wildcard `%` for partial matches
      if (data) {
        setFilterData(data);
        console.log("Filtered Products:", data);
      }
      if (error) {
        console.error("Error fetching filtered products:", error);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return {
    products,
    filterData,
    getDataFromSupabase,
    getFilteredData,
  };
};
