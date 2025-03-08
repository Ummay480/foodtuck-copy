import { notFound } from "next/navigation";
import Image from "next/image";

interface Chef {
  name: string;
  bio: string;
  image: string;
  slug: string;
}

const getChef = async (slug: string): Promise<Chef | null> => {
  try {
    const res = await fetch(`https://sanity-nextjs-rouge.vercel.app/api/chefs?slug=${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data: Chef[] = await res.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching chef:", error);
    return null;
  }
};

const ChefPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const chef = await getChef(slug);

  if (!chef) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1 className="text-3xl font-bold">{chef.name}</h1>
      <Image
        src={chef.image || "/placeholder.jpg"}
        alt={chef.name || "Chef image"}
        width={500}
        height={350}
        className="rounded-lg object-cover"
      />
      <p className="text-md text-gray-600 mt-6">{chef.bio}</p>
    </div>
  );
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const chefs: Array<{ slug: { current: string } }> = await fetch(
    "https://sanity-nextjs-rouge.vercel.app/api/chefs"
  ).then((res) => res.json());

  return chefs.map((chef) => ({ slug: chef.slug.current }));
}

export default ChefPage;