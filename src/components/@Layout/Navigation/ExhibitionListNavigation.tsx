import Image from "next/image";

import Button from "../../common/Botton";

import FilterIcon from "@/public/svgs/Filter.svg";
import ShuffleIcon from "@/public/svgs/Shuffle.svg";
import VerticalArrowIcon from "@/public/svgs/VerticalArrow.svg";
import OptionButton from "@/components/@Exhibiton/OptionButton";

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
        <Button
          size="SM"
          color="gray-3"
          border={false}
          aria-label="셔플"
          className="w-6 h-6"
        >
          <Image src={ShuffleIcon} alt={"셔플"} />
        </Button>
        <OptionButton>
          <Image src={FilterIcon} alt={"옵션"} />
        </OptionButton>
      </div>
    </nav>
  );
};

export default ExhibitionListNavigation;
