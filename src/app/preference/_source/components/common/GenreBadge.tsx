import { useState } from 'react';

interface GenreBadgeProps {
  click: boolean;
  name: string;
  onToggle: () => void;
}

const GenreBadge = ({ click, name, onToggle }: GenreBadgeProps) => {
  const [isClick, setIsClick] = useState(click);
  const textColor = isClick ? 'text-white' : 'text-gray-4';
  const borderColor = isClick
    ? 'border border-primary'
    : 'border border-gray-2';
  const bgColor = isClick ? 'bg-primary' : 'bg-white';

  const handleIsClick = () => {
    setIsClick(!isClick);
    onToggle();
  };

  return (
    <span
      className={`flex justify-center items-center px-[15px] h-[26px] rounded-[13px]  ${borderColor} ${bgColor}`}
      aria-label={name}
      onClick={handleIsClick}
    >
      <p className={`text-sm font-bold ${textColor}`}>{name}</p>
    </span>
  );
};

export default GenreBadge;
