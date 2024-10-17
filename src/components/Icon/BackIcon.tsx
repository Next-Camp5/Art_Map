"use client";

import React from "react";
import { useRouter } from "next/navigation";

import BaseIcon from "./BaseIcon";

import { StrokeIconProps } from "./types/icon";
import themeConfig from "@/configs/theme";

const BackIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  ...props
}: StrokeIconProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <BaseIcon onClick={handleClick} {...props}>
      <path
        d="M10.7749 5L4 11.775L10.7749 18.55"
        className={`stroke-${stroke}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.85547 11.772H20.0535"
        className={`stroke-${stroke}`}
        stroke-width="2"
        stroke-linecap="round"
      />
    </BaseIcon>
  );
};

export default BackIcon;
