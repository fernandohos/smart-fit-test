"use client";

import { CardProps } from "@components/Card";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

type FilterUnitsProps = {
  showClosedUnits: boolean;
  period: "morning" | "afternoon" | "evening";
};

type UnitsContextValues = {
  units: null | CardProps[];
  filterUnits: (props: FilterUnitsProps) => void;
};

export const unitsContext = createContext({} as UnitsContextValues);

export default function UnitsProvider({ children }: PropsWithChildren) {
  const [units, setUnits] = useState<null | CardProps[]>(null);
  const fetchedUnits = useRef<CardProps[]>([]);

  useEffect(() => {
    (async () => {
      fetchedUnits.current = await fetch(
        "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
      )
        .then((response) => response.json())
        .then((json) => json.locations);
    })();
  }, []);

  function transformWeekday(weekdayNumber: number) {
    switch (weekdayNumber) {
      case 0:
        return "Dom.";
      case 6:
        return "Sáb.";
      default:
        return "Seg. à Sex.";
    }
  }

  function filterByPeriod(
    arr: CardProps[],
    period: "morning" | "afternoon" | "evening",
    showClosedUnits: boolean
  ): CardProps[] {
    const todaysWeekday = transformWeekday(new Date().getDay());
    const periodsHour = {
      morning: [6, 12],
      afternoon: [12, 18],
      evening: [18, 23],
    };

    const filteredArray = arr.filter((unit) => {
      if (typeof unit.opened === "undefined") return true;

      for (let i = 0; i <= unit.schedules.length - 1; i++) {
        const weekdays = unit.schedules[i].weekdays;
        const hour = unit.schedules[i].hour;
        const gymOpenHour = Number(hour.substring(0, 2));
        const gymCloseHour = Number(hour.slice(-3, -1));

        if (todaysWeekday === weekdays) {
          if (showClosedUnits) return true;
          if (
            (periodsHour[period][1] > gymOpenHour &&
              periodsHour[period][1] <= gymCloseHour) ||
            (periodsHour[period][0] >= gymOpenHour &&
              periodsHour[period][0] < gymCloseHour)
          ) {
            return true;
          }
        }
      }

      return false;
    });

    return filteredArray;
  }

  function filterUnits({ period, showClosedUnits }: FilterUnitsProps) {
    let newUnitsArray = fetchedUnits.current;

    if (!showClosedUnits) {
      newUnitsArray = newUnitsArray.filter((unit) => unit.opened);
    }

    newUnitsArray = filterByPeriod(newUnitsArray, period, showClosedUnits);

    setUnits(newUnitsArray);
  }

  return (
    <unitsContext.Provider value={{ units, filterUnits }}>
      {children}
    </unitsContext.Provider>
  );
}
