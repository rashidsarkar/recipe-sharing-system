import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";
import Swal from "sweetalert2";

function useBuyCoin() {
  const queryClient = useQueryClient();
  const { mutateAsync: buyCoin, error: addError } = useMutation({
    mutationFn: async ({ email, coinAmount }) => {
      const res = await axiosInstancePublic.put("/api/buyCoin", {
        email,
        coinAmount,
      });
      return res.data;
    },
    onError: (error) => {
      console.error("Error buying coins:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error buying coins. Please try again.",
        icon: "error",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userCoin"]);
      Swal.fire({
        title: "Coins Purchased",
        text: "Your coins have been successfully purchased.",
        icon: "success",
      });
    },
  });

  return { buyCoin, addError };
}

export default useBuyCoin;
