import { colors } from '@/database/color';
import { pickOne } from '@/modules/basic/pick-one';

export function colorName() {
  return pickOne(colors).name;
}
