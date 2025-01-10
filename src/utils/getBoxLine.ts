export const getBoxLine = (index: number, text: number | string) => {
  let result = "";
  if (index % 7 === 0) {
    result += "border-l-2 ";
  }
  if (index > 34) {
    console.log("hi0", index, text);
    result += "border-b-2";
  }
  return result;
};
