// components/Partners.tsx
import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <section className=" mx-auto flex flex-col items-center bg-white">
      <h2 className="text-gray-700 text-lg font-semibold tracking-wide mb-4">Partners & Clients</h2>
      <p className="text-gray-800 text-2xl font-bold mb-6">We work with the best people</p>
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/images/image-7.png"
          alt="Restaurant Logo"
          width={150}
          height={150}
          className="opacity-100"
        />
        <Image
          src="/images/image-8.png"
          alt="Bakery Logo"
          width={150}
          height={150}
          className="opacity-100"
        />
        <Image
          src="/images/image-9.png"
          alt="Home & Spoon Logo"
          width={150}
          height={150}
          className="opacity-100"
        />
     
        <Image
          src="/images/image-11.png"
          alt="Bistro Logo"
          width={150}
          height={150}
          className="opacity-100"
        />
        <Image
          src="/images/image-12.png"
          alt="Bakery Modern Logo"
          width={150}
          height={150}
          className="opacity-100"
        />
      </div>
    </section>
  );
};

export default Partners;
