import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic"; // This doesn't seem to be used
import useAxiosInstanceSecure from "../AxiosApi/useAxiosInstanceSecure";
import { useState } from "react";

function usePurchaseRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { axiosInstanceSecure } = useAxiosInstanceSecure();
  const [singileData, setSingileData] = useState("");

  const { mutateAsync: purchaseRecipe, error: addError } = useMutation({
    mutationFn: async (updateData) => {
      const { recipeId } = updateData;
      setSingileData(recipeId);
      const res = await axiosInstanceSecure.post(
        `/api/purchaseRecipe`,
        updateData
      );
      return res.data;
    },
    onError: (error) => {
      console.error("Error purchasing recipe:", error);
      if (
        error.response &&
        error.response.data.message === "User already purchased this recipe"
      ) {
        Swal.fire({
          title: "Info",
          text: "You have already purchased this recipe.",
          icon: "info",
        });
        navigate(`/recipeDetails/${singileData}`);
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an error purchasing your recipe. Please try again.",
          icon: "error",
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userCoin"]);
      Swal.fire({
        icon: "success",
        title: "Purchase Successful",
        text: "You have successfully purchased the recipe access.",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-right",
      });
      navigate(`/recipeDetails/${singileData}`);
    },
  });

  return { purchaseRecipe, addError };
}

export default usePurchaseRecipe;
