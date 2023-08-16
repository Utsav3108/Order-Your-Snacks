import React from "react";
import { FaFirstOrder } from "react-icons/fa";
import {FiSearch} from "react-icons/fi"
import {AiFillPhone} from "react-icons/ai"
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="p-4 flex gap-5 items-center justify-between">
      <Link className="flex group gap-2 items-center" href="/">
      <FaFirstOrder className="group-hover:text-[#ee5f35] transition-all delay-75 ease-in" size={35} />
      <span className=" text-xl group-hover:text-[#ee5f35] transition-all delay-75 ease-in">O Y S</span>
      </Link>
      <div className=" hidden bg-zinc-900 max-w-sm md:flex flex-1 gap-1 items-center rounded-full px-4 py-2" >
        <FiSearch size={25}/>
        <input className="bg-zinc-900 text-gray-200 outline-none pl-4" type="text" placeholder="Search" width="100%"/>
      </div>
      <div className="flex items-center gap-8">
        {/* <div>
          Why OYS
        </div> */}
        <div className=" hidden md:flex gap-1 items-center hover:bg-white font-medium hover:text-black px-2 py-1 rounded-lg cursor-pointer bg-[#ee5f35] text-white transition-all delay-100 ease-in-out">
          <span>Contact</span> 
          {/* <AiFillPhone /> */}
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
