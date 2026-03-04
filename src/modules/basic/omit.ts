import { pickMany } from './pick-many';

export function omit<T>(count: number, array: T[]): T[] {
  return pickMany(array.length - count, array);
}
