"use client"
import Image from 'next/image';
import Link from 'next/link';

const TeamMember = () => {
  const teamMembers = [
    {
      name: 'Mark Henry',
      role: 'Owner',
      imgSrc: '/images/image-23.png',
    },
    {
      name: 'Lucky Helen',
      role: 'Chef',
      imgSrc: '/images/image-23.png',
    },
    {
      name: 'Moon Henry',
      role: 'Founder',
      imgSrc: '/images/image-23.png',
    },
    {
      name: 'Tom Monrow',
      role: 'Specialist',
      imgSrc: '/images/image-23.png',
    },
  ];

  return (
    <div className="relative text-white text-center pt-10 px-6">
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0 h-60"
        style={{
          backgroundImage: 'url(/images/image-111.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 h-72 bg-[#FF9F0D] opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Team Member</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" text-black rounded-lg mt-8 px-2 overflow-hidden flex flex-col items-center relative shadow-lg"
            >
              <div className="w-full h-20 mb-32 pb-10">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={120}
                  height={200}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
              <div className="absolute top-2 right-2 space-y-2 flex flex-col">
                <Link href="#" className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                  <i className="fab fa-facebook-f text-blue-600"></i>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                  <i className="fab fa-twitter text-blue-400"></i>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                  <i className="fab fa-youtube text-red-600"></i>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
                  <i className="fab fa-pinterest text-red-700"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
