"use client";

import { useState } from "react";

import BaseTagButton from "./BaseTagButton";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelect?: boolean;
}

const SelectTagButton = ({
  isSelect = false,
  className,
  children,
  onClick,
  ...props
}: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(isSelect);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSelected(!isSelected);

    onClick?.(e);
  };

  return (
    <BaseTagButton
      onClick={handleClick}
      className={`${isSelected ? "bg-primary text-white" : "bg-white text-gray-4"} pr-[15px] pl-[15px] text-bold ${className}`}
      {...props}
    >
      {children}
    </BaseTagButton>
  );
};

export default SelectTagButton;
