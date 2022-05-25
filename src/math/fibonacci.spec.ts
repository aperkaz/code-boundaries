import fibonacci from "./fibonacci";

const FIBONACCI_SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe("fibonacci", () => {
  it("should calculate the sequence properly", () => {
    FIBONACCI_SEQUENCE.forEach((result, index) => {
      expect(fibonacci(index)).toBe(result);
    });
  });

  it("should return 0 for negative and 0th positions", () => {
    expect(fibonacci(-123)).toBe(0);
    expect(fibonacci(0)).toBe(0);
  });
});
