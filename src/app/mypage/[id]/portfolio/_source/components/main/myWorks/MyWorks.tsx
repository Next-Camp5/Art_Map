'use client';

import { useState } from 'react';

import WorkList from './WorkList';
import AddWork from '../../AddWork';

const MyWorks = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <section className="px-4" aria-labelledby="works-section-title">
      <h2 id="works-section-title" className="sr-only">
        나의 작품과 전시회
      </h2>
      <nav className="flex" aria-label="나의 작품 선택">
        <button
          onClick={() => setIsSelected(true)}
          aria-pressed={isSelected}
          className={`flex-1 border-b-2 ${
            isSelected
              ? 'border-gray-6 text-gray-6'
              : 'border-gray-3 text-gray-3'
          }`}
        >
          <h2 className="py-[5px] font-bold">나의 작품</h2>
        </button>
        <button
          onClick={() => setIsSelected(false)}
          aria-pressed={!isSelected}
          className={`flex-1 border-b-2 ${
            isSelected
              ? 'border-gray-3 text-gray-3'
              : 'border-gray-6 text-gray-6'
          }`}
        >
          <h2 className="py-[5px] font-bold">나의 전시회</h2>
        </button>
      </nav>
      <AddWork />
      <WorkList />
    </section>
  );
};

export default MyWorks;
