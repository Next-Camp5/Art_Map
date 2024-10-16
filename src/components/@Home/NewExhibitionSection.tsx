import Image from "next/image";

import HorizontalExhibitionSection from "./components/HorizontalExhibitionSection";

import ArrowLeftIcon from "@/public/svgs/ArrowLeft.svg";
import ArrowRightIcon from "@/public/svgs/ArrowRight.svg";

const NewExhibitionSection = () => (
  <section className="relative flex flex-col gap-5 px-4 mb-[50px]">
    <h2 className="text-lg font-bold text-gray-6 w-[343px]">
      새로 시작한 전시
    </h2>
    <div className="flex flex-col gap-5">
      <HorizontalExhibitionSection />
      <HorizontalExhibitionSection />
      <HorizontalExhibitionSection />
    </div>
    <div className="absolute top-1 right-4 flex justify-between gap-2 max-w-[68px]">
      <Image src={ArrowLeftIcon} alt="왼쪽 화살표" />
      <Image src={ArrowRightIcon} alt="오른쪽 화살표" />
    </div>
  </section>
);

export default NewExhibitionSection;
