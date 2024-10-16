"use client";
import Button from "@/components/common/Botton";
import CheckOn from "../../public/image/checkboxon.png";
import CheckOff from "../../public/image/checkboxoff.png";

import { useState } from "react";
import Image from "next/image";
const Login = () => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="flex justify-center text-[26px] mt-[60px] font-bold text-center text-[#1a1a1a]">
            로그인
          </p>
          {/*이메일*/}
          <div className="flex items-center justify-center border-b-2 border-primary m-4 mt-[100px]">
            <form
              action=""
              className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12.6718 13C11.584 13 10.5206 12.6774 9.61618 12.0731C8.71171 11.4687 8.00683 10.6098 7.59054 9.60477C7.17426 8.59977 7.06534 7.49393 7.27756 6.42703C7.48978 5.36014 8.01362 4.38012 8.78281 3.61093C9.55199 2.84174 10.532 2.3179 11.5988 2.10568C12.6657 1.89346 13.7716 2.00239 14.7766 2.41867C15.7816 2.83495 16.6406 3.5399 17.245 4.44437C17.8493 5.34884 18.1718 6.41223 18.1718 7.50003C18.1703 8.95823 17.5903 10.3563 16.5592 11.3874C15.5281 12.4185 14.13 12.9984 12.6718 13ZM12.6718 3.00003C11.7818 3.00003 10.9117 3.26393 10.1717 3.75839C9.4317 4.25286 8.85497 4.95572 8.51437 5.77798C8.17378 6.60025 8.08464 7.50505 8.25827 8.37796C8.4319 9.25087 8.8605 10.0527 9.48984 10.682C10.1192 11.3114 10.921 11.7399 11.7939 11.9135C12.6668 12.0872 13.5716 11.9981 14.3939 11.6575C15.2162 11.3169 15.919 10.7401 16.4134 10.0001C16.9079 9.26007 17.1718 8.39005 17.1718 7.50003C17.1703 6.30704 16.6956 5.16336 15.852 4.31979C15.0084 3.47622 13.8648 3.00162 12.6718 3.00003Z"
                  fill="black"
                />
                <path
                  d="M19.1396 21.5H6.20361C5.25761 21.5 4.58663 20.752 4.45263 19.549C4.37851 18.1483 4.70761 16.7558 5.401 15.5365C6.09438 14.3172 7.12294 13.3224 8.36462 12.67C8.47893 12.6026 8.61531 12.5834 8.74377 12.6166C8.87223 12.6498 8.98231 12.7327 9.04968 12.847C9.11704 12.9613 9.13622 13.0977 9.10302 13.2261C9.06983 13.3546 8.98698 13.4646 8.87268 13.532C7.10568 14.572 5.14865 16.743 5.44665 19.438C5.49065 19.838 5.64661 20.5 6.20361 20.5H19.1396C19.2626 20.5 19.6396 20.5 19.8126 19.881C20.4836 17.497 18.7216 14.933 16.6346 13.631C16.5268 13.5587 16.4513 13.4474 16.4241 13.3205C16.3968 13.1936 16.4199 13.061 16.4886 12.9509C16.5573 12.8408 16.6662 12.7617 16.7921 12.7304C16.9181 12.6991 17.0513 12.7179 17.1636 12.783C19.4926 14.235 21.6166 17.161 20.7756 20.151C20.6992 20.5295 20.4949 20.8701 20.197 21.1158C19.8991 21.3614 19.5257 21.4971 19.1396 21.5Z"
                  fill="black"
                />
              </svg>
              <input
                type="email"
                placeholder="이메일"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                className="p-2 w-[343px] focus:ring-0 focus:outline-none"
              />
            </form>
          </div>
          {/*비밀번호*/}
          <div className="flex items-center justify-center border-b-2 border-primary m-4 mt-10">
            <form
              action=""
              className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
              >
                <path
                  d="M21 14.181V19.175C21.0001 19.7011 20.8966 20.2221 20.6953 20.7082C20.4941 21.1943 20.199 21.6359 19.827 22.008C19.4549 22.38 19.0133 22.675 18.5272 22.8763C18.0411 23.0776 17.5201 23.1811 16.994 23.181H5.00601C4.4799 23.1811 3.9589 23.0776 3.47281 22.8763C2.98672 22.675 2.54505 22.38 2.17303 22.008C1.80102 21.6359 1.50593 21.1943 1.30466 20.7082C1.10338 20.2221 0.999869 19.7011 1 19.175V14.181"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10.327C1 9.80097 1.10363 9.28007 1.30496 8.7941C1.50629 8.30812 1.8014 7.86657 2.1734 7.49466C2.54541 7.12275 2.98703 6.82777 3.47305 6.62656C3.95908 6.42535 4.47998 6.32186 5.00601 6.32199H16.994C17.52 6.32186 18.0409 6.42535 18.5269 6.62656C19.013 6.82777 19.4546 7.12275 19.8266 7.49466C20.1986 7.86657 20.4937 8.30812 20.695 8.7941C20.8964 9.28007 21 9.80097 21 10.327"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0003 15.192C12.1121 15.192 13.0133 14.2907 13.0133 13.179C13.0133 12.0673 12.1121 11.166 11.0003 11.166C9.88856 11.166 8.9873 12.0673 8.9873 13.179C8.9873 14.2907 9.88856 15.192 11.0003 15.192Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.4209 5.58102C6.4209 4.3666 6.90333 3.2019 7.76205 2.34317C8.62078 1.48444 9.78548 1.00198 10.9999 1.00198C12.2143 1.00198 13.379 1.48444 14.2378 2.34317C15.0965 3.2019 15.5789 4.3666 15.5789 5.58102"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 15.192V17.496"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="password"
                placeholder="비밀번호"
                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{6,50}$"
                required
                className="p-2 w-[343px] focus:ring-0 focus:outline-none"
              />
            </form>
          </div>
          {/*자동로그인*/}
          <div className="flex mt-[20px] m-4 items-center justify-between">
            <div className="flex items-center">
              <Image
                src={checked ? CheckOn : CheckOff}
                alt=""
                className="h-[20px] w-[20px]"
                onClick={handleCheck}
              />
              <span className="pl-[10px] text-gray-4">자동로그인</span>
            </div>
            <p className="text-gray-4 underline">비밀번호 찾기</p>
          </div>
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
            <p className="text-gray-4 underline">회원가입</p>
          </div>
          {/*sns버튼*/}
          <div className="flex items-center justify-center m-4 mt-[20px] border-t border-gray-2">
            <p className="text-[12px] text-gray-4 pt-[20px]">
              소셜 계정으로 간편 로그인/회원가입
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
