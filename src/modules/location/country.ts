import { countries } from '@/database';
import { pickOne } from '@/modules/basic/pick-one';

export function country() {
  return pickOne(countries);
}
