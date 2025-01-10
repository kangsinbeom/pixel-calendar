interface CalendarInfo {
  year: number;
  month: number;
}

export const getCalendarInfo = ({ year, month }: CalendarInfo): number[] => {
  const startWeek = new Date(year, month, 1).getDay();
  const lastWeek = new Date(year, month + 1, 0).getDay();
  const totalDay = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDay = new Date(year, month, 0).getDate();
  const prevCalendar = Array.from(
    { length: startWeek },
    (_, index) => prevMonthTotalDay - index,
  ).reverse();
  const currentCalendar = Array.from(
    { length: totalDay },
    (_, index) => index + 1,
  );
  const nextCalendar = Array.from(
    { length: 7 - (lastWeek + 1) },
    (_, index) => index + 1,
  );
  return [...prevCalendar, ...currentCalendar, ...nextCalendar];
};
