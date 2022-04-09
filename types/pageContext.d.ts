import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import type { ReactSEOMetaTagsProps } from "react-seo-meta-tags";
import type { GlobalContext } from "vite-plugin-ssr/dist/cjs/node/renderPage";

export type MetaDataType = ReactSEOMetaTagsProps & {
  Layout?: any;
  layoutName?: string;
};

export type PageContextClient = PageContextBuiltInClient & {
  pageProps: any[];
  url: string;
  urlPathName: string;
  layoutName?: string;
  metaData?: ReactSEOMetaTagsProps;
} & {
  pageExports: {
    Layout?: any;
    layoutName?: string;
    MetaData?: any;
    metaData?: MetaDataType;
  };
};

export type PageContextServer = GlobalContext & PageContextClient;
