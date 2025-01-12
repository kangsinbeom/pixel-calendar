"use client";

import Box from "./box";
import { getCalendarInfo } from "@/utils/getCalendarInfo";
import { useNowStore } from "@/stores/calendar";
import { getNowDate } from "@/utils/getNowDate";
import { useEffect, useRef } from "react";

const DayComponent = () => {
  const { now, nextMonth, prevMonth } = useNowStore();
  const { month, year, day } = getNowDate(now);
  const info = getCalendarInfo();
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const scrollY = (element.scrollHeight - element.clientHeight) / 2;
      element.scrollTop = scrollY;
    }
  }, []);
  return (
    <div
      className="scrollbar-hide h-[400px] w-full overflow-auto"
      ref={scrollRef}
    >
      <div className="grid w-full grid-cols-7">
        {info.map(({ date }, index) => (
          <Box key={index} date={date} index={index} length={info.length} />
        ))}
      </div>
      <button onClick={() => prevMonth(now)}>Prev</button>
      <button onClick={() => nextMonth(now)}>Next</button>
      <strong>
        {year}년{month + 1}월{day}일
      </strong>
    </div>
  );
};

export default DayComponent;
