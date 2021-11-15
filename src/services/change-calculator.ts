import { ICash } from "common/types";
import { cartesian } from "./array-methods";

export const calculateCashAmount = (currentCash: ICash | null): number => {
  if (!currentCash) return -1;

  return Object.entries(currentCash).reduce(
    (acc: number, item) => (acc += parseInt(item[0]) * item[1]),
    0
  );
};

export const processChange = (
  currentCash: ICash,
  requiredValue: number
): ICash | null => {
  const numberOfBills = Object.values(currentCash);
  const billDenominations = Object.keys(currentCash).map((item) =>
    parseInt(item)
  );

  const iteratedNumberOfBills = numberOfBills.map((item) => {
    return [...Array(item + 1).keys()];
  });

  const posibilities = cartesian(...iteratedNumberOfBills);
  const posibiitiesWithKeys = posibilities.map((item) => {
    return billDenominations.reduce((acc: ICash, key, index) => {
      acc[key] = item[index];
      return acc;
    }, {});
  });

  const matchingPosibility = posibiitiesWithKeys.find(
    (posibility) => requiredValue === calculateCashAmount(posibility)
  );

  if (matchingPosibility) {
    return billDenominations.reduce((acc: ICash, key) => {
      acc[key] = currentCash[key] - matchingPosibility[key];
      return acc;
    }, {});
  }

  return null;
};
