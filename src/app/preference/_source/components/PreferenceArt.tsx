'use client';

import BackIcon from '@/components/Icon/BackIcon';
import {
  FirstPic,
  SecondPic,
  ThirdPic,
  FourthPic,
  FifthPic,
} from './common/PreferenceArtImage';
import Button from '@/components/common/Botton';
import { useState } from 'react';
import { HeaderProps } from '@/app/login/_source/components/types/HeaderProps';

const PreferenceArt = ({ nextPage, prevPage, skipPage }: HeaderProps) => {
  const [selectedPics, setSelectedPics] = useState<number[]>([]);

  const toggleSelection = (index: number) => {
    setSelectedPics((prevSelectedPics) =>
      prevSelectedPics.includes(index)
        ? prevSelectedPics.filter((pic) => pic !== index)
        : [...prevSelectedPics, index]
    );
  };

  const isAnySelected = selectedPics.length > 0;

  const getClassNames = (index: number) => {
    return `rounded-[5px] ${
      selectedPics.includes(index)
        ? 'border-[3px] border-point'
        : isAnySelected
        ? 'opacity-30'
        : 'opacity-100'
    }`;
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative overflow-hidden bg-white w-[375px] h-[812px]">
          <div className="mt-[60px] m-4">
            <BackIcon onClick={prevPage} />
          </div>
          <div className="m-4">
            <p className="text-lg font-bold">
              마음에 드는 작품을
              <br />
              골라주세요.
            </p>
          </div>
          <div className="mt-[40px] m-4 grid grid-cols-2 gap-x-[11px] gap-y-[10px] overflow-y-auto h-[550px] pb-[100px]">
            <FirstPic
              className={getClassNames(1)}
              onClick={() => toggleSelection(1)}
            />
            <SecondPic
              className={getClassNames(2)}
              onClick={() => toggleSelection(2)}
            />
            <ThirdPic
              className={getClassNames(3)}
              onClick={() => toggleSelection(3)}
            />
            <FourthPic
              className={getClassNames(4)}
              onClick={() => toggleSelection(4)}
            />
            <FifthPic
              className={getClassNames(5)}
              onClick={() => toggleSelection(5)}
            />
            <FirstPic
              className={getClassNames(6)}
              onClick={() => toggleSelection(6)}
            />
            <SecondPic
              className={getClassNames(7)}
              onClick={() => toggleSelection(7)}
            />
            <ThirdPic
              className={getClassNames(8)}
              onClick={() => toggleSelection(8)}
            />
            <FourthPic
              className={getClassNames(9)}
              onClick={() => toggleSelection(9)}
            />
            <FifthPic
              className={getClassNames(10)}
              onClick={() => toggleSelection(10)}
            />
          </div>
          <div
            className="h-40 w-[375px] absolute bottom-[50px] flex flex-col items-center justify-center"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 28.65%)',
            }}
          >
            <div className="mt-[30px]">
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
              className="text-gray-4 underline cursor-pointer text-md mt-[10px]"
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

export default PreferenceArt;
