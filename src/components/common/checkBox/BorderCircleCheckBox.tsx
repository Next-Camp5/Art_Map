"use client";

import { useRef } from "react";

import BaseIcon from "@/components/Icon/BaseIcon";

import { BaseCheckBoxProps } from "./types/checkbox";

const BorderCircleCheckBox = ({
  active = false,
  onClick,
}: BaseCheckBoxProps) => {
  const circleRef = useRef<SVGPathElement>(null);

  const handleClick = () => {
    onClick?.();
  };

  return (
    <BaseIcon width={20} height={20} onClick={handleClick}>
      <path
        ref={circleRef}
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        className={`${active ? "fill-primary" : "fill-white"}`}
      />
      <path
        d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z"
        className={`${active ? "" : "stroke-gray-3"}`}
      />

      <path
        d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
        fill="white"
      />
    </BaseIcon>
  );
};

export default BorderCircleCheckBox;
