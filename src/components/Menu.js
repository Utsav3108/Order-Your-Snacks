"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { LiaOpencart } from "react-icons/lia";
import { BiHomeCircle, BiLogInCircle } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";
import { SlClose } from "react-icons/sl";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cursor-pointer z-10">
      {!open ? (
        <RiMenu5Fill
          className="hover:text-[#ee5f35]"
          onClick={() => setOpen(true)}
          size={30}
          color="white"
        />
      ) : (
        <SlClose
          className="hover:text-[#ee5f35]"
          onClick={() => setOpen(false)}
          size={30}
          color="white"
        />
      )}
      {open && (
        <div className="flex items-center gap-4 justify-center rounded-xl flex-col bg-zinc-950 absolute border-[0.5px] border-gray-600 shadow-md shadow-gray-500 right-0 top-[78px] min-w-[300px] w-[30vw] h-[calc(60vh-78px)] text-lg">
          <Link
            className="flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/"
            onClick={() => setOpen(false)}
          >
            <BiHomeCircle size={25} />
            Home
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/about"
            onClick={() => setOpen(false)}
          >
            <IoBulbOutline size={25} />
            About
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/menu"
            onClick={() => setOpen(false)}
          >
            <MdOutlineRestaurantMenu size={25} />
            Menu
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/orders"
            onClick={() => setOpen(false)}
          >
            <BsCardChecklist size={25} />
            Orders
          </Link>
          <Link
            className=" flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/cart"
            onClick={() => setOpen(false)}
          >
            <LiaOpencart size={25} />
            My Cart
          </Link>
          <Link
            className="flex gap-2 items-center hover:text-[#ee5f35] transition-all delay-100 ease-in"
            href="/login"
            onClick={() => setOpen(false)}
          >
            <BiLogInCircle size={25} />
            Login / Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
