'use client';

import { usePathname } from 'next/navigation';

import themeConfig from '@/configs/theme';
import { MenuIconProps } from './types/menuIcon';

import BaseIcon from '../../BaseIcon';

const MenuCurationIcon = ({ href, iconName }: MenuIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const fillColor = isActive
    ? themeConfig.MENU_ACTIVE_COLOR
    : themeConfig.MENU_INACTIVE_COLOR;

  return (
    <>
      <BaseIcon>
        {isActive ? (
          <>
            <g clip-path="url(#clip0_2735_38878)">
              <path
                d="M4.5 5C4.5 4.72386 4.72386 4.5 5 4.5H6V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5Z"
                fill={fillColor}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.80078 5.00005C3.80078 4.33731 4.33804 3.80005 5.00078 3.80005H6.70078V20.2H5.00078C4.33804 20.2 3.80078 19.6628 3.80078 19V5.00005ZM5.20078 5.20005V18.8H5.30078V5.20005H5.20078Z"
                fill={fillColor}
              ></path>
              <path
                d="M8.5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H8.5V4.5Z"
                fill="black"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.80078 3.80005H19.0008C19.6635 3.80005 20.2008 4.33731 20.2008 5.00005V19C20.2008 19.6628 19.6635 20.2 19.0008 20.2H7.80078V3.80005ZM9.20078 5.20005V18.8H18.8008V5.20005H9.20078Z"
                fill={fillColor}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1328 10.7272C10.1328 10.3992 10.3987 10.1333 10.7268 10.1333H15.8177C16.1457 10.1333 16.4116 10.3992 16.4116 10.7272C16.4116 11.0553 16.1457 11.3212 15.8177 11.3212H10.7268C10.3987 11.3212 10.1328 11.0553 10.1328 10.7272Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1328 13.2727C10.1328 12.9446 10.3987 12.6787 10.7268 12.6787H15.8177C16.1457 12.6787 16.4116 12.9446 16.4116 13.2727C16.4116 13.6007 16.1457 13.8666 15.8177 13.8666H10.7268C10.3987 13.8666 10.1328 13.6007 10.1328 13.2727Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2735_38878">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </>
        ) : (
          <>
            <g clip-path="url(#clip0_2735_38849)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1328 10.7272C10.1328 10.3992 10.3987 10.1333 10.7268 10.1333H15.8177C16.1457 10.1333 16.4116 10.3992 16.4116 10.7272C16.4116 11.0553 16.1457 11.3212 15.8177 11.3212H10.7268C10.3987 11.3212 10.1328 11.0553 10.1328 10.7272Z"
                fill={fillColor}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1328 13.2727C10.1328 12.9446 10.3987 12.6787 10.7268 12.6787H15.8177C16.1457 12.6787 16.4116 12.9446 16.4116 13.2727C16.4116 13.6007 16.1457 13.8666 15.8177 13.8666H10.7268C10.3987 13.8666 10.1328 13.6007 10.1328 13.2727Z"
                fill={fillColor}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.18146 5.13625C5.15636 5.13625 5.13601 5.1566 5.13601 5.18171V18.8181C5.13601 18.8432 5.15636 18.8635 5.18146 18.8635H18.8178C18.8429 18.8635 18.8633 18.8432 18.8633 18.8181V5.18171C18.8633 5.1566 18.8429 5.13625 18.8178 5.13625H5.18146ZM3.86328 5.18171C3.86328 4.4537 4.45345 3.86353 5.18146 3.86353H18.8178C19.5458 3.86353 20.136 4.4537 20.136 5.18171V18.8181C20.136 19.5461 19.5458 20.1363 18.8178 20.1363H5.18146C4.45345 20.1363 3.86328 19.5461 3.86328 18.8181V5.18171Z"
                fill={fillColor}
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49964 3.86353C7.8511 3.86353 8.13601 4.14844 8.13601 4.49989V19.4999C8.13601 19.8513 7.8511 20.1363 7.49964 20.1363C7.14819 20.1363 6.86328 19.8513 6.86328 19.4999V4.49989C6.86328 4.14844 7.14819 3.86353 7.49964 3.86353Z"
                fill="#808080"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2735_38849">
                <rect width="24" height="24" fill="black"></rect>
              </clipPath>
            </defs>
          </>
        )}
      </BaseIcon>
      <p className={`text-sm font-medium`}>{iconName}</p>
    </>
  );
};

export default MenuCurationIcon;
