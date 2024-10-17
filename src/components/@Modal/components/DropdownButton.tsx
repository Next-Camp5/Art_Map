"use client";

import { useState } from "react";

interface DropdownButtonProps {
  label: string;
  items: string[];
}

const DropdownButton = ({ label, items }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border-b border-gray-200">
      <button
        type="button"
        className="flex items-center justify-between w-full h-[60px] px-4"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${label} 선택`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md font-medium text-gray-600">{label}</span>
        <span aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="list-none p-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
