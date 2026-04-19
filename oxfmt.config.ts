import { defineConfig } from 'oxfmt';

export default defineConfig({
  printWidth: 80,
  singleQuote: true,

  sortTailwindcss: {},
  sortImports: {
    enabled: true,
    newlinesBetween: false,
  },

  ignorePatterns: ['.agents/**', '.claude/**'],
});
