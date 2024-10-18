"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
  size: "XL" | "L" | "M" | "SM";
  imageSrc?: string | StaticImageData;
}

const SIZE_MAP: { [key in Props["size"]]: number } = {
  XL: 90,
  L: 70,
  M: 50,
  SM: 20,
};

const Profile = ({ size, imageSrc }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (imageSrc && !error) {
    return (
      <div
        className={` rounded-full relative overflow-hidden`}
        style={{ height: `${SIZE_MAP[size]}px`, width: `${SIZE_MAP[size]}px` }}
      >
        {isLoading && (
          <div
            className={`bg-primary  absolute z-10`}
            style={{
              height: `${SIZE_MAP[size]}px`,
              width: `${SIZE_MAP[size]}px`,
            }}
          ></div>
        )}

        <Image
          src={imageSrc}
          alt="유저 프로필"
          fill={true}
          onError={() => setError(true)}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  }
  return (
    <svg
      width={SIZE_MAP[size]}
      height={SIZE_MAP[size]}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <circle
        cx={45}
        cy={45}
        r="44.3571"
        fill="white"
        stroke="#F0F0F0"
        stroke-width="1.28571"
      />
      <circle cx={45} cy="31.5" r="11.25" stroke="#1A1A1A" stroke-width="4.5" />
      <path
        d="M65.25 67.5C65.25 54.5765 56.1838 49.5 45 49.5C33.8162 49.5 24.75 54.5765 24.75 67.5"
        stroke="#1A1A1A"
        stroke-width="4.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Profile;
