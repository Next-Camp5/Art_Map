'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/common/Botton';

import ArrowUpIcon from '/public/svgs/ArrowUp.svg';
import ArrowDownIcon from '/public/svgs/ArrowDown.svg';

const READ_DATA =
  '국립현대미술관은 과거 국군기무사령부가 위치하였던 종로구 소격동 부지에 2013년 새롭게 개관하였습니다. 2009년 새로운 미술관 건립 계획이 발표된 이후, 현대미술의 중심지로 자리 잡았습니다. 다양한 전시와 프로그램을 통해 예술의 새로운 가능성을 탐구하고 있습니다. 미술관은 국내외 예술가들의 작품을 전시하며, 관람객들에게 예술적 영감을 제공합니다. 또한, 교육 프로그램과 워크숍을 통해 예술에 대한 이해를 높이고, 창의적인 사고를 촉진합니다. 미술관의 건축은 현대적이면서도 전통적인 요소를 결합하여, 방문객들에게 독특한 공간 경험을 제공합니다. 미술관은 지속 가능한 운영을 목표로 하며, 환경 친화적인 전시와 프로그램을 기획하고 있습니다. 미술관은 예술과 문화의 교류를 촉진하며, 지역 사회와의 협력을 통해 문화적 가치를 확산시키고 있습니다.';

const GalleryExplain = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="px-5 flex flex-col justify-center items-center mb-[60px]">
      <h2 className="sr-only">전시관 소개</h2>
      <div className="mb-5">
        <p
          className={`text-md text-gray-6 ${isExpanded ? '' : 'line-clamp-3'}`}
        >
          {READ_DATA}
        </p>
      </div>
      <Button
        size="NONE"
        color="white"
        border={false}
        title="전시관 소개 더보기"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="flex items-center gap-[5px]">
          <p className="text-sm font-bold text-gray-6">
            {isExpanded ? 'SHOW LESS' : 'READ MORE'}
          </p>
          <Image
            src={isExpanded ? ArrowUpIcon : ArrowDownIcon}
            alt="전시관 소개 더보기"
            width={16}
            height={16}
          />
        </span>
      </Button>
    </section>
  );
};

export default GalleryExplain;
