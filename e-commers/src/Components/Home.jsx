import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  const data = {
    name: "E-Commerce store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
