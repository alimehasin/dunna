import { between } from "./between";

export function birthdate() {
  return between({
    min: new Date(1900, 0, 1),
    max: new Date(2025, 0, 1),
  });
}
