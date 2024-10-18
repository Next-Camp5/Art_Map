"use client";

import { useState } from "react";

import BaseIcon from "@/components/Icon/BaseIcon";

import { BaseCheckBoxProps } from "./types/checkbox";

const LineCheckBox = ({ active = false, onClick }: BaseCheckBoxProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick?.();
  };
  return (
    <BaseIcon width={24} height={24} onClick={handleClick}>
      <path
        d="M7.11328 9.93188L11.7553 16.4949L17.4653 7.41382"
        className={`${isActive ? "stroke-point" : "stroke-gray-3"}`}
        stroke-width={3}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </BaseIcon>
  );
};

export default LineCheckBox;