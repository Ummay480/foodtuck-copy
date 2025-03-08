import React from "react";
import Image from "next/image";


const FoodMenu: React.FC = () => {
  const menuItems = [
    {   image: "/images/image-77.png" },
    {  image: "/images/image-80.png" },
    {  image: "/images/image-79.png" },
    { image: "/images/image-78.png" },
  ];

  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-[#FF9F0D] font-greatVibes text-2xl leading-10 text-center ">
           Chef
          </h2>
          <h3 className="text-2xl font-semibold text-[#FF9F0D] -ml-28 -mt-2 ">Me</h3>
          <h3 className="flex text-2xl font-semibold text-white justify-center items-center text-center ml-14 -mt-8">
 et Our Chef
</h3>

      <div className="mt-8 flex justify-center space-x-6">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-black rounded shadow-md">
            <Image
              src={item.image}
              alt={item.image}
              width={200} // Replace with desired width
              height={200} // Replace with desired height
              className="w-100 h-100 mx-auto"
            />
     
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodMenu;
