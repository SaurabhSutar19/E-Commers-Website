import React, { useState } from "react";
import e_logo from "../assets/e_logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillHeartFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="flex justify-between items-center text-black py-2 px-4
        md:px-24  antialiased bg-gradient-to-tr from-violet-100 to-pink-100  drop-shadow-md hover:drop-shadow-lg "
      >
        <NavLink to="/">
          <img
            src={e_logo}
            alt=""
            className="w-20  hover:scale-105 transition-all drop-shadow-md"
          />
        </NavLink>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 text-gray-700  hover:text-sky-600  rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-3 text-gray-700  hover:text-sky-600 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="p-3 text-gray-700   hover:text-sky-600  rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/products"> Products</NavLink>
          </li>
          <li className="p-3 text-gray-700   hover:text-sky-600  rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div
          className="relative hidden xl:flex justify-center items-center
           gap-8"
        >
          <button
            // onClick={handleLogOut}
            className="text-xl hover:text-violet-600 text-violet-500 hover:scale-125 transition-all"
          >
            <MdLogout />
          </button>

          <NavLink to="/cart" className="relative">
            {" "}
            <BsCart4 className="relative text-2xl text-sky-500 hover:text-sky-600 hover:scale-125 transition-all" />
            <span className="w-5 h-5 absolute animate-bounce text-xs bg-sky-400 text-white rounded-full flex items-center justify-center -top-[20%] left-[70%] ">
              10
            </span>
          </NavLink>
          <NavLink to="/wishlist" className="relative">
            {" "}
            <BsFillHeartFill className="relative text-xl text-red-500 hover:text-red-600 hover:scale-125 transition-all " />
            <span className="w-4 h-4 absolute text-xs  animate-bounce  bg-red-400 text-white rounded-full flex items-center  justify-center -top-[30%] left-[80%]  ">
              5
            </span>
          </NavLink>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden block text-5xl cursor-poiter "
        >
          {isMenuOpen ? (
            <IoClose className="text-red-600 hover:text-red-700" />
          ) : (
            <IoMenu className="text-sky-500 hover:text-sky-700" />
          )}
        </button>
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity o.3s ease" }}
        >
          <li className=" list-none w-full text-center p-4 text-gray-700  hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className=" list-none w-full text-center p-4 text-gray-700   hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              {" "}
              About
            </NavLink>
          </li>
          <li className=" list-none w-full text-center p-4 text-gray-700   hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
              {" "}
              Products
            </NavLink>
          </li>
          <li className=" list-none w-full text-center p-4 text-gray-700  hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className=" list-none w-full flex items-center justify-center p-4 text-sky-500  hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <NavLink
              to="/cart"
              className="relative"
              onClick={() => setIsMenuOpen(false)}
            >
              {" "}
              <BsCart4 className="relative text-2xl text-sky-500 hover:text-sky-600 hover:scale-125 transition-all" />
              <span className="w-5 h-5 absolute animate-bounce text-xs bg-sky-400 text-white rounded-full flex items-center justify-center -top-[20%] left-[70%] ">
                10
              </span>
            </NavLink>
          </li>{" "}
          <li className=" list-none w-full flex items-center justify-center p-4 text-sky-500  hover:bg-sky-400 hover:text-red-700 transition-all cursor-pointer">
            <NavLink
              to="/wishlist"
              className="relative"
              onClick={() => setIsMenuOpen(false)}
            >
              {" "}
              <BsFillHeartFill className="relative text-xl text-red-500 hover:text-red-600 hover:scale-125 transition-all " />
              <span className="w-4 h-4 absolute text-xs  animate-bounce  bg-red-400 text-white rounded-full flex items-center  justify-center -top-[30%] left-[80%]  ">
                5
              </span>
            </NavLink>
          </li>
        </div>
      </header>
    </>
  );
};

export default Header;
