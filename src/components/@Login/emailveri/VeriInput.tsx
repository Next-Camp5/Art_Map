"use client";

import Button from "@/components/common/Botton";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, FormEvent } from "react";

interface VeriFieldProps {
  type: "email" | "password";
  placeholder: string;
  pattern?: string;
  nextPage: () => void;
}

const EmailInputField = ({
  type,
  placeholder,
  pattern,
  nextPage,
}: VeriFieldProps) => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setValid(true);
      setSubmitted(false);
    } else if (e.target.validity.valid) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div
        className={`flex items-center justify-center border-b-2 ${
          !valid
            ? "border-warning"
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
            placeholder={placeholder}
            pattern={pattern}
            onChange={handleValid}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
          />
        </form>
      </div>
      <div className="h-[24px]">
        {!valid && (
          <p className="ml-4 text-sm text-warning">
            이메일 주소가 정확하지 않습니다.
          </p>
        )}
      </div>
      {/* 임의로 337px로 바꿈 */}
      <div className="flex items-center justify-center pt-[337px]">
        <Button
          size="XL"
          color={`${submitted && valid ? "primary" : "gray-3"}`}
          border={false}
          children={"이메일 인증"}
          onClick={submitted && valid ? nextPage : undefined}
          disabled={!submitted || !valid}
        />
      </div>
    </>
  );
};

export default EmailInputField;
