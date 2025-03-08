"use client";
import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="container mx-auto text-center">
        {/* Text Section */}
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. <br/>Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>

        {/* Background Image */}
        <div
          className="relative mx-auto mb-8"
          style={{
            backgroundImage: "url('/images/image-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            width: "80%",
            maxWidth: "800px",
          }}
        >
          {/* Transparent Overlay (optional can remove) */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Icon 1 */}
          <div className="flex flex-col items-center max-w-sm">
            <Image
              src="/images/image-36.png"
              alt="Best Chef"
              className="w-12 h-16 mb-4"
              width={48} // Add width to avoid Next.js warnings
              height={64} // Add height to avoid Next.js warnings
            />
            <h3 className="text-xl font-semibold mb-2">Best Chef</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center max-w-sm">
            <Image
              src="/images/image-81.png"
              alt="120 Item Food"
              className="w-12 h-16 mb-4"
              width={48} // Add width to avoid Next.js warnings
              height={64} // Add height to avoid Next.js warnings
            />
            <h3 className="text-xl font-semibold mb-2">120 Item Food</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
            </p>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center max-w-sm">
            <Image
              src="/images/image-18.png"
              alt="Clean Environment"
              className="w-12 h-16 mb-4"
              width={48} // Add width to avoid Next.js warnings
              height={64} // Add height to avoid Next.js warnings
            />
            <h3 className="text-xl font-semibold mb-2">Clean Environment</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
