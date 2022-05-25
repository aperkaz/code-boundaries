import { PellFunction } from "./types";

const pell: PellFunction = (nth) => {
  if (nth <= 0) return 0;
  if (nth === 1) return 1;
  if (nth <= 2) return nth;
  return 2 * pell(nth - 1) + pell(nth - 2);
};

export default pell;
