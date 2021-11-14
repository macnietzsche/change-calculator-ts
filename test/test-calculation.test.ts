import { cartesian } from "../src/services/array-methods";

describe("Cartesian product", () => {
  it("Generates correct result. Arrays with same length", () => {
    const testInput = [
      [1, 2],
      [3, 4],
    ];

    const expectedResult = [
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ];

    const result = cartesian(...testInput);
    expect(result).toStrictEqual(expectedResult);
  });

  it("Generates correct result. Arrays with different length", () => {
    const testInput = [
      [1, 2],
      [3, 4, 5],
    ];

    const expectedResult = [
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
    ];

    const result = cartesian(...testInput);
    expect(result).toStrictEqual(expectedResult);
  });

  it("Generates correct result. Arrays with alphanumeric elements", () => {
    const testInput = [
      ["a", 2],
      [3, 4, "b"],
    ];

    const expectedResult = [
      ["a", 3],
      ["a", 4],
      ["a", "b"],
      [2, 3],
      [2, 4],
      [2, "b"],
    ];

    const result = cartesian(...testInput);
    expect(result).toStrictEqual(expectedResult);
  });

  it("Generates correct result. Numbers as strings", () => {
    const testInput = [
      ["1", 2],
      [3, "4", 5],
    ];

    const expectedResult = [
      ["1", 3],
      ["1", "4"],
      ["1", 5],
      [2, 3],
      [2, "4"],
      [2, 5],
    ];

    const result = cartesian(...testInput);
    expect(result).toStrictEqual(expectedResult);
  });
});
