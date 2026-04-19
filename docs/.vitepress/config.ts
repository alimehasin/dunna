import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Dunna',
  description: 'Generate random data for tests, fixtures, and prototypes',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/guide' }],
      },
      {
        text: 'API',
        items: [{ text: 'Overview', link: '/api/' }],
      },
      {
        text: 'Modules',
        items: [
          { text: 'Basic', link: '/modules/basic' },
          { text: 'Color', link: '/modules/color' },
          { text: 'Datetime', link: '/modules/datetime' },
          { text: 'Finance', link: '/modules/finance' },
          { text: 'Location', link: '/modules/location' },
          { text: 'Person', link: '/modules/person' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alimehasin/dunna',
      },
    ],
  },
});
