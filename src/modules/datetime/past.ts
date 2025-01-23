import { integer } from "@/modules/basic/integer";

interface PastConfig {
  minPastYears?: number;
  maxPastYears?: number;
}

export function past({ minPastYears = 1, maxPastYears = 10 }: PastConfig = {}): Date {
  const daysInThePast = integer({
    min: minPastYears * 365,
    max: maxPastYears * 365,
  });

  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - daysInThePast);

  return pastDate;
}
