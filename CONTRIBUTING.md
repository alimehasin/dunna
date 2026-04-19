# Contributing

Thanks for your interest in Dunna. Suggestions, issues, and pull requests are welcome.

## How to help

- Open [issues](https://github.com/alimehasin/dunna/issues) for bugs, ideas, or questions.
- For code changes, open a pull request with a clear description of what changed and why.

## Local setup

This project uses [Bun](https://bun.sh). From the repository root:

```sh
bun install
bun run build
```

## Checks before you submit

Run format and lint so CI stays green:

```sh
bun run fmt
bun run lint
```

## Documentation

To work on the VitePress site:

```sh
bun run docs:dev
```

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced via commitlint in this repo).
