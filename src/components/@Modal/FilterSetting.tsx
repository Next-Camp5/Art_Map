import DropdownButton from "./components/DropdownButton";
import ToggleButton from "../common/toggleButton/ToggleButton";

const FilterSetting = () => {
  return (
    <div
      className="relative flex flex-col rounded-t-xl bg-slate-400"
      role="dialog"
      aria-labelledby="filter-dialog-title"
      aria-describedby="filter-dialog-description"
    >
      <div
        className="flex justify-center items-center h-[60px] border-b border-gray-200"
        id="filter-dialog-title"
      >
        <h4 className="text-lg font-bold text-gray-6">필터 설정</h4>
      </div>
      <div className="flex justify-between items-center px-4 border-b border-gray-200 h-[60px]">
        <span className="text-md font-medium text-gray-6">전시중</span>
        <ToggleButton />
      </div>
      <DropdownButton label="지역" items={["서울", "부산", "대구"]} />
      <DropdownButton label="카테고리" items={["미술", "음악", "연극"]} />
      <div className="flex gap-2.5 px-4 py-1.5">
        <div
          className="flex flex-col items-center justify-center w-[50px] h-[50px]"
          role="button"
          tabIndex={0}
          aria-label="전체해제"
        >
          <span className="text-md font-medium text-gray-6">아이콘</span>
          <p className="text-sm text-gray-400">전체해제</p>
        </div>
        <button
          type="button"
          className="flex justify-center items-center w-[283px] h-[50px] gap-2.5 px-[15px] rounded-[5px] bg-[#1a1a1a]"
          aria-label="찾아보기"
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
            찾아보기
          </p>
        </button>
        <button
          type="button"
          aria-label="닫기"
          className="absolute top-0 right-0 w-[60px] h-[60px]"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default FilterSetting;
