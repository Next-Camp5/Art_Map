import Image from 'next/image';
import PosterImage2 from '/public/images/poster3.png';

const UpcomingExhibition = () => {
  return (
    <div id="upcoming-exhibition" title="예정전시">
      <figure
        aria-labelledby="upcoming-title"
        aria-describedby="upcoming-dates"
      >
        <div className="flex justify-center items-center w-[150px] h-[210px] mb-2.5">
          <Image
            src={PosterImage2}
            alt="움직임을 만드는 사람들 포스터"
            width={150}
            height={210}
          />
        </div>
        <figcaption className="text-sm text-gray-6 flex flex-col gap-[5px]">
          <span id="upcoming-title" className="font-bold">
            움직임을 만드는 사람들
          </span>
          <span id="upcoming-dates">2024.09.01 ~ 2024.10.31</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default UpcomingExhibition;
