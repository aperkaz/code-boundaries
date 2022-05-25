import { PellFunction } from "./types";

const pell: PellFunction = (nth) => {
  if (nth <= 2) return nth;
  return 2 * pell(nth - 1) + pell(nth - 2);
};

export default pell;
