import Image from "next/image";
import React, { useRef } from "react";

import Poster from "/public/images/poster.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  isActive: boolean;
}
const BannerItem = ({ isActive }: Props) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        "img",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      tl.fromTo(
        ".title",
        { y: "20%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(
        ".date",
        { y: "20%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      tl.fromTo(
        ".text",
        { y: "20%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      if (isActive) tl.play();
    },
    { scope: container, dependencies: [isActive] }
  );

  return (
    <div ref={container} className="relative w-[300px] h-[430px] z-0">
      <Image src={Poster} alt={`포스터`} width={300} height={430} />
      <figcaption className="absolute bottom-0 left-0 p-4 z-20 flex flex-col gap-2">
        <p className="title text-[26px] font-bold text-left text-white">
          Terrarium
        </p>
        <p className="date text-[14px] font-bold text-left text-white">
          2021.08.17 ~ 2021.09.09
        </p>
        <p className="text text-[14px] font-bold text-left text-white">
          중간지점
        </p>
      </figcaption>
      {/* Image 꾸밈 요소 */}
      <div
        aria-hidden="true"
        className="w-[300px] h-[200px] absolute bottom-0 bg-gradient-to-t from-[#1a1a1a]/60 to-[#1a1a1a]/0 z-10"
      ></div>
    </div>
  );
};

export default BannerItem;
