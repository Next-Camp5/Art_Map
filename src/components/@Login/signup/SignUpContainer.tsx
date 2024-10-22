// import BackIcon from "@/components/Icon/BackIcon";
import SignUpList from "../../../components/@Login/signup/SignUpList";

const SignUpContainer = ({ nextPage }: { nextPage: () => void }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="text-lg mt-[104px] m-4 font-bold">
            회원 종류를 선택하세요
          </p>
          <div className="mt-[100px] m-4">
            <SignUpList nextPage={nextPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpContainer;
