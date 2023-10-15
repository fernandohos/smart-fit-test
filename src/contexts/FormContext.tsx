import { PropsWithChildren, createContext } from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import useUnits from "../hooks/useUnits";

type FormDataType = {
  period: PeriodType;
  showClosedUnits: boolean;
};

type FormContextType = {
  formData: FormDataType;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handlePeriodChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type PeriodType = "morning" | "afternoon" | "evening";

export const formContext = createContext({} as FormContextType);

export default function FormProvider({ children }: PropsWithChildren) {
  const { filterUnits } = useUnits();
  const [formData, setFormData] = useState<FormDataType>({
    period: "morning",
    showClosedUnits: false,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submited: ", formData);
    filterUnits(formData);
  }

  function handlePeriodChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      period: e.target.value as PeriodType,
    }));
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      showClosedUnits: e.target.value === "on",
    }));
  }

  return (
    <formContext.Provider
      value={{
        formData,
        handleSubmit,
        handlePeriodChange,
        handleCheckboxChange,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
