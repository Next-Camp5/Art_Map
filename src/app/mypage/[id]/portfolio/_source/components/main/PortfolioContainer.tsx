import Image from 'next/image';

import MyWorks from './myWorks/MyWorks';
import MypageNav from '@/app/mypage/[id]/_source/components/common/MypageNav';

import portfolioImage from '/public/images/portfolio.png';

const PortfolioContainer = () => {
  return (
    <main className="flex flex-col bg-white pb-[100px] min-h-screen">
      <MypageNav />
      <aside className="mb-[30px]">
        <Image src={portfolioImage} alt="포트폴리오 데코이미지" />
      </aside>
      <MyWorks />
    </main>
  );
};

export default PortfolioContainer;
