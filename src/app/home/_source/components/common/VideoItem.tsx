"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import VideoThumbnail from "/public/images/video.png";

const VideoItem = () => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1.1} className="w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <SwiperSlide key={index}>
          <Link href="/exhibition/detail">
            <Image
              src={VideoThumbnail}
              alt={`전시 이미지`}
              width={325}
              height={180}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoItem;
