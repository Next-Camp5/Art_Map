'use client';

import SquareCheckBox from '@/components/common/checkBox/SquareCheckBox';

import { useState } from 'react';

const AutoLogin = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className="hidden"
      />
      <div className="flex items-center">
        <div className="pt-[4px]">
          <SquareCheckBox onClick={handleCheck} active={checked} />
        </div>
        <span
          className="pl-[10px] text-gray-4 cursor-pointer"
          onClick={handleCheck}
        >
          자동로그인
        </span>
      </div>
    </>
  );
};

export default AutoLogin;
