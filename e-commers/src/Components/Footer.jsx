import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className=" relative  px-10  z-10 top-28 md:top-16">
        <div className="flex flex-col justify-center  items-center  max-w-5xl mx-auto md:flex-row md:justify-between  md:text-left gap-6 shadow-md hover:shadow-lg rounded-2xl w-full bg-white  p-10   hover:scale-105 transition-all ">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-600 hover:text-indigo-600">
              Ready to get started?
            </h3>
            <h3 className="text-xl font-semibold text-gray-600 hover:text-indigo-600 ">
              Talk to us today
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <NavLink to="/contact">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-violet-700 to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform ease-in-out">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 text-gray-600 py-16 px-8 md:px-32">
        {/* Grid container for the main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mt-8">
          {/* Section 1: About */}
          <div className="mt-16 md:mt-0">
            <h3 className="text-lg font-semibold text-white">Saurabh Sutar</h3>
            <p className="text-sm mt-4 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Section 2: Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Subscribe to get important updates
            </h3>
            <form action="#" className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 text-md outline-none border-2 border-gray-500 rounded-md hover:border-gray-900 duration-200 bg-white peer focus:border-indigo-600 bg-inherit w-full"
              />
              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-violet-700 to-pink-700 text-white uppercase tracking-wide font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Section 3: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <div className="p-3 rounded-full border border-gray-300 hover:scale-110 hover:bg-gray-700 transition-all">
                <FaDiscord className="text-2xl text-gray-300" />
              </div>
              <div className="p-3 rounded-full border border-gray-300 hover:shadow-lg hover:scale-110 transition-all hover:bg-gray-700">
                <FaInstagram className="text-2xl text-gray-300 " />
              </div>
              <div className="p-3 rounded-full border border-gray-300 hover:scale-110 transition-all hover:bg-gray-700">
                <FaYoutube className="text-2xl text-gray-300" />
              </div>
            </div>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Call Us</h3>
            <p className="text-sm mt-4 text-white">+91 9764354143</p>
            <p className="text-sm mt-4 text-white">+91 9637261920</p>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-16 border-t border-gray-700 pt-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center text-sm text-white gap-4">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Saurabh Sutar. All Rights Reserved
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
