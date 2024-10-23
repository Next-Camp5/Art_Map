'use client';

import Curator from '@/app/curator/_source/components/common/Curator';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const CuratorsContainer = () => {
  return (
    <div className="mb-[40px]">
      <p className="text-md font-bold mb-[20px]">연관 큐레이터</p>
      <Swiper slidesPerView={4.4} spaceBetween={15}>
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
