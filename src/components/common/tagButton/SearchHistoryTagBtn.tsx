import BaseTagButton from "./BaseTagButton";

const SearchHistoryTagBtn = ({
  className,
  children,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <BaseTagButton
      onClick={handleClick}
      className={`bg-white pr-[10px]  pl-[10px] text-gray-4 ${className}`}
      {...props}
    >
      {children}
    </BaseTagButton>
  );
};

export default SearchHistoryTagBtn;
