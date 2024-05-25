import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
