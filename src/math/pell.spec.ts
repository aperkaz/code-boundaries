import pell from "./pell";

const PELL_SEQUENCE = [
  0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860,
];

describe("pell", () => {
  it("should calculate the sequence properly", () => {
    PELL_SEQUENCE.forEach((result, index) => {
      expect(pell(index)).toBe(result);
    });
  });

  it("should return 0 for negative and 0th positions", () => {
    expect(pell(-123)).toBe(0);
    expect(pell(0)).toBe(0);
  });
});
