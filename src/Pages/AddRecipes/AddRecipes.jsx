import { useState } from "react";
import axios from "axios";
// Ensure you have the useAuth hook to get the user's email
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axiosInstancePublic from "../../AxiosApi/axiosInstancePublic";
import useAddRecipes from "../../RecipesApi/useAddRecipes";

function AddRecipes() {
  const { addRecipe } = useAddRecipes();
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    image: null,
    details: "",
    videoCode: "",
    country: "",
    category: "",
  });

  const { user } = useAuth();
  const navigate = useNavigate();
  const imgbbApiKey = "11817f0fc2ac18705c29b88767739174"; // Replace with your actual imgbb API key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setRecipeData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (recipeData.image) {
      const formData = new FormData();
      formData.append("image", recipeData.image);
      try {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          formData
        );
        imageUrl = res.data.data.url;
      } catch (error) {
        console.error("Image upload failed:", error);
        return;
      }
    }
    console.log(recipeData);

    const newRecipe = {
      recipe_name: recipeData.recipeName,
      image: imageUrl,
      details: recipeData.details,
      video_code: recipeData.videoCode,
      country: recipeData.country,
      category: recipeData.category,
      creatorEmail: user.email,
      watchCount: 0,
      purchased_by: [],
    };

    await addRecipe(newRecipe);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-base-200">
        <h2 className="mb-6 text-2xl font-bold text-center">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Recipe Name
            </label>
            <input
              type="text"
              name="recipeName"
              value={recipeData.recipeName}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="block w-full mt-1 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <textarea
              name="details"
              value={recipeData.details}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video Code
            </label>
            <input
              type="text"
              name="videoCode"
              value={recipeData.videoCode}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={recipeData.country}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={recipeData.category}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Dessert">Dessert</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipes;
