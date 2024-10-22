"use client";

import { useState } from "react";

import HorizontalExhibitionItem from "./HorizontalExhibitionSection";

import ArrowLeftIcon from "@/components/Icon/ArrowLeftIcon";
import ArrowRightIcon from "@/components/Icon/ArrowRightIcon";

const ExhibitionPager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className="flex flex-col gap-5 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <HorizontalExhibitionItem key={index} />
        ))}
      </div>
      <div className="absolute top-1 right-4 flex justify-between gap-2 max-w-[68px]">
        <ArrowLeftIcon
          stroke={currentPage === 1 ? "#BEBEBE" : "black"}
          onClick={handlePrevPage}
        />
        <ArrowRightIcon
          stroke={currentPage === totalPages ? "#BEBEBE" : "gray-6"}
          onClick={handleNextPage}
        />
      </div>
    </>
  );
};

export default ExhibitionPager;
