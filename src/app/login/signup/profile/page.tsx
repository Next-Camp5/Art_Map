"use client";

import Button from "@/components/common/Botton";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, FormEvent } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("");
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("term");
  };

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProfile(value);
    if (value === "") {
      setValid(true);
      setSubmitted(false);
    } else {
      setValid(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement && inputElement.value !== "아트맵") {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="text-[20px] mt-[104px] font-bold m-4 ">
            프로필 정보를 입력하세요.
          </p>
          <div className="relative flex justify-center mt-[60px] m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="34.5" fill="white" stroke="#F0F0F0" />
              <circle
                cx="35"
                cy="24.5"
                r="8.75"
                stroke="#1A1A1A"
                strokeWidth="3.5"
              />
              <path
                d="M50.75 52.5C50.75 42.4484 43.6985 38.5 35 38.5C26.3015 38.5 19.25 42.4484 19.25 52.5"
                stroke="#1A1A1A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="absolute top-[50px] right-[136px] z-10"
            >
              <path
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                fill="black"
              />
              <path
                d="M9.66602 5.166V14.166"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.166 9.666H5.16602"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="mt-[50px] font-bold text-sm m-4">닉네임</p>
          <div
            className={`flex items-center justify-center border-b-2 ${
              submitted && !valid
                ? "border-red-500"
                : submitted && valid
                ? "border-primary"
                : "border-gray-3"
            } m-4`}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0"
            >
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={handleValid}
                className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
                required
              />
            </form>
          </div>
          <div className="h-[24px]">
            {submitted && !valid && (
              <p className="ml-4 text-sm text-red-500">
                사용 중인 닉네임입니다.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center pt-[293px]">
            <Button
              size="XL"
              color={`${submitted && valid ? "primary" : "gray-3"}`}
              border={false}
              children={"다음"}
              onClick={submitted && valid ? handleNavigation : undefined}
              disabled={!submitted || !valid}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
