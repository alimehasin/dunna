import type { Gender, Person } from "@/types";
import { firstName as firstNameFn } from "./first-name";
import { gender as genderFn } from "./gender";
import { lastName as lastNameFn } from "./last-name";

interface PersonParams {
  domain?: string;
  gender?: Gender | "any";
}

export function person({ gender = "any", domain = "example.com" }: PersonParams = {}): Person {
  const booleanGender = gender === "any" ? genderFn() : gender;
  const firstName = firstNameFn({ gender: booleanGender });
  const lastName = lastNameFn();
  const email = `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${domain}`;

  return {
    gender: booleanGender,
    firstName,
    lastName,
    email,
  };
}
