"use client";

import Image from "next/image";
import { useState } from "react";

import SearchIcon from "@/public/svgs/Search.svg";
import Button from "../common/Botton";
import BaseIcon from "../Icon/BaseIcon";

const HomeHeader = () => {
  const [selected, setSelected] = useState(false);

  return (
    <header className="flex justify-between items-center px-4">
      <div className="flex gap-2 w-[236px]">
        <button
          className={`font-bold text-extra text-white ${
            selected === false ? "" : "opacity-50"
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(false)}
          aria-label="현재 진행중인 전시"
        >
          NOW
        </button>
        <button
          className={`font-bold text-extra text-white ${
            selected === true ? "" : "opacity-50"
          }`}
          aria-pressed={selected}
          onClick={() => setSelected(true)}
          aria-label="전체 전시"
        >
          EXHIBITION
        </button>
      </div>

      <button type="button" aria-label="검색">
        <Image src={SearchIcon} alt="검색" />
      </button>
      {/* <Button size="SM" color="point" border={false}>
        <BaseIcon>
          <Image src={SearchIcon} alt="검색" />
        </BaseIcon>
      </Button> */}
    </header>
  );
};

export default HomeHeader;
