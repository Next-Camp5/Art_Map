import Image from 'next/image';
import Link from 'next/link';

const BestPick = ({ bestPick }) => {
  return (
    <Link href={'/curator/post/1'}>
      <div key={bestPick.id} className=" w-[280px] h-[280px] relative">
        <Image
          src={'/prototypeImg.jpg'}
          alt={bestPick.title}
          fill={true}
        ></Image>
        <div className=" absolute bottom-[38px] left-[15px] text-white">
          <div className="text-extra font-bold ] mb-[10px]">
            {bestPick.title}
          </div>
          <div className="text-sm  ">by. {bestPick.curator}</div>
        </div>
      </div>
    </Link>
  );
};

export default BestPick;
