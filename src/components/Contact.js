import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center bg-[url("https://i.pinimg.com/474x/41/2c/39/412c39fc4059f3b90c1fa8b4b24aa266.jpg")] bg-cover bg-center h-[40vh] rounded-2xl my-10'>
        <div className='w-full h-1/2 flex flex-col gap-5 items-center px-2'>
            <h2 className='text-center text-lg md:text-2xl font-semibold'>Join Our Membership And Get  
            <span className='text-[#ee5f35] font-bold'> Discount Upto 35%</span>😍</h2>
            <div className='flex gap-1 items-center justify-center w-full bg-gray-200 py-1 px-2 max-w-[450px] min-w-[250px] rounded-full'>
                <input className='text-black h-[30px] text-[12px] sm:text-sm px-1 md:text-md bg-transparent flex-1 outline-none' type='email' placeholder='Enter Your Email' />
                <button className='bg-[#ee5f35] font-semibold px-3 py-2 rounded-full text-[12px] sm:text-sm md:text-md hover:bg-slate-400 hover:text-black transition-all delay-100 ease-in-out'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Contact