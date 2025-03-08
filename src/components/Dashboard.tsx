"use client "
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.orders.list);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold">FoodTuck Dashboard</h2>
        <ul>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Orders</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Revenue</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Users</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome, {user?.name || "Guest"}!</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Order Stats */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl font-bold">{orders.length}</p>
          </div>
          {/* Revenue Stats */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p className="text-2xl font-bold">$5,230</p>
          </div>
          {/* Users */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold">Users Registered</h3>
            <p className="text-2xl font-bold">1,023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
