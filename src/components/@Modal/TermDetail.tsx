'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

import Modal from '../common/modal/Modal';

interface FilterSettingProps {
  type: 'terms' | 'privacy' | 'marketing';
  onClose: () => void;
}

const FilterSetting = ({ onClose, type }: FilterSettingProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [tl, setTl] = useState<gsap.core.Timeline>();

  const container = useRef<HTMLDivElement>(null);

  const onClickCloseButton = () => {
    tl?.reverse();
    setIsClosing(true);
  };
  const handleClose = () => {
    onClose();
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      container.current,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onReverseComplete: handleClose,
      }
    );
    tl.play();
    setTl(tl);
  }, []);

  const renderContent = () => {
    switch (type) {
      case 'terms':
        return (
          <>
            <p className="text-sm font-semibold text-gray-4">
              서비스 이용 약관
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
            <p className="text-sm font-semibold text-gray-4 pt-[10px]">
              제 1조 목적
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
          </>
        );
      case 'privacy':
        return (
          <>
            <p className="text-sm font-semibold text-gray-4">개인정보수집</p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
            <p className="text-sm font-semibold text-gray-4 pt-[10px]">
              제 1조 목적
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
          </>
        );
      case 'marketing':
        return (
          <>
            <p className="text-sm font-semibold text-gray-4">마케팅</p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
            <p className="text-sm font-semibold text-gray-4 pt-[10px]">
              제 1조 목적
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              이 약관은 아트맵이 제공하는 미술관련 정보를 제공하는 서비스에 대한
              이용 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
            <p className="pt-[10px] text-sm text-left text-gray-4">
              1. 수집 개인정보 항목 : [필수] 회원 성함, 전화번호, 이메일주소
              <br />
              2. 개인정보의 수집 및 이용목적 : 문의 신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 보유 및 이용기간 : 문의사항 처리종료 시점으로부터
              6개월 간 보관 후 파기합니다.
            </p>
            <p className="pt-[10px] text-sm text-gray-4">
              위와 같은 개인정보수집동의를 거부할 수 있습니다. 다만 동의를
              거부하는 경우 문의 신청이 제한됩니다.
            </p>
          </>
        );
      default:
        return <></>;
    }
  };
  return (
    <Modal onClose={onClickCloseButton} isClosing={isClosing}>
      <div
        ref={container}
        className="fixed bottom-0 flex flex-col rounded-t-[20px] bg-white"
        role="dialog"
        aria-labelledby="서비스 이용 약관"
        aria-describedby="약관 설명"
        tabIndex={-1}
      >
        <div className="flex justify-center items-center h-[60px]">
          <h4 className="text-lg font-bold text-gray-6">서비스 이용 약관</h4>
        </div>
        <div className="flex justify-between items-center px-4 ">
          <div className="rounded-[5px] border-t-2 border-r-2 border-l-2 border-gray-2 w-[343px] bg-gray-0 text-sm h-[316px] p-[15px] overflow-y-auto">
            {renderContent()}
          </div>
        </div>
        <div className="flex gap-2.5 px-4 py-1.5">
          <button
            type="button"
            aria-label="닫기"
            className="absolute top-0 right-0 w-[60px] h-[60px]"
            onClick={onClickCloseButton}
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterSetting;
