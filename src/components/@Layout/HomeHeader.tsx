"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import SearchIcon from "@/public/svgs/Search.svg";

const HomeHeader = () => {
  const [selected, setSelected] = useState(false);

  return (
    <header className="flex justify-between items-center px-4">
      <div className="flex gap-2 w-[236px]">
        <Link
          href="/"
          className={`font-bold text-extra text-white ${
            selected === false ? "" : "opacity-50"
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(false)}
          aria-label="현재 진행중인 전시"
        >
          NOW
        </Link>
        <Link
          href="/exhibition"
          className={`font-bold text-extra text-white ${
            selected === true ? "" : "opacity-50"
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(true)}
          aria-label="전체 전시"
        >
          EXHIBITION
        </Link>
      </div>

      <button type="button" aria-label="검색">
        <Image src={SearchIcon} alt="검색" />
      </button>
    </header>
  );
};

export default HomeHeader;
