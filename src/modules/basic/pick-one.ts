import { integer } from './integer';

export function pickOne<T>(choices: T[]): T {
  return choices[integer({ max: choices.length })];
}
