"use client";

import Button from "@/components/common/Botton";
import { useState } from "react";

interface ClickState {
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
}

const Terms = () => {
  const [allClick, setAllClick] = useState(false);
  const [click, setClick] = useState<ClickState>({
    terms: false,
    privacy: false,
    marketing: false,
  });
  const notChecked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.11328 9.93188L11.7553 16.4949L17.4653 7.41382"
        stroke="#BEBEBE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const checked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.11328 9.93188L11.7553 16.4949L17.4653 7.41382"
        stroke="#7F21F7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const handleClick = (key: keyof ClickState) => {
    setClick((prevState) => {
      const newState = {
        ...prevState,
        [key]: !prevState[key],
      };

      if (!newState.terms || !newState.privacy || !newState.marketing) {
        setAllClick(false);
      } else if (newState.terms && newState.privacy && newState.marketing) {
        setAllClick(true);
      }

      return newState;
    });
  };

  const allNotChecked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z"
        stroke="#BEBEBE"
        strokeWidth="1.5"
      />
      <path
        d="M6.38867 11.7523L10.7297 15.9652L16.9977 8.61621"
        stroke="#BEBEBE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const allChecked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
        fill="#7F21F7"
      />
      <path
        d="M6.38867 11.7523L10.7297 15.9652L16.9977 8.61621"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const handleAllClick = () => {
    const newClickState = !allClick;
    setAllClick(newClickState);
    setClick({
      terms: newClickState,
      privacy: newClickState,
      marketing: newClickState,
    });
  };

  return (
    <>
      <div className="flex m-4 justify-between border-b-2 border-primary mt-[60px]">
        <p className="text-[16px] font-bold pb-[8px]">
          아래 약관에 모두 동의합니다.
        </p>
        <span className="cursor-pointer" onClick={handleAllClick}>
          {allClick ? allChecked : allNotChecked}
        </span>
      </div>
      <div className="flex justify-between mt-[13px] m-4 mb-0">
        <p className="text-sm underline text-gray-4 pt-[16px] pb-[16px]">
          서비스 이용을 위한 필수약관 동의
          <em className="text-point not-italic no-underline decoration-transparent">
            {" "}
            (필수)
          </em>
        </p>
        <span
          className="cursor-pointer pt-[13px] pb-[13px]"
          onClick={() => handleClick("terms")}
        >
          {click.terms ? checked : notChecked}
        </span>
      </div>
      <div className="flex justify-between ml-4 mr-4">
        <p className="text-sm underline text-gray-4 pt-[16px] pb-[16px]">
          개인정보수집 및 이용 동의
          <em className="text-point not-italic no-underline decoration-transparent">
            {" "}
            (필수)
          </em>
        </p>
        <span
          className="cursor-pointer pt-[13px] pb-[13px]"
          onClick={() => handleClick("privacy")}
        >
          {click.privacy ? checked : notChecked}
        </span>
      </div>
      <div className="flex justify-between ml-4 mr-4">
        <p className="text-sm underline text-gray-4 pt-[16px] pb-[16px]">
          마케팅 수신 동의
        </p>
        <span
          className="cursor-pointer pt-[13px] pb-[13px]"
          onClick={() => handleClick("marketing")}
        >
          {click.marketing ? checked : notChecked}
        </span>
      </div>
      <div className="flex items-center justify-center pt-[299px]">
        <Button
          size="XL"
          color={`${click.privacy && click.terms ? "point" : "gray-3"}`}
          border={false}
          children={"가입완료"}
        />
      </div>
    </>
  );
};
export default Terms;
