---
outline: deep
---

# Location

Random geographic data: country names and codes, city names, and coordinates tied to a random city’s data.

## `countryName`

Returns a random country name.

```ts
dunna.location.countryName();
```

## `countryCode`

Returns a random country **ISO2** code.

```ts
dunna.location.countryCode();
```

## `cityName`

Returns a random city name from a randomly chosen country’s city list.

```ts
dunna.location.cityName();
```

## `lat`

Returns the latitude string associated with a randomly chosen city (consistent with that city’s record).

```ts
dunna.location.lat();
```

## `lng`

Returns the longitude string associated with a randomly chosen city.

```ts
dunna.location.lng();
```
