"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function SignUpPage() {
  const { signUp, isLoaded } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  // Load reCAPTCHA script and execute
  useEffect(() => {
    const loadCaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
              action: "signup",
            })
            .then((token: string) => {
              setCaptchaToken(token);
            });
        });
      }
    };

    // Add a slight delay to ensure the script is fully loaded
    const timer = setTimeout(() => {
      loadCaptcha();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded || !signUp) return;

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate CAPTCHA token
    if (!captchaToken) {
      setError("CAPTCHA verification failed. Please try again.");
      return;
    }

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      if (result.status === "complete") {
        await signUp.prepareEmailAddressVerification();
        router.push("/verify-email");
      }
    } catch (err: any) {
      console.error("Sign-up error:", err);
      setError(err.errors[0].message);
    }
  };

  return (
    <div>
    <NavBar/>
    <HeroBanner title="Sign Up"/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Google reCAPTCHA Script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
        onLoad={() => {
          console.log("reCAPTCHA script loaded");
        }}
      />

      <div className="bg-white shadow-lg rounded-md p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-center">Sign Up</h3>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#FF9F0D] text-white py-2 px-4 rounded-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-indigo-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}