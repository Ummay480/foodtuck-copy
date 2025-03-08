import React from 'react';
import Image from 'next/image';
import { CartItemProps } from '@/types/cart';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/slices/cartSlice'; // Adjust path as needed

interface ProductCardProps {
  product: CartItemProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch Redux action to add product to cart
  };

  return (
    <div className="product-card border p-4 rounded shadow relative group">
      <Image
        src={product.image?.string || product.image?.asset?.url || "/default-image.jpg"}
        alt={product.name}
        width={300}
        height={160}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>

      {/* Checkout Button */}
      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-4 py-2 rounded mt-2 hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
