"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import HomeHeader from "@/components/@Layout/HomeHeader";
import Poster from "@/public/images/poster.png";

const ExhibitionBanner = () => {
  return (
    <article className="bg-[#F15114] flex flex-col gap-[30px]">
      <HomeHeader />
      <section className="flex flex-col items-center mb-[30px]">
        <h2 className="sr-only">현재 진행중인 전시회</h2>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar, EffectFade]}
          className="w-[300px] h-[430px]"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <Link href="/exhibition/detail" className="w-[300px] h-[430px]">
                <div className="relative w-[300px] h-[430px] z-0">
                  <Image
                    src={Poster}
                    alt={`포스터 ${index + 1}`}
                    width={300}
                    height={430}
                  />
                  <figcaption className="absolute bottom-0 left-0 p-4 z-20 flex flex-col gap-2">
                    <p className="text-[26px] font-bold text-left text-white">
                      Terrarium
                    </p>
                    <p className="text-[14px] font-bold text-left text-white">
                      2021.08.17 ~ 2021.09.09
                    </p>
                    <p className="text-[14px] font-bold text-left text-white">
                      중간지점
                    </p>
                  </figcaption>
                  {/* Image 꾸밈 요소 */}
                  <div
                    aria-hidden="true"
                    className="w-[300px] h-[200px] absolute bottom-0 bg-gradient-to-t from-[#1a1a1a]/60 to-[#1a1a1a]/0 z-10"
                  ></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
};

export default ExhibitionBanner;
