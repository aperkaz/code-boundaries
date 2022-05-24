// TODONOW: https://en.wikipedia.org/wiki/Lucas_sequence

type FibonacciFunction = (num: number) => number;

const fibonacci: FibonacciFunction = (num) => {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

export default fibonacci;
