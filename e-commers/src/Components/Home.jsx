import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import Footer from "./Footer";

const Home = () => {
  const data = {
    name: "E-Commerce store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
