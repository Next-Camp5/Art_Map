import { memo } from 'react';
import FilterRemote from '../modal/FilterRemote';
import GuSearchRemote from '../modal/GuSearchRemote';

const Header = () => {
  return (
    <div
      className=" z-30 fixed w-[343px] h-10 rounded-[25px] bg-white top-[26px] px-[20px] py-[10px] flex justify-between"
      style={{ boxShadow: '0px 0px 10px 0 rgba(26,26,26,0.1)' }}
    >
      <GuSearchRemote>
        <div className="flex items-center cursor-pointer">
          <p className=" text-sm font-bold">서울특별시 마포구</p>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" ml-1"
            preserveAspectRatio="none"
          >
            <path
              d="M4.47754 7.01758L7.88953 10.5126L11.4225 7.01758"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </GuSearchRemote>
      <FilterRemote>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" cursor-pointer"
          preserveAspectRatio="none"
        >
          <path
            d="M11 18H22"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 18H6"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 20C7.11929 20 6 18.8807 6 17.5C6 16.1193 7.11929 15 8.5 15C9.88071 15 11 16.1193 11 17.5C11 18.8807 9.88071 20 8.5 20Z"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 8H22"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 8H11"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
          />
          <path
            d="M13.5 10C12.1193 10 11 8.88071 11 7.5C11 6.11929 12.1193 5 13.5 5C14.8807 5 16 6.11929 16 7.5C16 8.88071 14.8807 10 13.5 10Z"
            stroke="#1A1A1A"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </FilterRemote>
    </div>
  );
};

export default memo(Header);
