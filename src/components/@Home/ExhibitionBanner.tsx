"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import HomeHeader from "@/components/@Layout/HomeHeader";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import BannerItem from "./components/BannerItem";

const ExhibitionBanner = () => {
  const [active, setActive] = useState(0);

  useGSAP(() => {}, []);
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
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
          className="w-[300px] h-[430px]"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <Link href="/exhibition/detail" className="w-[300px] h-[430px]">
                <BannerItem isActive={active === index} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
};

export default ExhibitionBanner;
