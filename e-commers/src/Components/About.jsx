import { useAppContext } from "../context/productcontext";
import HeroSection from "./HeroSection";

const About = () => {
  const myname = useAppContext();
  const data = {
    name: "E-Commerce Shop",
  };
  return (
    <>
      {myname}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
