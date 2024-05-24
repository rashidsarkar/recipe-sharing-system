/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";

import VanillaTilt from "vanilla-tilt";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Firebase/AuthProvider/AuthProvider";

function RecipesCard({ recipes }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);
  const { floorNo, blockName, apartmentNo, rent, image } = recipes || {};

  // console.log(room);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carda"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cardaaa"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);
  let cardStyle = {
    backgroundImage: `url(${image})`,
  };
  const currentDate = new Date();
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  console.log(formattedDate);

  return (
    <>
      <div className="mx-4 md:mx-0 cards-container">
        <div className="m-2 mx-auto carda lg:m-7 md:m-3 ">
          <div style={cardStyle} className="card-image quiz-image"></div>
          <div className="card-text">
            <span className="date">Apartment Number : {apartmentNo}</span>
            <h2>{blockName}</h2>

            <div className="flex justify-around">
              <p>Rent: ${rent}</p>
              <p>Floor Number : {floorNo}</p>
            </div>
          </div>
          <button className="w-9/12 mx-auto btn btn-primary">Agreement</button>
        </div>
      </div>
    </>
  );
}

export default RecipesCard;
