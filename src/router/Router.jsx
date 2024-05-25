import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "../MainLayout/PrivateRoute";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import Purchasecoin from "../Pages/Purchasecoin/Purchasecoin";

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
      {
        path: "/recipeDetails",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/purchasecoin",
        element: (
          <PrivateRoute>
            <Purchasecoin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
