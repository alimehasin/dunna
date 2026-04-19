---
outline: deep
---

# Person

Random identity-like values: gender, names, email, and a bundled `Person` object.

## `gender`

Returns `'male'` or `'female'`.

```ts
dunna.person.gender();
```

## `firstName`

Returns a random first name, optionally constrained by gender.

```ts
dunna.person.firstName();
dunna.person.firstName({ gender: 'female' });
```

| Option   | Type                          | Description       | Default |
| -------- | ----------------------------- | ----------------- | ------- |
| `gender` | `'male' \| 'female' \| 'any'` | Pool to draw from | `'any'` |

## `lastName`

Returns a random last name.

```ts
dunna.person.lastName();
```

## `name`

Returns a random full name (first + space + last). This is the full-name helper (not `fullName`).

```ts
dunna.person.name();
dunna.person.name({ gender: 'male' });
```

| Option   | Type                          | Description                     | Default |
| -------- | ----------------------------- | ------------------------------- | ------- |
| `gender` | `'male' \| 'female' \| 'any'` | Influences first name selection | `'any'` |

## `email`

Builds an email from a random first and last name, a numeric suffix, and a domain.

```ts
dunna.person.email();
dunna.person.email({ gender: 'male' });
dunna.person.email({ domain: 'example.com' });
```

| Option   | Type                          | Description                                                | Default |
| -------- | ----------------------------- | ---------------------------------------------------------- | ------- |
| `gender` | `'male' \| 'female' \| 'any'` | Influences first name                                      | `'any'` |
| `domain` | `string`                      | Fixed domain; if omitted, a random common provider is used | —       |

## `person`

Returns a `Person` object: `firstName`, `lastName`, `email`, and `gender`. Email is a simple deterministic pattern from the names and the chosen domain.

```ts
dunna.person.person();
dunna.person.person({ gender: 'female' });
dunna.person.person({ domain: 'example.com' });
```

| Option   | Type                          | Description            | Default         |
| -------- | ----------------------------- | ---------------------- | --------------- |
| `gender` | `'male' \| 'female' \| 'any'` | Fixed gender or random | `'any'`         |
| `domain` | `string`                      | Email domain           | `'example.com'` |
