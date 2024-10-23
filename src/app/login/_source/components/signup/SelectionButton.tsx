interface SelectionFieldProps {
  id: string;
  isSelected: boolean;
  handleClick: (id: string) => void;
  svgIcon: JSX.Element;
  title: string;
  description: string;
}

const SelectionButton = ({
  id,
  isSelected,
  handleClick,
  svgIcon,
  title,
  description,
}: SelectionFieldProps) => {
  return (
    <button
      className={`flex w-[343px] h-[93px] rounded-[10px] bg-white mt-[20px] items-center p-[26px] border-2 ${
        isSelected ? 'border-success' : 'border-transparent'
      }`}
      style={{ boxShadow: '0px 0px 10px 0 rgba(26,26,26,0.1)' }}
      onClick={() => handleClick(id)}
    >
      {svgIcon}
      <div className="ml-[20px]">
        <p className="text-base font-bold text-left text-primary">{title}</p>
        <p className="text-sm font-normal text-left text-gray-4">
          {description}
        </p>
      </div>
    </button>
  );
};

export default SelectionButton;
