import React from "react";

function RecipeDetails() {
  let youtubeCode = "fF4XYwZtKb0?si=sDh6NnTAGa-v76yu";
  return (
    <>
      <div className="py-10 pt-[50px]">
        <div className="container mx-auto">
          <div data-aos="zoom-in" className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/400" // Placeholder image
                alt="Recipe Image"
                className="w-full rounded-lg"
              />
            </div>
            <div data-aos="zoom-in" className="w-full p-8 md:w-1/2">
              <h2 className="text-3xl italic font-semibold">Recipe Name</h2>
              <p className="mt-4">
                <strong>Category:</strong> Appetizer
              </p>
              <p className="">
                <strong>Country:</strong> Bangladesh
              </p>
              <p className="">
                <strong>creater email:</strong> email
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Recipe Details</h3>
                <p className="mt-4">
                  A rich and moist chocolate cake with a creamy chocolate
                  frosting.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xl font-medium">purses by users email </p>
              </div>
              {/* Embed the youtube video with iframe */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
