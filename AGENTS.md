# AGENTS.md

## What this repo is

`dunna` is a single-package TypeScript library (no monorepo) that generates random test data. The public API is one named export: `dunna` (no default export). It ships dual ESM/CJS builds with declaration files.

## Toolchain

- **Runtime/package manager**: Bun (not Node/npm). Use `bun` for all commands.
- **Formatter**: `oxfmt` — single quotes, 80-char print width, import sorting enabled.
- **Linter**: `oxlint` — not ESLint. Config is in `oxlint.config.ts`.
- **Types**: checked with `tsc` using `tsconfig.json` (noEmit). Build types use `tsconfig.build.json`.

## Developer commands

```sh
bun install          # install deps
bun run fmt          # format (oxfmt)
bun run lint         # lint + autofix (oxlint)
bun test             # run all tests (Bun's built-in test runner)
bun run build        # clean → ESM → CJS → types (runs all four steps)
```

No separate typecheck script — `tsc` is only invoked as part of `bun run build:types`. To typecheck without building: `bunx tsc --noEmit`.

## Running a single test file

```sh
bun test test/basic/integer.test.ts
```

## Build output

`dist/` contains:

- `index.mjs` + `index.mjs.map` (ESM)
- `index.cjs` + `index.cjs.map` (CJS)
- `index.d.ts`, `index.d.mts`, `index.d.cts` (types — `.mts`/`.cts` are copies of `.d.ts`)

Do not edit files in `dist/`; it is regenerated on every build.

## Source layout

```
src/
  index.ts          # re-exports dunna from modules/
  modules/index.ts  # assembles { basic, color, datetime, finance, location, person }
  modules/<ns>/     # one directory per namespace
  database/         # static data arrays (names, countries, currencies, colors, letters)
  types.ts          # shared interfaces/types
  utils.ts          # hex↔rgb helpers
test/
  <ns>/             # mirrors src/modules/<ns>/, one file per function
```

Adding a new namespace: create `src/modules/<ns>/index.ts`, add it to `src/modules/index.ts`, add tests under `test/<ns>/`.

## Git hooks (Husky)

- **pre-commit**: runs `lint-staged` → formats and lints only staged files.
- **commit-msg**: enforces Conventional Commits via `commitlint` (max header 144 chars).

Commit messages must follow Conventional Commits, e.g. `feat: add phone namespace`.

## Release

`bun run release` (release-it) runs `fmt → lint → test → build` before tagging. Do not run this manually unless you are the maintainer cutting a release.

## Path aliases

`@` maps to `src/index.ts`; `@/*` maps to `src/*`. These are for development only (bundler mode); they are resolved by Bun and not present in the emitted `dist/`.
