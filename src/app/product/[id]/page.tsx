"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { createClient } from "@sanity/client";
import { PiHandbag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import { FaStar } from "react-icons/fa";
import CartItem from "@/components/CartItemComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = createClient({
  projectId: "yfaabr9s",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-02",
});

type Food = {
  id: string;
  quantity: number;
  item: string;
  name: string;
  price: number;
  rating: number;
  tags: string[];
  imageUrl: string;
  description: string;
};

type Product = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [food, setFood] = useState<Food | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [showReview, setShowReview] = useState(false); // Toggle for reviews

  useEffect(() => {
    async function fetchFood() {
      const query = `*[_type == "food" && _id == "${id}"][0]{
        _id,
        item,
        quantity,
        name,
        "price": price + 0,
        rating,
        tags,
        description,
        "imageUrl": image.asset->url
      }`;
      const data = await client.fetch(query);
      if (data) {
        setFood({
          id: data._id,
          quantity: data.quantity,
          item: data.item,
          name: data.name,
          price: data.price,
          rating: data.rating || 0,
          tags: data.tags,
          description: data.description,
          imageUrl: data.imageUrl,
        });
      }
    }

    async function fetchSimilarProducts() {
      const query = `*[_type == "food" && _id != "${id}"][0...5]{
        _id,
        name,
        price,
        rating,
        "imageUrl": image.asset->url
      }`;
      const data = await client.fetch(query);
      setSimilarProducts(data);
    }

    fetchFood();
    fetchSimilarProducts();
  }, [id]);

  if (!food) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...food, quantity }));
    toast.success(`${food.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const toggleReview = () => setShowReview((prev) => !prev);

  let stars = [...Array(5)].map((_, i) => <FaStar key={i} className="text-[#FF9F0D] border-black" />);

  return (
    <div>
      <NavBar />
      <HeroBanner title={food.name} />
      <ToastContainer />
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image and Thumbnails */}
          <div className="relative ml-20">
            {/* Main Product Image */}
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-full rounded-lg"
            />

            {/* Small Thumbnails to the Left */}
            <div className="absolute top-0 left-0 flex flex-col gap-2 -ml-20 mr-10">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={food.imageUrl}
                  alt={`Product ${i + 1}`}
                  className="w-16 h-16"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              In Stock
            </span>
            <h1 className="text-3xl font-bold mt-2">{food.name}</h1>
            <p className="mt-4 text-gray-600">
              {food.description ||
                "Deliciously crafted with the finest ingredients, this dish offers an irresistible taste that satisfies your cravings. Perfect for any meal, it's a blend of flavor and freshness!"}
            </p>
            <hr className="mt-4 border-gray-300" />
            <p className="text-xl font-bold text-gray-700 mt-2">${food.price}</p>
            <div className="flex items-center space-x-2">
              <p className="flex justify-center items-center text-[#FF9F0D] border-black">{stars}</p>
              <p className="text-gray-600 text-sm">{food.rating} | 0.5 rating | 24 Reviews</p>
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center mt-6">
              <button
                className="border-2 border-gray-300 px-4 py-1 text-lg font-bold"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="text-lg font-semibold border-2 border-gray-300 px-4 py-1 rounded-none text-center">
                {quantity}
              </span>
              <button
                className="border-2 border-gray-300 px-4 py-1 text-lg font-bold"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
              <Link href="/cart">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center px-5 ml-4 py-2 bg-[#FF9F0D] text-white font-normal shadow-md hover:bg-yellow-300 hover:text-black transition-all"
                >
                  <PiHandbag className="mr-2" size={20} />
                  Add to Cart
                </button>
              </Link>
            </div>

            <hr className="mt-6 border-gray-300" />

            {/* Add to Wishlist Button */}
            <button className="text-gray-500 text-xs mt-6 flex items-center gap-1">
              <CiHeart className="text-lg" /> Add to Wishlist
            </button>

            <p className="text-gray-500 text-xs mt-2">Category: Pizza</p>
            <p className="text-gray-500 text-xs mt-2">Tags: Our Shop</p>
            <p className="text-gray-500 text-xs mt-2 flex items-center gap-2">
              Share:
              <FaInstagram className="text-lg text-gray-600 cursor-pointer hover:text-pink-500" />
              <FaFacebook className="text-lg text-gray-600 cursor-pointer hover:text-blue-500" />
              <FaGlobe className="text-lg text-gray-600 cursor-pointer hover:text-green-500" />
            </p>
          </div>
        </div>

        {/* Description or Review Toggle */}
        <div className="mt-6">
          <div className="flex justify-start mb-8 space-x-6 text-sm md:text-base">
            <button
              className={`${
                showReview
                  ? "text-white bg-[#FF9F0D] border-b-2 border-[#FF9F0D] p-2 transition"
                  : "text-gray-600 p-2 hover:bg-[#FF9F0D] hover:text-white transition"
              }`}
              onClick={toggleReview}
            >
              Description
            </button>
            <button
              className={`${
                !showReview
                  ? "text-white bg-[#FF9F0D] border-b-2 border-[#FF9F0D] transition p-2"
                  : "text-gray-600 p-2 hover:bg-[#FF9F0D] hover:text-white transition"
              }`}
              onClick={toggleReview}
            >
              Reviews (5) {/* Replace 5 with dynamic count */}
            </button>
          </div>

          <div className="text-gray-600 mt-2">
            {showReview ? (
              <div>
                <strong>Reviews:</strong>
                <div className="mt-4">
                  <p><strong>Customer Review 1:</strong> "This product has been amazing! Highly recommend it."</p>
                  <p><strong>Customer Review 2:</strong> "Great quality and fast delivery."</p>
                  <p><strong>Customer Review 3:</strong> "Very satisfied with the purchase, will buy again."</p>
                  <p><strong>Customer Review 4:</strong> "Exactly as described. Worth the price!"</p>
                  <p><strong>Customer Review 5:</strong> "Good value for money, but it could be better with more variety."</p>
                </div>
              </div>
            ) : (
              <div>
                <strong>Product Description:</strong>
                <p className="mt-2">This is a detailed description of the product, highlighting its features, usage, and other essential information.</p>
                <br />
                <strong>Ingredients:</strong>
                <ul className="list-disc ml-4 mt-2">
                  <li>Fresh Organic Tomatoes</li>
                  <li>Olive Oil</li>
                  <li>Garlic</li>
                  <li>Basil</li>
                  <li>Sea Salt</li>
                  <li>Fresh Lemon Juice</li>
                </ul>
                <br />
                <strong>Recipe:</strong>
                <ol className="list-decimal ml-4 mt-2">
                  <li>Heat olive oil in a pan.</li>
                  <li>Add garlic and sauté until fragrant.</li>
                  <li>Add fresh tomatoes and cook for 10 minutes.</li>
                  <li>Stir in fresh baszil and salt to taste.</li>
                  <li>Serve with a drizzle of lemon juice on top.</li>
                </ol>
                <br />
                <strong>Benefits:</strong>
                <ul className="list-disc ml-4 mt-2">
                  <li>Fresh ingredients for better taste.</li>
                  <li>Perfect for a quick and healthy meal.</li>
                  <li>Packed with essential nutrients.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
            {similarProducts.slice(0, 4).map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`${
                        index < product.rating ? "fas" : "far"
                      } faStar text-yellow-400`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}