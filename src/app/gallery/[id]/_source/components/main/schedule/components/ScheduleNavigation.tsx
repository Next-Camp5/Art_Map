'use client';

import { useState } from 'react';
import Image from 'next/image';
import PosterImage from '/public/images/poster.png';
import PosterImage2 from '/public/images/poster3.png';
import CurrentExhibition from './CurrentExhibition';
import UpcomingExhibition from './UpcomingExhibition';

const ScheduleNavigation = () => {
  const [selectedExhibition, setSelectedExhibition] = useState('current');

  return (
    <div>
      <nav className="flex">
        <button
          className={`flex-1 text-md font-bold pb-[10px] border-b ${
            selectedExhibition === 'current'
              ? 'border-gray-6 text-gray-6'
              : 'border-gray-2 text-gray-3'
          }`}
          onClick={() => setSelectedExhibition('current')}
        >
          현재전시
        </button>
        <button
          className={`flex-1 text-md font-bold pb-[10px] border-b ${
            selectedExhibition === 'upcoming'
              ? 'border-gray-6 text-gray-6'
              : 'border-gray-2 text-gray-3'
          }`}
          onClick={() => setSelectedExhibition('upcoming')}
        >
          예정전시
        </button>
      </nav>

      <div className="my-10">
        {/* Mypage 브랜치에 존재하는 Noting페이지 추가하여 조건문 작성필요 */}
        {selectedExhibition === 'current' && <CurrentExhibition />}

        {selectedExhibition === 'upcoming' && <UpcomingExhibition />}
      </div>
    </div>
  );
};

export default ScheduleNavigation;
