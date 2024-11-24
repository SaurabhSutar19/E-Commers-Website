import React from "react";
import Product from "../Components/product";
import { useAppContext } from "../context/productcontext";

const FeatureProducts = () => {
  // const { isLoding, featureProducts } = useAppContext();
  // if (isLoding) {
  //   return <div className="text-center text-2xl text-gray-700">Loding...</div>;
  // }
  // if (!featureProducts || featureProducts.length === 0) {
  //   return (
  //     <div className="text-center text-lg text-red-600">
  //       No featured Products avalaible
  //     </div>
  //   );
  // }

  const { isLoading, featureProducts } = useAppContext();

  if (isLoading) {
    return <div className="text-center text-2xl text-gray-500">Loading...</div>;
  }

  if (!featureProducts || featureProducts.length === 0) {
    return (
      <div className="text-center text-lg text-red-500">
        No featured products available.
      </div>
    );
  }
  console.log(featureProducts);
  return (
    <>
      <section className="py-20 bg-gray-200">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center md:text-start font-semibold mb-10">
            <h1 className=" text-md text-gray-600 hover:text-indigo-600">
              Check Now!
            </h1>
            <p className=" text-2xl text-gray-900 hover:text-indigo-700">
              Our Feature Services
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-10">
            {featureProducts.map((curElem) => (
              <Product key={curElem.id} {...curElem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;
