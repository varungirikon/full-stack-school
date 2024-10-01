"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {  
    const role = user?.publicMetadata.role;    
    if (role !== undefined && role !== 'undefined') {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
      <div className="flex-1 flex flex-col justify-center p-4 sm:p-8 md:p-12 text-white md:w-1/2">
        <h2 className="text-xs sm:text-sm uppercase mb-2 tracking-wider">Inspiration for Success</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">Achieve Your Dreams</h1>
        <p className="text-base sm:text-lg max-w-md">
          Success is within reach. With dedication, perseverance, and the right mindset, 
          you can overcome any obstacle and turn your aspirations into reality.
        </p>
        <div className="mt-6 sm:mt-8">
          <a href="#" className="inline-block bg-white text-purple-600 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-sm sm:text-base">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:w-1/2">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <Image src="/logo.png" alt="Cogie" width={24} height={24} />
            </div>
            <p className="text-gray-500 mb-6">Enter your email and password to access your account</p>
            <Clerk.GlobalError className="text-sm text-red-400" />
            <Clerk.Field name="identifier" className="mb-4">
              <Clerk.Label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full p-3 rounded-lg bg-gray-100"
                placeholder="Enter your username"
              />
              <Clerk.FieldError className="text-xs text-red-400 mt-1" />
            </Clerk.Field>
            <Clerk.Field name="password" className="mb-4">
              <Clerk.Label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full p-3 rounded-lg bg-gray-100"
                placeholder="Enter your password"
              />
              <Clerk.FieldError className="text-xs text-red-400 mt-1" />
            </Clerk.Field>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600">Forgot Password?</a>
            </div>
            <SignIn.Action
              submit
              className="w-full bg-black text-white rounded-lg py-3 mb-4"
            >
              Sign In
            </SignIn.Action>
            <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center">
              <Image src="/google-icon.png" alt="Google" width={20} height={20} className="mr-2" />
              Sign In with Google
            </button>
            <p className="text-center mt-6 text-sm text-gray-600">
              Don&apos;t have an account? <a href="#" className="text-blue-600">Sign Up</a>
            </p>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
};

export default LoginPage;
