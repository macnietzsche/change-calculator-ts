import { cartesianProduct } from "../src/services/array-methods";
import { ICash } from "../src/common/types";
import {
  calculateCashAmount,
  processChange,
} from "../src/services/change-calculator";

describe("CartesianProduct product", () => {
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

    const result = cartesianProduct(...testInput);
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

    const result = cartesianProduct(...testInput);
    expect(result).toStrictEqual(expectedResult);
  });
});

describe("Calculate total amount of money", () => {
  it("Calculates the correct amount of money: Case 1", () => {
    const testInput: ICash = { 25: 1, 50: 1, 100: 1 };
    const expectedResult = 175;
    const result = calculateCashAmount(testInput);

    expect(result).toBe(expectedResult);
  });

  it("Calculates the correct amount of money: Case 2", () => {
    const testInput: ICash = { 25: 3, 50: 2, 100: 1 };
    const expectedResult = 275;
    const result = calculateCashAmount(testInput);

    expect(result).toBe(expectedResult);
  });

  it("Calculates the correct amount of money: Case 3", () => {
    const testInput: ICash = { 25: 10, 50: 1, 100: 1 };
    const expectedResult = 400;
    const result = calculateCashAmount(testInput);

    expect(result).toBe(expectedResult);
  });
});

describe("Process change", () => {
  it("It substracts the correct amount from current cash: Case 1", () => {
    const currentCash = { 25: 0, 50: 0, 100: 0 };
    const change = 0;

    const expectedResult = 0;

    const processedChange = processChange(currentCash, change);
    const result = calculateCashAmount(processedChange);
    expect(result).toBe(expectedResult);
  });

  it("It substracts the correct amount from current cash: Case 2", () => {
    const currentCash = { 25: 1, 50: 3, 100: 1 };
    const change = 50;

    const expectedResult = 225;

    const processedChange = processChange(currentCash, change);
    const result = calculateCashAmount(processedChange);
    expect(result).toBe(expectedResult);
  });

  it("It substracts the correct amount from current cash: Case 3", () => {
    const currentCash = { 25: 2, 50: 0, 100: 3 };
    const change = 50;

    const expectedResult = 300;

    const processedChange = processChange(currentCash, change);
    const result = calculateCashAmount(processedChange);
    expect(result).toBe(expectedResult);
  });

  it("It substracts the correct amount from current cash: Case 4", () => {
    const currentCash = { 25: 0, 50: 0, 100: 4 };
    const change = 75;

    const expectedResult = -1;

    const processedChange = processChange(currentCash, change);
    const result = calculateCashAmount(processedChange);
    expect(result).toBe(expectedResult);
  });
});
