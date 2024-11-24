import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
const product = (currElement) => {
  const { id, name, image, price, category } = currElement;

  console.log(currElement);
  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-56 bject-cover transition-transform hover:scale-110 duration-300 p-3 "
            />
            <div className="absolute top-10 right-6 bg-white text-black text-xs font-semibold py-1 px-2 rounded-lg o duration-300 ">
              {category}
            </div>
          </div>

          <div className="p-4">
            <div className="text-md flex justify-between items-center">
              <h2 className="text-gray-600 font-bold ">{name}</h2>
              <p className="text-indigo-600 font-semibold ">
                {" "}
                {<FormatPrice price={price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default product;
