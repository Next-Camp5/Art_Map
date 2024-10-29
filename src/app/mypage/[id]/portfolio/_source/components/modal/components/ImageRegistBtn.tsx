'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageRegistBtnProps {
  fillColor?: string;
}

const ImageRegistBtn = ({ fillColor = 'gray-3' }: ImageRegistBtnProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false); // 작품 등록 상태
  const [showAlert, setShowAlert] = useState(false); // 안내 문구 표시 상태

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
        setIsRegistered(true); // 작품이 등록되었음을 표시
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (isRegistered) {
      e.preventDefault(); // 파일 선택창이 바로 열리는 것을 막음
      setShowAlert(true); // 작품 등록 시 안내 문구 표시
    }
  };

  const handleAlertConfirm = () => {
    // 안내 문구 확인 후 파일 선택 가능
    setShowAlert(false);
    document.getElementById('file')?.click();
  };

  return (
    <>
      <label
        htmlFor="file"
        className="cursor-pointer w-20 h-20 block"
        onClick={handleLabelClick}
      >
        {previewUrl ? (
          <div className="w-20 h-20">
            <Image
              src={previewUrl}
              alt="미리보기"
              className="w-full h-full object-cover rounded-lg"
              width={80}
              height={80}
            />
          </div>
        ) : (
          <div
            className={`w-20 h-20 flex justify-center items-center rounded-lg border-2 border-dashed border-${fillColor}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 11 10"
              className={`fill-${fillColor}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.73405 4.27744H0.5V5.7439H4.73405V10H6.26596V5.7439H10.5V4.27744H6.26596V0H4.73405V4.27744Z"
                className={`fill-${fillColor}`}
              />
            </svg>
          </div>
        )}
      </label>
      <input
        id="file"
        className="hidden"
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* 안내 문구 표시 */}
      {showAlert && (
        <div className="fixed inset-0 flex max-w-[375px] mx-auto items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg text-center">
            <p className="my-6 px-10">작품을 바꾸시겠습니까?</p>
            <div className="flex">
              <button
                onClick={handleAlertConfirm}
                className="px-4 py-2 bg-point text-white flex-1 rounded-es-lg hover:bg-opacity-90"
              >
                예
              </button>
              <button
                onClick={() => setShowAlert(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-ee-lg flex-1 hover:bg-opacity-70"
              >
                아니요
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageRegistBtn;
