import { useState } from "react";
import { supabase } from "../products"; // Make sure you have this supabase client properly set up

export const useSupabase = () => {
  const [products, setProducts] = useState<any[]>([]); // Correctly initializing state as an array
  const [filterData, setFilterData] = useState<any>([]); // Correctly initializing filterData as an array

  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from('product').select('*'); // Use '*' to select all columns
    if (data) {
      setProducts(data);
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const getDataFilterData = async (query: string) => { // Taking query as parameter
    let { data, error } = await supabase.from('product').select('*').ilike('title', `%${query}%`); // Use `ilike` for case-insensitive matching
    if (data) {
      setFilterData(data); // Store the filtered data separately
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return {
    products,          // Returning products state
    getDataFromSupabase, // Returning function to fetch all products
    filterData,        // Returning filtered data state
    getDataFilterData, // Returning function to filter products by query
  };
};
