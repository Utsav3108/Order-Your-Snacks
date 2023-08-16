"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2023-08-31")

const CountDown = () => {
  return (
    <Countdown className='text-yellow-300 font-semibold text-lg md:text-xl text-center md:text-left' date={endingDate}/>
  )
}

export default CountDown