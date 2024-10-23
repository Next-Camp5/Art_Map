'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import SearchIcon from '/public/svgs/Search.svg';
import Button from '@/components/common/Botton';

const HomeHeader = () => {
  const [selected, setSelected] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`flex justify-between items-center px-4 h-[60px] ${
        pathname === '/exhibition'
          ? 'bg-white border-b border-gray-2'
          : 'bg-transparent'
      }`}
    >
      <div className="flex gap-2 w-[236px]">
        <Link
          href="/"
          className={`font-bold text-extra ${
            pathname === '/home' ? 'text-white' : 'text-black opacity-50'
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(false)}
          aria-label="현재 진행중인 전시"
        >
          NOW
        </Link>
        <Link
          href="/exhibition"
          className={`font-bold text-extra ${
            pathname === '/exhibition' ? 'text-black' : 'text-white opacity-50'
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(true)}
          aria-label="전체 전시"
        >
          EXHIBITION
        </Link>
      </div>

      <Button size="NONE" color="none" border={false} aria-label="검색">
        <Image src={SearchIcon} alt="검색" />
      </Button>
    </header>
  );
};

export default HomeHeader;
