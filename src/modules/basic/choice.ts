import { integer } from "./integer";

export function choice<T>(choices: T[]): T {
  return choices[integer({ max: choices.length })];
}
