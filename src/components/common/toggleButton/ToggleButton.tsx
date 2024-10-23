'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface Props {
  active?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const ToggleButton = ({ active = false, onClick }: Props) => {
  const container = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  useGSAP(
    () => {
      if (active) {
        gsap.to('.circle', { x: 20, duration: 0.3 });
      } else {
        gsap.to('.circle', { x: 0, duration: 0.3 });
      }
    },
    { scope: container, dependencies: [active] }
  );
  return (
    <button
      ref={container}
      onClick={handleClick}
      className={`h-[30px] w-[50px] rounded-[15px] p-[2px] ${
        active ? 'bg-primary' : 'bg-gray-3'
      }`}
    >
      <div className=" circle bg-white h-[26px] w-[26px] rounded-full"></div>
    </button>
  );
};

export default ToggleButton;
