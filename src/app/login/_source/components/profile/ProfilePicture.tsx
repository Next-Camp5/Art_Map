import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

const ProfilePicture = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleClear = () => {
    setImagePreview(null);
  };
  return (
    <>
      <div className="relative flex justify-center mt-[60px] m-4">
        {/*프로필 아이콘*/}
        {imagePreview ? (
          <Image
            src={imagePreview}
            alt="Profile Preview"
            className="w-[70px] h-[70px] rounded-full object-cover"
            width={70}
            height={70}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="34.5" fill="white" stroke="#F0F0F0" />
            <circle
              cx="35"
              cy="24.5"
              r="8.75"
              stroke="#1A1A1A"
              strokeWidth="3.5"
            />
            <path
              d="M50.75 52.5C50.75 42.4484 43.6985 38.5 35 38.5C26.3015 38.5 19.25 42.4484 19.25 52.5"
              stroke="#1A1A1A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        )}
        {/*플러스 버튼 아이콘*/}
        <div className="absolute top-[50px] right-[136px] z-10">
          {imagePreview ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={handleClear}
            >
              <path
                d="M10 0C11.9778 0 13.9112 0.58649 15.5557 1.6853C17.2002 2.78412 18.4819 4.3459 19.2388 6.17317C19.9957 8.00043 20.1937 10.0111 19.8079 11.9509C19.422 13.8907 18.4696 15.6725 17.0711 17.0711C15.6725 18.4696 13.8907 19.422 11.9509 19.8079C10.0111 20.1937 8.00043 19.9957 6.17317 19.2388C4.3459 18.4819 2.78412 17.2002 1.6853 15.5557C0.58649 13.9112 0 11.9778 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0V0Z"
                fill="#808080"
              />
              <path
                d="M13.0312 6.66797L6.66729 13.0319"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.0312 13.032L6.66729 6.66802"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <>
              <label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="black"
                  />
                  <path
                    d="M9.66602 5.166V14.166"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.166 9.666H5.16602"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </label>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ProfilePicture;
