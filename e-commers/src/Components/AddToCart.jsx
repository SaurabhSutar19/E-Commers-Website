import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <div className="flex items-center">
        Colors :
        {colors.map((currColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: currColor }}
              className={`w-8 h-8 rounded-full ml-4 border-none outline-none cursor-pointer flex items-center justify-center 
              ${
                color === currColor
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {color === currColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
    </>
  );
};

export default AddToCart;
