import Navbar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Sidebar from "@/components/Sidebar2";
import Image from "next/image";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  comments: number;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Reasons To Do A Digital Detox Challenge",
    description:
      "At vero eos et accusamus et justo duo dolores et ea rebum. Sit dolore magna aliquyam erat.",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 3,
    image: "/images/image-5.png",
  },
  {
    id: 2,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    description:
      "At vero eos et accusamus et justo duo dolores et ea rebum. Sit dolore magna aliquyam erat.",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 6,
    image: "/images/image-98.png",
  },
  {
    id: 3,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    description:
      "At vero eos et accusamus et justo duo dolores et ea rebum. Sit dolore magna aliquyam erat.",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 4,
    image: "/images/image-44.jpeg",
  },
  {
    id: 4,
    title: "My Favorite Easy Black Pizza Toast Recipe",
    description:
      "At vero eos et accusamus et justo duo dolores et ea rebum. Sit dolore magna aliquyam erat.",
    date: "Feb 14, 2022",
    author: "Admin",
    comments: 2,
    image: "/images/image-42.jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroBanner title="BLOG" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8">Blog List</h1>
        <div className="flex flex-col md:flex-row">
          {/* Main Blog Section */}
          <div className="w-full md:w-3/4 space-y-8">
            {blogPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="rounded-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="w-90 h-80 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="mr-4">{post.date}</span>
                    <span className="mr-4">{post.comments} Comments</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button
                    className="text-orange-500 font-semibold"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <Sidebar blogPosts={blogPosts} />
        </div>
      </div>
    </div>
  );
}
