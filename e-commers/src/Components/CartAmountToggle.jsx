import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <>
      <div className="flex items-center gap-x-6  mt-4">
        <button
          onClick={() => {
            setDecrease();
          }}
          className="py-2 px-2 bg-gray-400 rounded-md  hover:bg-red-500 hover:scale-105text-gray-900"
        >
          <FaMinus />
        </button>
        <p className="text-indigo-600 text-2xl font-semibold"> {amount}</p>
        <button
          onClick={() => {
            setIncrease();
          }}
          className="py-2 px-2 bg-gray-400 rounded-md   hover:bg-green-500 hover:scale-105text-gray-900"
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default CartAmountToggle;
