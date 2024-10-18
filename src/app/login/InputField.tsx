interface InputFieldProps {
  type: "email" | "password";
  placeholder: string;
  icon?: JSX.Element;
  pattern?: string;
  className?: string;
}

const InputField = ({
  type,
  placeholder,
  icon,
  pattern,
  className = "flex items-center justify-center border-b-2 border-primary m-4 mt-[20px]",
}: InputFieldProps) => {
  return (
    <div className={className}>
      <form className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          required
          className="p-2 w-[343px] focus:ring-0 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default InputField;
