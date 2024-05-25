/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";

import VanillaTilt from "vanilla-tilt";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Firebase/AuthProvider/AuthProvider";
import "./RecipesCardCss.css";

function RecipesCard({ recipe }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(recipe);
  const {
    category,
    country,
    details,
    video_code,
    image,
    recipe_name,
    creatorEmail,
  } = recipe;
  console.log(category);

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
  // console.log(formattedDate);

  return (
    <>
      <div className="mx-4 md:mx-0 cards-container">
        <div className="m-2 mx-auto carda lg:m-7 md:m-3 ">
          <div style={cardStyle} className="card-image quiz-image"></div>
          <div className="card-text">
            <span className="date">purchased by</span>
            <h2>{recipe_name}</h2>

            <div className="flex justify-around">
              <p>Creator Email {creatorEmail}</p>

              <p>Country {country}</p>
            </div>
          </div>
          <button className="w-9/12 mx-auto btn btn-primary">
            View The Recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipesCard;
