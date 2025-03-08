"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signUp, isLoaded } = useSignUp();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    if (!isLoaded || !signUp) return;

    const token = searchParams.get("token");
    if (!token) {
      setMessage("No verification token found. Please check your email.");
      return;
    }

    signUp.attemptEmailAddressVerification({
      code: token, // Use the token from the URL
    })
      .then(() => {
        setMessage("✅ Email verified successfully! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 2000);
      })
      .catch((err) => {
        console.error("Verification error:", err);
        setMessage("❌ Verification failed. Please try again.");
      });
  }, [signUp, isLoaded, searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-md p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-center">Email Verification</h3>
        <p className="text-center text-gray-600">{message}</p>
        <p className="mt-4 text-center text-sm text-gray-600">
          Go back to{" "}
          <a href="/sign-in" className="text-indigo-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}