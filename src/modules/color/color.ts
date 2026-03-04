import { colors } from '@/database/color';
import { pickOne } from '@/modules/basic/pick-one';
import type { Color } from '@/types';
import { hexToRgb } from '@/utils';

export function color(): Color {
  const color = pickOne(colors);

  return { ...color, rgb: hexToRgb(color.hex) };
}
