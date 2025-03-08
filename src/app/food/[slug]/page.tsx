import { notFound } from "next/navigation";
import Image from "next/image";

interface food {
  name: string;
  bio: string;
  image: string;
  slug: string;
}

const getfood = async (slug: string): Promise<food | null> => {
  try {
    const res = await fetch(`https://food-xtn5-lac.vercel.app/api/food's?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: food[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching food:", error);
    return null;
  }
};

const foodPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const food = await getfood(slug);

  if (!food) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1 className="text-3xl font-bold">{food.name}</h1>
      <Image
        src={food.image || "/placeholder.jpg"}
        alt={food.name || "food image"}
        width={500}
        height={350}
        className="rounded-lg object-cover"
      />
      <p className="text-md text-gray-600 mt-6">{food.bio}</p>
    </div>
  );
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const foods: Array<{ slug: { current: string } }> = await fetch(
    "https://food-ruddy-rho.vercel.app/api/food'"
  ).then((res) => res.json());

  return foods.map((food) => ({ slug: food.slug.current }));
}

export default foodPage;