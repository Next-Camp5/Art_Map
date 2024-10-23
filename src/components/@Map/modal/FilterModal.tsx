"use client";

import React, { useRef, useState } from "react";

import Button from "@/components/common/Botton";
import Modal from "@/components/common/modal/Modal";
import ToggleButton from "@/components/common/toggleButton/ToggleButton";
import BorderCircleCheckBox from "@/components/common/checkBox/BorderCircleCheckBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FilterModal = ({ onClose }: { onClose: () => void }) => {
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const [isClosing, setIsClosing] = useState<boolean>(false);

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
        className=" fixed bottom-0 rounded-tl-[20px] rounded-tr-[20px] bg-white flex flex-col gap-[40px] pl-[16px] pr-[16px]"
      >
        <div className="mt-[20px] flex items-center justify-center relative">
          <p className=" text-primary text-lg text-bold">필터 설정</p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px] absolute right-0"
            preserveAspectRatio="none"
            onClick={onClickCloseButton}
          >
            <path
              d="M5 5L14.4314 14.4314"
              stroke="#BEBEBE"
              stroke-width={2}
              stroke-linecap="round"
            />
            <path
              d="M14.4316 5L5.00025 14.4314"
              stroke="#BEBEBE"
              stroke-width={2}
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="h-[40px] items-center justify-between flex mb-[20px]">
          <p className=" text-md text-bold text-primary">전시중</p>
          <ToggleButton active={true} />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="text-bold text-md text-primary">전시 리스트</p>
          <ul className="flex flex-col gap-[15px]">
            <li className="flex justify-between">
              <p className="text-gray-5">전체</p>
              <BorderCircleCheckBox />
            </li>
            <li className="flex justify-between">
              <p className="text-gray-5">좋아요</p>
              <BorderCircleCheckBox />
            </li>
            <li className="flex justify-between">
              <p className="text-primary">다녀온전시</p>
              <BorderCircleCheckBox />
            </li>
          </ul>
        </div>
        <div>
          <p className="text-md text-primary text-bold mb-[20px]">
            거리 범위 설정
          </p>
          <input type="range"></input>
        </div>
        <div className="mb-[10px]">
          <Button size="XL" color="primary" border={false}>
            찾아보기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
