// "use client";
// import { useEffect, useState } from "react";
// import { supabase } from "@lib/supabase/hooks/useSupabase"; // Make sure this path is correct
// import { useParams } from "next/navigation";
// import { useSupabase } from "./Products";
// import Products from "@/components/AddToCartContainer";

// const Page = () => {
//   const { query } = useParams(); // Extracting 'query' from the URL parameters
//   const { filterData, getDataFromSupabase } = useSupabase(); // Correctly destructuring filterData and getDataFilterData
  
//   useEffect(() => {
//     getDataFromSupabase()
//   })
//   console.log(Products)

//   return {
//       getDataFilterData(query.toString()); // Calling the filter function with the query
//     }
//   }, 
// export default Page;
