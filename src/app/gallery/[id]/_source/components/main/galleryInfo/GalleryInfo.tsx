import Link from 'next/link';
import HeartIcon from '@/components/Icon/HeartIcon';

const GalleryInfo = () => {
  return (
    <section className="flex flex-col py-5">
      <div className="flex items-center justify-between pb-5 border-b border-gray-2 px-4">
        <h2 className="text-lg font-bold text-gray-6">
          {'국립현대미술관/서울'}
        </h2>
        <HeartIcon fill="point" stroke="none" />
      </div>
      <div className="px-4 border-b border-gray-2 py-5">
        <dl>
          <div className="flex text-sm mb-5">
            <dt className="font-bold w-[85px]">주소</dt>
            <dd>서울특별시 영등포구 국제금융로 100</dd>
          </div>
          <div className="flex text-sm mb-5">
            <dt className="font-bold w-[85px]">운영시간</dt>
            <dd>10:00 ~ 18:00 (입장마감 17:30)</dd>
          </div>
          <div className="flex text-sm mb-5">
            <dt className="font-bold w-[85px]">휴관일</dt>
            <dd>매주 월요일, 설날, 추석</dd>
          </div>
          <div className="flex text-sm mb-5">
            <dt className="font-bold w-[85px]">전화번호</dt>
            <dd>02-123-4567</dd>
          </div>
          <div className="flex text-sm mb-5">
            <dt className="font-bold w-[85px]">이메일</dt>
            <dd>info@moca.or.kr</dd>
          </div>

          <dt className="sr-only">전시관 홈페이지</dt>
          <dd>
            <Link
              href="https://www.moca.go.kr"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-6 w-full block text-center py-2.5 rounded-md min-h-10 rounded-[5px]"
            >
              전시관 홈페이지
            </Link>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default GalleryInfo;
