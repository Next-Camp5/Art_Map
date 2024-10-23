'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

import ArrowUpIcon from '/public/svgs/ArrowUp.svg';
import ArrowDownIcon from '/public/svgs/ArrowDown.svg';

interface DropdownButtonProps {
  label: string;
  items: string[];
}

const DropdownButton = ({ label, items }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (listRef.current) {
      gsap.set(listRef.current, { height: 0, opacity: 1, display: 'none' });
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    gsap.to(listRef.current, {
      height: isOpen ? 0 : 'auto',
      opacity: 1,
      display: isOpen ? 'none' : 'block',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div
      className="flex flex-col border-b border-gray-200"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full h-[60px] px-4"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${label} 선택`}
        onClick={handleClick}
      >
        <span className="text-md font-medium text-gray-600">{label}</span>
        <Image src={isOpen ? ArrowUpIcon : ArrowDownIcon} alt="화살표" />
      </button>
      <ul ref={listRef} className="list-none overflow-hidden">
        {items.map((item, index) => (
          <li key={index} className="p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
