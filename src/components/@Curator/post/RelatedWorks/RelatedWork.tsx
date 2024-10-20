import Image from "next/image";
import React from "react";

const RelatedWork = () => {
  return (
    <div>
      <Image
        src={"/prototypeImg.jpg"}
        alt="이미지"
        height={0}
        width={150}
        className="w-[150px] h-auto object-cover mb-[10px]"
      />

      <p className="text-sm font-bold text-left mb-[5px]">주공아파트</p>
      <p className="text-sm text-left">정재호</p>
    </div>
  );
};

export default RelatedWork;
