import React from "react";
import ReactDOM from "react-dom";
import { getPage } from "vite-plugin-ssr/client";

import Pageshell from "@components/PageShell";
import { PageContextClient } from "#types/pageContext";

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext: PageContextClient = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <Pageshell pageContext={pageContext}>
      <Page {...pageProps} />
    </Pageshell>,
    document.getElementById("page-view")
  );
}
