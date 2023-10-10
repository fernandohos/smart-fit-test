import { InputHTMLAttributes, ReactNode } from "react";

interface ICheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function CheckboxInput({
  label,
  ...rest
}: ICheckboxInputProps) {
  return (
    <div className="flex items-center gap-2">
      <input className="w-4 h-4 cursor-pointer" id={label} type="checkbox" {...rest} />
      <label className="cursor-pointer" htmlFor={label}>{label}</label>
    </div>
  );
}
