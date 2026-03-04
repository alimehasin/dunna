import { describe, expect, test } from 'bun:test';

import { dunna } from '@';

describe('Test dunna.basic.boolean() function', () => {
  test('return a boolean', () => {
    const boolean = dunna.basic.boolean();

    expect([true, false]).toContain(boolean);
  });

  test('throw error when probability < 0 or > 1', () => {
    expect(() => dunna.basic.boolean({ probability: -1 })).toThrowError();

    expect(() => dunna.basic.boolean({ probability: 1.1 })).toThrowError();
  });

  test('return true when probability = 1', () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.basic.boolean({ probability: 1 });

      expect(boolean).toEqual(true);
    }
  });

  test('return false when probability = 0', () => {
    for (let i = 0; i < 100; i++) {
      const boolean = dunna.basic.boolean({ probability: 0 });

      expect(boolean).toEqual(false);
    }
  });

  test('return boolean based on probability', () => {
    for (const probability of [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]) {
      const cycles = 10000;

      let trues = 0;

      for (let i = 0; i < cycles; i++) {
        const boolean = dunna.basic.boolean({ probability });

        if (boolean) {
          trues++;
        }
      }

      const truePercentage = (trues / cycles) * 100;
      const expectedPercentage = probability * 100;

      expect(truePercentage).toBeGreaterThan(expectedPercentage - 2.5);
      expect(truePercentage).toBeLessThan(expectedPercentage + 2.5);
    }
  });
});
