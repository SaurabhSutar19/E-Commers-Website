import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  const data = {
    name: "E-Commerce store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
    </>
  );
};

export default Home;
