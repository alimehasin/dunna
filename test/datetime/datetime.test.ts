import { describe, expect, test } from "bun:test";
import { dunna } from "@";

describe("Test dunna datetime module", () => {
  test("return a valid date in the future", () => {
    for (let i = 0; i < 100; i++) {
      const now = new Date();
      const future = dunna.datetime.future();

      expect(future.getTime()).toBeGreaterThan(now.getTime());
    }
  });

  test("return a valid date in the past", () => {
    for (let i = 0; i < 100; i++) {
      const now = new Date();
      const past = dunna.datetime.past();

      expect(past.getTime()).toBeLessThan(now.getTime());
    }
  });

  test("return a valid date in the near future", () => {
    for (let i = 0; i < 100; i++) {
      const now = new Date();
      const near = dunna.datetime.near();

      expect(near.getTime()).toBeGreaterThan(now.getTime());
    }
  });

  test("return a valid birthdate", () => {
    for (let i = 0; i < 100; i++) {
      const birthdate = dunna.datetime.birthdate();

      expect(birthdate.getTime()).toBeGreaterThan(new Date(1900, 0, 1).getTime());
      expect(birthdate.getTime()).toBeLessThan(new Date(2025, 0, 1).getTime());
    }
  });
});
