import { pickOne } from '@/modules/basic/pick-one';
import type { Gender } from '@/types';

export function gender(): Gender {
  return pickOne(['male', 'female']);
}
