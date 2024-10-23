import React from "react";
import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";
import themeConfig from "@/configs/theme";

const XIcon = ({ stroke = themeConfig.DEFAULT_COLOR }: StrokeIconProps) => {
  return (
    <BaseIcon>
      <path
        d="M5 5L14.4314 14.4314"
        className={`stroke-${stroke}`}
        stroke-width={2}
        stroke-linecap="round"
      />
      <path
        d="M14.4316 5L5.00025 14.4314"
        className={`stroke-${stroke}`}
        stroke-width={2}
        stroke-linecap="round"
      />
    </BaseIcon>
  );
};

export default XIcon;
