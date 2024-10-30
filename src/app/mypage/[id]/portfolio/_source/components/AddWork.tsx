import Image from 'next/image';

import Button from '@/components/common/Botton';

import PlusIcon from '/public/svgs/Plus.svg';

const AddWork = () => {
  return (
    <div className="my-[30px] flex justify-center">
      <Button size="M" color="primary" border={true}>
        <span className="flex justify-center items-center gap-[5px]">
          <p>작품 추가</p>
          <Image src={PlusIcon} alt="작품추가" />
        </span>
      </Button>
    </div>
  );
};

export default AddWork;
