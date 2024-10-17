"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface Props {
  active?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const ToggleButton = ({ active = false, onClick }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const container = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(!isActive);
    onClick?.(e);
  };

  useGSAP(
    () => {
      if (isActive) {
        gsap.to(".circle", { x: 20, duration: 0.3 });
      } else {
        gsap.to(".circle", { x: 0, duration: 0.3 });
      }
    },
    { scope: container, dependencies: [isActive] }
  );
  return (
    <button
      ref={container}
      onClick={handleClick}
      className={`h-[30px] w-[50px] rounded-[15px] p-[2px] ${isActive ? "bg-primary" : "bg-gray-3"}`}
    >
      <div className=" circle bg-white h-[26px] w-[26px] rounded-full"></div>
    </button>
  );
};

export default ToggleButton;
