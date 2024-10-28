'use client';

import Image from 'next/image';
import { useState } from 'react';

import ImageViewer from '@/components/common/modal/ImageViewer';

import Poster from '/public/images/poster4.png';

const PosterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <figure className="relative w-[375px] h-[540px]">
      {isOpen ? (
        <ImageViewer onClose={handleClose}>
          <Image src={Poster} alt="솔리드 시티 전시 포스터" />
        </ImageViewer>
      ) : (
        <div onClick={handleOpen} className="cursor-pointer">
          <Image src={Poster} alt="솔리드 시티 전시 포스터" />
          <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-gray-6/60 to-gray-6/0"></div>
        </div>
      )}
    </figure>
  );
};

export default PosterSection;
