import Link from "next/link";
import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

const ArrowButton = () => {
  return (
    <div className="sm:hidden lg:block w-max relative top-10 left-20 cursor-pointer hover:text-[#ee5f35] transition-all ease-in">
      <Link href="/menu">
        <FiArrowLeftCircle size={30} />
      </Link>
    </div>
  );
};

export default ArrowButton;
