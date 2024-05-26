import React from "react";
import { useNavigate } from "react-router-dom";

function Purchasecoin() {
  const navigate = useNavigate();

  const handleBuyNow = (coins, price) => {
    const paymentData = {
      coins,
      price,
      description: `${coins} Coins`,
    };

    navigate("/checkout", { state: { paymentData } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="max-w-sm p-6 overflow-hidden rounded shadow-lg bg-base-200 stat place-items-center">
        <div className="stat-title">100 Coins</div>
        <div className="stat-value">$1</div>
        <div className="stat-desc">
          <button
            onClick={() => handleBuyNow(100, 1)}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="max-w-sm p-6 overflow-hidden rounded shadow-lg bg-base-200 stat place-items-center">
        <div className="stat-title">500 Coins</div>
        <div className="stat-value text-secondary">$5</div>
        <div className="stat-desc text-secondary">
          <button
            onClick={() => handleBuyNow(500, 5)}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="max-w-sm p-6 overflow-hidden rounded shadow-lg bg-base-200 stat place-items-center">
        <div className="stat-title">1000 Coins</div>
        <div className="stat-value">$10</div>
        <div className="stat-desc">
          <button
            onClick={() => handleBuyNow(1000, 10)}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purchasecoin;
