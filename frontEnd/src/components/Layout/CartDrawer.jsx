import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

  const navigate= useNavigate();

  const handleCheckOut=(e)=>{
    navigate("/checkout")
    toggleCartDrawer()
  }

  return (
    <div
      className={`fixed top-0 right-0
         h-full w-3/4 sm:w-1/2 lg:w-1/3 shadow-xl bg-white
         flex flex-col z-50
         transform transition-transform duration-300 border-l border-gray-200

        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div className=" flex justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex space-x-2">
          <button className="">
            <IoCartSharp className="h-6 w-6 text-rabbit-red" />
          </button>
          <h2 className="text-xl text-rabbit-red font-semibold ">My Orders</h2>
        </div>
        <button onClick={toggleCartDrawer} className="">
          <IoMdClose className="h-6 w-6 text-rabbit-red hover:text-secondary-red" />
            </button>
          </div>
      {/* cart items */}
      <div className=" flex-grow mb-3 overflow-y-auto px-4 py-4">
        <CartContents />
        </div>
      {/* Checkout buttom */}
      <div className="flex flex-col justify-center items-center px-2 py-4  mb-4 space-y-4">
        <button onClick={(e)=>handleCheckOut(e)} className="w-full bg-rabbit-red py-3 text-white rounded-lg  font-normal hover:bg-secondary-red transition">
          Check out
        </button>
        <span className="text-sm  text-gray-700">
          Shipping, taxes and discounts are calculated at Checkout.
        </span>
      </div>
    </div>
  );
};

export default CartDrawer;
