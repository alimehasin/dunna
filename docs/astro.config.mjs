import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      title: "Dunna",
      customCss: ["./src/styles/globals.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/alimehasin/dunna",
        },
      ],

      expressiveCode: {
        styleOverrides: { borderRadius: "0.25rem" },
      },

      sidebar: [
        {
          label: "Get Started",
          link: "/get-started",
        },
        {
          label: "Modules",
          autogenerate: {
            directory: "modules",
          },
        },
      ],
    }),
  ],
});
