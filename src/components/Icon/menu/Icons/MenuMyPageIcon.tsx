"use client";

import { usePathname } from "next/navigation";

import themeConfig from "@/configs/theme";
import { MenuIconProps } from "./types/menuIcon";

import BaseIcon from "../../BaseIcon";

const MenuMyPageIcon = ({ href, iconName }: MenuIconProps) => {
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
            <path
              d="M11.6806 11.6346C14.0649 11.6346 15.9979 9.70166 15.9979 7.31729C15.9979 4.93291 14.0649 3 11.6806 3C9.2962 3 7.36328 4.93291 7.36328 7.31729C7.36328 9.70166 9.2962 11.6346 11.6806 11.6346Z"
              fill={fillColor}
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6806 10.2346C13.2918 10.2346 14.5979 8.92849 14.5979 7.31729C14.5979 5.70608 13.2918 4.39994 11.6806 4.39994C10.0694 4.39994 8.76322 5.70608 8.76322 7.31729C8.76322 8.92849 10.0694 10.2346 11.6806 10.2346ZM15.9979 7.31729C15.9979 9.70166 14.0649 11.6346 11.6806 11.6346C9.2962 11.6346 7.36328 9.70166 7.36328 7.31729C7.36328 4.93291 9.2962 3 11.6806 3C14.0649 3 15.9979 4.93291 15.9979 7.31729Z"
              fill={fillColor}
            ></path>
            <path
              d="M3.99805 18.9998C3.99805 15.6856 7.35608 12.9998 11.4981 12.9998C15.6401 12.9998 18.998 15.6856 18.998 18.9998H3.99805Z"
              fill={fillColor}
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.29883 18.9998C3.29883 15.1613 7.12415 12.2998 11.4989 12.2998C15.8736 12.2998 19.6988 15.1613 19.6988 18.9998C19.6988 19.3864 19.3854 19.6998 18.9988 19.6998H3.99883C3.61223 19.6998 3.29883 19.3864 3.29883 18.9998ZM4.75964 18.2998H18.238C17.8029 15.8036 15.0777 13.6998 11.4989 13.6998C7.91996 13.6998 5.19472 15.8036 4.75964 18.2998Z"
              fill={fillColor}
            ></path>
          </>
        ) : (
          <>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6806 10.2346C13.2918 10.2346 14.5979 8.92849 14.5979 7.31729C14.5979 5.70608 13.2918 4.39994 11.6806 4.39994C10.0694 4.39994 8.76322 5.70608 8.76322 7.31729C8.76322 8.92849 10.0694 10.2346 11.6806 10.2346ZM15.9979 7.31729C15.9979 9.70166 14.0649 11.6346 11.6806 11.6346C9.2962 11.6346 7.36328 9.70166 7.36328 7.31729C7.36328 4.93291 9.2962 3 11.6806 3C14.0649 3 15.9979 4.93291 15.9979 7.31729Z"
              fill="#808080"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.29883 18.9998C3.29883 15.1613 7.12415 12.2998 11.4989 12.2998C15.8736 12.2998 19.6988 15.1613 19.6988 18.9998C19.6988 19.3864 19.3854 19.6998 18.9988 19.6998C18.6122 19.6998 18.2988 19.3864 18.2988 18.9998C18.2988 16.21 15.4081 13.6998 11.4989 13.6998C7.58957 13.6998 4.69883 16.21 4.69883 18.9998C4.69883 19.3864 4.38543 19.6998 3.99883 19.6998C3.61223 19.6998 3.29883 19.3864 3.29883 18.9998Z"
              fill="#808080"
            ></path>
          </>
        )}
      </BaseIcon>
      <p className="text-xs font-medium">{iconName}</p>
    </>
  );
};

export default MenuMyPageIcon;