import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className="flex flex-col md:flex-row rounded-md h-full shadow-2xl shadow-gray-700 md:h-[80%] md:w-full lg:w-[80%]">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image className="object-cover md:object-contain" src="/images/logo-white.png" fill alt="" />
        </div>

        <div className="px-10 md:p-10 flex flex-col gap-4 md:border-l-[1px] border-l-gray-600">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p className="text-gray-600 text-sm md:text-md xl:text-lg">
            Log into your account or create a new account using socials button
          </p>
          <button className="flex rounded-md items-center border-[1px] border-gray-600 hover:bg-[#ee5f35] hover:border-0 transition-all delay-100 ease-in-out gap-4 p-3">
            <FcGoogle size={25} />
            <span className="text-sm md:text-md xl:text-lg">Sign in with Google</span>
          </button>
          <button className="flex rounded-md items-center border-[1px] border-gray-600 hover:bg-[#ee5f35] hover:border-0 transition-all delay-100 ease-in-out gap-4 p-3">
            <FaFacebook
              className="text-[#1878f3] bg-white rounded-full"
              size={25}
            />
            <span className="text-sm md:text-md xl:text-lg">Sign in with Google</span>
          </button>
          <p className="text-sm text-gray-600">
            Have a problem?<Link className="underline text-white" href="/">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
