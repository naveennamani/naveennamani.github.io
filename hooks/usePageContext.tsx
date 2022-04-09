import React, { useContext } from "react";
import type { PageContextClient } from "../types/pageContext";

const PageContext = React.createContext<PageContextClient>({});

export function PageContextProvider({
  pageContext,
  children
}: {
  pageContext: PageContextClient;
  children: JSX.Element;
}) {
  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
}

export default function usePageContext() {
  const pageContext = useContext(PageContext);
  return pageContext;
}
