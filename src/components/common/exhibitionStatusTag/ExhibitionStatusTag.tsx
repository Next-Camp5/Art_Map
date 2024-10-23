type state = 'ACTIVE' | 'UPCOMING' | 'CLOSED';

interface Props {
  state: state;
  isBorder?: boolean;
}

const STATE_COLOR_MAP: { [key in state]: string } = {
  ACTIVE: 'point',
  CLOSED: 'primary',
  UPCOMING: 'gray-3',
};

const STATE_NAME_MAP: { [key in state]: string } = {
  ACTIVE: '전시중',
  CLOSED: '업커밍',
  UPCOMING: '전시종료',
};

const ExhibitionStatusTag = ({ state, isBorder = false }: Props) => {
  const color = STATE_COLOR_MAP[state];
  return (
    <div
      className={`pt-[4px] pr-[8px] pb-[4px] pl-[8px] font-bold rounded-[13px] text-sm inline-flex justify-center items-center h-[26px] ${
        isBorder
          ? `text-${color} border border-1 border-${color}`
          : `text-white bg-${color}`
      }`}
    >
      {STATE_NAME_MAP[state]}
    </div>
  );
};

export default ExhibitionStatusTag;
