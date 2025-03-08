import { notFound } from "next/navigation";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Link from "next/link";

// Initialize Sanity client
const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

// Define the product type
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  imageUrl: string;
  similarProducts: Product[];
};

// Fetch all products
const getProducts = async (): Promise<Product[]> => {
  try {
    const query = `*[_type == "food"]{
      _id,
      name,
      description,
      price,
      rating,
      "reviews": count(*[_type == "reviews" && food._ref == ^._id]),
      category,
      tags,
      "imageUrl": image.asset->url
    }`;

    const products = await client.fetch(query);
    return products.map(product => ({ ...product, id: product._id }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// **Shop Component**
export default async function Shop() {
  const products = await getProducts();

  if (!products.length) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <h3 className="text-lg font-semibold mt-2">${product.price}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">({product.reviews} Reviews)</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button className="px-3 py-2 bg-gray-200 rounded-md">-</button>
              <span>1</span>
              <button className="px-3 py-2 bg-gray-200 rounded-md">+</button>
              <button className="flex items-center bg-orange-500 text-white px-5 py-2 rounded-md">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
            <div className="flex gap-5 mt-4">
              <button className="flex items-center text-gray-700">
                <FaHeart className="mr-2" /> Add to Wishlist
              </button>
              <button className="flex items-center text-gray-700">Compare</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}