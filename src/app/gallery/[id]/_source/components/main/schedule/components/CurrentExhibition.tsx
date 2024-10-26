import Image from 'next/image';

import PosterImage from '/public/images/poster.png';

const CurrentExhibition = () => {
  return (
    <div id="current-exhibition" title="현재전시">
      <figure aria-labelledby="current-title" aria-describedby="current-dates">
        <div className="flex justify-center items-center w-[150px] h-[210px] mb-2.5">
          <Image
            src={PosterImage}
            alt="움직임을 만드는 사람들 포스터"
            width={150}
            height={210}
          />
        </div>
        <figcaption className="text-sm text-gray-6 flex flex-col gap-[5px]">
          <span id="current-title" className="font-bold">
            움직임을 만드는 사람들
          </span>
          <span id="current-dates">2024.09.01 ~ 2024.10.31</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default CurrentExhibition;
