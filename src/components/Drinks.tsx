"use client";
import { Coffee } from "lucide-react";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";  
import { DrinksItem } from "@/constant/Drink";

export default function Drink() {
  return (
    <section className="bg-white w-full px-4 py-6 sm:py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-10">
        
        {/* Drink Menu Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="-mt-24 lm-20"> 
              <Coffee className="text-[#FF9F0D]" size={20} />
            </div>
            <div className="-ml-7 pt-4">
              <Heading text="Drink" />
            </div>
          </div>

          <div className="space-y-4"> 
            {DrinksItem.map((item, index) => (
              <Link 
                key={index} 
                href={`/shop/${item.slug}`} 
                className="block border-b border-dashed border-gray-300 pb-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-base sm:text-lg font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                <p className="text-xs text-gray-500">{item.calories} CAL</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <Image
            src="/images/image-110.png"
            alt="Drinks image"
            width={448}
            height={448}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
