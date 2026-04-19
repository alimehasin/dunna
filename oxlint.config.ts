import { defineConfig } from 'oxlint';

export default defineConfig({
  ignorePatterns: [
    '.agents/**',
    '.claude/**',
    'apps/**/src/types/server/schema.d.ts',
  ],

  categories: {
    correctness: 'warn',
    suspicious: 'warn',
    pedantic: 'warn',
    perf: 'warn',
  },

  rules: {
    curly: 'error',
    'no-unused-expressions': 'off',

    // Oxc
    'oxc/no-map-spread': 'off',

    // Typescript
    'typescript/consistent-type-imports': 'warn',

    // Eslint
    'eslint/no-shadow': 'off',
    'eslint/max-lines-per-function': 'off',
    'eslint/max-classes-per-file': 'off',
    'eslint/no-warning-comments': 'off',
    'eslint/no-await-in-loop': 'off',
    'eslint/no-unused-expressions': 'off',
    'eslint/no-negated-condition': 'off',
    'eslint/max-lines': ['warn', { max: 1000 }],
  },
});
