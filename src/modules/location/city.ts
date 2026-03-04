import { pickOne } from '@/modules/basic/pick-one';
import { country } from './country';

export function city() {
  return pickOne(country().cities);
}
