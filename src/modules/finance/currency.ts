import { currencies } from "@/database";
import { choice } from "@/modules/basic/choice";

export function currency() {
  return choice(currencies);
}
