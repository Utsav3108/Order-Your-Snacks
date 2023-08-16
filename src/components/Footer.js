import Link from "next/link";
import React from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaFirstOrder, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-10 border-t-[1px] pt-5 md:pt-10 border-slate-600 flex flex-col gap-5 md:gap-10 md:justify-between md:flex-row">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <Link className="flex group gap-2 items-center" href="/">
          <FaFirstOrder
            className="group-hover:text-[#ee5f35] transition-all delay-75 ease-in"
            size={35}
          />
          <span className=" text-xl group-hover:text-[#ee5f35] transition-all delay-75 ease-in">
            O Y S
          </span>
        </Link>
        <p className="text-sm text-slate-400 text-center md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> A, fugiat consequuntur aut repellat ad minus eos quo<br /> illum accusamus suscipit.
        </p>
        <div className="flex gap-4 items-center">
          <div className="bg-white text-black p-1 rounded-full hover:bg-[#ee5f35] hover:text-white transition-all delay-75 ease-in cursor-pointer">
            <BiLogoFacebook size={25} />
          </div>
          <div className="bg-white text-black p-1 rounded-full hover:bg-[#ee5f35] hover:text-white transition-all delay-75 ease-in cursor-pointer">
            <FaInstagram size={25} />
          </div>
          <div className="bg-white text-black p-1 rounded-full hover:bg-[#ee5f35] hover:text-white transition-all delay-75 ease-in cursor-pointer">
            <BiLogoTwitter size={25} />
          </div>
          <div className="bg-white text-black p-1 rounded-full hover:bg-[#ee5f35] hover:text-white transition-all delay-75 ease-in cursor-pointer">
            <BiLogoLinkedin size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-wrap md:justify-between gap-5">
          <div className="">
            <h3 className="font-bold text-lg mb-5">Support</h3>
            <ul className="text-sm flex flex-col gap-5 text-gray-600">
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Account</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Support</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Feedback</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Accebility</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg mb-5">Our Menu</h3>
            <ul className="text-sm flex flex-col gap-5 text-gray-600">
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Special</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Popular</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Categories</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg mb-5">Useful Links</h3>
            <ul className="text-sm flex flex-col gap-5 text-gray-600 ">
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Payment & Taxes</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Terms Of Services</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in cursor-pointer">About Us</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-lg mb-5">Get In Touch</h3>
            <ul className="text-sm flex flex-col gap-5 text-gray-600">
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in">orderyoursnacks@gmail.com</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in">Ahmedabad, 382350</li>
              <li className="hover:text-[#ee5f35] transition-all delay-75 ease-in">Gujarat, India</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Footer;
