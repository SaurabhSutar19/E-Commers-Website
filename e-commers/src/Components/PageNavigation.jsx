import React from "react";
import { NavLink } from "react-router-dom";
const PageNavigation = ({ title }) => {
  return (
    <>
      <NavLink to="/" className="text-gray-600">
        Home
      </NavLink>
      /{title}
    </>
  );
};

export default PageNavigation;
