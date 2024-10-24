interface CollectionBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const CollectionBtn = ({
  children,
  onClick,
  isSelected,
}: CollectionBtnProps) => {
  return (
    <button
      className={`flex-1 border-b py-[5px] font-bold text-gray-6 ${
        isSelected ? 'border-gray-6' : 'border-gray-3'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CollectionBtn;
