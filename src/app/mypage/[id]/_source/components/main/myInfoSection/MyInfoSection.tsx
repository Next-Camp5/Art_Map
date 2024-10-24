import MyPageLinkIcon from '../../common/MyPageLinkIcon';
import Profile from '@/components/common/profile/Profile';

import HeartIcon from '/public/svgs/Heart.svg';
import TicketIcon from '/public/svgs/Ticket.svg';
import CuratorPickIcon from '/public/svgs/CuratorPick.svg';

const MyInfoSection = () => {
  return (
    <section className="bg-white px-4">
      <h2 className="sr-only">나의 정보</h2>
      <div className="flex items-center gap-[15px]">
        <Profile size="L" aria-label="프로필" />
        <span aria-label="닉네임" className="text-md font-bold text-gray-6">
          {'수지님'}
        </span>
      </div>
      <div className="flex items-center justify-center gap-[22px] py-[20px]">
        <MyPageLinkIcon
          imgSrc={TicketIcon}
          link="/mypage/1"
          title="다녀온 전시"
        />
        <MyPageLinkIcon
          imgSrc={HeartIcon}
          link="/mypage/1"
          title="좋아요 한 전시"
        />
        <MyPageLinkIcon
          imgSrc={CuratorPickIcon}
          link="/mypage/1"
          title="나의 큐레이터 픽"
        />
      </div>
    </section>
  );
};

export default MyInfoSection;
