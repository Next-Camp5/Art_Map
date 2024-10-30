import Image from 'next/image';

import ExhibitionInfoIcon from '/public/svgs/ExhibitionInfo.svg';

const NoDataMessage = () => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <Image src={ExhibitionInfoIcon} alt="전시관 정보" />
      <p className="text-sm font-bold text-gray-3">
        좋아요 한 내용이 없습니다.
      </p>
    </div>
  );
};

export default NoDataMessage;
