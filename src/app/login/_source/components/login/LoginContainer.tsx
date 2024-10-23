'use client';

import Button from '@/components/common/Botton';
import SNSLoginButton from '@/components/common/snsButton/SNSLoginButton';
import InputField from './InputField';
import AutoLogin from './AutoLogin';

const LoginContainer = ({ nextPage }: { nextPage: () => void }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="flex justify-center text-extra mt-[60px] font-bold text-center text-primary">
            로그인
          </p>
          {/*이메일 & 비밀번호 input*/}
          <InputField />
          {/*자동로그인*/}
          <div className="flex mt-[20px] m-4 items-center justify-between">
            <AutoLogin />
            <p className="text-gray-4 underline cursor-pointer">
              비밀번호 찾기
            </p>
          </div>
          {/*로그인버튼*/}
          <div className="flex items-center justify-center m-4 mt-[122px]">
            <Button size="XL" color="primary" border={false}>
              로그인
            </Button>
          </div>
          {/*회원가입*/}
          <div className="flex items-center justify-center m-4 mt-[20px]">
            <p
              className="text-gray-4 underline cursor-pointer"
              onClick={nextPage}
            >
              회원가입
            </p>
          </div>
          {/*sns버튼*/}
          <div className="flex items-center justify-center m-4 mt-[20px] border-t border-gray-2">
            <p className="text-sm text-gray-4 pt-[20px]">
              소셜 계정으로 간편 로그인/회원가입
            </p>
          </div>
          <div className="flex items-center justify-center m-4 mt-[20px]">
            <SNSLoginButton social="KAKAO" className="m-3" />
            <SNSLoginButton social="NAVER" className="m-3" />
            <SNSLoginButton social="FACEBOOK" className="m-3" />
            <SNSLoginButton social="GOOGLE" className="m-3" />
            <SNSLoginButton social="APPLE" className="m-3" />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginContainer;
