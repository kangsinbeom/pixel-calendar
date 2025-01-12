import { DateInfo } from "./type";

export const getMoreCalendarInfo = (prevDates: DateInfo[]): DateInfo[] => {
  const lastDate = prevDates[prevDates.length - 1];
  const newDates = Array.from({ length: 35 }, (_, index) => {
    const date = lastDate;
    return { date };
  });
  console.log(newDates);
  return [...prevDates];
};
