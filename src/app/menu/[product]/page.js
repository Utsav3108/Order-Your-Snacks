"use client"
import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/Price";
import ArrowButton from "@/components/ArrowButton";

const page = ({ searchParams }) => {
  const type = (searchParams.type === "true");

  return (
    <>
    <ArrowButton />
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:gap-8 md:items-center">
      <div
        className={`relative w-full shadow-2xl shadow-gray-700 ${type ? "hover:shadow-green-600":"hover:shadow-orange-600"} border-none h-1/2 md:h-[65%] rounded-xl overflow-hidden transition-all ease-in`}
      >
        <Image className="object-cover" src={searchParams.url} alt="" fill />
      </div>
      <div className="h-1/2 mt-3 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl xl:text-5xl font-bold">{searchParams.name}</h1>
        <p className="text-gray-600">{searchParams.description}</p>
        <Price price={searchParams.price} id={searchParams.price} />
      </div>
    </div>
    </>
  );
};

export default page;
