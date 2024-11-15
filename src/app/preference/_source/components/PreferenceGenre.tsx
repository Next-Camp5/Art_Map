'use client';

import BackIcon from '@/components/Icon/BackIcon';
import Button from '@/components/common/Botton';
import GenreBadge from './common/GenreBadge';

import { useState } from 'react';
import { HeaderProps } from '@/app/login/_source/components/types/HeaderProps';

const PreferenceGenre = ({ nextPage, prevPage, skipPage }: HeaderProps) => {
  const [selectedPics, setSelectedPics] = useState<number[]>([]);

  const toggleSelection = (index: number) => {
    setSelectedPics((prevSelectedPics) =>
      prevSelectedPics.includes(index)
        ? prevSelectedPics.filter((pic) => pic !== index)
        : [...prevSelectedPics, index]
    );
  };

  const isAnySelected = selectedPics.length > 0;

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <div className="m-4">
            <p className="text-lg font-bold">
              내가 관심있는 미술 장르를
              <br />
              전부 골라주세요.
            </p>
            <div className="mt-10 flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'전체'}
                onToggle={() => toggleSelection(0)}
              />
              <GenreBadge
                click={false}
                name={'선묘화'}
                onToggle={() => toggleSelection(1)}
              />
              <GenreBadge
                click={false}
                name={'유화'}
                onToggle={() => toggleSelection(2)}
              />
              <GenreBadge
                click={false}
                name={'아크릴'}
                onToggle={() => toggleSelection(3)}
              />
              <GenreBadge
                click={false}
                name={'담채'}
                onToggle={() => toggleSelection(4)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'풍경화'}
                onToggle={() => toggleSelection(5)}
              />
              <GenreBadge
                click={false}
                name={'초상'}
                onToggle={() => toggleSelection(6)}
              />
              <GenreBadge
                click={false}
                name={'인물화'}
                onToggle={() => toggleSelection(7)}
              />
              <GenreBadge
                click={false}
                name={'자화상'}
                onToggle={() => toggleSelection(8)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'추상'}
                onToggle={() => toggleSelection(9)}
              />
              <GenreBadge
                click={false}
                name={'상상화'}
                onToggle={() => toggleSelection(10)}
              />
              <GenreBadge
                click={false}
                name={'세라믹'}
                onToggle={() => toggleSelection(11)}
              />
              <GenreBadge
                click={false}
                name={'석공예'}
                onToggle={() => toggleSelection(12)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'판화'}
                onToggle={() => toggleSelection(13)}
              />
              <GenreBadge
                click={false}
                name={'점묘'}
                onToggle={() => toggleSelection(14)}
              />
              <GenreBadge
                click={false}
                name={'석조'}
                onToggle={() => toggleSelection(15)}
              />
              <GenreBadge
                click={false}
                name={'키덜트'}
                onToggle={() => toggleSelection(16)}
              />
              {/* <GenreBadge click={false} name={'정크아트'} /> */}
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'텍스트'}
                onToggle={() => toggleSelection(17)}
              />
              <GenreBadge
                click={false}
                name={'그래비티'}
                onToggle={() => toggleSelection(18)}
              />
              <GenreBadge
                click={false}
                name={'부조'}
                onToggle={() => toggleSelection(19)}
              />
              <GenreBadge
                click={false}
                name={'단색조'}
                onToggle={() => toggleSelection(20)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'인물'}
                onToggle={() => toggleSelection(21)}
              />
              <GenreBadge
                click={false}
                name={'정물'}
                onToggle={() => toggleSelection(22)}
              />
              <GenreBadge
                click={false}
                name={'일러스트'}
                onToggle={() => toggleSelection(23)}
              />
              <GenreBadge
                click={false}
                name={'애니메이션'}
                onToggle={() => toggleSelection(24)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'텍스타일'}
                onToggle={() => toggleSelection(25)}
              />
              <GenreBadge
                click={false}
                name={'구상'}
                onToggle={() => toggleSelection(26)}
              />
              <GenreBadge
                click={false}
                name={'수묵담채'}
                onToggle={() => toggleSelection(27)}
              />
              <GenreBadge
                click={false}
                name={'수채'}
                onToggle={() => toggleSelection(28)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'조소'}
                onToggle={() => toggleSelection(29)}
              />
              <GenreBadge
                click={false}
                name={'도예'}
                onToggle={() => toggleSelection(30)}
              />
              <GenreBadge
                click={false}
                name={'영상'}
                onToggle={() => toggleSelection(31)}
              />
              <GenreBadge
                click={false}
                name={'프린트'}
                onToggle={() => toggleSelection(32)}
              />
            </div>
            <div className="mt-[10px] flex flex-wrap gap-[10px]">
              <GenreBadge
                click={false}
                name={'실크스크린'}
                onToggle={() => toggleSelection(33)}
              />
              <GenreBadge
                click={false}
                name={'삽화'}
                onToggle={() => toggleSelection(34)}
              />
              <GenreBadge
                click={false}
                name={'전신상'}
                onToggle={() => toggleSelection(35)}
              />
              <GenreBadge
                click={false}
                name={'반신상'}
                onToggle={() => toggleSelection(36)}
              />
            </div>
          </div>
          <div className="mt-[120px] flex flex-col items-center justify-center">
            <div>
              <Button
                size="XL"
                color={`${isAnySelected ? 'primary' : 'gray-3'}`}
                border={false}
                onClick={isAnySelected ? nextPage : undefined}
              >
                다음
              </Button>
            </div>

            <p
              className="text-gray-4 underline cursor-pointer text-md mt-[20px]"
              onClick={skipPage}
            >
              취향 분석 다음에 하기
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferenceGenre;
