import Profile from '@/components/common/profile/Profile';
import Link from 'next/link';
import React from 'react';

const Curator = () => {
  return (
    <Link href={'/curator/profile/1'}>
      <div className="flex flex-col relative shrink-0">
        <div className="mb-[10px]">
          <Profile size="L" imageSrc={'/prototypeImg.jpg'}></Profile>
        </div>
        <p className="text-center text-sm text-gray-4 w-full">큐레이터 이름</p>
      </div>
    </Link>
  );
};

export default Curator;
