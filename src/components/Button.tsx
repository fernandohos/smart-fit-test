import { ReactNode, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonStyle?: "filled" | "outlined";
}

export default function Button({
  children,
  buttonStyle = "filled",
  ...rest
}: IButtonProps) {
  return (
    <button
      {...rest}
      className={`
      ${
        buttonStyle === "filled"
          ? "bg-yellow"
          : "border-light-grey border-opacity-30 border-2 bg-white"
      } 
      uppercase px-5 py-3 rounded-md w-full max-w-xs font-bold transition-all hover:brightness-90 flex-1
      `}
    >
      {children}
    </button>
  );
}
