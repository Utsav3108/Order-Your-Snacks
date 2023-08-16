"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import 'animate.css';
import CountDown from "./CountDown";


const data = [
    {
        id: 1,
        image: "/images/offerProduct.png"
    },
    {
        id: 2,
        image: "/images/salad-bowl.png"
    },
    {
        id: 3,
        image: "/images/choco-cake.png"
    },
    {
        id: 4,
        image: "/images/icecreame.png"
    }
]

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(
            ()=>setCurrentSlide(prev => (prev === data.length-1 ? 0 : prev + 1))
        ,5000)
        return ()=> clearInterval(interval);
    },[])
  return (
    <div className="my-10 w-full rounded-xl overflow-hidden" >
      <h1 className="md:text-4xl md:text-left text-xl text-[#ee5f35] text-center font-semibold mb-5">
        Today&apos;s Special Offers 🤩🤩🤩
      </h1>
      <div className="flex md:h-[80vh] items-center flex-1 gap-6 flex-col-reverse md:flex-row md:justify-between md:bg-[url('/images/offerBg.jpg')] md:bg-cover">
        <div className="flex flex-1 flex-col gap-10 p-4">
          <h3 className="md:text-3xl md:text-left text-lg text-center font-semibold text-yellow-300">
            Happy Hours Starting Soon!!!
          </h3>
          <CountDown />
          <p className="text-sm text-slate-400 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            dicta dolorum, a atque at cupiditate quam doloremque neque amet non
            numquam repellat impedit dolor necessitatibus cumque nisi vero
            inventore error?
          </p>
          
          <div className="text-center md:text-left">
            <button className="bg-[#ee5f35] font-semibold px-3 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all delay-100 ease-in-out">
              Set Reminder
            </button>
          </div>
        </div>
        <div className="flex-1 hover:animate-bounce flex justify-center items-center relative">
          <Image className="object-contain animate__animated animate__slideInRight cursor-pointer" src={data[currentSlide].image} alt="" width={400} height={500}/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
