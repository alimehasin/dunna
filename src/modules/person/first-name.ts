import { femaleFirstNames, maleFirstNames } from '@/database';
import { pickOne } from '@/modules/basic/pick-one';
import type { Gender } from '@/types';

interface FirstNameParams {
  gender?: Gender | 'any';
}

export function firstName({ gender = 'any' }: FirstNameParams = {}): string {
  if (gender === 'male') {
    return pickOne(maleFirstNames);
  }

  if (gender === 'female') {
    return pickOne(femaleFirstNames);
  }

  return pickOne(pickOne([maleFirstNames, femaleFirstNames]));
}
