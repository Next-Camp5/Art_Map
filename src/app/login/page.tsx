"use client";

import Button from "@/components/common/Botton";
// import SNSLoginButton from "@/components/common/snsButton/SNSLoginButton";
import LoginPage from "./LoginPage";
import AutoLogin from "./AutoLogin";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("login/signup"); // Navigates to the signup page
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="flex justify-center text-[26px] mt-[60px] font-bold text-center text-[#1a1a1a]">
            로그인
          </p>
          {/*이메일 & 비밀번호 input*/}
          <LoginPage />
          {/*자동로그인*/}
          <AutoLogin />
          {/*로그인버튼*/}
          <div className="flex items-center justify-center m-4 mt-[122px]">
            <Button
              size="XL"
              color="primary"
              border={false}
              children={"로그인"}
            ></Button>
          </div>
          {/*회원가입*/}
          <div className="flex items-center justify-center m-4 mt-[20px]">
            <p
              className="text-gray-4 underline cursor-pointer"
              onClick={handleNavigation}
            >
              회원가입
            </p>
          </div>
          {/*sns버튼*/}
          <div className="flex items-center justify-center m-4 mt-[20px] border-t border-gray-2">
            <p className="text-[12px] text-gray-4 pt-[20px]">
              소셜 계정으로 간편 로그인/회원가입
            </p>
          </div>
          {/* <div className="flex items-center justify-center m-4 mt-[20px]">
            <SNSLoginButton social="KAKAO" />
            <SNSLoginButton social="NAVER" />
            <SNSLoginButton social="FACEBOOK" />
            <SNSLoginButton social="GOOGLE" />
            <SNSLoginButton social="APPLE" />
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Login;
