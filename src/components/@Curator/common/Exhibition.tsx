import Image from "next/image";
import React from "react";

const Exhibition = () => {
  return (
    <div>
      <Image
        src="/prototypeImg.jpg"
        height={0}
        width={150}
        className="w-[150px] h-auto object-cover mb-[10px]"
        alt="연관전시이미지"
      />
      <p className="text-xs font-bold text-left text-primary mb-[5px]">
        움직임을 만드는 움직임
      </p>
      <p className="text-xs text-left text-primary ">2021.10.03 ~ 2021.12.02</p>
    </div>
  );
};

export default Exhibition;
