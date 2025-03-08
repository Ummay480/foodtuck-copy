"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
};

const BlogCards: React.FC<BlogCardProps> = ({ image, date, title, description }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-yellow-500 text-sm">{date}</p>
        <h3 className="text-lg font-semibold my-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link href="#" className="text-yellow-500 text-sm font-semibold">
            Learn More
          </Link>
          <div className="flex space-x-2">
            <button className="text-yellow-500">
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button className="text-yellow-500">
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
