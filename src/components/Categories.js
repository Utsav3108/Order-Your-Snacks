"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { id: 1, title: "Burger", url: "/images/burger.jpg" },
  { id: 2, title: "Pizza", url: "/images/pizza.jpg" },
  { id: 3, title: "Rolls", url: "/images/rolls.jpg" },
  { id: 4, title: "Sandwich", url: "/images/sandwich.jpg" },
  { id: 5, title: "North Indian", url: "/images/north indian.jpg" },
  { id: 6, title: "Idli", url: "/images/idli.jpg" },
  { id: 7, title: "Dosa", url: "/images/dosa.jpg" },
  { id: 8, title: "Thali", url: "/images/thali.jpg" },
  { id: 9, title: "Cake", url: "/images/cake.jpg" },
];

const Categories = () => {
  return (
    <div className="my-8">
      <div className="md:text-4xl md:text-left text-xl text-center text-[#ee5f35] font-semibold mb-8">
        Inspriation for your first order
      </div>
      <div className="flex items-center justify-center md:justify-start gap-12 flex-wrap w-[100%] p-4">
      {
        categories.map((category)=>(
          <Link key={category.id} href="/menu" className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:scale-125 hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src={category.url}
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">{category.title}</p>
        </Link>
        ))
      }

        {/* <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/pizza.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Pizza</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/rolls.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Rolls</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/thali.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Thali</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/north indian.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">North Indian</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/idli.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Idli</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/sandwich.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Sandwich</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/dosa.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Dosa</p>
        </div>
        <div className="flex cursor-pointer items-center flex-col gap-5">
          <Image
            className="rounded-full hover:animate-spin hover:shadow-lg hover:shadow-gray-500 transition-all delay-100 ease-in-out"
            src="/images/cake.jpg"
            width={150}
            height={150}
            alt=""
          />
          <p className="font-semibold text-white">Cake</p>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
