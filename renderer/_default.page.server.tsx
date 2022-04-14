import React from "react";
import ReactDOM from "react-dom/server";
import { Helmet } from "react-helmet";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";

import Pageshell from "@components/PageShell";
import { getLatestBlogPosts } from "@utils/getLatestBlogPosts";

import type { PageContextServer } from "#types/pageContext";

export const passToClient = [
  "pageProps",
  "url",
  "pageContext",
  "layoutName",
  "metaData",
  "relatedPostsData"
];

export async function onBeforeRender(pageContext: PageContextServer) {
  const { routeParams } = pageContext;
  const latestBlogPosts = await getLatestBlogPosts(pageContext);
  return {
    pageContext: {
      pageProps: {
        ...routeParams,
        latestBlogPosts: latestBlogPosts.map((post) => post[0])
      },
      isBlogPost: false
    }
  };
}

export function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHTML = ReactDOM.renderToString(
    <Pageshell pageContext={pageContext}>
      <Page {...pageProps} />
    </Pageshell>
  );
  const helmet = Helmet.renderStatic();

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en" ${dangerouslySkipEscape(helmet.htmlAttributes.toString())}>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="180x180" href="${__SITE__URL__}/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${__SITE__URL__}/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${__SITE__URL__}/favicon-16x16.png">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="google-site-verification" content="lMAcWSuIpU59ZTCmR2EJSITknLE5T6pJZCdbWhpImo4"/>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NCSFB5RQ5X"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());gtag('config', 'G-NCSFB5RQ5X');
    </script>
    ${dangerouslySkipEscape(helmet.title.toString())}
    ${dangerouslySkipEscape(helmet.meta.toString())}
    ${dangerouslySkipEscape(helmet.link.toString())}
    ${dangerouslySkipEscape(helmet.noscript.toString())}
    ${dangerouslySkipEscape(helmet.script.toString())}
    ${dangerouslySkipEscape(helmet.style.toString())}
  </head>
  <body ${dangerouslySkipEscape(helmet.bodyAttributes.toString())}>
      <div id="page-view">${dangerouslySkipEscape(pageHTML)}</div>
  </body>
</html>`;
  return { documentHtml };
}
