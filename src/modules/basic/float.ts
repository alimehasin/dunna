interface FloatConfig {
  min?: number;
  max?: number;
  fixed?: number;
}

export function float({
  min = 0,
  max = 10,
  fixed = 3,
}: FloatConfig = {}): number {
  // random float = random number * difference + min
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(fixed));
}
