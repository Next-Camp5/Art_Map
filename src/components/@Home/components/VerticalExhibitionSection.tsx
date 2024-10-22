"use client";

import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import displayThumbnail from "@/public/images/displayThumbnail.png";
import Link from "next/link";

const ExhibitionSlide = (index: number) => (
  <SwiperSlide>
    <Link href="/exhibition/detail" className="flex flex-col gap-2.5 w-[200px]">
      {/* exhibition thumbnail */}
      <Image
        src={displayThumbnail}
        alt={`전시 이미지`}
        width={200}
        height={200}
      />
      {/* exhibition info */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-md font-bold text-gray-6 truncate max-w-[200px]">
          정재철 : 사랑과 평화
        </h3>
        <div className="flex flex-col">
          <p className="text-sm text-gray-4">2021.08.17 ~ 2021.09.09</p>
          <p className="text-sm font-bold text-left text-gray-4">
            아르코미술관
          </p>
        </div>
      </div>
    </Link>
  </SwiperSlide>
);

const VerticalExhibitionSection = () => {
  return (
    <>
      {/* exhibition container */}
      <Swiper
        slidesPerView={1.5}
        slidesPerGroup={1}
        spaceBetween={15}
        width={320}
        slidesOffsetAfter={-30}
      >
        {[...Array(5)].map((_, index) => ExhibitionSlide(index))}
      </Swiper>
    </>
  );
};

export default VerticalExhibitionSection;
