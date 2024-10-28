import BackIcon from '@/components/Icon/BackIcon';
import TermCheck from './TermCheck';
import { HeaderProps } from '../types/HeaderProps';

const TermContainer = ({ nextPage, prevPage }: HeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <p className="text-lg  font-bold m-4 ">이용약관에 동의해주세요.</p>
          <TermCheck nextPage={nextPage} />
        </div>
      </div>
    </>
  );
};
export default TermContainer;
