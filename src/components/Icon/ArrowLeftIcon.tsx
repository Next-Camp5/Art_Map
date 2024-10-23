'use client';

import BaseIcon from './BaseIcon';
import themeConfig from '@/configs/theme';
import { StrokeIconProps } from './types/icon';

const ArrowLeftIcon = ({
  stroke = themeConfig.DEFAULT_COLOR,
  onClick,
  ...props
}: StrokeIconProps) => {
  return (
    <button
      className="w-6 h-6 flex items-center justify-center"
      onClick={onClick}
      {...props}
    >
      <BaseIcon>
        <path
          d="M10.7749 5L4 11.775L10.7749 18.55"
          style={{
            stroke: stroke === '#BEBEBE' ? '#BEBEBE' : '#1A1A1A',
            transition: 'stroke 0.15s ease-in-out',
          }}
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.85547 11.772H20.0535"
          style={{
            stroke: stroke === '#BEBEBE' ? '#BEBEBE' : '#1A1A1A',
            transition: 'stroke 0.15s ease-in-out',
          }}
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </BaseIcon>
    </button>
  );
};

export default ArrowLeftIcon;
