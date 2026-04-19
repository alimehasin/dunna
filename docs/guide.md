---
outline: deep
---

# Getting Started

Dunna generates random values for tests, seed data, and quick prototypes. The public API is a single object with grouped helpers.

::: warning Work in progress
The package is under active development. APIs may change between releases.
:::

## Install

Use your preferred package manager:

```bash
npm install dunna
```

```bash
pnpm add dunna
```

```bash
yarn add dunna
```

```bash
bun add dunna
```

## Import

Dunna exposes a **named** export `dunna` (there is no default export).

**ESM**

```ts
import { dunna } from 'dunna';
```

**CommonJS**

```ts
const { dunna } = require('dunna');
```

## Quick example

```ts
import { dunna } from 'dunna';

dunna.basic.boolean();
dunna.basic.integer({ min: 1, max: 101 }); // integer in [1, 101)
dunna.person.name();
dunna.location.cityName();
```

See the [API overview](/api/) for all modules and the [module reference](/modules/basic) for detailed options.

## Documentation site

This site is built with [VitePress](https://vitepress.dev). From the repository root:

| Script                 | Description                            |
| ---------------------- | -------------------------------------- |
| `bun run docs:dev`     | Start the dev server                   |
| `bun run docs:build`   | Static build to `docs/.vitepress/dist` |
| `bun run docs:preview` | Preview the production build           |
