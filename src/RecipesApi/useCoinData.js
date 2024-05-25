import { useQuery } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";
import useAuth from "../hooks/useAuth";

function useCoinData() {
  const { user } = useAuth();

  const {
    data: coinData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstancePublic.get(`/userCoin/${user.email}`);
      console.log(res.data);
      return res.data;
    },
    queryKey: ["userCoin", user?.email],
    enabled: !!user?.email, // Only run the query if user.email exists
  });

  return { coinData, isLoading, isError, error };
}

export default useCoinData;
