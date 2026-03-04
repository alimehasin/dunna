import { colors } from '@/database/color';
import { pickOne } from '@/modules/basic/pick-one';

export function hex() {
  return pickOne(colors).hex;
}
