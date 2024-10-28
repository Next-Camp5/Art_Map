'use client';

import { useState } from 'react';
import InputField from '../input/SignUpInputField';

import Button from '@/components/common/Botton';

interface VeriFieldProps {
  type: 'email' | 'password';
  pattern?: string;
  nextPage: () => void;
}

const PWInputField = ({ type, pattern, nextPage }: VeriFieldProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordValid = new RegExp(pattern!).test(password);
  const isConfirmationValid = confirmPassword === password;

  return (
    <>
      <p className="mt-[60px] m-4 font-bold text-sm">비밀번호</p>
      <InputField
        type={type}
        placeholder="8자리 이상의 영문 및 숫자, 특수문자 사용 가능"
        errorMessage="비밀번호 형식이 정확하지 않습니다."
        validate={() => isPasswordValid}
        onInputChange={setPassword}
        value={password}
      />
      <p className="m-4 mt-[16px] font-bold text-sm">비밀번호 확인</p>
      <InputField
        type={type}
        placeholder="비밀번호를 한번 더 입력해주세요"
        errorMessage="비밀번호가 일치하지 않습니다."
        validate={() => isConfirmationValid}
        onInputChange={setConfirmPassword}
        value={confirmPassword}
        disabled={!isPasswordValid}
      />
      <div className="flex items-center justify-center pt-[213px]">
        <Button
          size="XL"
          color={`${
            isPasswordValid && isConfirmationValid ? 'primary' : 'gray-3'
          }`}
          border={false}
          onClick={
            isPasswordValid && isConfirmationValid ? nextPage : undefined
          }
          disabled={!isPasswordValid || !isConfirmationValid}
        >
          다음
        </Button>
      </div>
    </>
  );
};
export default PWInputField;
