import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftLinearIcon from "../../assets/icons/LeftLinearIcon";
import RightLinearIcon from "../../assets/icons/RightLinearIcon";
import SkeletonCard from "../../skeletons/SkeletonCard/SkeletonCard";
import { StyledSection } from "../../assets/styles/styled.components";
import { useDispatch } from "react-redux";

function MoviesListSection({ title, list }) {
  const fixedTitle = title.split(" ").join("-").toLowerCase();
  const skeletonSlides = Array.from({ length: 4 }, (_, index) => (
    <SwiperSlide key={`skeleton-${index}`}>
      <SkeletonCard />
    </SwiperSlide>
  ));

  return (
    <StyledSection className="!py-10">
      <div className="flex items-center justify-between">
        <h1 className="sm:text-[30px] desktop:text-[40px] font-bold">
          {title}
        </h1>
        <Link className="text-xs sm:text-base" to={`/explore`}>
          Show all
        </Link>
      </div>
      <div className="relative">
        <Swiper
          className="mySwiper !w-full relative"
          navigation={{
            nextEl: `.custom-button-next-${fixedTitle}`,
            prevEl: `.custom-button-prev-${fixedTitle}`,
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {list.length
            ? list.map((listItem, i) => (
                <SwiperSlide key={i}>
                  <MovieCard listItem={listItem} />
                </SwiperSlide>
              ))
            : skeletonSlides}
        </Swiper>
        <button
          className={`absolute top-1/2 -translate-y-1/2 z-10 left-0 custom-button-prev-${fixedTitle} cursor-pointer -ml-5 w-14 h-14 hidden sm:flex items-center justify-center bg-dark-10/20 backdrop-blur-md stroke-white text-gray-700 rounded-full shadow-md transition-all duration-200 ease-in-out focus:outline-none`}
        >
          <LeftLinearIcon />
        </button>
        <button
          className={`absolute top-1/2 -translate-y-1/2 z-10 right-0 custom-button-next-${fixedTitle} cursor-pointer -mr-5 w-14 h-14 hidden sm:flex items-center justify-center bg-dark-20/20 backdrop-blur-md stroke-white text-gray-700 rounded-full shadow-md transition-all duration-200 ease-in-out focus:outline-none`}
        >
          <RightLinearIcon />
        </button>
      </div>
    </StyledSection>
  );
}

export default MoviesListSection;
