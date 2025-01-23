import { country } from "./country";

export function countryCode() {
  return country().ISO2;
}
