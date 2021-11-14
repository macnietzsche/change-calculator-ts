import { cartesian } from "./services/array-methods";

const result = cartesian(
  ...[
    [1, 2],
    [3, 4],
  ]
);

console.log("Hello Typescript", result);
