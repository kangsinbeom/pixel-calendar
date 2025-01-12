import logo from "@/../public/pixelLogo.svg";
import Image from "next/image";
import WeekComponent from "./week";
import DayComponent from "./day";

const Calendar = () => {
  return (
    <div className="w-[660px] p-4">
      <Image alt="" src={logo} width={200} />
      <WeekComponent />
      <DayComponent />
    </div>
  );
};

export default Calendar;
