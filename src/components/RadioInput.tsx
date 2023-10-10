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
      <div className="flex items-center py-3">
        <input
          className="peer w-0 h-0 opacity-0"
          type="radio"
          id={period}
          {...rest}
        />
        <label
          className="w-5 h-5 mr-2 sm:mr-5 border-2 border-solid border-light-grey rounded-full cursor-pointer relative after:absolute after:content-[''] after:block after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:w-3 after:h-3 after:rounded-full after:bg-light-grey after:opacity-0 peer-checked:after:opacity-100"
          htmlFor={period}
        >
          <span className="w-3 h-3 rounded-full bg-light-grey peer-checked:bg-blue-800" />
        </label>
        <label
          className="flex-1 flex items-center justify-between text-light-grey cursor-pointer"
          htmlFor={period}
        >
          <span>{period}</span> <span>{hour}</span>
        </label>
      </div>
      <hr />
    </>
  );
}
