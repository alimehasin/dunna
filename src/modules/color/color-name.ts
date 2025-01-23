import { colors } from "@/database/color";
import { choice } from "@/modules/basic/choice";

export function colorName() {
  return choice(colors).name;
}
