import { lastNames } from "@/database";
import { choice } from "@/modules/basic/choice";

export function lastName(): string {
  return choice(lastNames);
}
