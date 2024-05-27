import React, { useState, useEffect } from "react";
import axiosInstancePublic from "../../AxiosApi/axiosInstancePublic";
import SectionHeading from "../../TextEffectComponents/SectionHeading/SectionHeading";
import { useNavigate } from "react-router-dom";

function Suggest({ category, recipeSingleData }) {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(recipeSingleData);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstancePublic.get(
          `/api/allRecipe/ceta/?&category=${category}`
        );
        // Filter out the item with the current _id and get only 3 items
        console.log(res.data, "==");
        const filteredData = res.data
          .filter((item) => item._id !== recipeSingleData._id)
          .slice(0, 3);
        setMyData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, recipeSingleData._id]);

  return (
    <div className="p-4">
      <SectionHeading>You May Like This</SectionHeading>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {myData.map((item) => (
            <div
              onClick={() => navigate(`/recipeDetails/${item._id}`)}
              key={item._id}
              className="w-full max-w-xs text-center bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.recipe_name}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">
                  {item.recipe_name}
                </h3>
                <p className="text-gray-600">Country: {item.country}</p>
                <p className="text-gray-600">Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Suggest;
