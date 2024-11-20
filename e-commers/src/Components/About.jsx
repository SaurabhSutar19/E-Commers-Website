import React from "react";
import HeroSection from "./HeroSection";

const About = () => {
  const data = {
    name: "E-Commerce Shop",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
