"use client"
import React from "react";

const SupportSection = () => (
    <section className="bg-black text-gray-300 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Still Need Our Support?</h2>

        <p className="text-gray-400 mb-6">Don &apos t wait make a smart & logical quote here. It &apos s pretty easy.</p>
        <p className="text-gray-400 mb-6">Don &lsquo t wait&#39; make a smart & logical quote here. It&lsquo s pretty easy.</p>

        <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
  
  export default SupportSection;
  
