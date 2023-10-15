import { useContext } from "react";
import { formContext } from "../contexts/FormContext";

export default function useForm() {
  return useContext(formContext);
}
