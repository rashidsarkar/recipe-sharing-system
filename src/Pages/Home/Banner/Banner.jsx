import { TypeAnimation } from "react-type-animation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Banar.css";
import TextScramble from "../../../TextEffectComponents/TextScramble/TextScramble";
import BannerDecpt from "../../../TextEffectComponents/BannerDecpt/BannerDecpt";
import MyBtn from "../../../TextEffectComponents/MyBtn/MyBtn";
import { Link } from "react-router-dom";

function Banar() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="max-w-[220px]  rounded-lg shadow-2xl lg:max-w-lg md:max-w-md ">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCube, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/RN7dmjt/pexels-kampus-7964666.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg "
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/NCYJ5SY/pexels-kampus-7964669.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/H2kW4Td/pexels-kampus-8629042.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/Hnn7M0c/pexels-kampus-8629036.jpg"
                className="object-fill rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* https://i.ibb.co/RN7dmjt/pexels-kampus-7964666.jpg
https://i.ibb.co/NCYJ5SY/pexels-kampus-7964669.jpg
https://i.ibb.co/Hnn7M0c/pexels-kampus-8629036.jpg
https://i.ibb.co/H2kW4Td/pexels-kampus-8629042.jpg */}

        <div className="">
          <h1 className="text-5xl lg:w-[695px] lg:h-[100px]">
            <TextScramble text=" Discover Your Next Favorite Dish with Us" />
          </h1>

          <BannerDecpt>
            Explore a world of flavors with Gourmet Recipes. We offer a curated
            collection of delicious and easy-to-follow recipes, ensuring every
            meal is a culinary delight.
          </BannerDecpt>
          <div className="space-x-3">
            <Link to={`/recipes`} className="btn btn-primary">
              See recipes
            </Link>

            {/* <MyBtn>See recipes</MyBtn>
            <MyBtn>Add recipes</MyBtn> */}
            <Link to={`/addRecipes`} className="btn btn-primary">
              Add recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banar;
