import Image from 'next/image';
import React from 'react';

interface ChefCardProps {
  imageUrl: string;
  name: string;
  position: string;
  specialty: string;
  description: string;

}

const ChefCard: React.FC<ChefCardProps> = ({ imageUrl, name, position, specialty, description,}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">{position || "Position not specified"}</p>
       <p className="text-gray-500">{specialty}</p>
        <p className="text-gray-500">{description}</p>
        
      </div>
    </div>
  );
};

export default ChefCard;
