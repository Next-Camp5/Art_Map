"use client";

import { usePathname } from "next/navigation";

import themeConfig from "@/configs/theme";
import { MenuIconProps } from "./types/menuIcon";

import BaseIcon from "../../BaseIcon";

const MenuMapIcon = ({ href, iconName }: MenuIconProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const fillColor = isActive
    ? themeConfig.MENU_ACTIVE_COLOR
    : themeConfig.MENU_INACTIVE_COLOR;

  return (
    <>
      <BaseIcon>
        {isActive ? (
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.63679 10.2625C4.61302 15.5883 10.4525 19.9286 11.641 20.7498C11.8606 20.9006 12.1504 20.9006 12.37 20.7498C12.6552 20.5543 19.3742 15.8776 19.3742 10.2625C19.3742 8.3336 18.5979 6.48369 17.216 5.11973C15.8341 3.75577 13.9598 2.9895 12.0055 2.9895C10.0512 2.9895 8.17694 3.75577 6.79504 5.11973C5.41314 6.48369 4.63679 8.3336 4.63679 10.2625ZM12.0058 14.2197C11.2257 14.212 10.4653 13.977 9.8199 13.5444C9.17452 13.1118 8.6729 12.5007 8.37797 11.7879C8.08304 11.075 8.00794 10.292 8.16207 9.53718C8.31619 8.78233 8.69267 8.08917 9.24432 7.54468C9.79597 7.00019 10.4982 6.6286 11.263 6.47648C12.0278 6.32436 12.821 6.39849 13.5433 6.68958C14.2656 6.98068 14.8847 7.47579 15.323 8.1128C15.7613 8.7498 15.9993 9.50036 16.0071 10.2703C16.005 11.3171 15.5828 12.3205 14.8329 13.0607C14.0829 13.8009 13.0664 14.2176 12.0058 14.2197Z"
            fill={fillColor}
          ></path>
        ) : (
          <path
            d="M12.37 20.7498C12.1504 20.9006 11.8606 20.9006 11.641 20.7498C10.4525 19.9286 4.61302 15.5883 4.63679 10.2625C4.63679 8.3336 5.41314 6.48369 6.79504 5.11973C8.17694 3.75577 10.0512 2.9895 12.0055 2.9895C13.9598 2.9895 15.8341 3.75577 17.216 5.11973C18.5979 6.48369 19.3742 8.3336 19.3742 10.2625C19.3742 15.8776 12.6552 20.5543 12.37 20.7498ZM12.0055 4.24861C10.3874 4.24861 8.8356 4.88302 7.69144 6.01232C6.54729 7.14162 5.90451 8.67329 5.90451 10.2704C5.90451 14.3236 10.0187 17.9356 11.7083 19.2421C11.8835 19.3775 12.1271 19.3765 12.3015 19.2401C13.9494 17.9505 18.1288 14.2786 18.1065 10.2704C18.1065 8.67329 17.4637 7.14162 16.3195 6.01232C15.1754 4.88302 13.6236 4.24861 12.0055 4.24861ZM12.0055 14.2197C11.2254 14.212 10.465 13.9771 9.81956 13.5444C9.17417 13.1118 8.67255 12.5007 8.37763 11.7879C8.0827 11.075 8.0076 10.292 8.16172 9.53719C8.31585 8.78234 8.69233 8.08919 9.24398 7.5447C9.79563 7.00021 10.4979 6.62862 11.2627 6.4765C12.0274 6.32437 12.8207 6.3985 13.543 6.6896C14.2652 6.98069 14.8843 7.4758 15.3226 8.11281C15.761 8.74982 15.9989 9.50037 16.0068 10.2704C16.0047 11.3172 15.5825 12.3205 14.8325 13.0607C14.0826 13.8009 13.0661 14.2176 12.0055 14.2197ZM12.0055 7.57231C11.4649 7.57231 10.9363 7.73054 10.4868 8.02701C10.0373 8.32348 9.68692 8.74485 9.48003 9.23786C9.27313 9.73087 9.219 10.2734 9.32447 10.7967C9.42995 11.3201 9.69029 11.8008 10.0726 12.1782C10.4549 12.5555 10.9419 12.8125 11.4722 12.9166C12.0025 13.0207 12.5521 12.9673 13.0516 12.763C13.5511 12.5588 13.978 12.213 14.2784 11.7693C14.5787 11.3256 14.7391 10.804 14.7391 10.2704C14.737 9.55542 14.4483 8.87035 13.9361 8.36481C13.4239 7.85927 12.7298 7.57437 12.0055 7.57231Z"
            fill={fillColor}
          ></path>
        )}
      </BaseIcon>
      <p className="text-xs font-medium">{iconName}</p>
    </>
  );
};

export default MenuMapIcon;