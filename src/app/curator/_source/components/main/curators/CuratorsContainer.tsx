'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Curator from '../../common/Curator';

const CuratorsContainer = () => {
  return (
    <div className="mb-[50px]">
      <h2 className="text-lg font-bold mb-[20px]">큐레이터</h2>
      <Swiper slidesPerView={4.4} spaceBetween={15} slidesOffsetAfter={10}>
        {Array.from({ length: 20 }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <Curator key={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CuratorsContainer;
