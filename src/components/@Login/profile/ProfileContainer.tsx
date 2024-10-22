"use client";

import Button from "@/components/common/Botton";
import { ChangeEvent, useState, FormEvent } from "react";
import ProfilePicture from "./ProfilePicture";
import BackIcon from "@/components/Icon/BackIcon";

const ProfileContainer = ({ nextPage, prevPage }: HeaderProps) => {
  const [profile, setProfile] = useState("");
  const [valid, setValid] = useState(true);
  const [initialState, setInitialState] = useState(false);

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProfile(value);
    if (value === "") {
      setValid(true);
      setInitialState(false);
      return;
    }

    if (value !== "아트맵") {
      setInitialState(true);
      setValid(true);
      return;
    }

    setValid(false);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg font-bold m-4 ">프로필 정보를 입력하세요.</p>
          <ProfilePicture />
          <p className="mt-[50px] font-bold text-sm m-4">닉네임</p>
          <div
            className={`flex items-center justify-center border-b-2 ${
              initialState && !valid
                ? "border-warning"
                : initialState && valid
                ? "border-primary"
                : "border-gray-3"
            } m-4`}
          >
            <div className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0">
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={handleValid}
                className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="h-[24px]">
            {initialState && !valid && (
              <p className="ml-4 text-sm text-warning">
                사용 중인 닉네임입니다.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center pt-[217px]">
            <Button
              size="XL"
              color={`${initialState && valid ? "primary" : "gray-3"}`}
              border={false}
              children={"다음"}
              onClick={initialState && valid ? nextPage : undefined}
              disabled={!initialState || !valid}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
