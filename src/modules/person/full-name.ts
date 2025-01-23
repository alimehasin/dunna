import type { Gender } from "@/types";
import { firstName } from "./first-name";
import { lastName } from "./last-name";

interface NameParams {
  gender?: Gender | "any";
}

export function name({ gender }: NameParams = {}) {
  return `${firstName({ gender })} ${lastName()}`;
}
