'use client';

import { useState } from 'react';

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (items: any[]) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { id } = await response.json();
      window.location.href = `https://checkout.stripe.com/pay/${id}`;
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCheckout, isLoading };
}