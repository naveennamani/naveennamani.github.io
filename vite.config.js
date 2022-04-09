import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import mdx from "@mdx-js/rollup";
import fix_ssr_esm_modules from "./fix_ssr_esm_imports.js";

import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkFrontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";

export default defineConfig({
  define: {
    __SITE__URL__: '"https://naveennamani.github.io"'
  },
  plugins: [
    react(),
    mdx({
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "append" }]
      ],
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "metaData" }]
      ]
    }),
    ssr(),
    fix_ssr_esm_modules([
      { find: "react/jsx-runtime", replacement: "react/jsx-runtime.js" },
      { find: "react-dom/server", replacement: "react-dom/server.js" }
    ])
  ],
  resolve: {
    alias: [
      { find: "react/jsx-runtime", replacement: "react/jsx-runtime.js" },
      { find: "@components", replacement: resolve("./components") },
      { find: "@context", replacement: resolve("./context") },
      { find: "@default", replacement: resolve("./default") },
      { find: "@hooks", replacement: resolve("./hooks") },
      { find: "@layouts", replacement: resolve("./layouts") },
      { find: "@renderer", replacement: resolve("./renderer") },
      { find: "@styles", replacement: resolve("./styles") },
      { find: "#types", replacement: resolve("./types") },
      { find: "@utils", replacement: resolve("./utils") }
    ]
  },
  build: {
    rollupOptions: {
      output: {
        format: "es"
      }
    }
  }
});
