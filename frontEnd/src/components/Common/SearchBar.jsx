import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [searchedText, setSearchedText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch= (e)=>{
    e.preventDefault();
    console.log("searched term ", searchedText)
    setIsOpen(false)
  }

  return (
    <div
      className={`${isOpen ? "absolute w-full bg-white px-2 top-0 -left-4 h-24 flex items-center z-50 justify-center transition-all duration-300" : "w-auto"}`}
    >
      {isOpen ? (
        <form  onSubmit={handleSearch} className="relative w-full flex items-center justify-center">
          <div className="relative w-1/2 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              value={searchedText}
              onChange={(e)=>setSearchedText(e.target.value)}
              className="bg-gray-100 px-4 py-2 w-full rounded-lg
                    focus:outline-none placeholder:text-gray-700"
            />

            <button type="submit" className="absolute right-2">
              <IoSearchOutline className="h-6 w-6 text-gray-700 hover:text-black" />
            </button>

            <button onClick={handleSearchToggle} className="absolute -right-6">
              <IoMdClose className="h-6 w-6 text-gray-700 hover:text-black" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <IoSearchOutline className="h-6 w-6 text-gray-700 hover:text-black" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
