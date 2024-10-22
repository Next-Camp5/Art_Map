"use client";

import "swiper/css";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import artistThumbnail from "@/public/images/profile.png";
import Profile from "@/components/common/profile/Profile";

const ArtistItem = () => {
  return (
    <Swiper spaceBetween={12} slidesPerView={4.3} className="w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center gap-2.5 max-w-[70px]"
        >
          <Link
            href="/artist/detail"
            className="flex flex-col items-center gap-2.5 px-1.5"
          >
            <Profile size="L" imageSrc={artistThumbnail} />
            <span className="text-sm text-gray-7">{"홍길동"}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ArtistItem;
