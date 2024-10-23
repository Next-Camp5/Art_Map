import React from 'react';
import BaseIcon from './BaseIcon';
import { StrokeIconProps } from './types/icon';
import themeConfig from '@/configs/theme';

const BottomArrowIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  ...props
}: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M18.4219 9.32812L11.9128 14.9192L5.17285 9.32812"
        className={`stroke-${stroke}`}
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </BaseIcon>
  );
};

export default BottomArrowIcon;
