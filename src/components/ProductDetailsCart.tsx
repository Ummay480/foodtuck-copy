// // src/components/Product/ProductDetails.tsx
// 'use client';

// import React from 'react';
// import { CartItem } from '@/types/react-use-cart'; // Type definition for cart item
// import CartButton from '@/components/Cart/CartButton'; // Import the CartButton component

// interface ProductDetailsProps {
//   product: CartItem;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//       <CartButton product={product} /> {/* Pass the product here */}
//     </div>
//   );
// };

// export default ProductDetails;
