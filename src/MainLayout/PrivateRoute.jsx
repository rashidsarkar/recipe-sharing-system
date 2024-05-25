import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider/AuthProvider";
import CustomLoading from "../components/CustomLoading/CustomLoading";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <CustomLoading></CustomLoading>;
  }
  if (user) return children;
  return <Navigate state={location.pathname} to={"/"} replace></Navigate>;
}

export default PrivateRoute;
