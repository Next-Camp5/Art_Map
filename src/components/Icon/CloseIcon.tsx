import React from "react";
import BaseIcon from "./BaseIcon";
import { StrokeIconProps } from "./types/icon";
import themeConfig from "@/configs/theme";

const CloseIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  ...props
}: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M4.47656 4.47607L18.4766 18.4761"
        className={`stroke-${stroke}`}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M18.4766 4.47607L4.47656 18.4761"
        className={`stroke-${stroke}`}
        stroke-width="2"
        stroke-linecap="round"
      />
    </BaseIcon>
  );
};

export default CloseIcon;
