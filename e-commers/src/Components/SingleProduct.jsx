import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import FormatPrice from "../Helpers/FormatPrice";
import troly from "../assets/shopping-cart.png";
import heart from "../assets/heart.png";
import { BsFillHeartFill, BsCart4 } from "react-icons/bs";
import {
  TbTruckDelivery,
  TbReplace,
  TbTruckReturn,
  TbShieldCheck,
} from "react-icons/tb";
import Star from "../Helpers/Star";
import AddToCart from "./AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  if (isSingleLoading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">Loading...</div>
    );
  }

  return (
    <>
      <section className="py-20 ">
        {/* Page Navigation */}
        <div className="px-5 md:px-20 h-20 flex justify-start items-center text-2xl font-semibold bg-gray-300">
          <PageNavigation title={name} />
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 py-10">
          {/* Images */}
          <div>
            <MyImage img={image} />
          </div>

          {/* Details */}
          <div className="space-y-5 px-5 md:px-10 font-medium text-gray-800">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
            </div>
            <div>
              <Star star={stars} review={reviews} />
            </div>
            <div className="flex items-center">
              MRP :
              <del className="ml-2 text-gray-500">
                <FormatPrice price={price + 250000} />
              </del>
            </div>
            <div>
              <p>
                Deal of the Day :{" "}
                <span className="text-indigo-600 font-medium">
                  <FormatPrice price={price} />
                </span>
              </p>
            </div>
            <div>
              <p>{description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-b-2 border-gray-300 pb-5">
              {/* Free Delivery */}
              <div className="flex flex-col items-center text-center">
                <TbTruckDelivery
                  className="text-indigo-600 bg-white w-12 h-12 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                  aria-label="Free Delivery"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-700">
                  Free Delivery
                </h3>
              </div>
              {/* 30 Days Replacement */}
              <div className="flex flex-col items-center text-center">
                <TbReplace
                  className="text-indigo-600 bg-white w-12 h-12 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                  aria-label="30 Days Replacement"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-700">
                  30 Days Replacement
                </h3>
              </div>
              {/* Fast Delivery */}
              <div className="flex flex-col items-center text-center">
                <TbTruckReturn
                  className="text-indigo-600 bg-white w-12 h-12 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                  aria-label="Fast Delivery"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-700">
                  Fast Delivery
                </h3>
              </div>
              {/* 2 Years Warranty */}
              <div className="flex flex-col items-center text-center">
                <TbShieldCheck
                  className="text-indigo-600 bg-white w-12 h-12 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                  aria-label="2 Years Warranty"
                />
                <h3 className="mt-2 text-sm font-medium text-gray-700">
                  2 Years Warranty
                </h3>
              </div>
            </div>

            {/* Stock and Info */}
            <div>
              <p>
                Available :{" "}
                <span
                  className={`font-medium ${
                    stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stock > 0 ? "In Stock" : "Not Available"}
                </span>
              </p>
            </div>
            <div>
              <p>
                Id : <span className="font-medium text-green-600">{id}</span>
              </p>
            </div>
            <div>
              <p>
                Brand :{" "}
                <span className="font-medium text-green-600">{company}</span>
              </p>
            </div>
            <hr />
            <div>{stock > 0 && <AddToCart product={singleProduct} />}</div>
            <div className="flex  items-center gap-4 mb-3">
              <button className="px-3 py-3 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold ">
                <p className="font-serif hover:scale-105  ">Buy Now</p>
              </button>
              <button className="px-3 py-3 shadow-md rounded-lg bg-gray-100 hover:bg-gray-200 ">
                <BsCart4 className="text-gray-600 hover:scale-125 hover:text-gray-800 text-2xl font-bold" />
              </button>
              <button className="px-3 py-3 shadow-md rounded-lg bg-gray-100 hover:bg-gray-200 font-blod ">
                <BsFillHeartFill className="text-red-600 hover:scale-125 hover:text-red-800 text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
