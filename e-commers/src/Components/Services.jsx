import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="py-24 bg-sky-100">
      <div className=" mx-auto px-10 md:px-28">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center justify-center bg-white text-center hover:scale-105 transition-all rounded-2xl shadow-md p-6 h-48 flex-1">
            <TbTruckDelivery className="text-indigo-600 bg-white w-12 h-12 p-3 hover:scale-110 transition-all rounded-full shadow-lg" />
            <h3 className="mt-4 text-sm font-semibold text-gray-700 hover:text-indigo-700">
              Super Fast and Free Delivery
            </h3>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Service 2.1 */}
            <div className="flex items-center justify-center bg-white hover:scale-105 transition-all text-center rounded-2xl shadow-md p-6 h-20 space-x-4">
              <MdSecurity className="text-indigo-600 bg-white w-10 h-10 p-2 rounded-full shadow-lg hover:scale-110 transition-all" />
              <h3 className="mt-2 text-xs font-semibold text-gray-700 hover:text-indigo-700">
                Non-contact Shipping
              </h3>
            </div>
            {/* Service 2.2 */}
            <div className="flex  items-center justify-center hover:scale-105 transition-all bg-white text-center rounded-2xl shadow-md p-6 h-20 space-x-4">
              <GiReceiveMoney className="text-indigo-600 bg-white w-10 h-10 p-2 rounded-full shadow-lg hover:scale-110 transition-all" />
              <h3 className="mt-2 text-xs font-semibold text-gray-700 hover:text-indigo-700">
                Money-back Guaranteed
              </h3>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center justify-center hover:scale-105 transition-all bg-white text-center rounded-2xl shadow-md p-6 h-48 flex-1">
            <RiSecurePaymentLine className="text-indigo-600 bg-white w-12 h-12 p-3 rounded-full shadow-lg hover:scale-110 transition-all" />
            <h3 className="mt-4 text-sm font-semibold text-gray-700 hover:text-indigo-700">
              Super Secure Payment System
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
