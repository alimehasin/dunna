import { currencies } from '@/database';
import { pickOne } from '@/modules/basic/pick-one';

export function currency() {
  return pickOne(currencies);
}
