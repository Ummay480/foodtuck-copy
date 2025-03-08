"use client";
import Image from "next/image";
import Navbar from "./Navbar2"; // Import the NavBar component
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white px-0">
      {/* Include the Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start px-10 lg:px-20 py-16">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-[#FF9F0D] font-greatVibes text-2xl leading-10 text-left underline underline-offset-2 decoration-[#FF9F0D] mb-4">
            It&apos;s Quick & Amusing!
          </h2>
          <h2 className="text-4xl font-bold mb-6">
            The Art of Speed <br /> Food Quality
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <Link href="/menu">
          <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-full hover:bg-yellow-600">
            See Menu
          </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/images/image-84.png"
            alt="Food Dish"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
