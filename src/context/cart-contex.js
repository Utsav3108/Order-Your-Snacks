"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);

  const addToCart = (dishes)=>{
    setDishes((prevDishes)=>[...prevDishes,dishes]);
  }

  return (
    <CartContext.Provider value={{addToCart,dishes}}>{children}</CartContext.Provider>
  );
};
