import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRecipeSingleData from "../../RecipesApi/useRecipeSingileData";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AOS from "aos";
import "aos/dist/aos.css";

function RecipeDetails() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const { idx } = useParams(); // Assuming the recipe ID is in the URL parameters
  const { recipeSingleData, isLoading, isError, error } =
    useRecipeSingleData(idx);

  if (isLoading) return <CustomLoading />;
  if (isError) return <ErrorMessage error={error} />;

  const {
    image,
    recipe_name,
    category,
    country,
    creatorEmail,
    details,
    purchased_by,
    video_code,
    watchCount,
  } = recipeSingleData;

  return (
    <>
      <div className="py-10 pt-[50px]">
        <div className="container mx-auto">
          <div data-aos="zoom-in" className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <img
                src={image} // Dynamic image URL
                alt={recipe_name}
                className="w-full rounded-lg"
              />
            </div>
            <div data-aos="zoom-in" className="w-full p-8 md:w-1/2">
              <h2 className="text-3xl italic font-semibold">{recipe_name}</h2>
              <p className="mt-4">
                <strong>Category:</strong> {category}
              </p>
              <p className="">
                <strong>Country:</strong> {country}
              </p>
              <p className="">
                <strong>Creator Email:</strong> {creatorEmail}
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Recipe Details</h3>
                <p className="mt-4">{details}</p>
              </div>
              <div className="mt-8">
                <p className="text-xl font-medium">Purchased by Users:</p>
                <ul className="mt-2 ml-5 list-disc">
                  {purchased_by.map((email, index) => (
                    <li key={index}>{email}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-xl font-medium">Watch Count: {watchCount}</p>
              </div>
              {/* Embed the YouTube video with iframe */}
              <div className="mt-8">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video_code}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
