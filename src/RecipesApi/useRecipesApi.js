import { useQuery } from "@tanstack/react-query";

import useAuth from "../hooks/useAuth";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";

function useRecipesApi() {
  const axiosInstance = axiosInstancePublic;
  const { user, loading } = useAuth();

  const {
    data: recipesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/allRecipe`);
      // console.log(res.data);
      return res.data;
    },
    queryKey: ["recipesData"],
    // enabled: !loading,
  });
  return { recipesData, isLoading, isError, error };
}

export default useRecipesApi;
