// "use client";
// import React, { useState } from "react";
// import Image from "next/image";


// interface Product {
//   title: string;
//   price: string;
//   image: string;
  
// }

// const products: Product[] = [
//   { title: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/images/image-7.png" },
//   { title: "Granite dining table", price: "Rs. 25,000.00", image: "/images/image-2.png" },
//   { title: "Outdoor bar table", price: "Rs. 25,000.00", image: "/images/image-9.png" },
//   { title: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/images/image-8.png" },
//   { title: "Grain coffee table", price: "Rs. 15,000.00", image: "/images/image-6.png" },
//   { title: "Kent coffee table", price: "Rs. 225,000.00", image: "/images/image-5.png" },
//   { title: "Round coffee table", price: "Rs. 251,000.00", image: "/images/image-4.png" },
//   { title: "Reclaimed teak coffee table", price: "Rs. 25,200.00", image: "/images/image-22.png" },
//   { title: "Plain console", price: "Rs. 258,200.00", image: "/images/image-21.png" },
//   { title: "Reclaimed teak Sideboard", price: "Rs. 20,000.00", image: "/images/image-3.png" },
//   { title: "Bella chair and table", price: "Rs. 100,000.00", image: "/images/image-18.png" },
// ];

// const Products: React.FC = () => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <div className="p-6 bg-gray-50">
//       {/* Product List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               className="w-full h-40 object-cover rounded-lg"
//             />
//             <h3 className="mt-4 font-semibold text-lg">{product.title}</h3>
//             <p className="text-gray-500">{product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Sidebar */}
//       <div className="mt-10">
//         <h2 className="text-xl font-bold">Cart ({cart.length})</h2>
//         {cart.length === 0 ? (
//           <p className="text-gray-500 mt-2">Your cart is empty.</p>
//         ) : (
//           <ul className="mt-4 space-y-2">
//             {cart.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center justify-between border-b pb-2"
//               >
//                 <span>{item.title}</span>
//                 <span className="text-gray-600">{item.price}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;
