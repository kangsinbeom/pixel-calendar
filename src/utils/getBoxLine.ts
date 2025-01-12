export const getBoxLine = (index: number, length: number) => {
  let result = "bg-slate-400";
  if (index % 7 === 0) {
    result += "border-l-2 ";
  }
  if (index + 1 > length - 7) {
    result += "border-b-2";
  }
  return result;
};
