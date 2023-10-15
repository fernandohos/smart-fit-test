"use client";
import Image from "next/image";
import iconHour from "@public/images/icon-hour.png";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import Button from "./Button";
import useForm from "../hooks/useForm";

export default function Form() {
  const { formData, handleSubmit, handlePeriodChange, handleCheckboxChange } =
    useForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border-4 border-light-grey rounded-xl border-opacity-25 my-8"
    >
      <div className="flex items-center gap-2">
        <Image src={iconHour} width={40} height={40} alt="ícone de relógio" />
        <p className="text-light-grey text-lg">Horário</p>
      </div>
      <p className="text-2xl font-light text-light-grey p-3 mt-3">
        Qual período quer treinar?
      </p>
      <hr />
      <RadioInput
        name="period"
        value="morning"
        period="Manhã"
        hour="06:00 às 12:00"
        onChange={handlePeriodChange}
        checked={formData.period === "morning"}
      />
      <RadioInput
        name="period"
        value="afternoon"
        period="Tarde"
        hour="12:01 às 18:00"
        onChange={handlePeriodChange}
        checked={formData.period === "afternoon"}
      />
      <RadioInput
        name="period"
        value="evening"
        period="Noite"
        hour="18:01 às 23:00"
        onChange={handlePeriodChange}
        checked={formData.period === "evening"}
      />
      <div className="flex flex-col sm:flex-row items-center justify-between mt-14 gap-5">
        <CheckboxInput
          onChange={handleCheckboxChange}
          name="closed-units"
          label="Exibir unidades fechadas"
        />
        <p>
          Resultados encontrados: <span className="font-bold text-xl">0</span>
        </p>
      </div>
      <div className="flex justify-center items-stretch gap-5 flex-col sm:flex-row mt-7">
        <Button type="submit">Encontrar Unidade</Button>
        <Button buttonStyle="outlined" type="reset">
          Limpar
        </Button>
      </div>
    </form>
  );
}
