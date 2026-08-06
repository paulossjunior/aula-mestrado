import { defineConfig } from "astro/config";

// Project page do GitHub Pages: o site vive sob o subcaminho do repositório.
export default defineConfig({
  site: "https://paulossjunior.github.io",
  base: "/aula-mestrado",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
