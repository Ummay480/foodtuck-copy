"use client";
import { useEffect, useState } from "react";
import { supabase } from "@lib/supabase/hooks/useSupabase"; // Make sure this path is correct
import { useParams } from "next/navigation";
import { useSupabase } from "./Products";

const Page = () => {
  const { query } = useParams(); // Extracting 'query' from the URL parameters
  const { filterData, getDataFilterData } = useSupabase(); // Correctly destructuring filterData and getDataFilterData
  
  useEffect(() => {
    if (query) {
      getDataFilterData(query.toString()); // Calling the filter function with the query
    }
  }, [query]); // Make sure the effect re-runs when 'query' changes

  // This will log filterData whenever it changes
  useEffect(() => {
    console.log(filterData); // Logs the filtered data after it has been fetched
  }, [filterData]); // Log whenever filterData changes

  return (
    <div>
      <h1>Filtered Products</h1>
      <div>
        {filterData && filterData.length > 0 ? (
          <ul>
            {filterData.map((product: any) => (
              <li key={product.id}>{product.title}</li> // Displaying filtered products
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
