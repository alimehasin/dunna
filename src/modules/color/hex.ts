import { colors } from "@/database/color";
import { choice } from "@/modules/basic/choice";

export function hex() {
  return choice(colors).hex;
}
