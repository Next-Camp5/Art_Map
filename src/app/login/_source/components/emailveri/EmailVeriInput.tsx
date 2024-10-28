'use client';

import Button from '@/components/common/Botton';
import InputField from '../input/SignUpInputField';
import { useState } from 'react';
import { HeaderProps } from '../types/HeaderProps';

const EmailInputField = ({ nextPage }: HeaderProps) => {
  const [email, setEmail] = useState('');
  const isValidEmail = (value: string) => {
    const emailPattern: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  };

  return (
    <>
      <InputField
        type="email"
        placeholder="이메일을 입력해주세요."
        errorMessage="이메일 주소가 정확하지 않습니다."
        validate={isValidEmail}
        onInputChange={setEmail}
        value={email}
      />
      <div className="flex items-center justify-center pt-[337px]">
        <Button
          size="XL"
          color={`${isValidEmail(email) ? 'primary' : 'gray-3'}`}
          border={false}
          onClick={isValidEmail(email) ? nextPage : undefined}
          disabled={!isValidEmail(email)}
        >
          이메일 인증
        </Button>
      </div>
    </>
  );
};
export default EmailInputField;
