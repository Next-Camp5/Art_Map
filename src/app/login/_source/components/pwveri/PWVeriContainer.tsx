import BackIcon from '@/components/Icon/BackIcon';
import PWVeriInput from './PWVeriInput';
import { HeaderProps } from '../types/HeaderProps';

const PWVeriContainer = ({ nextPage, prevPage }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg font-bold m-4">비밀번호를 입력해주세요.</p>
          <PWVeriInput
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            nextPage={nextPage}
          />
        </div>
      </div>
    </>
  );
};

export default PWVeriContainer;
