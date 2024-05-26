import React from "react";
import { FaAward, FaRegUser } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./ProductCounter.css";

function CounterBox({ icon: Icon, end, label, subLabel }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-full px-2 md:w-1/2 lg:w-1/4">
      <div className="counter-box-1" ref={ref}>
        <div className="text-5xl text-primary">
          <i>
            <Icon />
          </i>
        </div>
        <h1 className="text-5xl counter">
          {inView && <CountUp end={end} duration={3} />}
        </h1>
        <h5 className="text-xl">
          {label} <span>{subLabel}</span>
        </h5>
      </div>
    </div>
  );
}

function ProductRevew() {
  return (
    <div className="counters-1">
      <div className="container">
        <div className="flex flex-wrap justify-center mx-2">
          <CounterBox
            icon={IoFastFoodOutline}
            end={1276}
            label="Total"
            subLabel="Recipes"
          />
          <CounterBox
            icon={FaRegUser}
            end={396}
            label="Total"
            subLabel="Users"
          />
          <CounterBox
            icon={FaAward}
            end={177}
            label="Award"
            subLabel="Winning"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductRevew;
