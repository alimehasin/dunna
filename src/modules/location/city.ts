import { choice } from "@/modules/basic/choice";
import { country } from "./country";

export function city() {
  return choice(country().cities);
}
