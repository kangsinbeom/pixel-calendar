"use client";

import { getNowDate } from "@/utils/getNowDate";
import React, { useState } from "react";
import Box from "./box";
import { weekData } from "@/utils/data";
import { getCalendarInfo } from "@/utils/getCalendarInfo";

const Calendar = () => {
  const [now, setNow] = useState<Date>(new Date());
  const { month, year, day } = getNowDate(now);
  const info = getCalendarInfo({ year, month });
  const onClickNextButton = () => {
    const nextDate = new Date(year, month + 1, day);
    setNow(nextDate);
  };
  const onClickPrevButton = () => {
    const nextDate = new Date(year, month - 1, day);
    setNow(nextDate);
  };
  return (
    <div className="p-4">
      <p>
        {year}년{month + 1}월{day}일
      </p>
      <div className="grid grid-cols-7 p-4">
        {[...weekData, ...info].map((value, index) => (
          <Box key={index} text={value} index={index} />
        ))}
        <button onClick={onClickPrevButton}>Prev</button>
        <button onClick={onClickNextButton}>Next</button>
      </div>
    </div>
  );
};

export default Calendar;
