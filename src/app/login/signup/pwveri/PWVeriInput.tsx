"use client";

import Button from "@/components/common/Botton";
import { ChangeEvent, useState, FormEvent } from "react";

interface VeriFieldProps {
  type: "email" | "password";
  pattern?: string;
}

const PWInputField = ({ type, pattern }: VeriFieldProps) => {
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const [recheck, setRecheck] = useState("");
  const [revalid, setRevalid] = useState(true);
  const [resubmitted, setResubmitted] = useState(false);

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value === "") {
      setValid(true);
      setSubmitted(false);
    } else if (e.target.checkValidity()) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement && inputElement.value.match(pattern || "")) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleRecheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRecheck(value);
    if (password === value) {
      setRevalid(true);
    } else {
      setRevalid(false);
    }
  };

  const handleResubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResubmitted(true);
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement && inputElement.value.match(password)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <>
      <p className="mt-[60px] m-4 font-bold text-sm">비밀번호</p>
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
            type={type}
            placeholder="8자리 이상의 영문 및 숫자, 특수문자 사용 가능"
            pattern={pattern}
            onChange={handleValid}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
          />
        </form>
      </div>
      <div className="h-[24px]">
        {submitted && !valid && (
          <p className="ml-4 text-sm text-red-500">
            비밀번호 형식이 정확하지 않습니다.
          </p>
        )}
      </div>
      <p className="m-4 mt-[16px] font-bold text-sm">비밀번호 확인</p>
      <div
        className={`flex items-center justify-center border-b-2 ${
          submitted && !valid && resubmitted && !revalid
            ? "border-red-500"
            : submitted && valid && resubmitted && revalid
            ? "border-primary"
            : "border-gray-3"
        } m-4`}
      >
        <form
          onSubmit={handleResubmit}
          noValidate
          className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0"
        >
          <input
            type={type}
            placeholder="비밀번호를 한번 더 입력해주세요"
            pattern={pattern}
            onChange={handleRecheck}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
          />
        </form>
      </div>
      <div className="h-[24px]">
        {resubmitted && !revalid && (
          <p className="ml-4 text-sm text-red-500">
            비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>
      <div className="flex items-center justify-center pt-[309px]">
        <Button
          size="XL"
          color={`${
            submitted && valid && resubmitted && revalid ? "primary" : "gray-3"
          }`}
          border={false}
          children={"다음"}
        />
      </div>
    </>
  );
};

export default PWInputField;
