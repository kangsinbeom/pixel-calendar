import React from "react";
import { weekData } from "@/utils/data";

const WeekComponent = () => {
  return (
    <div className="grid w-full grid-cols-7">
      {weekData.map((value, index) => (
        <div
          className="bg-dark flex h-12 w-full items-center justify-center"
          key={index}
        >
          <p className="text-center text-white">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default WeekComponent;
