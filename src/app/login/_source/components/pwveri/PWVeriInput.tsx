'use client';

import Button from '@/components/common/Botton';
import { ChangeEvent, useState } from 'react';

interface VeriFieldProps {
  type: 'email' | 'password';
  pattern?: string;
  nextPage: () => void;
}

const PWInputField = ({ type, pattern, nextPage }: VeriFieldProps) => {
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [initialState, setInitialState] = useState(false);

  const [recheck, setRecheck] = useState('');
  const [revalid, setRevalid] = useState(true);
  const [recheckState, setRecheckState] = useState(false);

  const handleValid = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setInitialState(false);

    if (value === '') return setValid(false);
    if (e.target.validity.valid) {
      setValid(true);
      setInitialState(true);
      if (recheck !== '') {
        setRevalid(recheck === value);
        setRecheckState(true);
      }
      return;
    }
    setValid(false);
  };

  const handleRecheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRecheck(value);
    setRecheckState(false);

    if (password === value) {
      setRevalid(true);
      setRecheckState(true);
      return;
    }
    setRevalid(false);
  };

  return (
    <>
      <p className="mt-[60px] m-4 font-bold text-sm">비밀번호</p>
      <div
        className={`flex items-center justify-center border-b-2 ${
          !valid
            ? 'border-red-500'
            : initialState && valid
            ? 'border-primary'
            : 'border-gray-3'
        } m-4`}
      >
        <div className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0">
          <input
            type={type}
            placeholder="8자리 이상의 영문 및 숫자, 특수문자 사용 가능"
            pattern={pattern}
            onChange={handleValid}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="h-[24px]">
        {!valid && (
          <p className="ml-4 text-sm text-red-500">
            비밀번호 형식이 정확하지 않습니다.
          </p>
        )}
      </div>
      <p className="m-4 mt-[16px] font-bold text-sm">비밀번호 확인</p>
      <div
        className={`flex items-center justify-center border-b-2 ${
          recheckState && !revalid
            ? 'border-red-500'
            : initialState && valid && recheckState && revalid
            ? 'border-primary'
            : 'border-gray-3'
        } m-4`}
      >
        <div className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0">
          <input
            type={type}
            placeholder="비밀번호를 한번 더 입력해주세요"
            pattern={pattern}
            onChange={handleRecheck}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
            disabled={!initialState}
            // {valid ? false : true}
          />
        </div>
      </div>
      <div className="h-[24px]">
        {recheckState && !revalid && (
          <p className="ml-4 text-sm text-red-500">
            비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>
      {/* 임의로 213 지정 */}
      <div className="flex items-center justify-center pt-[213px]">
        <Button
          size="XL"
          color={`${
            initialState && valid && recheckState && revalid
              ? 'primary'
              : 'gray-3'
          }`}
          border={false}
          onClick={
            initialState && valid && recheckState && revalid
              ? nextPage
              : undefined
          }
          disabled={!initialState || !valid || !recheckState || !revalid}
        >
          다음
        </Button>
      </div>
    </>
  );
};

export default PWInputField;
