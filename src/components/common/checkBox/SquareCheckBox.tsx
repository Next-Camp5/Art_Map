"use client";

import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import BaseIcon from "@/components/Icon/BaseIcon";

import { BaseCheckBoxProps } from "./types/checkbox";

const SquareCheckBox = ({ active = false, onClick }: BaseCheckBoxProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const checkRef = useRef<SVGPathElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      checkRef.current,
      {
        strokeDashoffset: 100,
        strokeDasharray: 100,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    if (isActive) {
      tl.restart();
    }
  }, [isActive]);

  return (
    <BaseIcon width={20} height={20} onClick={handleClick}>
      <path
        d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z"
        className={`${isActive ? "fill-primary" : "fill-white"}`}
      />
      <path
        d="M16 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H16C17.933 19.5 19.5 17.933 19.5 16V4C19.5 2.067 17.933 0.5 16 0.5Z"
        className={`${isActive ? "stroke-primary" : "stroke-gray-3"}`}
      />
      <path
        ref={checkRef}
        d="M4.39062 9.75208L8.73163 13.965L14.9996 6.61597"
        className={`check stroke-white`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
};

export default SquareCheckBox;
