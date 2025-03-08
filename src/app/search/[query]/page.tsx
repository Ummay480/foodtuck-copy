"use client";

import { useEffect, useState } from "react";
import { supabase } from "@lib/supabase/hooks/useSupabase"; // Ensure the path is correct
import { useParams } from "next/navigation";
import { useSupabase } from "./products";

const Page = () => {
  const { query } = useParams(); // Extracting 'query' from the URL parameters
  const { products, getDataFromSupabase } = useSupabase(); // Correctly destructuring products and getDataFromSupabase
  
  useEffect(() => {
    if (query) {
      getDataFromSupabase(); // Call the function when query exists
    }
  }, [query, getDataFromSupabase]); // Adding dependencies to avoid stale closures

  useEffect(() => {
    console.log(products); // Log products whenever they change
  }, [products]);

  return (
    <div>
     {query}
          </div>
        
  );
};

export default Page;
