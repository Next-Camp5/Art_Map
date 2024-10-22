import TermCheck from "./TermCheck";

const TermContainer = ({ nextPage }: { nextPage: () => void }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <p className="text-[lg mt-[104px] font-bold m-4 ">
            이용약관에 동의해주세요.
          </p>
          <TermCheck nextPage={nextPage} />
        </div>
      </div>
    </>
  );
};
export default TermContainer;
