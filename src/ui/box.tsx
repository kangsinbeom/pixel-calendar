import { getBoxLine } from "@/utils/getBoxLine";
import clsx from "clsx";
import React from "react";

interface BoxProps {
  text: string | number;
  index: number;
}

const Box = ({ text, index }: BoxProps) => {
  const line = getBoxLine(index, text);
  const boxClasses = clsx(
    // "border-l-2",
    // "border-b-2",
    "border-r-2",
    "border-t-2",
    line,
    "border-slate-900",
  );
  return <div className={boxClasses}>{text}</div>;
};

export default Box;
