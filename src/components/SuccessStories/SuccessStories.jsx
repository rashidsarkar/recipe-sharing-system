import React from "react";
import ProductRevew from "./ProductCounter/ProductCounter";
import BannerDecpt from "../../TextEffectComponents/BannerDecpt/BannerDecpt";

const SuccessStories = () => {
  const stories = [
    {
      name: "Emily R.",
      story:
        "I started sharing my family recipes on Gourmet Recipes and quickly gained a loyal following. The platform is easy to use and has helped me turn my passion for cooking into a source of income.",
      image: "https://i.ibb.co/7QdVXZR/istockphoto-1298088270-1024x1024.jpg",
    },
    {
      name: "Angle T.",
      story:
        "Selling my recipes on Gourmet Recipes has been a game-changer. The community is supportive, and the additional income has been incredibly helpful.",
      image:
        "https://i.ibb.co/ckqx2kV/1000-F-739666400-De2-TI1-Hxn-Rbq-Ocq-VAxn-On0a-Qx4-M5ne-PD.jpg",
    },
    {
      name: "Sarahi L.",
      story:
        "As a professional chef, Gourmet Recipes has allowed me to reach a wider audience and share my culinary creations. The feedback and engagement from users have been amazing!",
      image:
        "https://i.ibb.co/W0H22hd/1000-F-801286391-Y7-WR1hen-Dgjen-Ya-Jy-Wb-Fh-Ynj6gm-Tbfi-A.jpg",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container px-6 mx-auto">
        {/* <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">
          Success Stories
        </h2> */}
        <BannerDecpt>
          <p className="mb-12 text-lg text-center text-gray-700">
            Discover why thousands of cooking enthusiasts and professional chefs
            are choosing Gourmet Recipes to share and sell their culinary
            creations. Our platform offers a supportive community, user-friendly
            interface, and the opportunity to turn your passion for cooking into
            a profitable venture.
          </p>
        </BannerDecpt>
        <div className="flex flex-wrap -mx-4">
          {stories.map((story, index) => (
            <div key={index} className="w-full px-4 mb-8 md:w-1/3 ">
              <div className="p-6 rounded-lg shadow-lg bg-base-200 lg:h-[330px]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <BannerDecpt>
                  <h3 className="text-xl font-semibold text-center text-gray-700">
                    {story.name}
                  </h3>
                  <p className="mt-4 text-center text-gray-600">
                    {story.story}
                  </p>
                </BannerDecpt>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductRevew />
    </section>
  );
};

export default SuccessStories;
