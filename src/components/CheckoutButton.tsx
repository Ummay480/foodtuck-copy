"use client"
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    const session = await response.json();
    stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return <button onClick={handleCheckout} className="bg-orange-400 text-white px-4 py-2">Checkout</button>;
};

export default CheckoutButton;
