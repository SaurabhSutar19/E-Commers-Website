import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
const Trusted = () => {
  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className=" mx-auto px-10 md:px-28">
          <h3 className="text-xl tracking-wide font-semibold text-center mb-5 text-gray-600 hover:text-indigo-600">
            Trusted By 1000+ Companies
          </h3>
          <div className="flex flex-col justify-center items-center  md:flex-row md:justify-between  gap-12">
            {/* my 1st img  */}
            <div className="">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
                className="  hover:shadow-xl rounded-xl p-2 hover:scale-105 transition-all"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
                className="  hover:shadow-xl rounded-xl p-2 hover:scale-105 transition-all"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
                className="  hover:shadow-xl rounded-xl p-2 hover:scale-105 transition-all"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
                className="  hover:shadow-xl rounded-xl p-2 hover:scale-105 transition-all"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
                className="  hover:shadow-xl rounded-xl p-2 hover:scale-105 transition-all"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trusted;
