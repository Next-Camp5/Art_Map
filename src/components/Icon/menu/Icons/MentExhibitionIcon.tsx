"use client";

import { usePathname } from "next/navigation";

import themeConfig from "@/configs/theme";
import { MenuIconProps } from "./types/menuIcon";

import BaseIcon from "../../BaseIcon";

const MentExhibitionIcon = ({ href, iconName }: MenuIconProps) => {
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.52962 5.62183C3.61364 5.62183 2.87109 6.36437 2.87109 7.28035V15.573C2.87109 16.489 3.61364 17.2315 4.52962 17.2315H11.6296C11.588 16.9612 11.5664 16.6843 11.5664 16.4023C11.5664 13.4187 13.9851 11 16.9688 11C17.5473 11 18.1046 11.0909 18.6271 11.2593V7.28036C18.6271 6.36438 17.8846 5.62183 16.9686 5.62183H4.52962Z"
              fill={fillColor}
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9689 12.0488C14.5644 12.0488 12.6152 13.998 12.6152 16.4025C12.6152 18.8069 14.5644 20.7561 16.9689 20.7561C19.3733 20.7561 21.3225 18.8069 21.3225 16.4025C21.3225 13.998 19.3733 12.0488 16.9689 12.0488Z"
              fill={fillColor}
            ></path>
          </>
        ) : (
          <>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.53048 5C3.27101 5 2.25 6.021 2.25 7.28048V15.5731C2.25 16.8326 3.271 17.8536 4.53048 17.8536H12.2092C12.0886 17.4576 12.0161 17.0407 11.9985 16.6097H4.53048C3.95799 16.6097 3.4939 16.1456 3.4939 15.5731V7.28048C3.4939 6.70799 3.95799 6.2439 4.53048 6.2439H16.9695C17.5419 6.2439 18.006 6.70799 18.006 7.28048V11.5349C18.4448 11.6279 18.8622 11.7786 19.2499 11.9789V7.28048C19.2499 6.02101 18.2289 5 16.9695 5H4.53048Z"
              fill={fillColor}
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9686 12.0488C14.5642 12.0488 12.615 13.998 12.615 16.4025C12.615 18.8069 14.5642 20.7561 16.9686 20.7561C19.3731 20.7561 21.3223 18.8069 21.3223 16.4025C21.3223 13.998 19.3731 12.0488 16.9686 12.0488ZM11.3711 16.4025C11.3711 13.311 13.8772 10.8049 16.9686 10.8049C20.0601 10.8049 22.5662 13.311 22.5662 16.4025C22.5662 19.4939 20.0601 22 16.9686 22C13.8772 22 11.3711 19.4939 11.3711 16.4025Z"
              fill={fillColor}
            ></path>
          </>
        )}
      </BaseIcon>
      <p className={`text-xs font-medium`}>{iconName}</p>
    </>
  );
};

export default MentExhibitionIcon;
