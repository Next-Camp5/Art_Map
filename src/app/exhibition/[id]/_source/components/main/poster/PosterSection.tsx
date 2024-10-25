import Image from 'next/image';
import Poster from '/public/images/poster4.png';

const PosterSection = () => (
  <figure className="relative w-[375px] h-[540px]">
    <Image src={Poster} alt="솔리드 시티 전시 포스터" />
    <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-gray-6/60 to-gray-6/0"></div>
  </figure>
);

export default PosterSection;
