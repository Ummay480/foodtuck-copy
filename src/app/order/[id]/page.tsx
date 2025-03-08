"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface OrderDetails {
  id: string;
  customerName: string;
  email: string;
  address: string;
  status: string;
  items: OrderItem[];
  totalAmount: number;
  createdAt: string;
}

const OrderDetailsPage: FC = () => {
  const router = useRouter();
  const { id } = router.query; // Dynamic order ID from the URL
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const orders = useSelector((state: RootState) => state.orders?.items || []);


  useEffect(() => {
    if (typeof id === "string" && orders.length) {
      const order = orders.find((order: OrderDetails) => order.id === id);
      if (order) {
        setOrderDetails(order);
      } else {
        setOrderDetails(null);
      }
    }
  }, [id, orders]);

  if (!orderDetails) {
    return (
      <div className="container">
        <p className="text-red-500">Order not found.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <p><strong>Name:</strong> {orderDetails.customerName}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Order Information</h2>
        <p><strong>Order ID:</strong> {orderDetails.id}</p>
        <p><strong>Status:</strong> {orderDetails.status}</p>
        <p><strong>Created At:</strong> {new Date(orderDetails.createdAt).toLocaleString()}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Ordered Items</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.items.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2">${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xl font-semibold">
        <p><strong>Total Amount:</strong> ${orderDetails.totalAmount.toFixed(2)}</p>
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => router.push("/order")}
        >
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;