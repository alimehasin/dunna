import { integer } from "./integer";

export function pick<T>(count: number, array: T[]): T[] {
  if (count < 0 || count > array.length) {
    throw new Error("Count should be >= 0 and <= array.length");
  }

  if (array.length === count) {
    return array;
  }

  if (!Number.isInteger(count)) {
    throw new Error("Count should be integer");
  }

  const picks: T[] = [];
  const indicies = new Set<number>();

  while (indicies.size < count) {
    const index = integer({ max: array.length });

    if (!indicies.has(index)) {
      indicies.add(index);
      picks.push(array[index]);
    }
  }

  return picks;
}
