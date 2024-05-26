import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";
import "./RecipesCardCss.css";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCoinData from "../../../RecipesApi/useCoinData.js";
import usePurchaseRecipe from "../../../RecipesApi/usePurchaseRecipe.js";
import { FaRegStar } from "react-icons/fa";

function RecipesCard({ recipe }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { coinData, isLoading, isError, error } = useCoinData();
  const { purchaseRecipe, addError } = usePurchaseRecipe();
  // console.log(addError);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const {
    category,
    country,
    details,
    video_code,
    image,
    recipe_name,
    creatorEmail,
    purchased_by,
  } = recipe;

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".carda"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5,
    });
  }, []);

  let cardStyle = {
    backgroundImage: `url(${image})`,
  };

  const handleViewRecipe = (creatormail) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please login",
        text: "You need to be logged in to view this recipe.",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-right",
      });
      return;
    } else if (creatormail === user.email) {
      navigate(`/recipeDetails/${recipe._id}`);
      return;
    } else if (coinData.coin < 10) {
      navigate(`/purchasecoin`);

      Swal.fire({
        icon: "warning",
        title: "Please Purchase Coin",
        text: "You need to purchase coins for this recipe.",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-right",
      });
      return;
    } else if (coinData.coin >= 10) {
      Swal.fire({
        title: "Confirm Purchase",
        text: "Viewing this recipe will cost 10 coins. Do you want to proceed?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, purchase!",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          let updateData = {
            userEmail: user.email,
            recipeId: recipe._id,
          };
          await purchaseRecipe(updateData);
        }
      });
    }
  };

  return (
    <div className="mx-4 md:mx-0 cards-container">
      <div className="m-2 mx-auto carda lg:m-7 md:m-3">
        <div style={cardStyle} className="card-image quiz-image"></div>
        <div className="card-text">
          <span className="date">Purchased {purchased_by.length} User</span>
          <h2>{recipe_name}</h2>
          <div className="flex flex-col md:flex-row justify-around items-center  text-center">
            <p>Creator Email: {creatorEmail}</p>
            <p>Country: {country}</p>
          </div>
          {user && (
            <div className="p-3 flex justify-center items-center gap-x-2">
              <FaRegStar
                className={`inline-block cursor-pointer ${
                  isClicked ? "text-green-500" : ""
                }`}
                onClick={handleClick}
              />
            </div>
          )}
        </div>
        <button
          onClick={() => handleViewRecipe(creatorEmail)}
          className="w-9/12 mx-auto btn btn-primary"
        >
          View The Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipesCard;
