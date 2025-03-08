import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-10-16", // Use the latest API version
  useCdn: true, // Enable CDN for faster responses
});

export const getFoodItems = async (): Promise<Array<{
  id: string;
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
}>> => {
  const query = `*[_type == "foodItem"]{
    id,
    name,
    category,
    description,
    stock,
    price,
    image {
      asset -> {
        url
      }
    }
  }`;
  const items = await client.fetch(query);
  return items;
};