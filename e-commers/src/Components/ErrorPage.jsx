import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="py-24  flex justify-center items-center">
        <div className="flex flex-col justify-center bg-white shadow-md items-center  min-w-[60rem] min-h-[30rem] rounded-2xl gap-10 px-20">
          <h1 className="text-6xl font-bold text-red-700">404</h1>
          <h2 className="text-5xl font-semibold text-red-800">
            UH OH! You're lost.
          </h2>
          <p className="text-xl text-red-700 ">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-violet-700 to-pink-700 text-white uppercase tracking-wide font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform ease-in-out">
              Go Back to Home
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
