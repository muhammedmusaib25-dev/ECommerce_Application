import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const CartContents = () => {
  const products = [
    {
      productId: 1,
      name: "T-shirt",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      color: "Blue",
      quantity: 1,
      price: 45,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Hoodie",
      color: "Black",
      quantity: 2,
      price: 55,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Cap",
      color: "White",
      quantity: 3,
      price: 12,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Sneakers",
      color: "Gray",
      quantity: 1,
      price: 65,
      image: "https://picsum.photos/200?random=5",
    },
  ];
 
    // const products=[];
return (
    <div>
      {products.length > 1 ? (
        <div className="flex flex-col space-y-4  ">
          {products.map((prod, index) => (
            <div
              key={index}
              className="flex border border-gray-300 p-2 rounded-lg shadow-lg py-3 items-center justify-between cursor-pointer hover:sha" 
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-24 w-24 rounded-lg shadow-lg"
                />
              </div>
              {/* Product Details */}
              <div className="flex-grow p-4">
                <div className="flex flex-col border border-gray-200 p-2 rounded-lg shadow-lg space-y-1 ">
                  {/* Product Title */}
                  <span className=" text-rabbit-red font-semibold uppercase">
                    {prod.name}
                  </span>
                  <span className="text-gray-700 text-xs">
                    Price : $ {prod.price}
                  </span>
                  <span className="text-gray-700 text-xs">
                    Color : {prod.color}{" "}
                  </span>
                  {/* increment and decrement quantity */}
                  <div className="flex justify-between bg-gray-200 rounded-lg px-2">
                    <button className="">
                      <FiMinus className="h-5 w-5 text-gray-600 hover:text-black" />
                    </button>
                    <span className="text-gray-700 text-xs">{prod.quantity}</span>
                    <button className="">
                      <IoIosAdd className="h-5 w-5 text-gray-600 hover:text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-center">Your cart is empty !</div>
      )}
    </div>
  );
};

export default CartContents;
