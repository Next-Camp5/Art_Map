"use client";

import { useState } from "react";
import Button from "@/components/common/Botton";
import SelectionButton from "./SelectionButton"; // Import the SelectionButton
import { useRouter } from "next/navigation";

const SignUp = ({ nextPage }: { nextPage: () => void }) => {
  const [click, setClick] = useState("");
  const [next, setNext] = useState(false);

  const handleOnClick = (id: string) => {
    setClick(id);
    setNext(true);
  };

  return (
    <>
      <SelectionButton
        id="general"
        isSelected={click === "general"}
        handleClick={handleOnClick}
        svgIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
          >
            <g filter="url(#filter0_d_2986_13732)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5189 21.3519C25.9357 21.3519 27.8949 19.3927 27.8949 16.9759C27.8949 14.5591 25.9357 12.5999 23.5189 12.5999C21.1021 12.5999 19.1429 14.5591 19.1429 16.9759C19.1429 19.3927 21.1021 21.3519 23.5189 21.3519ZM29.9948 16.9759C29.9948 20.5525 27.0955 23.4519 23.5189 23.4519C19.9423 23.4519 17.043 20.5525 17.043 16.9759C17.043 13.3994 19.9423 10.5 23.5189 10.5C27.0955 10.5 29.9948 13.3994 29.9948 16.9759Z"
                fill="#1A1A1A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9473 34.4997C10.9473 28.742 16.6852 24.4497 23.2473 24.4497C29.8094 24.4497 35.5473 28.742 35.5473 34.4997C35.5473 35.0796 35.0772 35.5497 34.4973 35.5497C33.9174 35.5497 33.4473 35.0796 33.4473 34.4997C33.4473 30.3149 29.1112 26.5497 23.2473 26.5497C17.3834 26.5497 13.0473 30.3149 13.0473 34.4997C13.0473 35.0796 12.5772 35.5497 11.9973 35.5497C11.4174 35.5497 10.9473 35.0796 10.9473 34.4997Z"
                fill="#1A1A1A"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2986_13732"
                x="-4"
                y="-4"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2986_13732"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2986_13732"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
        title="일반 회원"
        description="취향에 맞는 전시와 작품 정보를 모아보세요."
      />
      <SelectionButton
        id="artist"
        isSelected={click === "artist"}
        handleClick={handleOnClick}
        svgIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g
              clipPath="url(#clip0_2986_14002)"
              filter="url(#filter0_d_2986_14002)"
            >
              <path
                d="M38.1644 28.003C38.3966 26.9799 38.509 25.9332 38.4995 24.8842C38.4371 17.455 32.2902 11.4259 24.8612 11.5007C21.6882 11.5339 18.6283 12.6835 16.2184 14.7478C13.8085 16.8121 12.2026 19.6593 11.6826 22.7895C11.1626 25.9198 11.7616 29.1332 13.3746 31.8659C14.9876 34.5985 17.5115 36.6757 20.5034 37.733C21.0124 37.9123 21.5571 37.9669 22.0916 37.8923C22.6261 37.8176 23.1349 37.6159 23.5754 37.304C24.0158 36.9921 24.375 36.5791 24.6229 36.0997C24.8708 35.6203 25.0001 35.0885 25 34.5488V34C25 33.1049 25.3556 32.2465 25.9885 31.6135C26.6215 30.9806 27.4799 30.625 28.375 30.625H34.8732C35.6377 30.6255 36.3797 30.3664 36.9777 29.89C37.5757 29.4136 37.9941 28.7483 38.1644 28.003V28.003Z"
                stroke="#1A1A1A"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 19.375C25.932 19.375 26.6875 18.6195 26.6875 17.6875C26.6875 16.7555 25.932 16 25 16C24.068 16 23.3125 16.7555 23.3125 17.6875C23.3125 18.6195 24.068 19.375 25 19.375Z"
                fill="#1A1A1A"
              />
              <path
                d="M18.668 23.0312C19.5999 23.0312 20.3555 22.2757 20.3555 21.3438C20.3555 20.4118 19.5999 19.6562 18.668 19.6562C17.736 19.6562 16.9805 20.4118 16.9805 21.3438C16.9805 22.2757 17.736 23.0312 18.668 23.0312Z"
                fill="#1A1A1A"
              />
              <path
                d="M18.668 30.3438C19.5999 30.3438 20.3555 29.5882 20.3555 28.6562C20.3555 27.7243 19.5999 26.9688 18.668 26.9688C17.736 26.9688 16.9805 27.7243 16.9805 28.6562C16.9805 29.5882 17.736 30.3438 18.668 30.3438Z"
                fill="#1A1A1A"
              />
              <path
                d="M31.332 23.0312C32.264 23.0312 33.0195 22.2757 33.0195 21.3438C33.0195 20.4118 32.264 19.6562 31.332 19.6562C30.4001 19.6562 29.6445 20.4118 29.6445 21.3438C29.6445 22.2757 30.4001 23.0312 31.332 23.0312Z"
                fill="#1A1A1A"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2986_14002"
                x="-3"
                y="-3"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2986_14002"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2986_14002"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2986_14002">
                <rect
                  width="36"
                  height="36"
                  fill="white"
                  transform="translate(7 7)"
                />
              </clipPath>
            </defs>
          </svg>
        }
        title="작가 회원"
        description="작품 및 전시 포트폴리오를 등록하세요."
      />
      <SelectionButton
        id="hall"
        isSelected={click === "hall"}
        handleClick={handleOnClick}
        svgIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
          >
            <g filter="url(#filter0_d_2986_14010)">
              <path
                d="M37.957 23H11V19.6667L24.5612 11L38 19.6667L37.957 23Z"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 19H27"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 26V38"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 26V38"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 26V38"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 26V38"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 37V29C22 27.3431 23.3431 26 25 26V26C26.6569 26 28 27.3431 28 29V37"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 38H39"
                stroke="#1A1A1A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2986_14010"
                x="-3"
                y="-3"
                width="56"
                height="56"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2986_14010"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2986_14010"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        }
        title="전시관 회원"
        description="작품 및 전시 포트폴리오를 등록하세요."
      />
      <div className="flex items-center justify-center mt-[87px]">
        <Button
          size="XL"
          color={next === true ? "primary" : "gray-3"}
          border={false}
          children={"다음"}
          onClick={next === true ? nextPage : undefined}
          disabled={!next}
        />
      </div>
    </>
  );
};

export default SignUp;
