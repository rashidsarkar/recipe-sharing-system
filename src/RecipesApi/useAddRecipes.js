import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";

function useAddRecipes() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: addRecipe, error: addError } = useMutation({
    mutationFn: async (recipeData) => {
      const res = await axiosInstancePublic.post(`/api/AddRecipes`, recipeData);
      return res.data;
    },
    onError: (error) => {
      console.error("Error adding recipe:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error adding your recipe. Please try again.",
        icon: "error",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["recipesData"]);
      Swal.fire({
        title: "Recipe Added",
        text: "Your recipe has been successfully added.",
        icon: "success",
      });
      navigate("/recipes");
    },
  });

  return { addRecipe, addError };
}

export default useAddRecipes;
