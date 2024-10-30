import Link from 'next/link';

import Button from '@/components/common/Botton';

const ActionButtons = () => {
  return (
    <div className="flex justify-center gap-[13px]">
      <Button
        size="M"
        color="point"
        border={false}
        aria-label="다녀왔어요 추가"
      >
        <span className="flex items-center gap-[5px]">
          <p>다녀왔어요</p>
          <span>+</span>
        </span>
      </Button>
      <Link
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[165px] h-[40px] rounded-[5px] border border-primary text-primary text-sm font-bold flex items-center justify-center"
      >
        전시 홈페이지
      </Link>
    </div>
  );
};

export default ActionButtons;
