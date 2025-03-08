"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth"; // Import the useAuth hook

// Register Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale);

export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useUser(); // Use isLoaded to check if Clerk has finished loading
  const { isAdmin } = useAuth(); // Check if the user is an admin
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in"); // Redirect to sign-in if not authenticated
    } else if (isLoaded) {
      setIsLoading(false); // Stop loading if user is signed in
    }
  }, [isSignedIn, isLoaded, router]);

  // Data for the bar chart
  const data = {
    labels: ["Pizza", "Burgers", "Pasta", "Sushi", "Tacos"],
    datasets: [
      {
        label: "Orders",
        data: [50, 80, 30, 60, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>; // Show a loading state while checking auth status
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {isAdmin && ( // Show the admin link only if the user is an admin
        <Link href="/dashboard/admin" className="text-blue-500 hover:underline">
          Go to Admin Panel
        </Link>
      )}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-bold">Orders Overview</h2>
            <Bar data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}