import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

const Home = () => {
  const data = {
    name: "E-Commerce store",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
