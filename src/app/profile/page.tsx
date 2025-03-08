// "use client"; // ✅ Add this at the top of the file

// import { FC, useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/redux/store';
// import { updateUser } from '@/redux/slices/userSlice'; 


// interface UserProfile {
//   id: string;
//   name: string;
//   email: string;
//   phoneNumber: string;z
//   address: string;
// }

// const ProfilePage: FC = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user); // Assuming user data is in redux state
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState<UserProfile>({
//     id: '',
//     name: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//         address: user.address,
//       });
//     }
//   }, [user]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     dispatch(updateUser(formData)); // Dispatching action to update user in redux
//     setEditMode(false);
//   };

//   return (
//     <div className="container">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Profile Information</h2>
//         {editMode ? (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-gray-700" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-2 p-2 w-full border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-2 p-2 w-full border border-gray-300 rounded-md"
//                 disabled
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700" htmlFor="phoneNumber">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="mt-2 p-2 w-full border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700" htmlFor="address">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="mt-2 p-2 w-full border border-gray-300 rounded-md"
//               />
//             </div>

//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-500 text-white py-2 px-4 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="bg-orange-400 text-white py-2 px-4 rounded-md"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
//             <p><strong>Address:</strong> {user.address}</p>

//             <div className="mt-4">
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md"
//               >
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
