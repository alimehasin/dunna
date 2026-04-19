---
outline: deep
---

# Color

Random colors from a built-in palette: human-readable names, hex strings, RGB components, or a full object.

## `colorName`

Returns a random color name string.

```ts
dunna.color.colorName();
```

## `hex`

Returns a random hex color string from the palette.

```ts
dunna.color.hex();
```

## `rgb`

Returns a random RGB object with `red`, `green`, and `blue` numeric channels (derived from a random palette hex).

```ts
dunna.color.rgb();
```

## `color`

Returns a full color object: `name`, `hex`, and `rgb` (with `rgb` computed from `hex`).

```ts
dunna.color.color();
```
