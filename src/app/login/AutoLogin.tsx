"use client";
import Image from "next/image";
import CheckOn from "@/check/checkboxon.png";
import CheckOff from "@/check/checkboxoff.png";
import { useState } from "react";

const AutoLogin = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex mt-[20px] m-4 items-center justify-between">
      <div className="flex items-center">
        <Image
          src={checked ? CheckOn : CheckOff}
          alt="Check"
          className="h-[20px] w-[20px]"
          onClick={handleCheck}
        />
        <span className="pl-[10px] text-gray-4">자동로그인</span>
      </div>
      <p className="text-gray-4 underline">비밀번호 찾기</p>
    </div>
  );
};

export default AutoLogin;
