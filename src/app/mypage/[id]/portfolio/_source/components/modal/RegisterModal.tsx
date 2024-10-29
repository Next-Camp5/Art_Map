'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import createArtwork from '@/actions/artwork/createArtwork';

import XIcon from '@/components/Icon/XIcon';
import Button from '@/components/common/Botton';
import ImageRegistBtn from './components/ImageRegistBtn';

const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    ingredients: '',
    size: '',
    year: '',
    genreId: '',
    artistId: '2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageChange = (base64Image: string) => {
    setFormData((prevData) => ({
      ...prevData,
      image: base64Image,
    }));
    console.log(base64Image);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key as keyof typeof formData]);
      });

      await createArtwork(form);
      onClose();
    } catch (error) {
      console.error('Error submitting artwork:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ''
  );

  return createPortal(
    <div
      className="fixed inset-0 max-w-[375px] mx-auto bg-white z-[60] p-4"
      role="dialog"
      aria-labelledby="works-section-title"
      aria-describedby="works-section-description"
    >
      <header className="flex justify-center items-center min-h-[60px]">
        <h1 id="works-section-title" className="font-bold text-gray-6 text-lg">
          작품 등록
        </h1>
      </header>
      <p id="works-section-description" className="sr-only">
        이 모달에서 새로운 작품 정보를 등록할 수 있습니다.
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-6 mb-2.5">
              전시사진 등록
            </h3>
            <ImageRegistBtn onImageChange={handleImageChange} />
          </div>
          <div className="mb-10">
            <label htmlFor="title" className="block text-sm font-bold mb-2.5">
              작품명
            </label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              placeholder="작품명을 입력해주세요"
              className={`w-full border-b-2 p-2 focus:outline-none ${
                formData.title ? 'border-primary' : 'border-gray-3'
              }`}
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="ingredients"
              className="block text-sm font-bold mb-2.5"
            >
              작품 재료
            </label>
            <input
              id="ingredients"
              name="ingredients"
              type="text"
              placeholder="재료를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 p-2 focus:outline-none ${
                formData.ingredients ? 'border-primary' : 'border-gray-3'
              }`}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="size" className="block text-sm font-bold">
              작품 크기
            </label>
            <input
              id="size"
              name="size"
              type="text"
              placeholder="작품 크기를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 p-2 focus:outline-none ${
                formData.size ? 'border-primary' : 'border-gray-3'
              }`}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="year" className="block text-sm font-bold">
              제작연도
            </label>
            <input
              id="year"
              name="year"
              type="text"
              placeholder="제작연도를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 p-2 focus:outline-none ${
                formData.year ? 'border-primary' : 'border-gray-3'
              }`}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="genreId" className="block text-sm font-bold">
              장르 ID
            </label>
            <input
              id="genreId"
              name="genreId"
              type="text"
              placeholder="장르 ID를 입력해주세요"
              onChange={handleChange}
              className={`w-full border-b-2 p-2 focus:outline-none ${
                formData.genreId ? 'border-primary' : 'border-gray-3'
              }`}
            />
          </div>
          <div className="mb-[30px]">
            <Button
              size="XL"
              color={isFormComplete ? 'primary' : 'gray-3'}
              border={false}
              type="submit"
              disabled={!isFormComplete}
            >
              {isSubmitting ? '등록 중...' : '등록완료'}
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
