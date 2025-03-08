"use client"; // Ensures client-side rendering

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import ChefCard from "@/components/ChefCard"; // Assuming the ChefCard component is correctly named and located


// Initialie Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

// Define the chef type for TypeScript
type Chef = {
  _id: string;
  name: string;
  position?: string; // Marked as optional
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
};

const Chef: React.FC = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChefs = async () => {
      const query = `*[_type == "chef"]{
        _id,
        name,
        position,
        specialty,
        "imageUrl": image.asset->url,
   
     }`;

      try {
        const data = await client.fetch(query);
        setChefs(data);
      } catch (error) {
        console.error("Failed to fetch chefs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading chefs...</div>;
  }

  return (
    <div className="container mx-auto p-4">
       
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <ChefCard
            key={chef._id}
            imageUrl={chef.imageUrl}
            name={chef.name}
            position={chef.position || "Position not specified"} // Fallback text
            specialty={chef.specialty}
            description={chef.description}
                    />
        ))}
      </div>
    </div>
  );
};

export default Chef;
