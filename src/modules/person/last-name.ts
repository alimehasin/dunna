import { lastNames } from '@/database';
import { pickOne } from '@/modules/basic/pick-one';

export function lastName(): string {
  return pickOne(lastNames);
}
