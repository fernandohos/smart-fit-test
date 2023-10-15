import { useContext } from "react";
import { unitsContext } from "../contexts/UnitsContext";

export default function useUnits() {
  return useContext(unitsContext);
}
