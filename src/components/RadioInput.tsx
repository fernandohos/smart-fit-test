import { InputHTMLAttributes } from "react";

interface IRadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  period: string;
  hour: string;
}

export default function RadioInput({
  period,
  hour,
  ...rest
}: IRadioInputProps) {
  return (
    <>
      <div className="flex items-center py-3 ">
        <input
          className="w-0 h-0 opacity-0"
          type="radio"
          id={period}
          {...rest}
        />
        <label
          className="w-5 h-5 mr-2 sm:mr-5 border-2 border-solid border-light-grey rounded-full"
          htmlFor={period}
        />
        <label
          className="flex-1 flex items-center justify-between text-light-grey "
          htmlFor={period}
        >
          <span>{period}</span> <span>{hour}</span>
        </label>
      </div>
      <hr />
    </>
  );
}
