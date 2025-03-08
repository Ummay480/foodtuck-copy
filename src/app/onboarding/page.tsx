// "use client";

// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function OnboardingPage() {
//   const { isSignedIn } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push("/sign-in"); // Redirect to sign-in if not authenticated
//     }
//   }, [isSignedIn, router]);

//   if (!isSignedIn) {
//     return null; // Render nothing while redirecting
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-2xl font-bold">Complete Your Onboarding</h1>
//     </div>
//   );
// }