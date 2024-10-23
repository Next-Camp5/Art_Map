import React from 'react';
import BaseIcon from './BaseIcon';
import { StrokeIconProps } from './types/icon';

const ForwardIcon = ({ stroke = 'primary', ...props }: StrokeIconProps) => {
  return (
    <BaseIcon {...props}>
      <path
        d="M13.2251 5L20 11.775L13.2251 18.55"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1445 11.772H3.94653"
        className={`stroke-${stroke}`}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </BaseIcon>
  );
};

export default ForwardIcon;
