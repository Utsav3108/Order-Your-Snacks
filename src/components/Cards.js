import Image from 'next/image';
import React from 'react'

const indianFoodItems = [
    {
      name: "Biryani",
      description: "A flavorful rice dish cooked with meat or vegetables, spices, and saffron.",
      cuisine: "Hyderabadi",
      vegetarian: false,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Samosa",
      description: "Deep-fried pastry filled with spiced potatoes and peas.",
      cuisine: "North Indian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Butter Chicken",
      description: "Chicken cooked in a creamy tomato-based sauce with spices.",
      cuisine: "Punjabi",
      vegetarian: false,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Dosa",
      description: "A thin, crispy pancake made from fermented rice and lentil batter.",
      cuisine: "South Indian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Chole Bhature",
      description: "Chickpea curry served with fried bread (bhature).",
      cuisine: "North Indian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Rogan Josh",
      description: "A spicy lamb curry cooked with a blend of Kashmiri spices.",
      cuisine: "Kashmiri",
      vegetarian: false,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Idli",
      description: "Soft, steamed rice cakes, usually served with sambar and chutney.",
      cuisine: "South Indian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Vada Pav",
      description: "A popular street food consisting of a spicy potato fritter in a bun.",
      cuisine: "Maharashtrian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Malai Kofta",
      description: "Deep-fried vegetable balls in a creamy tomato-based gravy.",
      cuisine: "North Indian",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
    {
      name: "Rasgulla",
      description: "Soft and spongy dessert made from chhena (Indian cottage cheese) and sugar syrup.",
      cuisine: "Bengali",
      vegetarian: true,
      url: "/images/AlooMatar.jpeg"
    },
  ];

const Cards = () => {
  return (
    <div className='flex flex-wrap border-2 border-white'>
            {
                indianFoodItems.map(item => 
                <div className='w-[33%] flex flex-col gap-2 items-center' key={item.name}>
                <div>
                    <Image src={item.url} alt='' width={400} height={200} />
                </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>)
            }
    </div>
  )
}

export default Cards