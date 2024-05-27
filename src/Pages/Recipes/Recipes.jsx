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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const res = await axiosInstancePublic.get(
        `/api/allRecipe/?recipe_name=${searchValue}&category=${category}&country=${country}&page=${page}`
      );
      if (page === 1) {
        setMyData(res.data.recipes);
      } else {
        setMyData((prevData) => [...prevData, ...res.data.recipes]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchValue, country, category, page]);

  const handleSearchClick = () => {
    setPage(1); // Reset page number when search is clicked
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset page number when category is changed
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isBottom = windowHeight + scrollTop === documentHeight;

    if (isBottom && !loading && !loadingMore) {
      setLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <CustomLoading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {myData.map((recipe) => (
            <RecipesCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
      {loadingMore && <CustomLoading />}{" "}
      {/* Show loading indicator when fetching more data */}
    </>
  );
}

export default Recipes;
