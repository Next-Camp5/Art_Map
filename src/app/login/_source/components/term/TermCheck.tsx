'use client';

import Button from '@/components/common/Botton';
import LineCheckBox from '@/components/common/checkBox/LineCheckBox';
import CircleCheckBox from '@/components/common/checkBox/CircleCheckBox';

import { useState } from 'react';
import TermDetail from '@/components/@Modal/TermDetail';

interface ClickState {
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
}

const TermCheck = ({ nextPage }: { nextPage: () => void }) => {
  const [allClick, setAllClick] = useState(false);
  const [click, setClick] = useState<ClickState>({
    terms: false,
    privacy: false,
    marketing: false,
  });
  const [isOpen, setIsOpen] = useState<ClickState>({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleClick = (key: keyof ClickState) => {
    setClick((prevState) => {
      const newState = {
        ...prevState,
        [key]: !prevState[key],
      };
      setAllClick(newState.terms && newState.privacy && newState.marketing);
      return newState;
    });
  };

  const handleAllClick = () => {
    const newClickState = !allClick;
    setAllClick(newClickState);
    setClick({
      terms: newClickState,
      privacy: newClickState,
      marketing: newClickState,
    });
  };

  const handleIsOpen = (key: keyof ClickState) => {
    setIsOpen((prevState) => {
      const newState = {
        ...prevState,
        [key]: !prevState[key],
      };
      return newState;
    });
  };

  return (
    <>
      <div className="flex m-4 justify-between border-b-2 border-primary mt-[60px]">
        <p className="text-md font-bold pb-[8px]">
          아래 약관에 모두 동의합니다.
        </p>
        <CircleCheckBox active={allClick} onClick={handleAllClick} />
      </div>
      <div className="flex justify-between mt-[13px] m-4 mb-0">
        <p
          className="text-sm underline text-gray-4 pt-[16px] pb-[16px] cursor-pointer"
          onClick={() => handleIsOpen('terms')}
        >
          서비스 이용을 위한 필수약관 동의
          <em className="text-point not-italic no-underline decoration-transparent">
            {' '}
            (필수)
          </em>
        </p>
        <span className="cursor-pointer pt-[13px] pb-[13px]">
          <LineCheckBox
            active={click.terms}
            onClick={() => handleClick('terms')}
          />
        </span>
      </div>
      {isOpen.terms && (
        <TermDetail onClose={() => handleIsOpen('terms')} type="terms" />
      )}
      <div className="flex justify-between ml-4 mr-4">
        <p
          className="text-sm underline text-gray-4 pt-[16px] pb-[16px] cursor-pointer"
          onClick={() => handleIsOpen('privacy')}
        >
          개인정보수집 및 이용 동의
          <em className="text-point not-italic no-underline decoration-transparent">
            {' '}
            (필수)
          </em>
        </p>
        <span className="cursor-pointer pt-[13px] pb-[13px]">
          <LineCheckBox
            active={click.privacy}
            onClick={() => handleClick('privacy')}
          />
        </span>
      </div>
      {isOpen.privacy && (
        <TermDetail onClose={() => handleIsOpen('privacy')} type="privacy" />
      )}
      <div className="flex justify-between ml-4 mr-4">
        <p
          className="text-sm underline text-gray-4 pt-[16px] pb-[16px] cursor-pointer"
          onClick={() => handleIsOpen('marketing')}
        >
          마케팅 수신 동의
        </p>
        <span className="cursor-pointer pt-[13px] pb-[13px]">
          <LineCheckBox
            active={click.marketing}
            onClick={() => handleClick('marketing')}
          />
        </span>
      </div>
      {isOpen.marketing && (
        <TermDetail
          onClose={() => handleIsOpen('marketing')}
          type="marketing"
        />
      )}
      <div className="flex items-center justify-center pt-[245px]">
        <Button
          size="XL"
          color={`${click.privacy && click.terms ? 'point' : 'gray-3'}`}
          border={false}
          onClick={nextPage}
        >
          가입완료
        </Button>
      </div>
    </>
  );
};
export default TermCheck;
