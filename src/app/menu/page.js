import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import indianFoodItems from "@/data";

const page = () => {
  return (
    <div className="">
      <div className="my-5">
        <h1 className="font-bold text-[#ee5f35] text-lg text-center md:text-left md:text-2xl">
          Ignite Your Taste Buds With Our Awesome Dishes🤤
        </h1>
      </div>
      <div className="flex justify-center sm:gap-5 flex-wrap">
        {indianFoodItems.map((item) => (
          <Link
            key={item.name}
            className="w-full bg-[#080808] my-3 h-[60vh] sm:w-[45%]  lg:w-[30%] p-4 rounded-xl  transition-all ease-in hover:border-[0.5px]  hover:shadow-2xl hover:shadow-gray-700 border-gray-600"
            // href={`/menu/${item.name}`}
            href={{
              pathname: `/menu/${item.name}`,
              query: {
                name: item.name,
                url: item.url,
                description: item.description,
                price: item.price,
                type: item.vegetarian,
              }, // the data
            }}
          >
            <div className="relative h-[70%] rounded-xl overflow-hidden">
              <Image className="object-cover" src={item.url} alt="" fill />
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col">
                <h1 className="font-semibold">{item.name}</h1>
                <h2 className="text-sm text-slate-400">{item.cuisine}</h2>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-[16px] text-gray-500">
                    {item.rating.toFixed(1)}
                  </p>
                  <AiFillStar className={`${item.vegetarian ? "text-green-500":"text-orange-500"}`} size={15} />
                </div>
                <div>
                  <p className="text-[16px] text-gray-500 font-semibold">
                    ₹ {item.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 flex gap-3 items-center">
              <button className="bg-[#ee5f35] font-semibold px-3 py-2 rounded-md text-[12px] md:text-[14px] lg:text[16px] hover:bg-white hover:text-black transition-all delay-100 ease-in-out">
                Order Now
              </button>
              <p className="text-[12px] md:text-[14px] lg:text[16px] text-gray-500 font-semibold flex items-center gap-1">
                {item.time}min
                <AiFillClockCircle size={15} />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
