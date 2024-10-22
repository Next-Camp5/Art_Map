import Link from "next/link";
import Image from "next/image";

import displayThumbnail from "@/public/images/displayThumbnail.png";

const HorizontalExhibitionItem = () => {
  return (
    <Link
      href="/exhibition/detail"
      className="flex items-center gap-2.5 w-[343px]"
    >
      <Image
        src={displayThumbnail}
        alt={`전시 이미지`}
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-md text-gray-6 truncate max-w-[253px]">
          온 : 프로젝트 박경종 Suspendedadwidwdi
        </h3>
        <div className="flex flex-col">
          <p className="text-sm text-gray-5">청주미술창작스튜디오</p>
          <p className="text-sm text-gray-4">2021.08.01 ~ 2021.09.09</p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalExhibitionItem;
