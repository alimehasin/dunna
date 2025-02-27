import { describe, expect, test } from "bun:test";
import { dunna } from "@";
import { currencies } from "@/database";
import { currency } from "@/modules/finance/currency";

describe("Test dunna.finance funnctions", () => {
  test("return a valid currency choice", () => {
    expect(currencies).toContainEqual(currency());
  });

  test("return a valid currency code", () => {
    const currenciesCodes = currencies.map((item) => item.code);

    expect(currenciesCodes).toContain(dunna.finance.currencyCode());
  });

  test("return a valid currency name", () => {
    const currenciesNames = currencies.map((item) => item.name);

    expect(currenciesNames).toContain(dunna.finance.currencyName());
  });
});
