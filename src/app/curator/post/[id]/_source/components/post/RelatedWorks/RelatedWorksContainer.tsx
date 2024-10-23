'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import RelatedWork from './RelatedWork';

const RelatedWorksContainer = () => {
  return (
    <div className="mb-[40px]">
      <p className="text-md font-bold mb-[20px]">연관작품</p>
      <Swiper slidesPerView={2.2}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <RelatedWork />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedWorksContainer;
