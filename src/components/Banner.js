import Image from "next/image";
import React from "react";
import "../app/globals.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-10 md:items-center md:justify-center">
      <div className="flex-1 relative">
        <Image
          className="mx-auto"
          src="/images/Hero-photo-black.jpg"
          width={800}
          height={800}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col gap-10">
        <h1 className="text-center font-medium text-3xl md:text-6xl md:text-left">
          <span className="text-2xl font-light pacifico md:text-4xl">Paneer</span>
          <br /> Tikka <span className=" hover:text-[#ee5f35] transition-all delay-75 ease-in">Masala</span>
        </h1>
        <p className="text-sm text-slate-400 text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aut
          consectetur suscipit quis fugit sit ab sequi ea ipsam labore iure,
          molestiae
        </p>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <Link href="/menu" className="bg-[#ee5f35] font-semibold px-3 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all delay-100 ease-in-out">
            Order Snack
          </Link>
          <span className="hidden md:inline-block">₹ 100</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
