import { HeaderProps } from '../types/HeaderProps';
import VeriInput from './VeriInput';
import BackIcon from '@/components/Icon/BackIcon';

const EmailVeriContainer = ({ nextPage, prevPage }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg font-bold m-4">계정 정보를 입력하세요</p>
          <p className="mt-[60px] m-4 font-bold text-sm">이메일</p>
          <VeriInput
            type="email"
            placeholder="이메일을 입력해주세요."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\.com$"
            nextPage={nextPage}
          />
        </div>
      </div>
    </>
  );
};

export default EmailVeriContainer;
