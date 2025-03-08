"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface HeroBannerProps {
  title: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title }) => (
  <section
    className="relative h-[350px] flex items-center justify-center"
    style={{
      backgroundImage: "url('/images/image-103.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay for opacity */}
    <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

    {/* Text Content */}
    <div className="text-center relative z-10">
      <h1 className="text-4xl font-bold text-white mt-6">{title}</h1>
      <p className="text-white text-2xl font-semibold mt-6 flex items-center justify-center gap-2">
        <Link href="/">Home</Link>
        <IoIosArrowForward />
        <span>{title}</span>
      </p>
    </div>
  </section>
);

export default HeroBanner;
