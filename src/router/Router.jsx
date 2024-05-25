import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "../MainLayout/PrivateRoute";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/addRecipes",
        element: (
          <PrivateRoute>
            <AddRecipes />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
