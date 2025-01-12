import { getNowDate } from "./getNowDate";
import { DateInfo } from "./type";

export const getCalendarInfo = (): DateInfo[] => {
  const currentDate = new Date();
  const { year, month } = getNowDate(currentDate);
  const startWeek = new Date(year, month, 1).getDay();
  const lastWeek = new Date(year, month + 1, 0).getDay();
  const totalDay = new Date(year, month + 1, 0).getDate();

  const currentMonth = Array.from(
    {
      length: totalDay,
    },
    (_, index) => {
      const date = new Date(year, month, 1);
      date.setDate(date.getDate() + index);
      return { date };
    },
  );
  const prevMonth = Array.from(
    {
      length: startWeek + 14,
    },
    (_, index) => {
      const date = new Date(year, month, 0);
      date.setDate(date.getDate() - index);
      return { date };
    },
  ).reverse();

  const nextMonth = Array.from(
    {
      length: 6 - lastWeek + 14,
    },
    (_, index) => {
      const date = new Date(year, month + 1, 1);
      date.setDate(date.getDate() + index);
      return { date };
    },
  );
  return [...prevMonth, ...currentMonth, ...nextMonth];
};
