import { float } from './float';

interface BooleanConfig {
  probability?: number;
}

export function boolean({ probability = 0.5 }: BooleanConfig = {}): boolean {
  if (probability < 0 || probability > 1) {
    throw new Error('probability should be >= 0 and <= 1');
  }

  return float({ min: 0, max: 1 }) < probability;
}
