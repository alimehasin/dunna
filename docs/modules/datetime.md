---
outline: deep
---

# Datetime

Random `Date` values for past, future, windows around “today”, explicit ranges, and birthdates.

## `future`

Returns a date in the future by adding a random number of days. The day count is sampled in **`[minFutureYears * 365, maxFutureYears * 365)`** using integer semantics (see [basic `integer`](/modules/basic#integer)).

```ts
dunna.datetime.future();
dunna.datetime.future({ minFutureYears: 1, maxFutureYears: 5 });
```

| Option           | Type     | Description                                              | Default |
| ---------------- | -------- | -------------------------------------------------------- | ------- |
| `minFutureYears` | `number` | Lower bound on the year span used to build the day range | `1`     |
| `maxFutureYears` | `number` | Upper bound on the year span used to build the day range | `10`    |

## `past`

Returns a date in the past by subtracting a random number of days, with day count sampled in **`[minPastYears * 365, maxPastYears * 365)`**.

```ts
dunna.datetime.past();
dunna.datetime.past({ minPastYears: 2, maxPastYears: 20 });
```

| Option         | Type     | Description                  | Default |
| -------------- | -------- | ---------------------------- | ------- |
| `minPastYears` | `number` | Lower bound on the year span | `1`     |
| `maxPastYears` | `number` | Upper bound on the year span | `10`    |

## `near`

Returns a date **in the future** by adding a random number of days in **`[minFutureDays, maxFutureDays)`** to today.

```ts
dunna.datetime.near();
dunna.datetime.near({ minFutureDays: 1, maxFutureDays: 14 });
```

| Option          | Type     | Description                                                     | Default |
| --------------- | -------- | --------------------------------------------------------------- | ------- |
| `minFutureDays` | `number` | Minimum days ahead                                              | `1`     |
| `maxFutureDays` | `number` | Maximum days ahead (exclusive upper bound for the integer draw) | `10`    |

## `between`

Returns a random date uniformly between two `Date` instances (inclusive of the range in time, via internal float sampling).

```ts
dunna.datetime.between({
  min: new Date('2020-01-01'),
  max: new Date('2030-01-01'),
});
```

| Option | Type   | Description    |
| ------ | ------ | -------------- |
| `min`  | `Date` | Start of range |
| `max`  | `Date` | End of range   |

## `birthdate`

Returns a random date between **1 January 1900** and **1 January 2025** (implementation-defined window).

```ts
dunna.datetime.birthdate();
```
