import { cartesian } from "./services/array-methods";
import { processChange } from "./services/change-calculator";

const result = cartesian(
  ...[
    [1, 2],
    [3, 4],
  ]
);

console.log("Hello Typescript", result);

const currentCash = { 25: 0, 50: 0, 100: 0 };
const change = 0;

const test = processChange(currentCash, change);
console.log({ test });
