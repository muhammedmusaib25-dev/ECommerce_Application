import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
   <div className='bg-rabbit-red text-white'>
    <div className='container mx-auto flex justify-between px-4 py-3 text-center'>
    {/*==========================================================================  */}
    {/* icons */}
        <div className='hidden md:flex space-x-4 item-center'>
            {/* meta */}
            <a href="" className='h-5 w-5 hover:text-gray-300'>
               <TbBrandMeta/>
            </a>
            {/* instagram */}
            <a href="" className='h-5 w-5 hover:text-gray-300'>
               <IoLogoInstagram/>
            </a>
            {/* twitter */}
            <a href="" className='h-5 w-5 hover:text-gray-300'>
               <RiTwitterXLine/>
            </a>
        </div>
    {/*==========================================================================  */}
    {/* text */}
        <div className='text-sm text-center flex-grow'>
            <span>
                We ship worldwide - Fast and reliable shipping!
            </span>
        </div>
    {/*==========================================================================  */}
    {/* phoneNumber */}
        <div className='hidden md:block text-sm '>
            <a href="tel:+123456789" className='hover:text-gray-300'>
                +91-12345 67890
            </a>
        </div>
   </div>
   </div>
  )
}

export default TopBar