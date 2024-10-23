import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <div className=" h-[400px] relative">
      <Image
        src={"/prototypeImg.jpg"}
        alt="이미지"
        fill={true}
        className=" z-10 absolute"
      ></Image>
      <div
        className="w-full h-[400px] absolute z-20"
        style={{
          background:
            "linear-gradient(to top, #fff 33.33%, rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="relative z-30 pt-[256px] pl-[16px] pr-[16px]">
        <h2 className=" text-extra  text-black ">
          상처가 여전이 아물지 않았음을
        </h2>
        <p className="text-md mb-[40px]">콘템프러리 아트 리뷰</p>

        <div className=" text-sm flex justify-between">
          <p>2021.08.20</p>
          <p>by.아트맵매거진</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
