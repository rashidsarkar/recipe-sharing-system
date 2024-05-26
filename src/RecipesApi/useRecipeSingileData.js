import { useQuery } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";
import useAuth from "../hooks/useAuth";
import useAxiosInstanceSecure from "../AxiosApi/useAxiosInstanceSecure";

function useRecipeSingleData(recipeId) {
  const { user } = useAuth();
  const { axiosInstanceSecure } = useAxiosInstanceSecure();

  const {
    data: recipeSingleData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstanceSecure.get(`/api/recipeSingleData`, {
        params: { id: recipeId },
      });
      //   console.log(res.data);
      return res.data;
    },
    queryKey: ["recipeSingleData", recipeId],
    enabled: !!recipeId, // Only run the query if recipeId exists
  });

  return { recipeSingleData, isLoading, isError, error };
}

export default useRecipeSingleData;
