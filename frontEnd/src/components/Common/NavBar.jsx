import { React, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import CartProductDetails from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleMenuDrawer = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <>
      <nav className="container mx-auto  flex justify-between items-center py-4 px-6">
        {/* =================================================== */}
        {/* Logo */}
        <div className="">
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* =================================================== */}
        {/* NavLinks */}
        <div className="hidden md:flex space-x-4 ">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>

        {/* =================================================== */}
        {/* Icons */}
        <div className="flex items-center space-x-4 px-2">
          {/* profile */}
          <Link to={"/profile"}>
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
          </Link>
          {/* cart */}
          <button className="relative" onClick={toggleCartDrawer}>
            <FiShoppingCart className="h-6 w-6 text-gray-700 hover:text-black" />
            <span className="absolute bg-rabbit-red text-white rounded-full text-xs px-1 py-0.25 -top-1 -right-2">
              4
            </span>
          </button>
          {/* SearchBar */}
          <SearchBar />
          {/* hamburger */}
          <button className="md:hidden" onClick={toggleMenuDrawer}>
            <RxHamburgerMenu className="h-6 w-6 text-gray-700 hover:text-black" />
          </button>
        </div>
      </nav>
      {/* CartDrawer */}
      <CartProductDetails toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-1/3  bg-white  
                     transform transition-transform duration-300 border-r border-gray-200
                     ${mobileDrawer ? "translate-x-0" : "-translate-x-full"}
                     `}
      >
        <div className="mb-10 flex justify-end items-center p-2">
          <button onClick={toggleMenuDrawer} className="">
            <IoMdClose className="h-6 w-6 text-rabbit-red hover:text-secondary-red" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
