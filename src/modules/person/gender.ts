import { choice } from "@/modules/basic/choice";
import type { Gender } from "@/types";

export function gender(): Gender {
  return choice(["male", "female"]);
}
