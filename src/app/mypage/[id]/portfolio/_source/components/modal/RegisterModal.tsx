'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import XIcon from '@/components/Icon/XIcon';
import Button from '@/components/common/Botton';
import ImageRegistBtn from './components/ImageRegistBtn';

const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    title: '',
    materials: '',
    size: '',
    year: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ''
  );

  return createPortal(
    <div
      className="fixed inset-0 max-w-[375px] mx-auto bg-white z-[60] p-4"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <header className="flex justify-center items-center min-h-[60px]">
        <h1 id="modal-title" className="font-bold text-gray-6 text-lg">
          작품 등록
        </h1>
      </header>
      <p id="modal-description" className="sr-only">
        이 모달에서 새로운 작품 정보를 등록할 수 있습니다.
      </p>
      <div>
        <form>
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-6 mb-2.5">
              전시사진 등록
            </h3>
            <ImageRegistBtn />
          </div>
          <div className="mb-10">
            <label htmlFor="title" className="block text-sm font-bold mb-2.5">
              작품명
            </label>
            <input
              id="title"
              type="text"
              placeholder="작품명을 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 ${
                formData.title ? 'border-gray-6' : 'border-gray-3'
              } p-2 focus:outline-none`}
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="materials"
              className="block text-sm font-bold mb-2.5"
            >
              작품 재료
            </label>
            <input
              id="materials"
              type="text"
              placeholder="재료를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 ${
                formData.materials ? 'border-gray-6' : 'border-gray-3'
              } p-2 focus:outline-none`}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="size" className="block text-sm font-bold">
              작품 크기
            </label>
            <input
              id="size"
              type="text"
              placeholder="작품 크기를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 ${
                formData.size ? 'border-gray-6' : 'border-gray-3'
              } p-2 focus:outline-none`}
            />
          </div>
          <div className="mb-[60px]">
            <label htmlFor="year" className="block text-sm font-bold">
              제작연도
            </label>
            <input
              id="year"
              type="text"
              placeholder="제작연도를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 ${
                formData.year ? 'border-gray-6' : 'border-gray-3'
              } p-2 focus:outline-none`}
            />
          </div>
          <div className="mb-[30px]">
            <Button
              size="XL"
              color={isFormComplete ? 'primary' : 'gray-3'}
              border={false}
              disabled={!isFormComplete}
              type="submit"
            >
              등록완료
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute top-10 right-2">
        <span
          onClick={onClose}
          className="flex justify-center items-center cursor-pointer w-6 h-6"
          aria-label="닫기 버튼"
        >
          <XIcon />
        </span>
      </div>
    </div>,
    document.body
  );
};

export default RegisterModal;
