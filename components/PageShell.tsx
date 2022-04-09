import React from "react";
import { Helmet } from "react-helmet";
import { ReactSEOMetaTags } from "react-seo-meta-tags";

import { PageContextProvider } from "@hooks/usePageContext";
import { MDXComponentsProvider } from "@context/MDXComponents";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { BlogPostLayout } from "@layouts/BlogPostLayout";
import { defaultMetaData } from "@default/MetaData";
import { addDefaultMeta } from "@utils/addDefaultMeta";

import type { ReactSEOMetaTagsProps } from "react-seo-meta-tags";
import type { PageContextClient } from "#types/pageContext";

import "@styles/highlight.css";
import "@styles/tw.css";

const LayoutMapping = {
  blog: BlogPostLayout
};

function MetaDataFromDict({ metaData }: { metaData: ReactSEOMetaTagsProps }) {
  const md = addDefaultMeta(metaData);
  return <ReactSEOMetaTags render={(el) => <Helmet>{el}</Helmet>} {...md} />;
}

function resolvePageLayout(pageContext: PageContextClient) {
  // layout to be used for a given page can be passed through
  // .page file
  // 1. pageExports.Layout
  // 2. pageExports.layoutName
  // 3. pageExports.metaData.Layout
  // 4. pageExports.metaData.layoutName
  // passed from onBeforeRender hook
  // 5. pageContext.layoutName
  const { pageExports, layoutName } = pageContext;
  const { metaData } = pageExports;
  const Layout1 =
    (pageExports || {}).Layout || LayoutMapping[(pageExports || {}).layoutName];
  const Layout2 =
    (metaData || {}).Layout || LayoutMapping[(metaData || {}).layoutName];
  const Layout3 = LayoutMapping[layoutName] || DefaultLayout;
  return Layout1 || Layout2 || Layout3;
}

function resolvePageMetaData(
  pageContext: PageContextClient
): [any, ReactSEOMetaTagsProps] {
  // metadata to be used for a given page can be passed through
  // .page file
  // 1. pageExports.MetaData as a component
  // 2. pageExports.metaData as a dictionary
  // passed from onBeforeRender hook
  // 3. pageContext.metaData as a dictionary
  const { pageExports, metaData } = pageContext;
  const MD = (pageExports || {}).MetaData;
  const md = (pageExports || {}).metaData || metaData || defaultMetaData;
  return [MD, md];
}

export default function PageShell({
  pageContext,
  children
}: {
  pageContext: PageContextClient;
  children: JSX.Element;
}) {
  const Layout = resolvePageLayout(pageContext);
  const [MetaData, md] = resolvePageMetaData(pageContext);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <MDXComponentsProvider>
          {MetaData !== undefined ? (
            <MetaData />
          ) : (
            <MetaDataFromDict metaData={md} />
          )}
          <Layout>{children}</Layout>
        </MDXComponentsProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
