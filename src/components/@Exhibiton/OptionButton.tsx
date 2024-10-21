"use client";

import { useState } from "react";

import Button from "@/components/common/Botton";
import FilterSetting from "../@Modal/FilterSetting";

const OptionButton = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Button
      size="SM"
      color="gray-3"
      border={false}
      aria-label="옵션"
      className="flex items-center gap-1 w-6 h-6"
      onClick={() => setIsOpen(true)}
    >
      {children}
      {isOpen && <FilterSetting onClose={() => setIsOpen(false)} />}
    </Button>
  );
};

export default OptionButton;
