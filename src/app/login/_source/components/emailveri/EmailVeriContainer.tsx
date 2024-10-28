import { HeaderProps } from '../types/HeaderProps';
import EmailVeriInput from './EmailVeriInput';
import BackIcon from '@/components/Icon/BackIcon';

const EmailVeriContainer = ({ nextPage, prevPage }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg font-bold m-4">계정 정보를 입력하세요</p>
          <p className="mt-[60px] m-4 font-bold text-sm">이메일</p>
          <EmailVeriInput nextPage={nextPage} />
        </div>
      </div>
    </>
  );
};

export default EmailVeriContainer;
