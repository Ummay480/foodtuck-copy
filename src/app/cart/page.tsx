"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cartpage from './cartpage';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: number;
  title: string;
  image?: string[];
  slug: string;
  price: number;
  size: string[];
  color: string[];
  qty: number;
  discount: number;
  uuid: string | number | undefined;
}

function Cart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);

  // Retrieve cart from Redux store and ensure it's an array
  const cartArray: CartItem[] = useSelector(
    (state: { cart?: CartItem[] }) => Array.isArray(state.cart) ? state.cart : []
  );
  
  console.log("cartArray:", cartArray); // Debugging log
  
  const total = Array.isArray(cartArray)
    ? cartArray.reduce((total: number, item: CartItem) => {
        const discountedPrice = item.discount > 0
          ? item.price - (item.price * item.discount) / 100
          : item.price;
        return total + discountedPrice * item.qty;
      }, 0)
    : 0;
  


  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className='mt-24 flex flex-col lg:flex-row justify-around items-center lg:items-start'>
      <Cartpage />
      {/* Order Summary */}
      <div className="bg-white p-4 w-[90%] lg:w-[500px] border rounded-[20px] mt-5 lg:mt-0">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Discount (-20%)</p>
            <p>-${0}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>$0</p>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
            <Button className="w-[100px] rounded-[20px]">Apply</Button>
          </div>
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;