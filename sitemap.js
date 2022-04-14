import { writeFileSync } from "fs";
import { resolve } from "path";
import { createPageRenderer } from "vite-plugin-ssr";

const root = resolve(".");
const isProduction = true;
const __SITE__URL__ = "https://naveennamani.github.io";

const renderPage = createPageRenderer({
  viteDevServer: undefined,
  root,
  isProduction
});
const pageContext = await renderPage({ url: "/" });

const routes = pageContext._pageRoutes
  .filter(({ pageRouteFile }) => !pageRouteFile)
  .map(({ filesystemRoute }) => filesystemRoute)
  .sort()
  .map(
    (route) => `<url>
      <loc>${__SITE__URL__}${route}</loc>
   </url>`
  );

const sitemap_xml = `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
   ${routes.join("\n   ")}
</urlset>
`;

writeFileSync("dist/client/sitemap.xml", sitemap_xml);
