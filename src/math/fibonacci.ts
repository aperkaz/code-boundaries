import { FibonacciFunction } from "./types";

const fibonacci: FibonacciFunction = (nth) => {
  if (nth <= 0) return 0;
  if (nth <= 2) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};

export default fibonacci;
