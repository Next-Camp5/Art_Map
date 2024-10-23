interface Props {
  name: string;
  count: number;
}

const GuMarker = ({ name, count }: Props) => {
  return (
    <div
      className="w-[82px] h-[82px]  rounded-full bg-gray-5 text-white pt-[13px] pb-[13px]"
      style={{ filter: 'drop-shadow(0px 0px 5px rgba(26,26,26,0.8))' }}
    >
      <div>
        <p className="text-xs font-bold text-center">{name}</p>
        <p className=" text-extra font-bold text-center">{count}</p>
      </div>
    </div>
  );
};

export default GuMarker;
