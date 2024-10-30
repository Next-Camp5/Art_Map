import Link from 'next/link';
import SectionHeader from '../../common/SectionHeader';

const MyTasteAnalysisSection = () => {
  return (
    <section className="bg-white px-4 min-h-[275px] flex flex-col">
      <SectionHeader title="나의 취향분석" link="/" />
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="text-gray-4">
            <p className="text-center mb-1">
              지금
              <Link href="/">
                <strong className="text-point font-bold">취향분석</strong>
              </Link>
              하고
            </p>
            <p>나와 딱 맞는 전시추천을 받아보세요</p>
          </div>
          <Link
            href="/"
            className="text-point border-2 border-point rounded-[15px] min-h-[30px] text-sm font-bold px-[15px] flex items-center justify-center"
          >
            취향분석 하러가기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyTasteAnalysisSection;
