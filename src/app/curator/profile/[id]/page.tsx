import Button from "@/components/common/Botton";
import Profile from "@/components/common/profile/Profile";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" w-full h-[150px] relative">
        <Image
          src="/social/login/naver.png"
          alt="이미지"
          fill={true}
          className=" z-10 absolute object-cover"
        ></Image>

        <div className="w-full h-[150px] absolute z-20 bg-[#1a1a1a]/20" />
        <div className="absolute z-30 -bottom-[45px] right-[16px]">
          <Profile imageSrc="/social/login/naver.png" size="XL"></Profile>
        </div>
      </div>
      <div className="pr-[16px] pl-[16px]">
        <div className=" pt-[20px]  mb-[30px]">
          <p className="font-bold text-lg mb-[5px]">아트맵매거진</p>
          <p className="text-sm">아트디렉터</p>
        </div>
        <div className="flex justify-center mb-[30px]">
          <Button size="L" color="point" border={true}>
            크리틱 의뢰
          </Button>
        </div>
        <div className=" flex w-full">
          <div className=" relative w-1/2 flex justify-center after:content-[''] after:w-full after:h-[2px] after:bg-black after:absolute after:-bottom-[5px]">
            <p className="text-md font-bold ">큐레이터 소개</p>
          </div>
          <div className="w-1/2 flex justify-center">
            <p className="text-md font-bold text-[#bebebe]">글</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
