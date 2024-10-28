'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 추후 데이터에서 user에 Role값을 받아서 구분하도록 합니다.
const ROLE = 'artist';

const MypageNav = () => {
  const userId = '123';
  const path = usePathname();

  return (
    <div
      className={`${
        ROLE === 'common' ? 'hidden' : 'flex'
      } border-b border-gray-200 py-[1px] mt-2.5`}
    >
      <Link
        href={`/mypage/${userId}`}
        className="flex-1 flex justify-center items-center"
      >
        <div
          className={`${
            path.includes(`/mypage/${userId}`) && !path.includes('portfolio')
              ? 'text-gray-600 border-b-[3px]'
              : 'text-gray-300 border-none'
          } border-gray-600 w-[74px]`}
        >
          <h1 className="font-bold text-md">마이페이지</h1>
        </div>
      </Link>
      <Link
        href={`/mypage/${userId}/portfolio`}
        className="flex-1 flex justify-center items-center"
      >
        <div
          className={`${
            path.includes(`/mypage/${userId}/portfolio`)
              ? 'text-gray-600 border-b-[3px]'
              : 'text-gray-300 border-none'
          } border-gray-600 w-[74px]`}
        >
          <h1 className="font-bold text-md">포트폴리오</h1>
        </div>
      </Link>
    </div>
  );
};

export default MypageNav;
