import React from "react";
import { useLocation } from "react-router-dom";

import PaymentWithStripe from "./PaymentWithStripe";

const Checkout = () => {
  const location = useLocation();
  const paymentData = location.state?.paymentData;
  const { description, price, coins } = paymentData;
  return (
    <div className="min-h-screen py-5 min-w-screen ">
      <div className="px-5">
        <div className="mb-2"></div>
        <div className="mb-2">
          <h1 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Checkout
          </h1>
        </div>
      </div>
      <div className="w-full px-5 py-10 text-gray-800 bg-gray-200 border-t border-b border-gray-200 ">
        <div className="w-full">
          <div className="items-start -mx-3 md:flex">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="w-full pb-6 mx-auto mb-6 font-light text-gray-800 border-b border-gray-200">
                <div className="flex items-center w-full">
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold text-gray-600 uppercase">
                      {description}
                    </h6>
                    <p className="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span className="text-xl font-semibold text-gray-600">
                      ${price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none">
                <div className="flex items-center w-full">
                  <div className="flex-grow">
                    <span className="text-gray-600">Total</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">${price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <h2 className="text-2xl font-bold text-gray-600">
                Payment Section
                <PaymentWithStripe
                  paymentData={paymentData}
                ></PaymentWithStripe>
              </h2>
              {/* <p className="text-gray-400">Payment form will be here.</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5"></div>
    </div>
  );
};

export default Checkout;
