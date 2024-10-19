"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Exhibition from "../../common/Exhibition";

const RelatedExhibitionContainer = () => {
  return (
    <div className="mb-[40px]">
      <p className="text-md font-bold mb-[20px]">연관 전시</p>
      <Swiper slidesPerView={2.2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <Exhibition />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedExhibitionContainer;
