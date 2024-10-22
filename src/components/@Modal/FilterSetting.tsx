"use client";

import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

import Modal from "../common/modal/Modal";
import DropdownButton from "./components/DropdownButton";
import ToggleButton from "../common/toggleButton/ToggleButton";

import ReturnIcon from "@/public/svgs/Return.svg";

const FilterSetting = ({ onClose }: { onClose: () => void }) => {
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
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onReverseComplete: handleClose,
      }
    );
    tl.play();
    setTl(tl);
  }, []);

  return (
    <Modal onClose={onClickCloseButton} isClosing={isClosing}>
      <div
        ref={container}
        className="fixed bottom-0 right-[470px] flex flex-col rounded-t-[20px] bg-white"
        role="dialog"
        aria-labelledby="필터 설정"
        aria-describedby="필터 설정 설명"
        tabIndex={-1} // 모달 외부 클릭 방지
      >
        <div className="flex justify-center items-center h-[60px] border-b border-gray-200">
          <h4 className="text-lg font-bold text-gray-6">필터 설정</h4>
        </div>
        <div className="flex justify-between items-center px-4 border-b border-gray-200 h-[60px]">
          <span className="text-md font-medium text-gray-6">전시중</span>
          <ToggleButton />
        </div>
        <DropdownButton label="지역" items={["서울", "부산", "대구"]} />
        <DropdownButton label="카테고리" items={["미술", "음악", "연극"]} />
        <div className="flex gap-2.5 px-4 py-1.5">
          <button
            className="flex flex-col items-center justify-center w-[50px] h-[50px]"
            tabIndex={0}
            aria-label="전체해제"
          >
            <Image src={ReturnIcon} alt="전체해제" />
            <p className="text-sm text-gray-400">전체해제</p>
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-[283px] h-[50px] gap-2.5 px-[15px] rounded-[5px] bg-[#1a1a1a]"
            aria-label="찾아보기"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
              찾아보기
            </p>
          </button>
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
