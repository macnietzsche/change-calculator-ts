import { ICash } from "common/types";
import { cartesianProduct } from "./array-methods";

export const calculateCashAmount = (currentCash: ICash | null): number => {
  if (!currentCash) return -1;

  return Object.entries(currentCash).reduce(
    (acc: number, item) => (acc += parseInt(item[0]) * item[1]),
    0
  );
};

export const processChange = (
  currentCash: ICash | null,
  requiredValue: number
): ICash | null => {
  if (!currentCash) return null;

  const numberOfBills = Object.values(currentCash);
  const billDenominations = Object.keys(currentCash).map((item) =>
    parseInt(item)
  );

  const iteratedNumberOfBills = numberOfBills.map((item) => {
    return [...Array(item + 1).keys()];
  });

  const posibilities = cartesianProduct(...iteratedNumberOfBills);
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

const INITIAL_NUMBER_OF_BILLS = { 25: 0, 50: 0, 100: 0 } as ICash;
const TICKET_COST = 25;
export const hasEnoughChange = (paymentsReceived: number[]): boolean => {
  let currentCash: ICash | null = INITIAL_NUMBER_OF_BILLS;
  const validDenominations = Object.keys(INITIAL_NUMBER_OF_BILLS).map(
    (denonimation) => parseInt(denonimation)
  );
  for (const payment of paymentsReceived) {
    if (!validDenominations.includes(payment)) {
      return false;
    }

    const change = payment - TICKET_COST;
    currentCash = processChange(currentCash, change);
    if (!currentCash) {
      return false;
    }
    currentCash[payment] += 1;
  }
  return true;
};
