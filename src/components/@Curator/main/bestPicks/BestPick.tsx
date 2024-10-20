import Image from "next/image";

const BestPick = ({ bestPick }) => {
  return (
    <div key={bestPick.id} className=" w-[280px] h-[280px] relative">
      <Image src={"/prototypeImg.jpg"} alt={bestPick.title} fill={true}></Image>
      <div className=" absolute bottom-[38px] left-[15px] text-white">
        <div className="text-extra font-bold ] mb-[10px]">{bestPick.title}</div>
        <div className="text-sm  ">by. {bestPick.curator}</div>
      </div>
    </div>
  );
};

export default BestPick;
