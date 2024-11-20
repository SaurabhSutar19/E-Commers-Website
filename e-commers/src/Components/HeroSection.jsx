import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <section className="py-24">
      <div className=" mx-auto px-6 md:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-600 mb-2">
              Welcome to
            </p>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700 text-4xl font-bold capitalize">
              {name}
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/shop">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-violet-700 to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform ease-in-out">
                Show Now
              </button>
            </NavLink>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center">
            <img
              src="images/hero.jpg"
              alt="hero-section"
              className="w-full max-w-lg rounded-lg hover:scale-105 transition-all drop-shadow-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
