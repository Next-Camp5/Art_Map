'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/common/Botton';
import RegisterModal from './modal/RegisterModal';

import PlusIcon from '/public/svgs/Plus.svg';

const AddWork = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="my-[30px] flex justify-center">
        <Button size="M" color="primary" border={true} onClick={handleOpen}>
          <span className="flex justify-center items-center gap-[5px]">
            <p>작품 추가</p>
            <Image src={PlusIcon} alt="작품추가" />
          </span>
        </Button>
      </div>
      {isOpen ? <RegisterModal onClose={handleClose} /> : null}
      {/* {isOpen ? <Test onClose={handleClose} /> : null} */}
    </>
  );
};

export default AddWork;
