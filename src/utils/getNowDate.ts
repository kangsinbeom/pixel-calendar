interface NowDate {
  year: number;
  month: number;
  day: number;
  week: number;
}

export const getNowDate = (date: Date): NowDate => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const week = date.getDay();
  return {
    year: +year,
    month: +month,
    day: +day,
    week: +week,
  };
};
