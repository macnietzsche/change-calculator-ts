import { ICash } from "common/types";

export const calculateCashAmount = (currentCash: ICash | null): number => {
  if (!currentCash) return -1;

  return Object.entries(currentCash).reduce(
    (acc: number, item) => (acc += parseInt(item[0]) * parseInt(item[1])),
    0
  );
};

export const processChange = (
  currentCash: ICash,
  requiredValue: number
): ICash | null => {
  return null;
};
