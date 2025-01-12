import { getNowDate } from "@/utils/getNowDate";
import { create } from "zustand";

interface NowState {
  now: Date;
  nextMonth: (now: Date) => void;
  prevMonth: (now: Date) => void;
  changeDay: (now: Date) => void;
}

export const useNowStore = create<NowState>((set) => ({
  now: new Date(),
  nextMonth: (now: Date) =>
    set(() => {
      const { month, year, day } = getNowDate(now);
      return { now: new Date(year, month + 1, day) };
    }),
  prevMonth: (now: Date) =>
    set(() => {
      const { month, year, day } = getNowDate(now);
      return { now: new Date(year, month - 1, day) };
    }),
  changeDay: (now: Date) => set(() => ({ now: new Date(now) })),
}));
