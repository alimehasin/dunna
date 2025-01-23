import type { RGB } from "@/types";
import { hexToRgb } from "@/utils";
import { hex } from "./hex";

export function rgb(): RGB {
  return hexToRgb(hex());
}
