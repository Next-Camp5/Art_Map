'use client';

import { ChangeEvent } from 'react';

interface InputFieldProps {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  errorMessage?: string;
  validate?: (value: string) => boolean;
  onInputChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const InputField = ({
  type,
  placeholder,
  errorMessage,
  validate,
  onInputChange,
  value,
  disabled = false,
}: InputFieldProps) => {
  const isValid = validate ? validate(value) : true;
  const isEmpty = value === '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <>
      <div
        className={`flex items-center justify-center border-b-2 ${
          !isValid && !isEmpty
            ? 'border-red-500'
            : isValid && !isEmpty
            ? 'border-primary'
            : 'border-gray-3'
        } m-4`}
      >
        <div className="flex items-center justify-center gap-2 w-[343px] pl-0 pr-0">
          <input
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            className="pb-2 w-[343px] focus:ring-0 focus:outline-none"
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="h-[24px]">
        {!isValid && !isEmpty && errorMessage && (
          <p className="ml-4 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default InputField;
