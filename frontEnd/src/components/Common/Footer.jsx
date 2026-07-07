import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200-200 py-12 mt-2 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 ">
        {/* News Letter colums */}
        <div>
          <h3 className="text-lg text-rabbit-red mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to buy out products, exclusive events, and online
            offers
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Sign up and get 10% off on first order
          </p>

          {/* NewsLetter form */}
          <form action="" className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-400 px-2 py-2  rounded-l-lg
                    placeholder:text-gray-700 
                    focus:outline-none focus:ring-1 focus:ring-rabbit-red"
            />
            <button
              type="submit"
              className="bg-rabbit-red px-3 rounded-r-lg text-white 
                    hover:bg-secondary-red"
            >
              submit
            </button>
          </form>
        </div>

        {/* News Letter colums */}
        <div>
          <h3 className="text-lg text-rabbit-red mb-4">Shop Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact us colums */}
        <div>
          <h3 className="text-lg text-rabbit-red mb-4">Contact Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:text-gray-700">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media colums */}
        <div>
          <h3 className="text-lg text-rabbit-red mb-4">Socail Media</h3>
          <div className="flex  space-x-4 text-gray-800">
            <a href="" className="h-5 w-5 hover:text-gray-500">
              <TbBrandMeta />
            </a>
            <a href="" className="h-5 w-5 hover:text-gray-500">
              <IoLogoInstagram />
            </a>
            <a href="" className="h-5 w-5 hover:text-gray-500">
              <RiTwitterXLine />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 py-6 flex justify-center items-center text-center ">
        <span className="text-sm tracking-tighter text-gray-500">© {new Date().getFullYear()} Rabbit Store. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
