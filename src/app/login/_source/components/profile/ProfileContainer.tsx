'use client';

import Button from '@/components/common/Botton';
import { useState } from 'react';
import ProfilePicture from './ProfilePicture';
import BackIcon from '@/components/Icon/BackIcon';
import { HeaderProps } from '../types/HeaderProps';
import SignUpInputField from '../input/SignUpInputField';

const ProfileContainer = ({ nextPage, prevPage }: HeaderProps) => {
  const [nickname, setNickname] = useState('');
  const isValidNickname = nickname !== '' && nickname !== '아트맵';

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg font-bold m-4">프로필 정보를 입력하세요.</p>
          <ProfilePicture />
          <p className="mt-[50px] font-bold text-sm m-4">닉네임</p>
          <SignUpInputField
            type="text"
            placeholder="닉네임을 입력해주세요."
            errorMessage="사용 중인 닉네임입니다."
            validate={() => isValidNickname}
            onInputChange={setNickname}
            value={nickname}
          />
          <div className="flex items-center justify-center pt-[217px]">
            <Button
              size="XL"
              color={`${isValidNickname ? 'primary' : 'gray-3'}`}
              border={false}
              onClick={isValidNickname ? nextPage : undefined}
              disabled={!isValidNickname}
            >
              다음
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
