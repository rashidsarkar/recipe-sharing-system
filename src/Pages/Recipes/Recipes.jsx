import React, { useState, useEffect } from "react";
import axiosInstancePublic from "../../AxiosApi/axiosInstancePublic";
import RecipesCard from "../../components/RecipesComponents/RecipesCard/RecipesCard";
import { BiSearch } from "react-icons/bi";

import "./Recipes.css";
import CustomLoading from "../../components/CustomLoading/CustomLoading";

function Recipes() {
  const [searchValue, setSearchValue] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const res = await axiosInstancePublic.get(
          `/api/allRecipe/?recipe_name=${searchValue}&category=${category}&country=${country}`
        );
        setMyData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is done
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, [searchValue, country, category]);

  const handleSearchClick = async () => {
    setLoading(true);
    try {
      const res = await axiosInstancePublic.get(
        `/api/allRecipe/?recipe_name=${searchValue}&category=${category}&country=${country}`
      );
      setMyData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setLoading(true);
    console.log(newCategory);
    try {
      const res = await axiosInstancePublic.get(
        `/api/allRecipe/?recipe_name=${searchValue}&category=${newCategory}&country=${country}`
      );
      setMyData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="assignment-nav-wrap">
          <ul
            className="flex flex-wrap items-center justify-between gap-2 nav nav-pills"
            id="pills-tab-1"
            role="tablist"
          >
            <li className="mx-auto nav-item lg:mx-0">
              <button className="text-left nav-link active">All Recipes</button>
            </li>

            <li className="flex flex-wrap items-center justify-center lg:justify-end">
              <p className="nav-link active">Search by Name</p>
              <div className="relative lg:ml-4">
                <input
                  type="text"
                  placeholder="Enter Name..."
                  className="border w-[178px] border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <BiSearch
                  className="absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 cursor-pointer right-2 top-1/2 lg:h-8 lg:w-8"
                  onClick={handleSearchClick}
                />
              </div>
            </li>
            <li className="flex flex-wrap items-center justify-center lg:justify-end">
              <p className="nav-link active">Search by Country</p>
              <div className="relative lg:ml-4">
                <input
                  type="text"
                  placeholder="Enter Country..."
                  className="border w-[178px] border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <BiSearch
                  className="absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 cursor-pointer right-2 top-1/2 lg:h-8 lg:w-8"
                  onClick={handleSearchClick}
                />
              </div>
            </li>

            <li className="mx-auto">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="border w-[178px] border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Category</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Main Course">Main Course</option>
                <option value="Dessert">Dessert</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {loading ? (
        <CustomLoading /> // Show loader when loading is true
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {myData.map((recipe) => (
            <RecipesCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}

export default Recipes;
