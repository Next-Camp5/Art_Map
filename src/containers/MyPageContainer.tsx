import Image from 'next/image';
import Link from 'next/link';

import Profile from '@/components/common/profile/Profile';

import TicketIcon from '/public/svgs/ticket.svg';

const MyPageContainer = () => {
  return (
    <div>
      <header></header>
      <main>
        <div className="flex items-center gap-[15px]">
          <Profile size="L" />
          <span className="text-md font-bold text-gray-6">{'수지님'}</span>
        </div>
        <div>
          <Link href={'/mypage/1'} className="flex flex-col items-center">
            <Image src={TicketIcon} alt="다녀온 전시" width={50} height={50} />
            <span className="text-sm text-gray-4 font-bold">다녀온 전시</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MyPageContainer;
