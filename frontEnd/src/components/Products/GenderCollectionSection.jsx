import React from "react";
import mensCollectImage from "../../assets/mens-collection.webp";
import womensCollectImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="flex flex-col md:flex-row gap-8 container  mx-auto">
        <div className="relative flex-1 ">
          <img
            src={mensCollectImage}
            alt=""
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to={"/collections/all?gender=women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative flex-1 ">
          <img
            src={womensCollectImage}
            alt=""
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to={"/collections/all?gender=women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
