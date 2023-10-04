"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/context/cart-contex";

const Price = ({ price, id, name, src, desc}) => {
    const [total,setTotal] = useState(price);
    const [quantity,setQuantity] = useState(1);

    const {addToCart,dishes} = useContext(CartContext);

    useEffect(()=>{
        setTotal(quantity*price)
    },[quantity,price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">₹ {total}</h2>
      {/* Quantity Section */}
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center w-full justify-between">
          <span className="text-md md:text-xl font-semibold">Quantity</span>
          <div className="flex items-center gap-5">
            <button className="text-3xl text-[#ee5f35] hover:text-white" onClick={()=> setQuantity(prev=>(prev>1 ? prev-1:1))}>-</button>
            <span className="text-sm text-green-600">{quantity}</span>
            <button className="text-[#ee5f35] hover:text-white" onClick={()=> setQuantity(prev=>(prev<10 ? prev+1:10))}>+</button>
          </div>
        </div>
        <Link href="/cart" className="bg-[#ee5f35] my-3 font-semibold px-3 py-2 rounded-full text-sm md:text-md hover:bg-white hover:text-black transition-all delay-100 ease-in-out">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Price;
