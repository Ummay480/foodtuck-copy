import { GetStaticProps } from 'next'; 
import React from 'react';
import Image from 'next/image';


type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};

type Category = {
  id: number;
  name: string;
  count: number;
};

const BlogDetail = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{post.date}</p>
        <p className="text-gray-800">{post.description}</p>
      </div>
    </div>
  );
};

export default function BlogPage({ post, categories }: { post: BlogPost; categories: Category[] }) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <main className="w-full md:w-3/4">
          <BlogDetail post={post} />
        </main>
        <aside className="w-full md:w-1/4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id} className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="bg-gray-300 rounded-full px-2 py-1 text-sm">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const post: BlogPost = {
    id: 1,
    title: "Sample Blog Post",
    description: "This is a sample blog post description.",
    image: "/images/sample.jpg",
    date: "January 1, 2025",
  };

  const categories: Category[] = [
 
    { id: 2, name: "Health", count: 5 },
    { id: 3, name: "Lifestyle", count: 7 },
  ];

  return {
    props: {
      post,
      categories,
    },
  };
};
