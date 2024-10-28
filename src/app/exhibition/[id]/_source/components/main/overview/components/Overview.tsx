import ExhibitionStatusTag from '@/components/common/exhibitionStatusTag/ExhibitionStatusTag';

import ShareIcon from '@/components/Icon/ShareIcon';
import HeartIcon from '@/components/Icon/HeartIcon';
const Overview = () => {
  return (
    <div className="flex flex-col gap-1 text-gray-6 mb-[30px]">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{'솔리드 시티 #도시#사람#공간'}</h3>
        <div className="w-[50px]">
          <ExhibitionStatusTag state="ACTIVE" />
        </div>
      </div>
      <div className="flex flex-col">
        <span>{'국립현대미술관'}</span>
        <div className="flex justify-between items-center">
          <p>{'2024.09.14 ~ 2024.11.17'}</p>
          <div className="flex items-center gap-2.5">
            <HeartIcon aria-label="좋아요" />
            <ShareIcon aria-label="공유하기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
