import React, { useState } from "react";
import e_logo from "../assets/e_logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { BsFillHeartFill, BsCart4 } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="flex justify-between items-center text-black py-2 px-4
        md:px-24 bg-gradient-to-tr from-violet-100 to-pink-100 shadow-md hover:shadow-lg fixed w-full z-50"
      >
        {/* Logo */}
        <NavLink to="/">
          <img
            src={e_logo}
            alt="Logo"
            className="w-20 hover:scale-105 transition-all drop-shadow-md"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 text-gray-700 hover:text-sky-600 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-3 text-gray-700 hover:text-sky-600 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="p-3 text-gray-700 hover:text-sky-600 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="p-3 text-gray-700 hover:text-sky-600 rounded-xl hover:scale-105 transition-all cursor-pointer">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center gap-6">
          <button className="text-xl hover:text-violet-600 text-violet-500 hover:scale-125 transition-all">
            <MdLogout />
          </button>
          <NavLink to="/cart" className="relative">
            <BsCart4 className="text-2xl text-sky-500 hover:text-sky-600 hover:scale-125 transition-all" />
            <span className="absolute -top-2 left-5 bg-sky-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              10
            </span>
          </NavLink>
          <NavLink to="/wishlist" className="relative">
            <BsFillHeartFill className="text-xl text-red-500 hover:text-red-600 hover:scale-125 transition-all" />
            <span className="absolute -top-2 left-4 bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
              5
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="xl:hidden text-4xl text-sky-500 hover:text-sky-700 transition-transform"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <IoClose className="text-red-600 hover:text-red-700" />
          ) : (
            <IoMenu className="text-sky-500 hover:text-sky-700" />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`absolute xl:hidden top-20 left-0 w-full bg-white z-40 transform transition-all duration-300 ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8 font-semibold text-lg">
          <li>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-sky-600 transition-colors"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-sky-600 transition-colors"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-gray-700 hover:text-sky-600 transition-colors"
              onClick={closeMenu}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-sky-600 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="relative" onClick={closeMenu}>
              <BsCart4 className="text-2xl text-sky-500 hover:text-sky-600" />
              <span className="absolute -top-2 left-5 bg-sky-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                10
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="relative" onClick={closeMenu}>
              <BsFillHeartFill className="text-xl text-red-500 hover:text-red-600" />
              <span className="absolute -top-2 left-4 bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                5
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
