"use client";
import React from "react";
import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/image-50.jpeg", // Replace with actual paths
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    },
    {
      id: 2,
      image: "/images/image-98.png", // Replace with actual paths
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
    {
      id: 3,
      image: "/images/image-52.jpeg", // Replace with actual paths
      date: "10 February 2022",
      title: "Curabitur Rutrum Velit Ac Congue Malesuada",
    },
  ];

  return (
    <section className="py-12 bg-black text-white px-8 md:px-32 -mt-40">
      <div className="text-center">
        <h4 className="text-[#FF9F0D] font-greatVibes text-lg font-normal">
          Blog Post
        </h4>
        <h2 className="text-2xl font-bold mt-">
          La<span className="text-[#FF9F0D] ">test News & Blog</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border-white border-2 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover"
              width={300}
              height={200}
            />
            <div className="p-4">
              <p className="text-[#FF9F0D] text-sm">{blog.date}</p>
              <h3 className="font-semibold text-md mt-2">{blog.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="text-sm text-[#FF9F0D] font-medium hover:underline"
                >
                  Learn More
                </a>
                <div className="flex items-center space-x-2">
                  <button className="hover:text-[#FF9F0D]">
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button className="hover:text-[#FF9F0D]">
                    <i className="fas fa-comments"></i>
                  </button>
                  <button className="hover:text-[#FF9F0D]">
                    <i className="fas fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
