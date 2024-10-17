const BaseTagButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`rounded-[15px] flex justify-center items-center h-[30px] pt-[6px] pb-[6px] text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default BaseTagButton;
