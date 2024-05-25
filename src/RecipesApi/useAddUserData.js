import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstancePublic from "../AxiosApi/axiosInstancePublic";
import Swal from "sweetalert2";

function useAddUserData() {
  const queryClient = useQueryClient();

  const { mutateAsync: addUserData, error: addError } = useMutation({
    mutationFn: async (userData) => {
      const res = await axiosInstancePublic.post(`/api/userData`, userData);
      return res.data;
    },
    onError: (error) => {
      console.error("Error adding user data:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error adding your data. Please try again.",
        icon: "error",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userCoin"]);
      Swal.fire({
        title: "User Data Added",
        text: "Your data has been successfully added.",
        icon: "success",
      });
    },
  });

  return { addUserData, addError };
}

export default useAddUserData;
