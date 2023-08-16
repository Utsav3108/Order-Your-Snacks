import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFormClose } from "react-icons/gr";

const page = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:items-center md:flex-row">
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll md:h-full md:w-2/3 xl:w-1/2">
        <div className="flex items-center justify-between mb-4">
          <Image
            className="rounded-md"
            src="https://i.pinimg.com/474x/d9/92/b7/d992b718fa2dc8d471314d1ebbef6c6f.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Pizza</h1>
            <span className="text-md text-gray-600">Modern Fusion</span>
          </div>
          <h2 className="font-bold">₹150</h2>
          <span className="cursor-pointer hover:text-[#ee5f35]">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            className=" rounded-md"
            src="https://i.pinimg.com/474x/d9/92/b7/d992b718fa2dc8d471314d1ebbef6c6f.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Pizza</h1>
            <span className="text-md text-gray-600">Modern Fusion</span>
          </div>
          <h2 className="font-bold">₹150</h2>
          <span className="cursor-pointer hover:text-[#ee5f35]">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            className=" rounded-md"
            src="https://i.pinimg.com/474x/d9/92/b7/d992b718fa2dc8d471314d1ebbef6c6f.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Pizza</h1>
            <span className="text-md text-gray-600">Modern Fusion</span>
          </div>
          <h2 className="font-bold">₹150</h2>
          <span className="cursor-pointer hover:text-[#ee5f35]">X</span>
        </div>
      </div>
      <div className="h-1/2 p-4 pt-10 md:border-l-[1px] md:border-dashed md:border-l-gray-600 flex flex-col gap-4 justify-center md:h-full md:w-2/3 xl:w-1/2">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal (3)</span>
          <span className="">₹450</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Service Cost</span>
          <span className="">₹0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Delivery Cost</span>
          <span className=" text-green-500 font-bold">FREE!</span>
        </div>
        <hr className="" />
        <div className="flex justify-between">
          <span className="font-semibold">Total Cost(Incl. GST)</span>
          <span className=" font-bold">₹450</span>
        </div>
        <Link
          href="/"
          className="bg-[#ee5f35] self-end w-1/2 font-semibold px-3 py-2 rounded-lg text-center text-sm md:text-md hover:bg-white hover:text-black transition-all delay-100 ease-in-out"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default page;
