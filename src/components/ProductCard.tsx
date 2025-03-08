'use client';

import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/slices/cartSlice';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
}

export default function ProductCard({ id, name, price }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1 }));
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}