import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";

function usePurchaseRecipe() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: purchaseRecipe, error: addError } = useMutation({
    mutationFn: async (updateData) => {
      const res = await axiosInstancePublic.post(
        `/api/purchaseRecipe`,
        updateData
      );
      return res.data;
    },
    onError: (error) => {
      console.error("Error Purchase recipe:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error Purchase your recipe. Please try again.",
        icon: "error",
      });
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
      //   navigate("/recipes");
    },
  });

  return { purchaseRecipe, addError };
}

export default usePurchaseRecipe;
