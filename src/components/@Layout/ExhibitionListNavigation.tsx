import Image from "next/image";

import FilterIcon from "@/public/svgs/Filter.svg";
import ShuffleIcon from "@/public/svgs/Shuffle.svg";
import VerticalArrowIcon from "@/public/svgs/VerticalArrow.svg";

const ExhibitionListNavigation = () => {
  return (
    <nav
      aria-label="Exhibition list navigation"
      className="flex justify-between items-center w-full px-4"
    >
      <div>
        <button className="flex items-center gap-2" aria-label={"최신순"}>
          <span className="text-md font-bold text-gray-6">{"최신순"}</span>
          <Image src={VerticalArrowIcon} alt={"최신순"} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button aria-label="셔플" className="flex items-center gap-1 w-6 h-6">
          <Image src={ShuffleIcon} alt={"셔플"} />
        </button>
        <button aria-label="옵션" className="flex items-center gap-1 w-6 h-6">
          <Image src={FilterIcon} alt={"옵션"} />
        </button>
      </div>
    </nav>
  );
};

export default ExhibitionListNavigation;
