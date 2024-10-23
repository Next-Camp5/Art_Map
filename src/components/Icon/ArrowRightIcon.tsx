import BaseIcon from './BaseIcon';
import themeConfig from '@/configs/theme';
import { StrokeIconProps } from './types/icon';

const ArrowRightIcon = ({
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
      <BaseIcon {...props}>
        <path
          d="M13.2251 5L20 11.775L13.2251 18.55"
          style={{
            stroke: stroke === '#BEBEBE' ? '#BEBEBE' : '#1A1A1A',
            transition: 'stroke 0.15s ease-in-out',
          }}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.1445 11.772H3.94653"
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

export default ArrowRightIcon;
