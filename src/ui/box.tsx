import { getBoxLine } from "@/utils/getBoxLine";
import { getNowDate } from "@/utils/getNowDate";
// import clsx from "clsx";

interface BoxProps {
  date: Date;
  index: number;
  length: number;
}

const Box = ({ date, index, length }: BoxProps) => {
  const line = getBoxLine(index, length);
  // const boxClasses = clsx("border-r-2", "border-t-2", line, "border-slate-900");
  const { day, month, year } = getNowDate(date);
  return (
    <div
      className={`relative flex h-20 w-full items-center justify-center border`}
    >
      <div className="absolute left-[1px] top-1 flex min-h-4 min-w-4 items-center justify-center border-b-[1px] text-xs">
        {day}
      </div>
      <div>
        {year}년{month + 1}월
      </div>
    </div>
  );
};

export default Box;
