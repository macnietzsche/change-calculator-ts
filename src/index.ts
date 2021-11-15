import { hasEnoughChange } from "./services/change-calculator";
import { IInputPaymentsQueue } from "./common/types";
import fs from "fs";

const rawData = fs.readFileSync("user-data/input.json");
const inputPaymentsQueue: IInputPaymentsQueue = JSON.parse(rawData.toString());

const response = hasEnoughChange(inputPaymentsQueue.COLA_DE_PAGO);

console.log("------------------------------------------------------------");
console.log(
  `Vania ${response ? "SI" : "NO"} puede vender boletos y dar cambio.`
);
console.log("------------------------------------------------------------");
