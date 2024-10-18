// import BackIcon from "@/components/Icon/BackIcon";
import SignUpList from "./SignUpList";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px] p-4">
          <p className="text-[20px] mt-[104px] font-bold">
            회원 종류를 선택하세요
          </p>
          <SignUpList />
        </div>
      </div>
    </>
  );
};

export default SignUp;
