# Dunna

Random data for tests and prototypes. Dunna is a TypeScript library with small, namespaced helpers for booleans, numbers, names, places, dates, money, and colors.

## Get started

### Installation

```sh
npm install dunna
```

```sh
pnpm add dunna
```

```sh
yarn add dunna
```

```sh
bun add dunna
```

### Import

Dunna exposes a **named** export `dunna`. There is no default export.

**ESM**

```ts
import { dunna } from 'dunna';
```

**CommonJS**

```ts
const { dunna } = require('dunna');
```

### Calling dunna

```ts
import { dunna } from 'dunna';

dunna.basic.boolean();
dunna.basic.integer({ min: 1, max: 101 }); // integer in [1, 101)
dunna.person.firstName({ gender: 'female' });
dunna.location.cityName();
```

## API overview

| Namespace        | Purpose                                 |
| ---------------- | --------------------------------------- |
| `dunna.basic`    | Booleans, numbers, letters, array picks |
| `dunna.color`    | Named colors, hex, RGB objects          |
| `dunna.datetime` | Past, future, ranges, birthdates        |
| `dunna.finance`  | Currency codes and names                |
| `dunna.location` | Countries, cities, coordinates          |
| `dunna.person`   | Names, gender, email, full person       |

Full documentation: [Getting Started](https://github.com/alimehasin/dunna/blob/main/docs/guide.md) · [API overview](https://github.com/alimehasin/dunna/blob/main/docs/api/index.md)

## Documentation site (this repository)

The docs are built with [VitePress](https://vitepress.dev). From the repository root:

| Script                 | Description                            |
| ---------------------- | -------------------------------------- |
| `bun run docs:dev`     | Start the dev server                   |
| `bun run docs:build`   | Static build to `docs/.vitepress/dist` |
| `bun run docs:preview` | Preview the production build           |

## Support

If you want to support this project you can do so by giving us a star or tweeting about us.

If you want to contribute to Dunna, see the [contribution guide](https://github.com/alimehasin/dunna/blob/main/CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).

## Contributors

<a href="https://github.com/alimehasin/dunna/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alimehasin/dunna" alt="Contributors" />
</a>
