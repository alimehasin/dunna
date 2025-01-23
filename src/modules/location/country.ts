import { countries } from "@/database";
import { choice } from "@/modules/basic/choice";

export function country() {
  return choice(countries);
}
