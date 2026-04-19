---
outline: deep
---

# Basic

Primitives and small utilities: booleans, integers, floats, letters, and random picks from arrays.

## `boolean`

Returns a random boolean. Optionally bias the probability of `true`.

```ts
dunna.basic.boolean();
dunna.basic.boolean({ probability: 0.8 });
```

| Option        | Type     | Description                                           | Default |
| ------------- | -------- | ----------------------------------------------------- | ------- |
| `probability` | `number` | Chance that the result is `true`, between `0` and `1` | `0.5`   |

Throws if `probability` is outside `[0, 1]`.

## `integer`

Returns a random integer in the half-open range **`[min, max)`** — the maximum is **exclusive**, matching internal float sampling and `Math.floor`.

```ts
dunna.basic.integer(); // e.g. 0–9 with defaults below
dunna.basic.integer({ min: 1, max: 100 });
```

| Option | Type     | Description                                 | Default |
| ------ | -------- | ------------------------------------------- | ------- |
| `min`  | `number` | Lower bound (inclusive), must be an integer | `0`     |
| `max`  | `number` | Upper bound (exclusive), must be an integer | `10`    |

Throws if `min` or `max` are not integers.

## `float`

Returns a random floating-point number in **`[min, max)`** (maximum exclusive), rounded to a limited number of decimal places.

```ts
dunna.basic.float();
dunna.basic.float({ min: 3, max: 36, fixed: 5 });
```

| Option  | Type     | Description             | Default |
| ------- | -------- | ----------------------- | ------- |
| `min`   | `number` | Lower bound (inclusive) | `0`     |
| `max`   | `number` | Upper bound (exclusive) | `10`    |
| `fixed` | `number` | Decimal places kept     | `3`     |

## `letter`

Returns a single random letter from the Latin alphabet.

```ts
dunna.basic.letter();
dunna.basic.letter({ casing: 'upper' });
```

| Option   | Type                          | Description | Default |
| -------- | ----------------------------- | ----------- | ------- |
| `casing` | `'upper' \| 'lower' \| 'any'` | Letter case | `'any'` |

## `pickOne`

Returns one random element from a non-empty array.

```ts
dunna.basic.pickOne(['Alice', 'Bob', 'Charlie']);
```

| Argument  | Type  | Description        |
| --------- | ----- | ------------------ |
| `choices` | `T[]` | Array to draw from |

## `pickMany`

Returns **distinct** random elements: `count` items sampled without replacement. Order is not guaranteed.

```ts
dunna.basic.pickMany(3, [2, 1, 6, 3, 4]);
```

| Argument | Type     | Description                                            |
| -------- | -------- | ------------------------------------------------------ |
| `count`  | `number` | How many items to pick (integer, `0` … `array.length`) |
| `array`  | `T[]`    | Source array                                           |

Throws if `count` is out of range or not an integer. If `count` equals `array.length`, returns a permutation of the array.

## `omit`

Returns **`array.length - count`** elements: the complement of `pickMany` for a fixed omit size.

```ts
dunna.basic.omit(2, [2, 1, 6, 3, 4]);
```

| Argument | Type     | Description                    |
| -------- | -------- | ------------------------------ |
| `count`  | `number` | How many elements to leave out |
| `array`  | `T[]`    | Source array                   |
