"use client";

import { AiFillDelete } from "react-icons/ai";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus } from "lucide-react";
import { addToCart, removeFromCart, updateQuantity } from "@/lib/redux/slices/cartSlice";

function Cartpage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);

  const cartItem = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div>
      {cartItem.length >= 1 &&
        cartItem.map((items: any, i: any) => {
          return (
            <div key={i} className="flex lg:w-[650px] p-4 rounded-[16px] border justify-between">
              <div className="flex">
                <Image src={items.image[0]} alt={items.title} width={100} height={100} />
                <div className="flex flex-col ml-3">
                  <span>Size:{items.size[0]}</span>
                  <span>Color:{items.color[0]}</span>
                  <p className="font-bold" key={i}>
                    ${items.discount > 0
                      ? (items.price - (items.price * items.discount) / 100) * items.qty
                      : items.price * items.qty}
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Delete Button */}
                <button onClick={() => dispatch(removeFromCart(items.uuid))}>
                  <AiFillDelete className="text-red-500 cursor-pointer absolute right-2 top-0" />
                </button>
                {/* Quantity Controls */}
                <div className='flex justify-start items-center pt-10'>
                  <button onClick={() => dispatch(updateQuantity(items))} className='w-10'>
                    <Minus />
                  </button>
                  <span className='w-4'>{items.qty}</span>
                  <button onClick={() => dispatch(addToCart(items))} className='w-10'>
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cartpage;