"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import BestPick from "./BestPick";

const bestPicks = [
  {
    id: 1,
    title: "상처가 어쩌구,,,",
    curator: "김땡땡",
    img: "/social/login/kakao.png",
  },
  {
    id: 2,
    title: "상처가 어쩌구,,,",
    curator: "김땡땡",
    img: "/social/login/kakao.png",
  },
  {
    id: 3,
    title: "상처가 어쩌구,,,",
    curator: "김땡땡",
    img: "/social/login/kakao.png",
  },
  {
    id: 4,
    title: "상처가 어쩌구,,,",
    curator: "김땡땡",
    img: "/social/login/kakao.png",
  },
];

const BestPicksContainer = () => {
  return (
    <div className="mb-[50px]">
      <h2 className="text-lg font-bold mb-[20px]">지금 인기글</h2>

      <Swiper slidesPerView={1.3} slidesOffsetAfter={78}>
        {bestPicks.map((bestPick) => (
          <SwiperSlide key={bestPick.id}>
            <BestPick bestPick={bestPick} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestPicksContainer;
